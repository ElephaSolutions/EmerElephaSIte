"""Backend API tests for Elepha Solutions - covers root + /api/contact endpoints."""
import os
import pytest
import requests
from dotenv import load_dotenv
from pathlib import Path

# Load frontend .env to get the public URL
load_dotenv(Path(__file__).resolve().parents[2] / "frontend" / ".env")
BASE_URL = os.environ.get("REACT_APP_BACKEND_URL").rstrip("/")


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ----- Root -----
class TestRoot:
    def test_root_running(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/", timeout=30)
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "running" in data["message"].lower()


# ----- Contact -----
class TestContact:
    def test_post_contact_valid_payload_and_persistence(self, api_client):
        payload = {
            "name": "TEST_Jane Doe",
            "email": "test_jane@elephatest.com",
            "company": "TEST_Acme",
            "phone": "+919999999999",
            "service": "IT Services & Management",
            "message": "TEST_marker hello there, please reach out.",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=30)
        assert r.status_code == 200, r.text
        body = r.json()
        assert "id" in body and isinstance(body["id"], str) and len(body["id"]) > 0
        assert "created_at" in body and isinstance(body["created_at"], str)
        assert body["name"] == payload["name"]
        assert body["email"] == payload["email"]
        assert body["message"] == payload["message"]
        inquiry_id = body["id"]

        # Persistence verification via GET /api/contact
        g = api_client.get(f"{BASE_URL}/api/contact", timeout=30)
        assert g.status_code == 200
        items = g.json()
        assert isinstance(items, list)
        assert any(it.get("id") == inquiry_id for it in items), "Created inquiry not found in GET list"

    def test_post_contact_minimum_required_fields(self, api_client):
        payload = {
            "name": "TEST_Minimal",
            "email": "test_minimal@elephatest.com",
            "message": "TEST_just enough fields",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=30)
        assert r.status_code == 200, r.text
        body = r.json()
        assert body["name"] == "TEST_Minimal"
        assert body["email"] == "test_minimal@elephatest.com"
        assert body["company"] is None
        assert body["phone"] is None
        assert body["service"] is None

    def test_post_contact_invalid_email_rejected(self, api_client):
        payload = {
            "name": "TEST_BadEmail",
            "email": "not-an-email",
            "message": "TEST_should fail validation",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=30)
        assert r.status_code == 422, r.text

    def test_post_contact_missing_name_rejected(self, api_client):
        payload = {"email": "test_missing@elephatest.com", "message": "TEST_no name field"}
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=30)
        assert r.status_code == 422

    def test_post_contact_missing_email_rejected(self, api_client):
        payload = {"name": "TEST_NoEmail", "message": "TEST_no email field"}
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=30)
        assert r.status_code == 422

    def test_post_contact_missing_message_rejected(self, api_client):
        payload = {"name": "TEST_NoMsg", "email": "test_nomsg@elephatest.com"}
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=30)
        assert r.status_code == 422

    def test_post_contact_short_message_rejected(self, api_client):
        # Pydantic min_length=5 on message
        payload = {
            "name": "TEST_Short",
            "email": "test_short@elephatest.com",
            "message": "hi",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=30)
        assert r.status_code == 422

    def test_get_contact_does_not_leak_mongo_id(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/contact", timeout=30)
        assert r.status_code == 200
        for item in r.json():
            assert "_id" not in item

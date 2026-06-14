import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { CONTACT, SERVICES } from "../lib/content";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Thanks! We'll get back to you within one business day.");
      setForm(initialState);
    } catch (err) {
      const detail =
        err?.response?.data?.detail ||
        err?.response?.data?.[0]?.msg ||
        "Something went wrong. Please try again.";
      toast.error(typeof detail === "string" ? detail : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 bg-[#F9FAFB]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00A6A6]">
              Contact
            </span>
            <h2 className="font-poppins font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0F4C81] mt-4 leading-tight">
              Tell us where you&apos;re headed.
              <br />
              We&apos;ll help you get there.
            </h2>
            <p className="mt-5 text-[#4B5563] leading-relaxed max-w-md">
              Drop us a note and a principal will reach out within one business
              day. Prefer talking? Pick up the phone — we&apos;d rather have a real
              conversation.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4" data-testid="contact-email">
                <span className="h-11 w-11 rounded-xl bg-white border border-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81]">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#4B5563]">
                    Email
                  </div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-poppins text-[#0F4C81] hover:text-[#00A6A6] transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4" data-testid="contact-phone">
                <span className="h-11 w-11 rounded-xl bg-white border border-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81]">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#4B5563]">
                    Phone
                  </div>
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="font-poppins text-[#0F4C81] hover:text-[#00A6A6] transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4" data-testid="contact-address">
                <span className="h-11 w-11 rounded-xl bg-white border border-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81]">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#4B5563]">
                    Office
                  </div>
                  <p className="font-poppins text-[#0F4C81] leading-relaxed max-w-xs">
                    {CONTACT.address}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 reveal">
            <form
              onSubmit={onSubmit}
              data-testid="contact-form"
              className="rounded-3xl bg-white border border-gray-100 shadow-sm p-7 md:p-10"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" required>
                  <input
                    name="name"
                    value={form.name}
                    onChange={update}
                    placeholder="Jane Doe"
                    data-testid="contact-input-name"
                    className="form-input"
                    required
                  />
                </Field>
                <Field label="Work email" required>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    placeholder="jane@company.com"
                    data-testid="contact-input-email"
                    className="form-input"
                    required
                  />
                </Field>
                <Field label="Company">
                  <input
                    name="company"
                    value={form.company}
                    onChange={update}
                    placeholder="Company Inc."
                    data-testid="contact-input-company"
                    className="form-input"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={update}
                    placeholder="+91 ..."
                    data-testid="contact-input-phone"
                    className="form-input"
                  />
                </Field>
                <Field label="Service" full>
                  <select
                    name="service"
                    value={form.service}
                    onChange={update}
                    data-testid="contact-input-service"
                    className="form-input"
                  >
                    <option value="">Select a service (optional)</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </Field>
                <Field label="How can we help?" required full>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    placeholder="Tell us about the challenge you&apos;d like to solve..."
                    rows={5}
                    data-testid="contact-input-message"
                    className="form-input resize-none"
                    required
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={submitting}
                data-testid="contact-submit"
                className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00A6A6] hover:bg-[#008080] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-colors shadow-lg shadow-[#00A6A6]/25"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Local styles for inputs */}
      <style>{`
        .form-input {
          width: 100%;
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: #1F2937;
          outline: none;
          transition: border-color .2s, box-shadow .2s, background .2s;
          font-family: 'Open Sans', sans-serif;
        }
        .form-input:focus {
          background: #fff;
          border-color: #0F4C81;
          box-shadow: 0 0 0 4px rgba(15, 76, 129, 0.08);
        }
        .form-input::placeholder { color: #9CA3AF; }
      `}</style>
    </section>
  );
}

function Field({ label, children, full, required }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs font-semibold uppercase tracking-widest text-[#4B5563]">
        {label}
        {required && <span className="text-[#00A6A6] ml-1">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

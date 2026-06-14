import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO_URL, NAV_LINKS } from "../lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F4C81]/95 glass-nav shadow-lg shadow-[#0F4C81]/10"
          : "bg-[#0F4C81]/60 glass-nav"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <a
          href="#home"
          data-testid="navbar-logo"
          className="flex items-center gap-3 group"
          onClick={close}
        >
          <span className="rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-[#00A6A6]/60 transition">
            <img
              src={LOGO_URL}
              alt="Elepha Solutions"
              className="h-11 w-11 object-cover block"
            />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-poppins font-semibold tracking-wide text-white text-lg">
              Elepha Solutions
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#00c2c2]">
              Chance to Elevate
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-4 py-2 rounded-full text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="navbar-cta-talk"
            className="ml-3 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#00A6A6] hover:bg-[#008080] text-white text-sm font-semibold transition-colors shadow-md shadow-[#00A6A6]/20"
          >
            Talk to us
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          data-testid="navbar-menu-toggle"
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          data-testid="navbar-mobile-menu"
          className="lg:hidden bg-[#0F4C81]/98 border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                data-testid={`nav-mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-3 rounded-lg text-white/90 font-medium hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              data-testid="navbar-mobile-cta-talk"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#00A6A6] text-white font-semibold"
            >
              Talk to us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

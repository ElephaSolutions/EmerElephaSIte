import { Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { LOGO_URL, CONTACT, NAV_LINKS, SERVICES } from "../lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="footer"
      className="relative bg-[#0a365c] text-white pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="rounded-xl overflow-hidden ring-1 ring-white/10">
                <img src={LOGO_URL} alt="Elepha Solutions" className="h-12 w-12 object-cover block" />
              </span>
              <div className="leading-tight">
                <div className="font-poppins font-semibold text-white text-lg">
                  Elepha Solutions
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#7fe5e5]">
                  Chance to Elevate
                </div>
              </div>
            </div>
            <p className="mt-5 text-white/70 max-w-sm leading-relaxed">
              Technology and talent services for organisations that want to
              move with confidence. Built in India, working with teams
              everywhere.
            </p>

            <div className="flex items-center gap-3 mt-7">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  aria-label={label}
                  className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#00A6A6] hover:border-[#00A6A6] transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-poppins font-semibold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-white/70 hover:text-[#7fe5e5] transition-colors inline-flex items-center gap-1.5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-poppins font-semibold text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    data-testid={`footer-service-${s.id}`}
                    className="text-sm text-white/70 hover:text-[#7fe5e5] transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-poppins font-semibold text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  data-testid="footer-email"
                  className="hover:text-[#7fe5e5] break-all inline-flex items-center gap-1"
                >
                  {CONTACT.email}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  data-testid="footer-phone"
                  className="hover:text-[#7fe5e5]"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li data-testid="footer-address" className="leading-relaxed">
                {CONTACT.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {year} Elepha Solutions. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Empowering Businesses with Technology and Talent.
          </p>
        </div>
      </div>
    </footer>
  );
}

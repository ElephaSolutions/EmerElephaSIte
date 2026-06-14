import { Mail, PhoneCall } from "lucide-react";
import { CONTACT } from "../lib/content";

export default function CTABanner() {
  return (
    <section
      data-testid="cta-banner"
      className="relative py-16 md:py-20 bg-[#F9FAFB]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0F4C81] px-8 py-14 md:px-16 md:py-20 text-white">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#00A6A6]/30 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#1d619e]/40 blur-3xl" aria-hidden />
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 reveal">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#a6f0f0] text-xs font-semibold uppercase tracking-[0.18em]">
                A 30-minute conversation
              </span>
              <h2 className="mt-5 font-poppins font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
                No decks. No discovery theatre.
                <span className="block text-[#7fe5e5]">Just a straight answer.</span>
              </h2>
              <p className="mt-5 text-white/80 max-w-xl">
                Tell a partner what you&apos;re trying to ship — or who you&apos;re trying
                to hire. Within a single call, you&apos;ll know whether Elepha is
                the right fit, and what it would take to get moving.
              </p>
            </div>

            <div className="lg:col-span-5 reveal flex flex-col gap-4 lg:items-stretch">
              <a
                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Let's talk")}`}
                data-testid="cta-banner-email"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#00A6A6] hover:bg-[#008080] text-white font-semibold transition-colors shadow-lg shadow-[#00A6A6]/30"
              >
                <Mail className="h-4 w-4" />
                Email a Partner
              </a>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                data-testid="cta-banner-call"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                Call {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

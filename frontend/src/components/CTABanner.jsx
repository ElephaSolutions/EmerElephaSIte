import { ArrowRight, CalendarDays } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      data-testid="cta-banner"
      className="relative py-16 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0F4C81] px-8 py-14 md:px-16 md:py-20 text-white">
          {/* glow */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#00A6A6]/30 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#1d619e]/40 blur-3xl" aria-hidden />
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 reveal">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#a6f0f0] text-xs font-semibold uppercase tracking-[0.18em]">
                Let&apos;s build what&apos;s next
              </span>
              <h2 className="mt-5 font-poppins font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
                Ready to transform
                <span className="block text-[#7fe5e5]">your business?</span>
              </h2>
              <p className="mt-5 text-white/80 max-w-xl">
                Spin up a 30-minute conversation with one of our principals. No
                pitch decks, no fluff — just a candid view of what we can do
                for you.
              </p>
            </div>

            <div className="lg:col-span-5 reveal flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-stretch">
              <a
                href="#contact"
                data-testid="cta-banner-talk"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#00A6A6] hover:bg-[#008080] text-white font-semibold transition-colors shadow-lg shadow-[#00A6A6]/30"
              >
                Talk to Our Experts
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                data-testid="cta-banner-schedule"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold transition-colors"
              >
                <CalendarDays className="h-4 w-4" />
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, PhoneCall } from "lucide-react";
import { CONTACT } from "../lib/content";

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative isolate overflow-hidden bg-[#0F4C81] text-white"
    >
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div
        className="absolute inset-0 opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 radial-glow" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0a365c]" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-28 md:pb-36">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal">
            <span
              data-testid="hero-eyebrow"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#a6f0f0] text-xs font-semibold uppercase tracking-[0.18em]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#00A6A6] animate-pulse" />
              A chance to elevate — your tech and your team
            </span>
            <h1
              data-testid="hero-headline"
              className="font-poppins font-semibold tracking-tight mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
            >
              Build the team.
              <span className="block text-[#7fe5e5]">Ship the platform.</span>
              <span className="block">Skip the drag.</span>
            </h1>
            <p
              data-testid="hero-subheading"
              className="mt-7 text-base md:text-lg text-white/80 max-w-xl leading-relaxed"
            >
              Elepha Solutions is a senior-led practice that runs your IT stack,
              recruits the engineers you need, and interviews the ones you
              shortlist — without the bloat of a traditional vendor.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                data-testid="hero-cta-explore"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00A6A6] hover:bg-[#008080] text-white font-semibold transition-colors shadow-lg shadow-[#00A6A6]/25"
              >
                Explore What We Do
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                data-testid="hero-cta-call"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent border border-white/30 hover:border-white text-white font-semibold transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                Talk to a Partner
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/70">
              <span>Senior-led squads</span>
              <span className="hidden sm:inline text-white/30">·</span>
              <span>Outcome-priced engagements</span>
              <span className="hidden sm:inline text-white/30">·</span>
              <span>Embedded in your tools</span>
            </div>
          </div>

          {/* Side card */}
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00A6A6]/30 to-[#1d619e]/20 rounded-[2rem] blur-2xl" aria-hidden />
              <div className="relative rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-2xl shadow-black/30">
                <div className="aspect-[5/4] rounded-2xl overflow-hidden ring-1 ring-white/10 relative">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=srgb&fm=jpg&w=900&q=80"
                    alt="A collaborative engineering team at work"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/70 via-transparent to-transparent" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-xs uppercase tracking-widest text-[#7fe5e5]">
                      Avg. Time-to-Shortlist
                    </div>
                    <div className="font-poppins text-white text-xl mt-1">~ 7 days</div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-xs uppercase tracking-widest text-[#7fe5e5]">
                      IaaS Debrief SLA
                    </div>
                    <div className="font-poppins text-white text-xl mt-1">&lt; 24 hrs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
              Chance to elevate
            </span>
            <h1
              data-testid="hero-headline"
              className="font-poppins font-semibold tracking-tight mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
            >
              Build the team.
              <span className="block text-[#7fe5e5]">Ship the platform.</span>
            </h1>
            <p
              data-testid="hero-subheading"
              className="mt-6 text-base md:text-lg text-white/80 max-w-md leading-relaxed"
            >
              Senior-led IT services, recruitment and interview panels — under one roof.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#services"
                data-testid="hero-cta-explore"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00A6A6] hover:bg-[#008080] text-white font-semibold transition-colors shadow-lg shadow-[#00A6A6]/25"
              >
                What we do
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                data-testid="hero-cta-call"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-transparent border border-white/30 hover:border-white text-white font-semibold transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                Call us
              </a>
            </div>
          </div>

          {/* Image mosaic */}
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00A6A6]/30 to-[#1d619e]/20 rounded-[2rem] blur-2xl" aria-hidden />
              <div className="relative grid grid-cols-2 gap-3 p-3 rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=srgb&fm=jpg&w=600&q=75"
                  alt="Engineering team collaborating"
                  className="aspect-[4/5] h-full w-full object-cover rounded-2xl row-span-2"
                />
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=srgb&fm=jpg&w=500&q=75"
                  alt="Code on a screen"
                  className="aspect-square h-full w-full object-cover rounded-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=srgb&fm=jpg&w=500&q=75"
                  alt="Interview in progress"
                  className="aspect-square h-full w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

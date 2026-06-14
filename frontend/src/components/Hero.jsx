import { ArrowRight, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative isolate overflow-hidden bg-[#0F4C81] text-white"
    >
      {/* Decorative layers */}
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
              Empowering Businesses with Technology and Talent
            </span>
            <h1
              data-testid="hero-headline"
              className="font-poppins font-semibold tracking-tight mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
            >
              Technology.
              <span className="block text-[#7fe5e5]">Talent.</span>
              <span className="block">Transformation.</span>
            </h1>
            <p
              data-testid="hero-subheading"
              className="mt-7 text-base md:text-lg text-white/80 max-w-xl leading-relaxed"
            >
              Elepha Solutions helps organisations accelerate growth through{" "}
              <span className="text-white font-medium">IT Services</span>,{" "}
              <span className="text-white font-medium">Talent Acquisition</span>
              , <span className="text-white font-medium">Recruitment as a Service (RaaS)</span> and{" "}
              <span className="text-white font-medium">Interview as a Service (IaaS)</span>.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                data-testid="hero-cta-explore"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00A6A6] hover:bg-[#008080] text-white font-semibold transition-colors shadow-lg shadow-[#00A6A6]/25"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                data-testid="hero-cta-contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent border border-white/30 hover:border-white text-white font-semibold transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                Contact Us
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "100+", v: "Clients" },
                { k: "5,000+", v: "Candidates" },
                { k: "50+", v: "Domains" },
              ].map((item) => (
                <div key={item.v} data-testid={`hero-stat-${item.v.toLowerCase()}`}>
                  <div className="font-poppins font-semibold text-2xl text-white">
                    {item.k}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/60 mt-1">
                    {item.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration card */}
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00A6A6]/30 to-[#1d619e]/20 rounded-[2rem] blur-2xl" aria-hidden />
              <div className="relative rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-2xl shadow-black/30">
                <div className="aspect-[5/4] rounded-2xl overflow-hidden ring-1 ring-white/10 relative">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=srgb&fm=jpg&w=900&q=80"
                    alt="People collaborating with technology"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/70 via-transparent to-transparent" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-xs uppercase tracking-widest text-[#7fe5e5]">
                      Engagement
                    </div>
                    <div className="font-poppins text-white mt-1">RaaS Pods</div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-xs uppercase tracking-widest text-[#7fe5e5]">
                      Signal
                    </div>
                    <div className="font-poppins text-white mt-1">IaaS Panels</div>
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

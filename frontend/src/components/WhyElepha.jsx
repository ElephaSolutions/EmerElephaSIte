import { useEffect, useRef, useState } from "react";
import { Award, ShieldCheck, Layers, Zap } from "lucide-react";
import { WHY_FEATURES, STATS } from "../lib/content";

const ICONS = { award: Award, shieldCheck: ShieldCheck, layers: Layers, zap: Zap };

function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Counter({ value, suffix = "", duration = 1500 }) {
  const { ref, inView } = useInView(0.4);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function WhyElepha() {
  return (
    <section
      id="why-elepha"
      data-testid="why-elepha-section"
      className="relative py-24 md:py-28 bg-[#F9FAFB]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: image + heading */}
          <div className="lg:col-span-5 reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00A6A6]">
              Why Elepha
            </span>
            <h2 className="font-poppins font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0F4C81] mt-4 leading-[1.1]">
              Boutique by design.
              <span className="block">Enterprise in discipline.</span>
            </h2>

            <div className="mt-6 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=srgb&fm=jpg&w=900&q=75"
                alt="Senior team in a working session"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
            </div>

            <div id="about" className="mt-6 p-5 rounded-2xl bg-white border border-gray-100">
              <p className="text-sm text-[#4B5563] leading-relaxed">
                <span className="font-semibold text-[#0F4C81]">About: </span>
                A senior-led practice headquartered in Chennai, working with teams across India, MENA and North America.
              </p>
            </div>
          </div>

          {/* Right: features + stats */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {WHY_FEATURES.map((f, idx) => {
                const Icon = ICONS[f.iconKey] || Award;
                return (
                  <div
                    key={f.title}
                    data-testid={`why-feature-${idx}`}
                    className="reveal group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#0F4C81]/10 hover:-translate-y-1 transition-all duration-300"
                    style={{ transitionDelay: `${idx * 60}ms` }}
                  >
                    <div className="h-10 w-10 rounded-xl bg-[#00A6A6]/10 text-[#00A6A6] flex items-center justify-center group-hover:bg-[#00A6A6] group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-poppins font-semibold text-[#0F4C81]">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#4B5563] leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-3xl bg-[#0F4C81] text-white p-6 md:p-8 reveal relative overflow-hidden">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#00A6A6]/30 blur-3xl" aria-hidden />
              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-5">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="font-poppins font-semibold text-3xl text-white">
                      <Counter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

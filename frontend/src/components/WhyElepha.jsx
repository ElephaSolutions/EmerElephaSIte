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
      className="relative py-24 md:py-32 bg-[#F9FAFB]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28 reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00A6A6]">
              Why Elepha
            </span>
            <h2 className="font-poppins font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0F4C81] mt-4 leading-[1.1]">
              A boutique by design.
              <span className="block">Enterprise in discipline.</span>
            </h2>
            <p className="mt-5 text-[#4B5563] text-base md:text-lg leading-relaxed">
              Elepha was started by engineers and TA leaders who got tired of
              vendor fatigue. We are intentionally small, intentionally senior,
              and intentionally accountable.
            </p>

            <div id="about" className="mt-10 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0F4C81]">
                About Elepha
              </div>
              <p className="mt-3 text-[#4B5563] leading-relaxed">
                Headquartered in Chennai and serving teams across India, the
                Middle East and North America, Elepha brings strategy,
                engineering and recruitment under one roof. One partner. One
                throat to choke. One conversation away.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {WHY_FEATURES.map((f, idx) => {
                const Icon = ICONS[f.iconKey] || Award;
                return (
                  <div
                    key={f.title}
                    data-testid={`why-feature-${idx}`}
                    className="reveal group p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#0F4C81]/10 hover:-translate-y-1 transition-all duration-300"
                    style={{ transitionDelay: `${idx * 60}ms` }}
                  >
                    <div className="h-11 w-11 rounded-xl bg-[#00A6A6]/10 text-[#00A6A6] flex items-center justify-center group-hover:bg-[#00A6A6] group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-poppins font-semibold text-lg text-[#0F4C81]">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-3xl bg-[#0F4C81] text-white p-8 md:p-10 reveal relative overflow-hidden">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#00A6A6]/30 blur-3xl" aria-hidden />
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7fe5e5]">
                  By the numbers
                </div>
                <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-6">
                  {STATS.map((s) => (
                    <div
                      key={s.label}
                      data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="font-poppins font-semibold text-3xl md:text-4xl text-white">
                        <Counter value={s.value} suffix={s.suffix} />
                      </div>
                      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/70">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Compass, Eye, UserCog } from "lucide-react";
import { PRINCIPLES } from "../lib/content";

const ICONS = [Compass, Eye, UserCog];

export default function Principles() {
  return (
    <section
      data-testid="principles-section"
      className="relative py-20 md:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="reveal max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00A6A6]">
            How we operate
          </span>
          <h2 className="font-poppins font-semibold tracking-tight text-3xl sm:text-4xl text-[#0F4C81] mt-3 leading-[1.1]">
            Three non-negotiables.
          </h2>
        </div>

        <ul className="mt-10 grid md:grid-cols-3 gap-5">
          {PRINCIPLES.map((p, idx) => {
            const Icon = ICONS[idx] || Compass;
            return (
              <li
                key={p.title}
                data-testid={`principle-${idx + 1}`}
                className="reveal group rounded-2xl border border-gray-100 bg-[#F9FAFB] hover:bg-white hover:border-[#0F4C81]/20 hover:shadow-xl hover:shadow-[#0F4C81]/5 transition-all duration-300 p-6"
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-poppins text-xs font-semibold text-[#0F4C81]/60 tracking-widest">
                    0{idx + 1}
                  </span>
                  <span className="h-10 w-10 rounded-xl bg-white border border-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81] group-hover:bg-[#0F4C81] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-4 font-poppins font-semibold text-lg text-[#0F4C81]">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-[#4B5563]">{p.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

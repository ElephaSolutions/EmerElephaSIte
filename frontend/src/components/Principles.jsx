import { Compass, Eye, UserCog } from "lucide-react";
import { PRINCIPLES } from "../lib/content";

const ICONS = [Compass, Eye, UserCog];

export default function Principles() {
  return (
    <section
      data-testid="principles-section"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0F4C81]/15 to-transparent" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00A6A6]">
              Operating principles
            </span>
            <h2 className="font-poppins font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0F4C81] mt-4 leading-[1.1]">
              How we work
              <span className="block text-[#00A6A6]">when no one is watching.</span>
            </h2>
            <p className="mt-6 text-[#4B5563] leading-relaxed max-w-md">
              We don&apos;t over-promise on slides and under-deliver in reality.
              These are the non-negotiables that show up in every engagement, on
              every call, in every shortlist.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {PRINCIPLES.map((p, idx) => {
                const Icon = ICONS[idx] || Compass;
                return (
                  <li
                    key={p.title}
                    data-testid={`principle-${idx + 1}`}
                    className="reveal group relative rounded-2xl border border-gray-100 bg-[#F9FAFB] hover:bg-white hover:border-[#0F4C81]/20 hover:shadow-xl hover:shadow-[#0F4C81]/5 transition-all duration-300 p-7 md:p-8"
                    style={{ transitionDelay: `${idx * 70}ms` }}
                  >
                    <div className="flex items-start gap-5">
                      <div className="shrink-0 mt-1 flex items-center gap-3">
                        <span className="font-poppins text-xs font-semibold text-[#0F4C81]/60 tracking-widest">
                          0{idx + 1}
                        </span>
                        <span className="h-10 w-10 rounded-xl bg-white border border-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81] group-hover:bg-[#0F4C81] group-hover:text-white transition-colors">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-poppins font-semibold text-lg md:text-xl text-[#0F4C81]">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-[#4B5563] leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

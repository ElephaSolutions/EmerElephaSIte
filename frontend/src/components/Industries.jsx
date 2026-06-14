import {
  Code2,
  Landmark,
  HeartPulse,
  Factory,
  ShoppingBag,
  Rocket,
} from "lucide-react";
import { INDUSTRIES } from "../lib/content";

const ICONS = {
  code: Code2,
  landmark: Landmark,
  heartPulse: HeartPulse,
  factory: Factory,
  shoppingBag: ShoppingBag,
  rocket: Rocket,
};

export default function Industries() {
  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00A6A6]">
              Industries we serve
            </span>
            <h2 className="font-poppins font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0F4C81] mt-4 leading-tight">
              Deep context across the sectors shaping tomorrow.
            </h2>
          </div>
          <p className="md:text-right text-[#4B5563] max-w-sm">
            Each engagement is staffed with practitioners who already know your
            domain — so you skip the ramp-up tax.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ICONS[ind.iconKey] || Code2;
            return (
              <div
                key={ind.name}
                data-testid={`industry-${ind.name.toLowerCase().replace(/\s|&/g, "-")}`}
                className="reveal group relative overflow-hidden p-6 md:p-8 rounded-2xl bg-[#F9FAFB] border border-gray-100 hover:bg-white hover:border-[#0F4C81]/20 hover:shadow-xl hover:shadow-[#0F4C81]/5 transition-all duration-300"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#00A6A6]/0 group-hover:bg-[#00A6A6]/10 transition-colors duration-500 blur-2xl" />
                <div className="relative h-12 w-12 rounded-xl bg-white border border-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81] group-hover:bg-[#0F4C81] group-hover:text-white group-hover:border-[#0F4C81] transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 font-poppins font-semibold text-lg text-[#0F4C81]">
                  {ind.name}
                </h3>
                <p className="relative mt-1 text-sm text-[#4B5563]">
                  Tailored playbooks for {ind.name.toLowerCase()}.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
      className="relative py-24 md:py-32 bg-[#F9FAFB]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00A6A6]">
              Where we play
            </span>
            <h2 className="font-poppins font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0F4C81] mt-4 leading-[1.1]">
              Sectors we know intimately —
              <span className="block">not just by reputation.</span>
            </h2>
          </div>
          <p className="md:text-right text-[#4B5563] max-w-sm">
            Operators from each of these worlds sit inside Elepha. That&apos;s
            why our context kicks in on day one, not month two.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ICONS[ind.iconKey] || Code2;
            return (
              <div
                key={ind.name}
                data-testid={`industry-${ind.name.toLowerCase().replace(/\s|&/g, "-")}`}
                className="reveal group relative overflow-hidden p-6 md:p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#0F4C81]/20 hover:shadow-xl hover:shadow-[#0F4C81]/5 transition-all duration-300"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#00A6A6]/0 group-hover:bg-[#00A6A6]/10 transition-colors duration-500 blur-2xl" />
                <div className="relative h-12 w-12 rounded-xl bg-[#F9FAFB] border border-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81] group-hover:bg-[#0F4C81] group-hover:text-white group-hover:border-[#0F4C81] transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 font-poppins font-semibold text-lg text-[#0F4C81]">
                  {ind.name}
                </h3>
                <p className="relative mt-2 text-sm text-[#4B5563] leading-relaxed">
                  {ind.blurb}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import {
  Monitor,
  Users,
  Rocket,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "../lib/content";

const ICONS = {
  monitor: Monitor,
  users: Users,
  rocket: Rocket,
  messageSquare: MessageSquare,
};

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00A6A6]">
            What we do
          </span>
          <h2 className="font-poppins font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0F4C81] mt-4 leading-tight">
            Four practices.
            <br />
            One outcome — your growth.
          </h2>
          <p className="mt-5 text-[#4B5563] text-base md:text-lg max-w-2xl leading-relaxed">
            From running your IT estate to building your next team, Elepha
            Solutions delivers four tightly integrated services so you never
            have to stitch vendors together.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = ICONS[service.iconKey] || Monitor;
            return (
              <article
                key={service.id}
                data-testid={`service-card-${service.id}`}
                className="reveal group relative overflow-hidden rounded-3xl bg-white border border-gray-100 p-8 lg:p-10 shadow-sm hover:shadow-2xl hover:shadow-[#0F4C81]/10 hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#00A6A6]/0 group-hover:bg-[#00A6A6]/10 blur-2xl transition-colors duration-500" />
                <div className="flex items-start gap-5 relative">
                  <div className="shrink-0 h-14 w-14 rounded-2xl bg-[#0F4C81]/5 group-hover:bg-[#0F4C81] flex items-center justify-center text-[#0F4C81] group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-poppins font-semibold text-xl md:text-2xl text-[#0F4C81]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[#4B5563] leading-relaxed">
                      {service.long}
                    </p>
                    <a
                      href="#contact"
                      data-testid={`service-cta-${service.id}`}
                      className="mt-6 inline-flex items-center gap-2 text-[#00A6A6] font-semibold text-sm hover:text-[#008080] transition-colors"
                    >
                      Learn more
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

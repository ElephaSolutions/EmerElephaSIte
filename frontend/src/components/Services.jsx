import {
  Monitor,
  Users,
  Rocket,
  MessageSquare,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { SERVICES, CONTACT } from "../lib/content";

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
      className="relative py-24 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00A6A6]">
            What we do
          </span>
          <h2 className="font-poppins font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0F4C81] mt-4 leading-[1.1]">
            Four services. One accountable partner.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {SERVICES.map((service, idx) => {
            const Icon = ICONS[service.iconKey] || Monitor;
            return (
              <article
                key={service.id}
                data-testid={`service-card-${service.id}`}
                className="reveal group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#0F4C81]/10 hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                {/* Image header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/85 via-[#0F4C81]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center gap-3">
                    <span className="h-11 w-11 rounded-xl bg-white text-[#0F4C81] flex items-center justify-center shadow-md">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-poppins font-semibold text-xl md:text-2xl text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-7">
                  <p className="text-[#1F2937] font-medium">{service.short}</p>

                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="inline-flex items-center gap-1.5 text-sm text-[#4B5563]"
                      >
                        <span className="h-4 w-4 rounded-full bg-[#00A6A6]/10 text-[#00A6A6] flex items-center justify-center">
                          <Check className="h-3 w-3" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                      `Enquiry: ${service.title}`
                    )}`}
                    data-testid={`service-cta-${service.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-[#00A6A6] font-semibold text-sm hover:text-[#008080] transition-colors"
                  >
                    Talk to a partner
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

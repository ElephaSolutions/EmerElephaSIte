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
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end reveal">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00A6A6]">
              What we offer
            </span>
            <h2 className="font-poppins font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0F4C81] mt-4 leading-[1.1]">
              A focused set of services —
              <span className="block">stitched into one accountable partner.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 text-[#4B5563] leading-relaxed">
            Most firms force you to pick between technology partners and talent
            partners. We deliberately built a practice that does both — because
            the two problems are never really separate.
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
                <div className="relative flex items-start gap-5">
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

                    {service.bullets?.length ? (
                      <ul className="mt-5 grid sm:grid-cols-2 gap-x-4 gap-y-2">
                        {service.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-center gap-2 text-sm text-[#1F2937]"
                          >
                            <span className="h-4 w-4 rounded-full bg-[#00A6A6]/10 text-[#00A6A6] flex items-center justify-center">
                              <Check className="h-3 w-3" />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <a
                      href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                        `Enquiry: ${service.title}`
                      )}`}
                      data-testid={`service-cta-${service.id}`}
                      className="mt-6 inline-flex items-center gap-2 text-[#00A6A6] font-semibold text-sm hover:text-[#008080] transition-colors"
                    >
                      Discuss this with a partner
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

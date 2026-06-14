import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/content";

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00A6A6]">
            Client voices
          </span>
          <h2 className="font-poppins font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0F4C81] mt-4 leading-tight">
            Outcomes our partners are willing to put their name to.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <figure
              key={t.name}
              data-testid={`testimonial-${idx}`}
              className="reveal group relative p-8 rounded-2xl bg-[#F9FAFB] border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-[#0F4C81]/10 transition-all duration-300 flex flex-col"
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <Quote className="h-7 w-7 text-[#00A6A6]" aria-hidden />
              <blockquote className="mt-5 text-[#1F2937] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 pt-5 border-t border-gray-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
                <div>
                  <div className="font-poppins font-semibold text-[#0F4C81]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#4B5563]">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

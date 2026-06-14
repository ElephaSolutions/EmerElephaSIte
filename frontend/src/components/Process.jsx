import { PROCESS_STEPS } from "../lib/content";

export default function Process() {
  return (
    <section
      data-testid="process-section"
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00A6A6]">
            How an engagement runs
          </span>
          <h2 className="font-poppins font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0F4C81] mt-4 leading-[1.1]">
            Five disciplined steps —
            <span className="block">from first call to steady state.</span>
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-7 left-7 right-7 h-px bg-gradient-to-r from-[#0F4C81]/0 via-[#0F4C81]/25 to-[#0F4C81]/0" aria-hidden />

          <ol className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <li
                key={step.title}
                data-testid={`process-step-${idx + 1}`}
                className="reveal relative"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="relative flex md:flex-col items-start md:items-start gap-4 md:gap-0">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#0F4C81]/15 shadow-sm">
                    <span className="font-poppins font-semibold text-[#0F4C81]">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="md:mt-6">
                    <h3 className="font-poppins font-semibold text-lg text-[#0F4C81]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#4B5563] leading-relaxed max-w-xs">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

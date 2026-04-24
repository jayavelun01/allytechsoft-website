export default function Hero() {
  return (
    <section className="atmos relative pt-36 md:pt-44 pb-24 md:pb-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Meta line */}
        <div className="flex items-center gap-3 mb-10 text-xs tracking-[0.25em] uppercase text-mute font-mono">
          <span className="w-8 h-px bg-brandBlue/60" />
          <span>Solutions studio · Est. 2025</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold tracking-tightest leading-[0.95] text-[clamp(3rem,9vw,8.5rem)]">
          We build digital
          <br />
          products that
          <br />
          <span className="text-brand-gradient">feel inevitable.</span>
        </h1>

        {/* Sub copy + CTA */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          <p className="md:col-span-6 md:col-start-1 text-lg md:text-xl text-ash leading-relaxed max-w-xl">
            AllyTechSoft Solutions is a team of makers crafting mobile apps, web
            platforms, ERP systems, AIML products, and digital campaigns for
            companies that care about the details. No templates. No shortcuts.
          </p>

          <div className="md:col-span-5 md:col-start-8 flex flex-col sm:flex-row md:justify-end gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-ink text-white text-sm hover:bg-brandBlue transition-colors duration-300"
            >
              Begin a project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 8h12m-4-4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full border hairline text-sm hover:bg-ice transition-colors duration-300"
            >
              See our work
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 border-t hairline">
          {[
            { n: "12+", l: "Products shipped" },
            { n: "3", l: "Countries served" },
            { n: "98%", l: "Client retention" },
            { n: "2 yrs", l: "Quiet craft" },
          ].map((s, i) => (
            <div
              key={i}
              className={`py-8 md:py-10 ${
                i !== 3 ? "md:border-r hairline" : ""
              } ${i < 2 ? "border-b md:border-b-0 hairline" : ""} ${
                i % 2 === 0 ? "border-r md:border-r hairline" : ""
              }`}
            >
              <div className="font-display font-bold text-4xl md:text-5xl tracking-tightest">
                {s.n}
              </div>
              <div className="mt-2 text-sm text-mute">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

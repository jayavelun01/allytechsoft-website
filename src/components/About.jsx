export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-36">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left: large serif pull-quote */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-8 text-xs tracking-[0.25em] uppercase text-mute font-mono">
              <span className="w-6 h-px bg-brandBlue/60" />
              <span>The studio</span>
            </div>
            <h2 className="font-display font-bold tracking-tightest leading-[1.05] text-4xl md:text-6xl">
              We are designers, engineers, and strategists who believe
              <span className="text-brand-gradient"> software should feel made, not assembled.</span>
            </h2>

            <div className="mt-10 grid sm:grid-cols-2 gap-8 text-ash leading-relaxed max-w-2xl">
              <p>
                AllyTechSoft Solutions began with a stubborn belief: clients deserve
                partners that still care about the craft. Years on, we're a little
                bigger, still stubborn, and still independent.
              </p>
              <p>
                We keep our team tight on purpose. Every project has a senior lead from
                day one to ship, and we never outsource the hard parts. If our name is on
                it, we built it.
              </p>
            </div>
          </div>

          {/* Right: values cards */}
          <div className="md:col-span-5 space-y-4">
            {[
              { t: 'Small, on purpose.', b: 'A tight team. No account managers. You speak to the makers.' },
              { t: 'Ship weekly.', b: 'Transparent progress, honest timelines, no reveals at the finish line.' },
              { t: 'Own the craft.', b: 'Design, engineering, strategy — under one roof, one standard.' },
            ].map((v, i) => (
              <div
                key={i}
                className="p-6 md:p-8 rounded-3xl border hairline bg-mist hover:bg-ice/70 transition-colors duration-500"
              >
                <div className="flex items-baseline justify-between">
                  <h4 className="font-display font-semibold text-2xl tracking-tightest">{v.t}</h4>
                  <span className="font-mono text-xs text-mute">0{i + 1}</span>
                </div>
                <p className="mt-3 text-sm text-ash leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

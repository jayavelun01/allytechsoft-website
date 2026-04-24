const steps = [
  {
    num: '01',
    title: 'Listen',
    body:
      'A week of conversations, audits, and quiet observation. We learn your business, your users, and the pressures shaping both.',
  },
  {
    num: '02',
    title: 'Shape',
    body:
      'Strategy, architecture, and a design direction on paper — before a single pixel is placed. Fewer surprises, better decisions.',
  },
  {
    num: '03',
    title: 'Build',
    body:
      'Weekly ships. Honest scopes. Code reviewed by humans. You see progress as it happens, not in a reveal at the end.',
  },
  {
    num: '04',
    title: 'Nurture',
    body:
      'Launch is the middle, not the end. We stay on as partners for iteration, performance, and the many small things that compound.',
  },
]

export default function Process() {
  return (
    <section id="process" className="px-6 md:px-10 py-24 md:py-36 bg-ice/50 border-y hairline">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-mute font-mono">
              <span className="w-6 h-px bg-brandBlue/60" />
              <span>How we work</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display font-bold tracking-tightest leading-[1] text-5xl md:text-7xl">
              A process built for
              <br />
              <span className="italic font-medium">trust, not theatre.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-px bg-ink/10 border hairline">
          {steps.map((s, i) => (
            <div key={s.num} className="bg-mist p-8 md:p-10 min-h-[260px] flex flex-col">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs text-mute">{s.num}</span>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs"
                  style={{
                    background: `linear-gradient(135deg, #1E5FA5 ${
                      i * 25
                    }%, #5EB33C 100%)`,
                  }}
                >
                  ◆
                </span>
              </div>
              <h3 className="font-display font-semibold tracking-tightest text-4xl mt-6">
                {s.title}
              </h3>
              <p className="mt-4 text-ash text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

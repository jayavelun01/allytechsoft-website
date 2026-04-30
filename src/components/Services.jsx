const services = [
  {
    num: '01',
    title: 'Mobile Apps',
    tag: 'iOS · Android · Cross-platform',
    body:
      'Native-feeling apps built with React Native, Swift, and Kotlin. From MVP to App Store — performance, motion, and delight are non-negotiable.',
    points: ['iOS + Android', 'React Native', 'Offline-first', 'Push & analytics'],
  },
  {
    num: '02',
    title: 'Web Apps',
    tag: 'SaaS · Dashboards · Platforms',
    body:
      'Fast, accessible, type-safe web products. Next.js + React, server-rendered, well-tested, and designed to scale from first user to ten-thousandth.',
    points: ['Next.js / React', 'Design systems', 'Auth & payments', 'SSR & edge'],
  },
  {
    num: '03',
    title: 'ERP Products',
    tag: 'Operations · Inventory · Finance',
    body:
      'Custom ERP platforms that replace spreadsheets and stitched-together SaaS. Modular, role-based, and quietly powerful where it needs to be.',
    points: ['Inventory ERP', 'Accounting', 'Custom modules'],
  },
  {
    num: '04',
    title: 'AIML Products',
    tag: 'AI · Machine Learning · LLMs',
    body:
      'Production-grade AI and ML systems — from custom model pipelines to LLM-powered assistants, computer vision, and predictive analytics wired into your workflow.',
    points: ['LLM apps', 'Vision & NLP', 'MLOps pipelines', 'RAG & agents'],
  },
  {
    num: '05',
    title: 'Digital Marketing',
    tag: 'Strategy · SEO · Performance',
    body:
      'Campaigns that compound. We pair editorial content with paid performance and SEO foundations so growth is durable, not rented.',
    points: ['SEO & content', 'Paid media', 'Brand systems', 'Analytics'],
  },
]

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-24 md:py-36">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-mute font-mono">
              <span className="w-6 h-px bg-brandBlue/60" />
              <span>What we do</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display font-bold tracking-tightest leading-[1] text-5xl md:text-7xl">
              Five practices,
              <br />
              <span className="text-brand-gradient">one standard of craft.</span>
            </h2>
          </div>
        </div>

        {/* Service rows */}
        <div className="border-t hairline">
          {services.map((s) => (
            <article
              key={s.num}
              className="group grid md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-14 border-b hairline hover:bg-ice/50 transition-colors duration-500 px-2 md:px-4 -mx-2 md:-mx-4"
            >
              <div className="md:col-span-1 font-mono text-xs text-mute pt-2">
                {s.num}
              </div>

              <div className="md:col-span-4">
                <h3 className="font-display font-semibold tracking-tightest text-4xl md:text-5xl leading-none">
                  {s.title}
                </h3>
                <p className="mt-3 text-xs tracking-[0.2em] uppercase text-brandBlue font-mono">
                  {s.tag}
                </p>
              </div>

              <div className="md:col-span-5 text-ash leading-relaxed">
                <p>{s.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="text-xs px-3 py-1.5 rounded-full border hairline text-ink/70"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2 flex md:justify-end items-start">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-ink group-hover:text-brandBlue transition-colors duration-300"
                >
                  Enquire
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const work = [
  {
    year: "2025",
    client: "MedApp",
    title:
      "AI driven Hospital Management Information System app that feels calm.",
    tags: ["iOS", "Android", "Web", "Design System"],
    tone: "blue",
  },
  {
    year: "2025",
    client: "InvoPro",
    title:
      "ERP Product for professional Invoice solution with Accounting roadmap.",
    tags: [
      "ERP",
      "Inventory",
      "Invoice",
      "Accounting",
      "iOS",
      "Android",
      "Web",
    ],
    tone: "green",
  },
  {
    year: "2025",
    client: "Ally AI",
    title: "An LLM assistant that actually helps.",
    tags: ["AIML", "RAG", "LangChain"],
    tone: "teal",
  },
  {
    year: "2025",
    client: "ArrangeMyTrip",
    title: "A Tourism and Travel Booking app",
    tags: ["iOS", "Android", "Web App", "Realtime", "Maps"],
    tone: "blue",
  },
];

const toneMap = {
  blue: "from-brandBlue/15 via-brandBlue/5 to-transparent",
  green: "from-brandGreen/20 via-brandGreen/5 to-transparent",
  teal: "from-brandTeal/20 via-brandTeal/5 to-transparent",
};

export default function Portfolio() {
  return (
    <section
      id="work"
      className="px-6 md:px-10 py-24 md:py-36 border-t hairline"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-mute font-mono">
              <span className="w-6 h-px bg-brandBlue/60" />
              <span>Selected work</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display font-bold tracking-tightest leading-[1] text-5xl md:text-7xl">
              A handful of
              <br />
              <span className="text-brand-gradient">
                things we're proud of.
              </span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {work.map((w, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden rounded-3xl border hairline aspect-[4/3] bg-gradient-to-br ${toneMap[w.tone]} bg-mist hover:-translate-y-1 transition-transform duration-500`}
            >
              {/* Decorative glyph */}
              <svg
                viewBox="0 0 400 300"
                className="absolute inset-0 w-full h-full text-ink/[0.06] group-hover:text-brandBlue/20 transition-colors duration-700"
                aria-hidden
              >
                <circle
                  cx="200"
                  cy="150"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <circle
                  cx="200"
                  cy="150"
                  r="80"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <circle
                  cx="200"
                  cy="150"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <line
                  x1="80"
                  y1="150"
                  x2="320"
                  y2="150"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="200"
                  y1="30"
                  x2="200"
                  y2="270"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>

              {/* Top meta */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between font-mono text-xs text-mute">
                <span>{w.client}</span>
                <span>{w.year}</span>
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-6 bottom-6">
                <h3 className="font-display font-semibold tracking-tightest text-3xl md:text-4xl leading-[1.05] max-w-sm">
                  {w.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-mist border hairline text-ash"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                ↗
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Marquee() {
  const items = [
    'React Native', 'Swift', 'Kotlin', 'Next.js', 'Node',
    'Postgres', 'AWS', 'PyTorch', 'TensorFlow', 'LangChain',
    'Figma', 'Shopify', 'Stripe',
  ]
  const track = [...items, ...items]

  return (
    <section aria-hidden className="py-10 border-y hairline bg-ice/60 overflow-hidden">
      <div className="flex gap-14 animate-marquee whitespace-nowrap">
        {track.map((t, i) => (
          <div key={i} className="flex items-center gap-14 text-mute">
            <span className="font-display font-medium text-2xl md:text-3xl tracking-tight">{t}</span>
            <span className="text-brandGreen">◆</span>
          </div>
        ))}
      </div>
    </section>
  )
}

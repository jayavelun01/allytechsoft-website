export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="AllyTechSoft Solutions"
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg tracking-tightest text-white">
                  AllyTechSoft
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/50 mt-0.5">
                  Solutions
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-sm leading-relaxed text-sm">
              A studio for companies who still care how things are made. Mobile, web, ERP,
              AIML, and the marketing that carries them.
            </p>
            <a
              href="mailto:allytechsoft@gmail.com"
              className="inline-block mt-6 text-sm text-white/80 hover:text-brandGreen transition-colors"
            >
              allytechsoft@gmail.com
            </a>
          </div>

          <FooterCol
            title="Services"
            links={['Mobile Apps', 'Web Apps', 'ERP Products', 'AIML Products', 'Digital Marketing']}
          />
          <FooterCol title="Studio" links={['About', 'Process', 'Work', 'Careers']} />
          <FooterCol title="Elsewhere" links={['Twitter', 'Instagram', 'LinkedIn', 'GitHub']} />
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>© {new Date().getFullYear()} AllyTechSoft Solutions. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brandGreen transition-colors">Privacy</a>
            <a href="#" className="hover:text-brandGreen transition-colors">Terms</a>
            <a href="#" className="hover:text-brandGreen transition-colors">Colophon</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div className="md:col-span-2">
      <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-white/50 mb-4">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-brandGreen transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

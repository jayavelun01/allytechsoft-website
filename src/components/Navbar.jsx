import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Studio', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-mist/85 backdrop-blur-md border-b hairline' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="AllyTechSoft Solutions"
            className="h-10 w-10 object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-lg md:text-xl tracking-tightest">
              AllyTechSoft
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-mute mt-0.5">
              Solutions
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-9 text-sm text-ash">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative hover:text-ink transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-ink text-white hover:bg-brandBlue transition-colors duration-300"
        >
          Start a project
          <span aria-hidden>→</span>
        </a>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-px bg-ink transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`h-px bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-px bg-ink transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t hairline bg-mist">
          <ul className="px-6 py-6 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-display font-semibold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 mt-2 px-5 py-3 rounded-full bg-ink text-white"
              >
                Start a project →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

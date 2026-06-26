import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Fonctionnalites', href: '#features' },
    { label: 'A propos', href: '#about' },
    { label: 'Temoignages', href: '#testimonials' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-soft">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        <img src="/logo.png" alt="TaskFlow Logo" className="h-8" />

        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="text-dark/70 hover:text-dark transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:block bg-primary hover:bg-primary/80 text-dark px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Commencer
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-dark"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-soft px-4 py-4">
          <ul className="flex flex-col gap-4 text-sm">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-dark/70 hover:text-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block bg-primary text-dark px-4 py-2 rounded-lg text-sm text-center font-medium"
          >
            Commencer
          </a>
        </div>
      )}
    </header>
  )
}

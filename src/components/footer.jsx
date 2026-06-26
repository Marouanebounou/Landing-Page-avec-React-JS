export default function Footer() {
  return (
    <footer className="py-10 px-4 bg-dark text-white/60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold text-primary">Safqa</div>
        <div className="flex gap-6 text-sm">
          <a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a>
          <a href="#about" className="hover:text-white transition-colors">À propos</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="text-sm">© 2026 Safqa. Tous droits réservés.</div>
      </div>
    </footer>
  )
}

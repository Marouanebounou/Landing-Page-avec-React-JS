export default function About() {
  const points = [
    {
      label: 'Pour qui ?',
      text: 'Startups, PME et freelances qui veulent mieux organiser leur travail.',
    },
    {
      label: 'Quel problème ?',
      text: 'Trop d\'outils dispersés, perte de temps, manque de visibilité sur les projets.',
    },
    {
      label: 'Pourquoi Safqa ?',
      text: 'Une solution simple, centralisée et accessible sans formation technique.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-dark">À propos</h2>
          <p className="text-dark/60 mb-8">
            Ne vous limitez pas à chercher des marchés. Gérez tout le processus : de l'alerte à la soumission, en passant par l'analyse détaillée et la vérification des pièces.
          </p>
          <div className="space-y-6">
            {points.map((point, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-dark font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-dark">{point.label}</div>
                  <div className="text-dark/60 text-sm mt-1">{point.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-dark rounded-2xl p-8 text-white">
          <div className="text-5xl font-bold mb-1 text-primary">500+</div>
          <div className="text-white/60 mb-6">équipes utilisent Safqa</div>
          <div className="text-5xl font-bold mb-1 text-primary">98%</div>
          <div className="text-white/60 mb-6">de satisfaction client</div>
          <div className="text-5xl font-bold mb-1 text-primary">2x</div>
          <div className="text-white/60">plus de productivité</div>
        </div>

      </div>
    </section>
  )
}

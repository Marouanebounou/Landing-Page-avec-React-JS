import { useState } from 'react'

function TestimonialCard({ name, role, text }) {
  return (
    <div className="p-6 rounded-xl bg-white border border-soft shadow-sm">
      <p className="text-dark/60 italic mb-4">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-dark">
          {name[0]}
        </div>
        <div>
          <div className="font-semibold text-sm text-dark">{name}</div>
          <div className="text-dark/50 text-xs">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false)

  const testimonials = [
    { name: 'Sophie Martin', role: 'CEO, AgenceWeb', text: 'TaskFlow a transformé notre façon de travailler. On gagne facilement 2h par jour.' },
    { name: 'Karim Benali', role: 'Directeur Technique', text: 'Simple à prendre en main, puissant en utilisation. Je recommande à 100%.' },
    { name: 'Laura Petit', role: 'Freelance Designer', text: 'Enfin un outil qui ne me complique pas la vie. Mes clients adorent le suivi en temps réel.' },
    { name: 'Thomas Dupont', role: 'Chef de projet', text: 'Le meilleur investissement pour notre équipe cette année. Indispensable.' },
  ]

  const displayed = showAll ? testimonials : testimonials.slice(0, 2)

  return (
    <section id="testimonials" className="py-20 px-4 bg-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark">Ce que disent nos clients</h2>
          <p className="mt-3 text-dark/60">Des équipes qui nous font confiance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayed.map((t, i) => (
            <TestimonialCard key={i} name={t.name} role={t.role} text={t.text} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-dark text-dark hover:bg-soft px-6 py-2 rounded-lg transition-colors"
          >
            {showAll ? 'Voir moins' : 'Voir plus'}
          </button>
        </div>
      </div>
    </section>
  )
}

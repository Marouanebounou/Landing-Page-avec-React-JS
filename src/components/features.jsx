import { Zap, Lock, Users, BarChart2, Smartphone, Bell } from 'lucide-react'
n<
function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="p-6 rounded-xl border border-soft bg-white hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-dark" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-dark">{title}</h3>
      <p className="text-dark/60 text-sm">{description}</p>
    </div>
  )
}

export default function Features() {
  const features = [
    { icon: Zap, title: 'Rapide', description: 'Interface fluide et réactive pour travailler sans interruption.' },
    { icon: Lock, title: 'Sécurisé', description: 'Vos données sont chiffrées et protégées à chaque instant.' },
    { icon: Users, title: 'Collaboratif', description: 'Invitez votre équipe et travaillez ensemble en temps réel.' },
    { icon: BarChart2, title: 'Statistiques', description: 'Suivez votre progression avec des rapports simples et clairs.' },
    { icon: Smartphone, title: 'Mobile', description: 'Accessible sur tous vos appareils, partout et à tout moment.' },
    { icon: Bell, title: 'Notifications', description: 'Restez informé des mises à jour importantes de vos projets.' },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark">Fonctionnalités</h2>
          <p className="mt-3 text-dark/60">Tout ce dont vous avez besoin dans un seul outil.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

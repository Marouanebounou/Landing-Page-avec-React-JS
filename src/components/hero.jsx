export default function Hero() {
  const tasks = [
    { text: 'Analyse des CPS', done: true },
    { text: 'Génération des dossiers', done: true },
    { text: 'Alertes personnalisées', done: false },
    { text: 'Pipeline de suivi', done: false },
  ]

  return (
    <section id="hero" className="py-20 px-4 bg-gradient-to-br from-soft to-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            Soumissionnez plus vite.{' '}
            <span className="text-primary">Gagnez plus.</span>
          </h1>
          <p className="mt-4 text-lg text-dark/70">
            Safqa analyse vos CPS en 2 secondes, génère vos dossiers sans erreur et vous alerte dès qu'un marché correspond à votre profil.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="bg-primary hover:bg-primary/80 text-dark px-6 py-3 rounded-lg font-medium transition-colors">
              Essayer gratuitement
            </a>
            <a href="#features" className="border border-soft px-6 py-3 rounded-lg font-medium text-dark hover:bg-soft transition-colors">
              Voir les fonctionnalites
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6 border border-soft">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <p className="text-sm font-semibold mb-3 text-dark">Mon projet</p>
            <div className="space-y-3">
              {tasks.map((task, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-soft">
                  <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${task.done ? 'bg-primary border-primary' : 'border-soft'}`}></div>
                  <span className={`text-sm ${task.done ? 'line-through text-dark/40' : 'text-dark'}`}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

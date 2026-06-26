import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!name || !email || !message) {
      setError('Veuillez remplir tous les champs.')
      return
    }
    if (!email.includes('@')) {
      setError('Adresse email invalide.')
      return
    }

    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-dark">Contactez-nous</h2>
          <p className="mt-3 text-dark/60">On vous répond dans les 24h.</p>
        </div>

        {submitted ? (
          <div className="text-center py-12 bg-green-50 rounded-xl">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <p className="text-green-700 font-medium">
              Message envoyé ! On vous contacte bientôt.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm text-gray-500 underline"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-8 rounded-xl border border-soft shadow-sm"
          >
            <div>
              <label className="block text-sm font-medium mb-1 text-dark">Nom complet</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jean Dupont"
                className="w-full px-4 py-3 border border-soft rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-dark">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jean@exemple.com"
                className="w-full px-4 py-3 border border-soft rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-dark">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message..."
                rows={4}
                className="w-full px-4 py-3 border border-soft rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/80 text-dark py-3 rounded-lg font-medium transition-colors"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

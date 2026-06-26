import Header from './components/header'
import Hero from './components/hero'
import Features from './components/features'
import About from './components/about'
import Testimonials from './components/testimonials'
import Contact from './components/contact'
import Footer from './components/footer'
import BackToTop from './components/backToTop'

function App() {
  return (
    <div className="bg-white text-dark min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
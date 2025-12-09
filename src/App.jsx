import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import AppointmentForm from './components/AppointmentForm.jsx'
import ImageGallery from './components/ImageGallery.jsx'
import VideoSection from './components/VideoSection.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'

export default function App() {
  // Reemplaza con tu enlace de Google Forms
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScyhnXT12Xs6IxR6nRwBjzL4Xazw6z1OtN5tl4dzlkPUSRogA/viewform?usp=dialog'

  const [view, setView] = useState('home')
  const [toast, setToast] = useState(null)

  return (
    <div className="app">
      <Header onNavigate={setView} googleFormUrl={GOOGLE_FORM_URL} />
      <main className="container">
        {view === 'home' && (
          <>
            <Hero onReserve={() => window.open(GOOGLE_FORM_URL, '_blank', 'noopener')} />
            <ImageGallery />
            <VideoSection />
          </>
        )}
        {view === 'servicios' && <Services />}
        {view === 'citas' && (
          // Si aún quieres mantener el formulario interno en la ruta 'citas',
          // lo dejamos disponible, pero el botón principal abre Google Forms.
          <AppointmentForm onSuccess={(m) => setToast(m)} />
        )}
      </main>
      <Footer />
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  )
}

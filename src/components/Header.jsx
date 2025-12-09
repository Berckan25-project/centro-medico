export default function Header({ onNavigate, googleFormUrl }) {
  const openForm = () => {
    window.open(googleFormUrl, '_blank', 'noopener')
  }

  return (
    <header className="header">
      <div className="brand">
        <div className="logo" aria-hidden>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="6" fill="#0ea5e9"/>
            <path d="M7 12h10M12 7v10" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <h1 className="site-title">Centro Médico Santa Anita</h1>
          <p className="site-sub">Atención humana en Lima</p>
        </div>
      </div>

      <nav className="nav" aria-label="Navegación principal">
        <button onClick={() => onNavigate('home')}>Inicio</button>
        <button onClick={() => onNavigate('servicios')}>Servicios</button>
        <button className="btn-primary" onClick={openForm}>Reservar cita</button>
      </nav>
    </header>
  )
}

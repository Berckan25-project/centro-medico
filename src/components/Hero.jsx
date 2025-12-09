export default function Hero({ onReserve }) {
  return (
    <section className="hero-card">
      <div className="hero-left">
        <h2>Salud cercana con calidez humana</h2>
        <p className="muted">Profesionales certificados, tecnología actual y horarios flexibles. Ubicados en Santa Anita, Lima.</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={onReserve}>Reservar cita</button>
          <a className="link" href="#" onClick={(e)=>e.preventDefault()}>Conoce nuestros horarios</a>
        </div>
        <ul className="contact-list">
          <li><strong>Dirección</strong> Av. Los Chancas 123</li>
          <li><strong>Teléfono</strong> (01) 555-0101</li>
          <li><strong>Correo</strong> citas@santaanita.med.pe</li>
        </ul>
      </div>
      <div className="hero-right" aria-hidden>
        <div className="illustration">
          <svg viewBox="0 0 200 140" width="100%" height="100%">
            <rect width="200" height="140" rx="12" fill="#e6f6fb"/>
            <g transform="translate(20,18)" fill="#0284c7">
              <circle cx="30" cy="30" r="18" opacity="0.95"/>
              <rect x="70" y="10" width="80" height="20" rx="6" opacity="0.9"/>
              <rect x="70" y="40" width="60" height="12" rx="6" opacity="0.7"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}

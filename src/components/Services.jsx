const services = [
  { name: 'Medicina general', desc: 'Chequeos, control de enfermedades crónicas y prevención.' },
  { name: 'Pediatría', desc: 'Controles de crecimiento, vacunas y orientación familiar.' },
  { name: 'Ginecología', desc: 'Controles, ecografías y planificación familiar.' },
  { name: 'Odontología', desc: 'Limpiezas, restauraciones y urgencias dentales.' },
  { name: 'Laboratorio', desc: 'Exámenes con entrega rápida y resultados confiables.' },
]

export default function Services() {
  return (
    <section className="section">
      <h3>Nuestros servicios</h3>
      <div className="services-grid">
        {services.map(s => (
          <article key={s.name} className="service-card">
            <div className="service-icon" aria-hidden>🩺</div>
            <h4>{s.name}</h4>
            <p className="muted">{s.desc}</p>
            <button className="link-btn">Más información</button>
          </article>
        ))}
      </div>
    </section>
  )
}

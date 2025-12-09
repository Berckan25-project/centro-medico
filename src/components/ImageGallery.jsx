import { useState } from 'react'

const images = [
  { src: '/public/images/consulta-medica.jpg', alt: 'Consulta médica' },
  { src: '/images/ecografia.jpg', alt: 'Equipo de laboratorio' },
  { src: '/images/equipo-de-laboratorio.jpg', alt: 'Sala de espera' },
  { src: '/images/sala-de-espera.jpg', alt: 'Ecografía' },
]

export default function ImageGallery() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section">
      <h3>Imágenes del centro</h3>

      <div className="gallery-grid" aria-label="Galería de imágenes médicas">
        {images.map((img, i) => (
          <button
            key={img.src}
            className="gallery-item"
            onClick={() => setOpenIndex(i)}
            aria-label={`Abrir imagen ${i + 1}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Imagen ampliada">
          <button className="lightbox-close" onClick={() => setOpenIndex(null)} aria-label="Cerrar">✕</button>
          <div className="lightbox-content">
            <img src={images[openIndex].src} alt={images[openIndex].alt} />
            <div className="lightbox-controls">
              <button onClick={() => setOpenIndex((openIndex - 1 + images.length) % images.length)} aria-label="Anterior">◀</button>
              <span>{openIndex + 1} / {images.length}</span>
              <button onClick={() => setOpenIndex((openIndex + 1) % images.length)} aria-label="Siguiente">▶</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default function VideoSection() {
  const youtubeId = 'dQw4w9WgXcQ' // reemplaza por tu ID
  const localVideo = '/videos/centro-medico.mp4' // opcional

  return (
    <section className="section">
      <h3>Videos informativos</h3>

      <div className="videos-grid">
        <div className="video-card">
          <h4>Presentación del centro</h4>
          <div className="video-embed" aria-hidden>
            <iframe
              title="Presentación Centro Médico"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="video-card">
          <h4>Demostración de consulta</h4>
          <video controls width="100%" preload="metadata">
            <source src={localVideo} type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
        </div>
      </div>
    </section>
  )
}

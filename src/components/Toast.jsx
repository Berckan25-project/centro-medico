import { useEffect } from 'react'

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4500)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <div className="toast" role="status" aria-live="polite">
      {message}
      <button className="toast-close" onClick={onClose} aria-label="Cerrar">✕</button>
    </div>
  )
}

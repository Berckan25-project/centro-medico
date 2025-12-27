import { useState } from 'react'

const specialties = [
  'Medicina general',
  'Pediatría',
  'Ginecología',
  'Odontología',
  'Laboratorio',
]

function validateDni(dni) { return /^\d{8}$/.test(dni) }
function validateEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) }

export default function AppointmentForm({ onSuccess }) {
  const [form, setForm] = useState({
    dni: '', nombres: '', correo: '', especialidad: specialties[0], fecha: '', hora: '', notas: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    setErrors(e => ({ ...e, [name]: null }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const err = {}
    if (!validateDni(form.dni)) err.dni = 'DNI inválido'
    if (!form.nombres.trim()) err.nombres = 'Ingresa nombres'
    if (!validateEmail(form.correo)) err.correo = 'Correo inválido'
    if (!form.fecha) err.fecha = 'Selecciona fecha'
    if (!form.hora) err.hora = 'Selecciona hora'
    setErrors(err)
    if (Object.keys(err).length) return

    setLoading(true)
    try {
      
      await new Promise(r => setTimeout(r, 900))
      setForm({ dni:'', nombres:'', correo:'', especialidad:specialties[0], fecha:'', hora:'', notas:'' })
      onSuccess && onSuccess('Cita registrada correctamente. Revisa tu correo.')
    } catch {
      onSuccess && onSuccess('Error al registrar la cita. Intenta más tarde.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section form-wrap">
      <div className="form-card" role="form" aria-labelledby="form-title">
        <h3 id="form-title">Reservar cita</h3>
        <p className="muted">Este formulario es opcional. El botón principal abre Google Forms.</p>

        <form onSubmit={handleSubmit} className="form-grid" noValidate>
          <label>
            <span className="label">DNI</span>
            <input name="dni" value={form.dni} onChange={handleChange} maxLength={8} inputMode="numeric" />
            {errors.dni && <small className="error">{errors.dni}</small>}
          </label>

          <label>
            <span className="label">Nombres y apellidos</span>
            <input name="nombres" value={form.nombres} onChange={handleChange} />
            {errors.nombres && <small className="error">{errors.nombres}</small>}
          </label>

          <label>
            <span className="label">Correo electrónico</span>
            <input name="correo" type="email" value={form.correo} onChange={handleChange} />
            {errors.correo && <small className="error">{errors.correo}</small>}
          </label>

          <label>
            <span className="label">Especialidad</span>
            <select name="especialidad" value={form.especialidad} onChange={handleChange}>
              {specialties.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </label>

          <label>
            <span className="label">Fecha</span>
            <input name="fecha" type="date" min={today} value={form.fecha} onChange={handleChange} />
            {errors.fecha && <small className="error">{errors.fecha}</small>}
          </label>

          <label>
            <span className="label">Hora</span>
            <input name="hora" type="time" value={form.hora} onChange={handleChange} />
            {errors.hora && <small className="error">{errors.hora}</small>}
          </label>

          <label className="full">
            <span className="label">Notas</span>
            <textarea name="notas" rows="3" value={form.notas} onChange={handleChange} placeholder="Síntomas o requerimientos"></textarea>
          </label>

          <div className="actions full">
            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Reservar cita'}
            </button>
            <button type="button" className="btn-ghost" onClick={() => setForm({ dni:'', nombres:'', correo:'', especialidad:specialties[0], fecha:'', hora:'', notas:'' })}>Limpiar</button>
          </div>
        </form>
      </div>
    </section>
  )
}

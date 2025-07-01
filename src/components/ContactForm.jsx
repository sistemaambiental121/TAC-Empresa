import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/ContactForm.css'

const SERVICE_ID = 'service_xw7wjmd'
const TEMPLATE_ID = 'template_l5b3yuf'
const PUBLIC_KEY = 'vwMK6WF_7rga74meO'

function ContactForm() {
  const form = useRef()
  const [status, setStatus] = useState('')

  useEffect(() => {
    emailjs.init(PUBLIC_KEY)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current)
      .then(() => {
        setStatus('Mensaje enviado correctamente 😊')
        form.current.reset()
      }, () => {
        setStatus('Hubo un problema. Intenta nuevamente.')
      })
  }

  return (
    <form ref={form} className="contact-form" onSubmit={sendEmail}>
      <label>Nombre</label>
      <input type="text" name="user_name" required />

      <label>Correo</label>
      <input type="email" name="user_email" required />

      <label>Asunto</label>
      <input type="text" name="subject" required />

      <label>Cuentanos sobre ti</label>
      <textarea name="message" rows="5" required />

      <button type="submit">Enviar</button>

      {status && <p className="status-message">{status}</p>}
    </form>
  )
}

export default ContactForm

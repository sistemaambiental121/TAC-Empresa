import React from 'react'
import '../styles/Horizon.css'
import mariposa from '../assets/servicios/mariposa.png'
import atencion from '../assets/Gabinete-Psicologico.png'
import ContactForm from '../components/ContactForm'

import pareja from '../assets/horizon/terapia-pareja.jpeg'
import ansiedad from '../assets/horizon/ansiedad.jpg'
import depresion from '../assets/horizon/depresion.jpg'
import adolescentes from '../assets/horizon/adolecentes.jpeg'
import autoestima from '../assets/horizon/autoestima.png'

function Horizon() {
  return (
    <div className="horizon-wrapper">
      <section className="horizon-hero">
        <div className="hero-content">
          <img src={mariposa} alt="Horizon~TE mariposa" className="hero-image-left" />
          <div>
            <h1>Gabinete Psicológico Horizon-TE</h1>
            <p>
              Apoyo terapéutico profesional con enfoque psicoanalítico y cognitivo-conductual, orientado al bienestar integral.
            </p>
          </div>
        </div>
      </section>

      <div className="horizon-body">
        <aside className="toc">
          <h3>Contenido</h3>
          <ul>
            <li><a href="#que-es">¿Qué es Horizon-TE?</a></li>
            <li><a href="#ubicacion">Ubicación y contacto</a></li>
            <li><a href="#servicios">Servicios que ofrecemos</a></li>
            <li><a href="#inspiracion">Inspiración que nos guía</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </aside>

        <section className="horizon-section content">
          <div id="que-es">
            <h2>¿Qué es Horizon~TE?</h2>
            <p>
              Es un espacio diseñado para brindar atención psicológica personalizada, tanto en modalidad presencial como en línea.
              Acompañamos procesos de desarrollo emocional, comprensión interna y fortalecimiento del yo.
            </p>
            <img src={atencion} alt="Atención psicológica" className="section-image" />
          </div>

         
          <div id="servicios">
            <h2>Servicios que ofrecemos</h2>
            <p>
              Trabajamos bajo dos enfoques complementarios: el psicoanalítico, que busca explorar lo inconsciente,
              y el cognitivo-conductual, que permite intervenir en patrones mentales y conductuales.
            </p>
            <p>
              Cada sesión tiene una duración de 45 minutos, adaptada a las necesidades individuales, familiares u organizacionales.
            </p>

            <div className="services-grid">
              <div className="service-card">
                <img src={pareja} alt="Terapia de pareja" />
                <h3>Terapia de Pareja</h3>
                <p>Resolución de conflictos, comunicación afectiva y reconstrucción del vínculo emocional.</p>
              </div>
              <div className="service-card">
                <img src={ansiedad} alt="Ansiedad" />
                <h3>Ansiedad y Estrés</h3>
                <p>Técnicas de relajación, gestión emocional y reestructuración cognitiva.</p>
              </div>
              <div className="service-card">
                <img src={depresion} alt="Depresión" />
                <h3>Depresión</h3>
                <p>Apoyo psicológico para fortalecer autoestima, motivación y manejo emocional.</p>
              </div>
              <div className="service-card">
                <img src={adolescentes} alt="Adolescentes" />
                <h3>Adolescentes</h3>
                <p>Apoyo en etapas de cambio, identidad, relaciones y gestión de emociones.</p>
              </div>
              <div className="service-card">
                <img src={autoestima} alt="Autoestima" />
                <h3>Autoestima y Crecimiento Personal</h3>
                <p>Desarrollo de confianza, autovaloración y habilidades emocionales.</p>
              </div>
              <div className="service-card">
                <img src={autoestima} alt="Autoestima" />
                <h3>Infantes</h3>
                <p>Estimulación emocional y social mediante juego terapéutico adaptado a la edad.</p>
              </div>
              <div className="service-card">
                <img src={autoestima} alt="Autoestima" />
                <h3>Colegios</h3>
                <p>Talleres de inteligencia emocional y prevención del bullying para estudiantes, familias y docentes.</p>
              </div>
              <div className="service-card">
                <img src={autoestima} alt="Autoestima" />
                <h3>Universidades</h3>
                <p>Orientación vocacional y apoyo emocional frente al estrés académico y la toma de decisiones.</p>
              </div>
            </div>
          </div>

          <div id="inspiracion">
            <h2>Inspiración que nos guía</h2>
            <blockquote>
              “Una palabra amable puede ser breve y fácil de decir, pero su eco es verdaderamente infinito.” — Sigmund Freud
            </blockquote>
          </div>
           <div id="ubicacion">
            <h2>Ubicación y contacto</h2>
            <ul>
              <li><strong>Edificio:</strong> Confort, Piso 6, Oficina 6E</li>
              <li><strong>Dirección:</strong> Av. Gualberto Villarroel y Pasaje Estrada</li>
              <li><strong>Ciudad:</strong> Cochabamba, Bolivia</li>
              <li><strong>WhatsApp:</strong> 727 - 14874</li>
              <li>
                <a 
                  href="https://www.google.com/maps/place/Edificio+Confort/@-17.379793,-66.1595135,156m" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Ver en Google Maps
                </a>
              </li>
            </ul>

            <iframe
              title="Mapa Edificio Confort"
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.8522379587114!2d-66.16173773938818!3d-17.37973560000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37411f88544bd%3A0x3b9e3b797e45810e!2sEdificio%20Confort!5e0!3m2!1ses-419!2sbo!4v1719426000000!5m2!1ses-419!2sbo"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div id="contacto">
            <h2>Contacto</h2>
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Horizon

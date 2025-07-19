import React, { useState } from 'react';
import '../styles/Horizon.css';
import mariposa from '../assets/servicios/mariposa.png';
import atencion from '../assets/Gabinete-Psicologico.png';
import ContactForm from '../components/ContactForm';
import pareja from '../assets/horizon/terapia-pareja.jpeg';
import ansiedad from '../assets/horizon/ansiedad.jpg';
import Colegio from '../assets/horizon/colegio.jpeg';
import Infantes from '../assets/horizon/infantes.png';
import Universidades from '../assets/horizon/universidad.jpeg';
import depresion from '../assets/horizon/depresion.jpg';
import adolescentes from '../assets/horizon/adolecentes.jpeg';
import autoestima from '../assets/horizon/autoestima.png';

// Imágenes para el carrusel de inspiración
import inspiration1 from '../assets/horizon/1.jpg';
import inspiration2 from '../assets/horizon/2.jpg';
import inspiration3 from '../assets/horizon/3.jpg';
import inspiration4 from '../assets/horizon/4.jpg';

function Horizon() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const inspirationImages = [
    { src: inspiration1, alt: "Inspiración 1", caption: "Crecimiento personal" },
    { src: inspiration2, alt: "Inspiración 2", caption: "Armonía interior" },
    { src: inspiration3, alt: "Inspiración 3", caption: "Bienestar emocional" },
    { src: inspiration4, alt: "Inspiración 4", caption: "Equilibrio mental" }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === inspirationImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? inspirationImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="horizon-wrapper">
      <section className="horizon-hero">
  <div className="hero-bg-pattern"></div>
  <div className="hero-content">
    <div className="logo-container">
      <img src={mariposa} alt="Horizon~TE mariposa" className="hero-image-left" />
      <div className="logo-circle"></div>
      <div className="logo-pulse"></div>
    </div>
    <div className="hero-text">
      <h1>
        <span className="hero-title-main">Gabinete Psicológico</span>
        <span className="hero-title-sub">Horizon-TE</span>
      </h1>
      <p className="hero-description">
        Apoyo terapéutico profesional con enfoque psicoanalítico y cognitivo-conductual, 
        orientado al bienestar integral.
      </p>
      <div className="hero-cta">
        <a href="#contacto" className="cta-button">Solicitar Consulta</a>
        <a href="#servicios" className="cta-button secondary">Nuestros Servicios</a>
      </div>
    </div>
  </div>
  <div className="hero-waves"></div>
</section>

      <div className="horizon-body">
        <aside className="toc">
          <div className="toc-header">
            <h3>Contenido</h3>
            <div className="toc-decoration"></div>
          </div>
          <ul>
            <li>
              <a href="#que-es" className="toc-link">
                <span className="toc-icon"></span>
                <span>¿Qué es Horizon-TE?</span>
              </a>
            </li>
            
            <li>
              <a href="#servicios" className="toc-link">
                <span className="toc-icon"></span>
                <span>Servicios que ofrecemos</span>
              </a>
            </li>
            <li>
              <a href="#inspiracion" className="toc-link">
                <span className="toc-icon"></span>
                <span>Inspiración que nos guía</span>
              </a>
            </li>
            <li>
              <a href="#ubicacion" className="toc-link">
                <span className="toc-icon"></span>
                <span>Ubicación y contacto</span>
              </a>
            </li>
            <li>
              <a href="#contacto" className="toc-link">
                <span className="toc-icon"></span>
                <span>Contacto</span>
              </a>
            </li>
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
            <p className="service-intro">
              Trabajamos bajo dos enfoques complementarios: el psicoanalítico, que busca explorar lo inconsciente,
              y el cognitivo-conductual, que permite intervenir en patrones mentales y conductuales.
            </p>
            <p className="service-intro">
              Cada sesión tiene una duración de 45 minutos, adaptada a las necesidades individuales, familiares u organizacionales.
            </p>

            <div className="services-grid">
              {[
                { img: pareja, title: "Terapia de Pareja", desc: "Resolución de conflictos, comunicación afectiva y reconstrucción del vínculo emocional.", testimonial: '"La terapia nos ayudó a recuperar la confianza y comunicación en nuestra relación."', author: "- Carlos y Ana M." },
                { img: ansiedad, title: "Ansiedad y Estrés", desc: "Técnicas de relajación, gestión emocional y reestructuración cognitiva.", testimonial: '"Aprendí herramientas prácticas para manejar mi ansiedad en situaciones difíciles."', author: "- Laura G." },
                { img: depresion, title: "Depresión", desc: "Apoyo psicológico para fortalecer autoestima, motivación y manejo emocional.", testimonial: '"El acompañamiento profesional me ayudó a ver la luz cuando todo parecía oscuro."', author: "- Roberto T." },
                { img: adolescentes, title: "Adolescentes", desc: "Apoyo en etapas de cambio, identidad, relaciones y gestión de emociones.", testimonial: '"Me entendieron cuando nadie más lo hacía. Ahora me siento más seguro de mí mismo."', author: "- Javier, 16 años" },
                { img: autoestima, title: "Autoestima y Crecimiento Personal", desc: "Desarrollo de confianza, autovaloración y habilidades emocionales.", testimonial: '"Aprendí a valorarme y establecer límites saludables en mis relaciones."', author: "- Sofía R." },
                { img: Infantes, title: "Infantes", desc: "Estimulación emocional y social mediante juego terapéutico adaptado a la edad.", testimonial: '"Mi hijo mejoró su comportamiento y comunicación gracias a las sesiones lúdicas."', author: "- Patricia, madre de Lucas" },
                { img: Colegio, title: "Colegios", desc: "Talleres de inteligencia emocional y prevención del bullying para estudiantes, familias y docentes.", testimonial: '"Los talleres transformaron el clima escolar. Los estudiantes ahora manejan mejor sus emociones."', author: "- Directora Colegio ABC" },
                { img: Universidades, title: "Universidades", desc: "Orientación vocacional y apoyo emocional frente al estrés académico y la toma de decisiones.", testimonial: '"La orientación vocacional me ayudó a elegir mi carrera con seguridad y conocimiento."', author: "- Daniela, estudiante" }
              ].map((service, index) => (
                <div className="service-card" key={index}>
                  <img src={service.img} alt={service.title} />
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <div className="testimonial">
                      <p className="testimonial-text">{service.testimonial}</p>
                      <p className="testimonial-author">{service.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="inspiracion" className="inspiration-section">
            <h2>Inspiración que nos guía</h2>
            <blockquote>
              “Una palabra amable puede ser breve y fácil de decir, pero su eco es verdaderamente infinito.” — Sigmund Freud
            </blockquote>
            <h2>Galeria de fotos</h2>
            <div className="inspiration-gallery">
              <div className="carousel-container">
                {inspirationImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image.src})` }}
                  >
                    <div className="slide-caption">
                      <p>{image.caption}</p>
                    </div>
                  </div>
                ))}
                <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
                <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
              </div>
              <div className="carousel-dots">
                {inspirationImages.map((_, index) => (
                  <span 
                    key={index}
                    className={`dot ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          <div id="ubicacion">
            <h2>Ubicación y contacto</h2>
            <ul className="location-info">
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
            <ContactForm 
  emailJSConfigs={[
    { // Cuenta de tacmente
      serviceID: 'service_51padbf',
      templateID: 'template_j81kgo5',
      publicKey: '2g-WnZ8whoiGaXM2Z'
    },
    { // Cuenta de oblis prueba colocar gabinete
      serviceID: 'service_xw7wjmd',
      templateID: 'template_l5b3yuf',
      publicKey: 'vwMK6WF_7rga74meO'
    }
  ]}
  initialData={{ subject: "Consulta desde página de inicio" }}
  customMessages={{
    intro: "¿Necesitas ayuda? Escríbenos",
    success: "✓ Mensaje recibido. Te contactaremos pronto.",
    error: "✗ Error. Por favor, contáctanos por teléfono."
  }}
/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Horizon;
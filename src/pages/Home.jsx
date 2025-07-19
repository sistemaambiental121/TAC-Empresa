import React, { useEffect,useState } from 'react';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import imgHorizon from '../assets/horizon-sin-fondo.png';
import imgkaypi from '../assets/kaypi.jpg';
import auto from '../assets/empresas/auto.jpg';
import ds from '../assets/empresas/DS.jpg';
import estacion from '../assets/empresas/Estacioncentral.jpg';
import fenix from '../assets/empresas/fenix.jpg';
import gusto from '../assets/empresas/gusto.jpg';
import plaza from '../assets/empresas/plaza.jpg';
import terce from '../assets/empresas/terceariza.jpg';
import thintank from '../assets/empresas/thinktank.jpg';
import tropical from '../assets/empresas/tropical.jpg';
import valky from '../assets/empresas/valky.jpg';
import img1 from '../assets/inspiration/1.jpg';
import img2 from '../assets/inspiration/2.jpg';
import img3 from '../assets/inspiration/3.jpg';
import img4 from '../assets/inspiration/4.jpg';
import img5 from '../assets/logo tac 2025 1.jpg';

function Home() {
   const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3, img4];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Cambiar slide manualmente
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  useEffect(() => {

    
    // Animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section, .service-card, .stat-item').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sección Hero */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Transformamos tu <span>Talento Humano</span></h1>
          <p className="hero-subtitle">Soluciones integrales en desarrollo organizacional y recursos humanos</p>
          <div className="hero-buttons">
            <a href="#servicios" className="hero-button primary-button">Nuestros Servicios</a>
            <a href="#contacto" className="hero-button secondary-button">Contáctanos</a>
          </div>
        </div>
        <div className="hero-pattern"></div>
      </section>

      {/* Sección Qué es TAC */}
      <section id="tac" className="section tac-container">
        <div className="tac-block">
          <div className="tac-image-container">
            <img src={img5} alt="TAC Logo" className="tac-image pulse-animation" />
          </div>
          <div className="tac-text">
            <h2>¿Qué es TAC?</h2>
            <p>
              <strong>TAC (Talento, Actitud y Conocimiento)</strong> significa es un grupo interdisciplinario que integra soluciones organizacionales y servicios clínicos bajo un enfoque holístico.
              Ofrecen una gama de servicios diseñados para ayudar a las empresas a gestionar su personal, mejorar las habilidades de los empleados y aumentar la eficacia organizacional general.
            </p>
            <p>
              <strong>En el ámbito empresarial</strong> significa es un grupo  Potenciamos el talento humano mediante consultoría, capacitación y gestión estratégica de equipos.
            </p>
            <p>
              <strong>En el área clínica(a través de Horizon-te)</strong> significa es un grupo Ofrecemos acompañamiento terapéutico personalizado para el bienestar emocional y mental.
            </p>
            
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon"></div>
                <h4>Gestión de personal</h4>
                <p>Optimizamos tus equipos de trabajo</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"></div>
                <h4>Mejora de habilidades</h4>
                <p>Capacitación especializada</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"></div>
                <h4>Eficacia organizacional</h4>
                <p>Maximiza tu potencial</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-section">
          <div className="tac-card">
            <div className="card-icon"></div>
            <h3>Misión</h3>
            <p>
              Impulsar el éxito empresarial y el bienestar laboral mediante soluciones integrales: selección de talento, capacitación estratégica, gestión de equipos y apoyo en salud emocional (a través de Horizonte).
            </p>
          </div>

          <div className="tac-card">
            <div className="card-icon"></div>
            <h3>Visión</h3>
            <p>
              Liderar la transformación del capital humano, siendo referentes en soluciones que unen excelencia organizacional y bienestar emocional, para crear entornos laborales productivos y humanos.
            </p>
          </div>

          <div className="tac-card">
            <div className="card-icon"></div>
            <h3>Filosofía</h3>
            <p>
              Creemos que el Talento, la Actitud positiva y el Conocimiento continuo junto al equilibrio emocional son pilares para construir organizaciones exitosas y personas realizadas.
            </p>
          </div>

          <div className="tac-card">
            <div className="card-icon"></div>
            <h3>Esencia</h3>
            <p>
              TAC nace de la convicción de que el crecimiento real surge al unir Talento, Actitud y Conocimiento. Somos el puente entre el potencial humano y los resultados organizacionales, cultivando desde habilidades técnicas hasta bienestar emocional (Horizon-te).
            </p>
          </div>
        </div>
        <div className="gallery-section">
          <h3 className="gallery-title">Nuestro Equipo en Acción</h3>
          <div className="gallery-carousel">
            <div 
              className="carousel-inner"
              style={{ transform: `translateX(-${currentSlide * 100}%` }}
            >
              {images.map((img, index) => (
                <div 
                  key={index} 
                  className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={img} alt={`Equipo TAC ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
            <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
          </div>
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <span 
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      
      </section>

      {/* Estadísticas */}
      <section className="section stats-section">
        <div className="stat-item">
          <div className="stat-number" data-count="100">34</div>
          <div className="stat-label">Clientes satisfechos</div>
        </div>
        <div className="stat-item">
          <div className="stat-number" data-count="500">40</div>
          <div className="stat-label">Personas capacitadas</div>
        </div>
        <div className="stat-item">
          <div className="stat-number" data-count="95">80</div>
          <div className="stat-label">% Satisfacción</div>
        </div>
        <div className="stat-item">
          <div className="stat-number" data-count="10">3</div>
          <div className="stat-label">Años de experiencia</div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="section servicios-tac">
        <h2>Nuestros Servicios</h2>
        <p className="section-subtitle">Soluciones personalizadas para tu organización</p>

        <div className="services-container">
          <div className="service-card">
            <div className="service-icon"></div>
            <h3>Diseño de Baterías de Selección</h3>
            <p><em>“¡Yo te elijo!”</em></p>
            <ul>
              <li><strong>Convocatoria:</strong> Apertura del puesto y llamado a postulantes.</li>
              <li><strong>Revisión de CV:</strong> Análisis y preselección de candidatos.</li>
              <li><strong>Pruebas Psicológicas:</strong> Evaluación de personalidad y competencias.</li>
              <li><strong>Entrevista:</strong> Conversación con los mejores perfiles.</li>
              <li><strong>Presentación:</strong> Inducción del seleccionado.</li>
              <li><strong>Seguimiento:</strong> Evaluación durante dos meses posteriores.</li>
            </ul>
            <div className="service-hover-content">
              <p>¡Encuentra al candidato perfecto para tu equipo!</p>
              <button className="service-button">Más información</button>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon"></div>
            <h3>Capacitación "Avanzar"</h3>
            <ul>
              <li><strong>Bioseguridad:</strong> Prevención ante riesgos biológicos.</li>
              <li><strong>Atención al Cliente:</strong> Estrategias de satisfacción.</li>
              <li><strong>Trabajo en Equipo:</strong> Cooperación hacia objetivos comunes.</li>
              <li><strong>Gestión de Emociones:</strong> Expresión adecuada y automotivación.</li>
            </ul>
            <p><strong>Evaluación:</strong> Facilitador (98%), Actividad (85%), Participantes (97%).</p>
            <div className="service-hover-content">
              <p>Potencia las habilidades de tu equipo.</p>
              <button className="service-button">Más información</button>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon"></div>
            <h3>Capacitación "¡Sí, Podemos!"</h3>
            <ul>
              <li><strong>Comunicación:</strong> Interacción a través de símbolos y mensajes.</li>
              <li><strong>Motivación:</strong> Impulso humano para alcanzar metas.</li>
              <li><strong>Autoestima:</strong> Valoración emocional positiva de uno mismo.</li>
            </ul>
            <p>El 90% de los participantes consideró útil la capacitación; el 2.5% reportó dificultades por horarios.</p>
            <div className="service-hover-content">
              <p>Motiva y desarrolla a tu personal.</p>
              <button className="service-button">Más información</button>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon"></div>
            <h3>Diseño Empresarial</h3>
            <ul>
              <li>Definir metas</li>
              <li>Trazar objetivos</li>
              <li>Establecer recursos</li>
              <li>Organizar actividades según plazos</li>
            </ul>
            <div className="service-hover-content">
              <p>Estructura tu empresa para el éxito.</p>
              <button className="service-button">Más información</button>
            </div>
          </div>
        </div>
      </section>
        <section id="servicios" className="section servicios-tac">
        <h2>Nuestro Gabinete Psicologico</h2>
        </section>
      

      
      <section className="section horizon-section">
        <div className="horizon-card">
          <div className="horizon-card-text">
            <h2>Nuestro Gabinete Psicológico</h2>
            <h3>Gabinete Psicológico Horizon-TE</h3>
            <p>
              Espacio terapéutico con enfoque psicoanalítico y cognitivo-conductual. 
              Atención personalizada, ética y profesional.
            </p>
            <div className="button-container">
              <Link to="/horizon" className="horizon-button">
                Conoce más <span className="button-icon">→</span>
              </Link>
            </div>
          </div>
          <div className="image-hover-effect">
            <img src={imgHorizon} alt="Gabinete Horizon" className="horizon-card-img" />
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section contact-section">
  <div className="contact-container">
    <div className="contact-info">
      <h2 className="section-title">¿Hablamos?</h2>
      <p className="contact-description">
        En <strong>T.A.C.</strong> estamos listos para ayudarte a transformar tu empresa 
        a través del desarrollo humano y emocional.
      </p>
      <p className="contact-subdescription">
        Escríbenos para agendar una reunión, consultar nuestros programas o diseñar 
        una solución a medida para tu organización.
      </p>
      
      <div className="contact-details">
        {/* WhatsApp */}
        <div className="contact-item">
          <div className="contact-icon-wrapper whatsapp">
            <svg className="contact-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
          <a href="https://wa.me/72714874" className="contact-link">
            727 - 14874
          </a>
        </div>
        
        {/* Email */}
        <div className="contact-item">
          <div className="contact-icon-wrapper email">
            <svg className="contact-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z" />
            </svg>
          </div>
          <a href="mailto:info@tac.com" className="contact-link">
            contacto@tacmente.com - gerencia@tacmente.com
          </a>
        </div>
        
        {/* Dirección */}
        <div className="contact-item">
          <div className="contact-icon-wrapper address">
            
            <svg className="contact-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
            </svg>
            
          </div><a href="https://www.google.com/maps/place/Edificio+Confort/@-17.3797356,-66.1618325,1043m/data=!3m2!1e3!4b1!4m6!3m5!1s0x93e37411f88544bd:0x3b9e3b797e45810e!8m2!3d-17.3797356!4d-66.1592576!16s%2Fg%2F1pty8mx9m?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="contact-link">
          <span className="contact-text">Edificio Confort, Cbba</span></a>
        </div>
        
        {/* Redes Sociales */}
        <div className="social-links">
          <a href="https://facebook.com/tupagina" className="social-link facebook" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 16.83 5.56 20.91 10.2 21.87V14.72H7.62V11.91H10.2V9.67C10.2 7.08 11.58 5.83 13.96 5.83C15.09 5.83 16.04 5.92 16.34 5.97V8.45H14.53C13.12 8.45 12.8 9.17 12.8 10.08V11.91H16.24L15.71 14.72H12.8V21.87C17.44 20.91 20.87 16.83 20.87 11.91C20.87 6.45 16.42 2 12.04 2Z" />
            </svg>
          </a>
          
          <a href="https://instagram.com/tupagina" className="social-link instagram" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" />
            </svg>
          </a>
          
          <a href="https://linkedin.com/company/tupagina" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <div className="contact-form-container">
      <ContactForm 
  emailJSConfigs={[
    { // Cuenta de tacmente
      serviceID: 'service_51padbf',
      templateID: 'template_j81kgo5',
      publicKey: '2g-WnZ8whoiGaXM2Z'
    },
    { // Cuenta de oblis prueba colocar contacto ver gmail
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
  </div>
</section>
            {/* Sección de Empresas que Confían en Nosotros */}
      <section className="section clients-section">
        <div className="clients-container">
          <h2>Empresas que Confían en Nosotros</h2>
          <p className="section-subtitle">Colaboramos con organizaciones líderes en diversos sectores</p>
          
          <div className="clients-grid">
            {/* Reemplaza estas imágenes con las de tus clientes */}
            <div className="client-logo-container">
              <img src={auto} alt="Logo Cliente 1" className="client-logo" />
              <div className="client-tooltip">Supermercado en linea</div>
            </div>
            <div className="client-logo-container">
              <img src={ds} alt="Logo Cliente 2" className="client-logo" />
              <div className="client-tooltip">Empresa de Delivery</div>
            </div>
            <div className="client-logo-container">
              <img src={estacion} alt="Logo Cliente 3" className="client-logo" />
              <div className="client-tooltip">Empresa de Comida</div>
            </div>
            <div className="client-logo-container">
              <img src={fenix} alt="Logo Cliente 4" className="client-logo" />
              <div className="client-tooltip">Empresa de Delivery</div>
            </div>
            <div className="client-logo-container">
              <img src={gusto} alt="Logo Cliente 5" className="client-logo" />
              <div className="client-tooltip">Empresa de Comida</div>
            </div>
            <div className="client-logo-container">
              <img src={plaza} alt="Logo Cliente 6" className="client-logo" />
              <div className="client-tooltip">Empresa de Delivery</div>
            </div>
            <div className="client-logo-container">
              <img src={terce} alt="Logo Cliente 7" className="client-logo" />
              <div className="client-tooltip">Empresa de Call Center</div>
            </div>
            <div className="client-logo-container">
              <img src={thintank} alt="Logo Cliente 8" className="client-logo" />
              <div className="client-tooltip">Empresa de infraestructura</div>
            </div>
            <div className="client-logo-container">
              <img src={tropical} alt="Logo Cliente 9" className="client-logo" />
              <div className="client-tooltip">Empresa de comida rapida</div>
            </div>
            <div className="client-logo-container">
              <img src={valky} alt="Logo Cliente 10" className="client-logo" />
              <div className="client-tooltip">Empresa de Delivery</div>
            </div>
            <div className="client-logo-container">
              <img src={imgkaypi} alt="Logo Cliente 10" className="client-logo" />
              <div className="client-tooltip">Empresa de Delivery</div>
            </div>
          </div>
          
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
                "TAC transformó completamente nuestro proceso de selección, reduciendo el tiempo de contratación en un 40%."
              </div>
              <div className="testimonial-author">
                <strong>Juan Pérez</strong>, Director de RRHH
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import imgTAC from '../assets/tac.logo.jpg';
import imgHorizon from '../assets/servicios/horizon-card.png';
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

function Home() {
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
            <img src={imgTAC} alt="TAC Logo" className="tac-image pulse-animation" />
          </div>
          <div className="tac-text">
            <h2><span className="highlight">¿Qué es TAC?</span></h2>
            <p>
              <strong>TAC</strong> significa <em>Talento, Actitud y Conocimiento</em>, y se dedica al desarrollo organizacional y recursos humanos.
              Ofrecen una gama de servicios diseñados para ayudar a las empresas a gestionar su personal, mejorar las habilidades de los empleados y aumentar la eficacia organizacional general.
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
              Proporcionar servicios integrales de RRHH enfocados en selección de talento, capacitación, apoyo psicológico y gestión empresarial,
              ayudando en última instancia a las empresas a alcanzar sus objetivos y fomentar una fuerza laboral motivada.
            </p>
          </div>

          <div className="tac-card">
            <div className="card-icon"></div>
            <h3>Visión</h3>
            <p>
              Ser un socio líder para las empresas en la optimización de su capital humano mediante soluciones innovadoras y efectivas en selección,
              capacitación y apoyo psicológico, creando un ambiente de trabajo positivo y productivo.
            </p>
          </div>

          <div className="tac-card">
            <div className="card-icon"></div>
            <h3>Filosofía</h3>
            <p>
              Creemos que el talento humano, una actitud positiva y la adquisición continua de conocimientos son claves para el éxito personal y organizacional.
            </p>
          </div>

          <div className="tac-card">
            <div className="card-icon"></div>
            <h3>Esencia y Origen</h3>
            <p>
              La esencia de TAC reside en su propio nombre: Talento, Actitud, Conocimiento. Esto refleja su enfoque en identificar y nutrir las aptitudes individuales,
              fomentar una mentalidad positiva y construir continuamente conocimiento dentro de las organizaciones.
            </p>
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
          <div className="stat-number" data-count="10">7</div>
          <div className="stat-label">Años de experiencia</div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="section servicios-tac">
        <h2>Nuestros <span className="highlight">Servicios</span></h2>
        <p className="section-subtitle">Soluciones personalizadas para tu organización</p>

        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">🔍</div>
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
            <div className="service-icon">📚</div>
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
            <div className="service-icon">💪</div>
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
            <div className="service-icon">🏢</div>
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

      {/* Kaypikani */}
      <section className="section horizon-highlight">
        <div className="horizon-card">
          <a href="https://www.kaypikani.com/" target="_blank" rel="noopener noreferrer" className="image-hover-effect">
            <img src={imgkaypi} alt="Gabinete Horizon" className="horizon-card-img" />
          </a>
          <div className="horizon-card-text">
            <h2>Kaypikani</h2>
            <p>
              Solución integral para manejar pedidos y deliveries de manera eficiente. Diseñado para restaurantes y negocios de todo tipo, nuestro sistema te ayuda a optimizar cada paso del proceso, asegurando un servicio rápido y confiable. Desde Cochabamba, estamos expandiéndonos para servir a todo Bolivia
            </p>
            <div className="button-container">
              <a href="https://www.kaypikani.com/" target="_blank" rel="noopener noreferrer" className="horizon-button pulse-on-hover">
                Conoce más <span className="button-icon">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gabinete Psicológico */}
      <section className="section horizon-highlight">
        <div className="horizon-card reverse">
          <div className="horizon-card-text">
            <h2>Gabinete Psicológico Horizon-TE</h2>
            <p>
              Espacio terapéutico con enfoque psicoanalítico y cognitivo-conductual. Atención personalizada, ética y profesional.
            </p>
            <div className="button-container">
              <Link to="/horizon" className="horizon-button pulse-on-hover">
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
            <h2>¿Hablamos?</h2>
            <p>En T.A.C. estamos listos para ayudarte a transformar tu empresa a través del desarrollo humano y emocional.</p>
            <p>Escríbenos para agendar una reunión, consultar nuestros programas o diseñar una solución a medida para tu organización.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span><strong>WhatsApp:</strong> 727 - 14874</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🏢</span>
                <span><strong>Dirección:</strong> Edificio Confort, Cbba</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span><strong>Email:</strong> info@tac.com</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">📘</a>
              <a href="#" className="social-icon" aria-label="Instagram">📷</a>
              <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          <div className="contact-form-container">
            <ContactForm />
          </div>
        </div>
      </section>
            {/* Sección de Empresas que Confían en Nosotros */}
      <section className="section clients-section">
        <div className="clients-container">
          <h2>Empresas que <span className="highlight">Confían en Nosotros</span></h2>
          <p className="section-subtitle">Colaboramos con organizaciones líderes en diversos sectores</p>
          
          <div className="clients-grid">
            {/* Reemplaza estas imágenes con las de tus clientes */}
            <div className="client-logo-container">
              <img src={auto} alt="Logo Cliente 1" className="client-logo" />
              <div className="client-tooltip">Empresa líder en retail</div>
            </div>
            <div className="client-logo-container">
              <img src={ds} alt="Logo Cliente 2" className="client-logo" />
              <div className="client-tooltip">Cadena de restaurantes</div>
            </div>
            <div className="client-logo-container">
              <img src={estacion} alt="Logo Cliente 3" className="client-logo" />
              <div className="client-tooltip">Empresa tecnológica</div>
            </div>
            <div className="client-logo-container">
              <img src={fenix} alt="Logo Cliente 4" className="client-logo" />
              <div className="client-tooltip">Institución educativa</div>
            </div>
            <div className="client-logo-container">
              <img src={gusto} alt="Logo Cliente 5" className="client-logo" />
              <div className="client-tooltip">Cadena hotelera</div>
            </div>
            <div className="client-logo-container">
              <img src={plaza} alt="Logo Cliente 6" className="client-logo" />
              <div className="client-tooltip">Empresa manufacturera</div>
            </div>
            <div className="client-logo-container">
              <img src={terce} alt="Logo Cliente 7" className="client-logo" />
              <div className="client-tooltip">Empresa manufacturera</div>
            </div>
            <div className="client-logo-container">
              <img src={thintank} alt="Logo Cliente 8" className="client-logo" />
              <div className="client-tooltip">Empresa manufacturera</div>
            </div>
            <div className="client-logo-container">
              <img src={tropical} alt="Logo Cliente 9" className="client-logo" />
              <div className="client-tooltip">Empresa manufacturera</div>
            </div>
            <div className="client-logo-container">
              <img src={valky} alt="Logo Cliente 10" className="client-logo" />
              <div className="client-tooltip">Empresa manufacturera</div>
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
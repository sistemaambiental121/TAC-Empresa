import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import tacLogo from '../assets/servicios/sinfondo.png';

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" onClick={() => setActiveLink('/')}>
            <img src={tacLogo} alt="Logo TAC" className="tac-logo" />
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={activeLink === '/' ? 'active' : ''}
                onClick={() => setActiveLink('/')}
              >
                <span className="link-content">Inicio</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/horizon" 
                className={activeLink === '/horizon' ? 'active' : ''}
                onClick={() => setActiveLink('/horizon')}
              >
                <span className="link-content">Horizon-TE</span>
              </Link>
            </li>
            <li>
              {location.pathname === '/horizon' ? (
                <a 
                  href="#contacto" 
                  className={activeLink === '#contacto' ? 'active' : ''}
                  onClick={() => setActiveLink('#contacto')}
                >
                  <span className="link-content">Contacto</span>
                </a>
              ) : (
                <a 
                  href="/#contacto" 
                  className={activeLink === '#contacto' ? 'active' : ''}
                  onClick={() => setActiveLink('#contacto')}
                >
                  <span className="link-content">Contacto</span>
                </a>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
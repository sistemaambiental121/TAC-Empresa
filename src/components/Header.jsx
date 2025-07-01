import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Header.css'
import tacLogo from '../assets/logo.png'

function Header() {
  const location = useLocation()

  return (
    <header className="site-header">
      <div className="logo-container">
        <Link to="/">
          <img src={tacLogo} alt="Logo TAC" className="tac-logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/horizon">Horizon-TE</Link></li>
          <li>
            {location.pathname === '/horizon' ? (
              <a href="#contacto">Contacto</a>
            ) : (
              <a href="/#contacto">Contacto</a>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

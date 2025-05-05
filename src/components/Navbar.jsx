import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          Luis Andrés Roblero González
        </NavLink>
        <ul className="navbar-menu">
          <li><NavLink to="/" activeClassName="active">Inicio</NavLink></li>
          <li><NavLink to="/sobre-mi" activeClassName="active">Sobre Mí</NavLink></li>
          <li><NavLink to="/certificaciones" activeClassName="active">Certificaciones</NavLink></li>
          <li><NavLink to="/proyectos" activeClassName="active">Proyectos</NavLink></li>
          <li><NavLink to="/contacto" activeClassName="active">Contacto</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
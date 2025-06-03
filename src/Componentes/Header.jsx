import React from 'react';
import { Link } from 'react-router-dom';
import casaIcon from '../Imagens/casa.png';
import logo from '../Imagens/logo.png';
import './Header.css';

function Header() {
  return (
    <header>
      <Link to="/" className="icon-link" title="Início">
        <img src={casaIcon} alt="Início" className="casa-icon" />
      </Link>
      <Link to="/sobre_nos">
        <img src={logo} className="logo" alt="Logo" />
      </Link>
    </header>
  );
}

export default Header;

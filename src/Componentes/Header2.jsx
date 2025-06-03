import React from "react";
import { Link } from "react-router-dom";  // importa Link para navegação SPA
import './Header2.css';

export default function Header() {
  return (
    <header className="topo-site">
      <div className="overlay"></div>
      <nav className="menu-navegacao">
        <Link to="/">Início</Link>
        <Link to="/carrinho">Carrinho</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/conta_cliente">Conta Cliente</Link>
        <Link to="/recomendacoes">Recomendações</Link>
      </nav>
    </header>
  );
}

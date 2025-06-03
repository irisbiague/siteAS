import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Componentes/Header';
import logo from './Imagens/logo.png';

const LoginProfissional = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e, tipo) => {
    e.preventDefault();
    // Validação ou autenticação (mock)
    if (email && password) {
      if (tipo === 'estafeta') {
        navigate('/ContaEstafeta');
      } else if (tipo === 'restaurante') {
        navigate('/ContaRestaurante');
      }
    }
  };

  return (
    <>
      <Header />
      <div className="background">
        <div className="container">
          <img src={logo} alt="MyNutriChoice" className="logo-img" />
          <div className="logo-text">MyNutriChoice</div>
          <div className="slogan">Sabor que nutre, escolhas que cuidam</div>

          <form className="buttons">
            <input
              type="email"
              placeholder="Email"
              className="btn profissional"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="btn profissional"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="btn profissional"
              onClick={(e) => handleLogin(e, 'estafeta')}
            >
              Entrar como Estafeta
            </button>
            <button
              type="submit"
              className="btn"
              onClick={(e) => handleLogin(e, 'restaurante')}
            >
              Entrar como Restaurante
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginProfissional;

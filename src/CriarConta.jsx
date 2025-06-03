import React, { useState } from 'react';
import Header from './Componentes/Header';
import { useNavigate } from 'react-router-dom';
import logo from './Imagens/logo.png';

const CriarConta = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telemovel, setTelemovel] = useState('');
  const [morada, setMorada] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dadosCliente = {
      nome,
      email,
      password,
      telemovel,
      morada
    };
    localStorage.setItem('dadosCliente', JSON.stringify(dadosCliente));
    navigate('/tipoDieta');
  };

  return (
    <>
      <Header />
      <div className="background">
        <div className="container">
          <img src={logo} alt="MyNutriChoice" className="logo-img" />
          <div className="logo-text">MyNutriChoice</div>
          <div className="slogan">Sabor que nutre, escolhas que cuidam</div>

          <form onSubmit={handleSubmit} className="buttons">
            <input
              type="text"
              placeholder="Nome"
              className="btn profissional"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
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
            <input
              type="tel"
              placeholder="nº telemóvel"
              className="btn profissional"
              value={telemovel}
              onChange={(e) => setTelemovel(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Morada"
              className="btn profissional"
              value={morada}
              onChange={(e) => setMorada(e.target.value)}
              required
            />

            <button type="submit" className="btn">Continuar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CriarConta;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate
import Header from './Componentes/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Inicializa o navigate

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // Aqui fazes a navegação para a página de recomendações
    navigate('/recomendacoes');  // Caminho para o componente Recomendacoes.jsx
  };

  return (
    <>
      <Header />
      <div className="background">  {/* Fundo + centralização */}
        <div className="container"> {/* Formulário com fundo semi-transparente */}
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="buttons">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
                className="btn profissional"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="btn profissional"
              />
              <button className="btn" type="submit">
                Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CriarConta from './CriarConta';
import TipoDieta from './TipoDieta';
import Preferencias from './Preferencias';
import LogIn from './LogIn';
import Recomendacoes from './Recomendacoes';
import ContaCliente from './ContaCliente';  // Importa o componente ContaCliente
import LoginProfissional from './LogInProfissional';
import ContaEstafeta from './ContaEstafeta';  // Importa o componente ContaCliente
import ContaRestaurante from './ContaRestaurante';  // Importa o componente ContaCliente
import Carrinho from './Carrinho';  // Importa o componente ContaCliente
import LasanhaVeg from './LasanhaVeg';
import SaladaCaprese from './SaladaCaprese';
import Quinoa from './Quinoa';
import FrangoGrelhado from './FrangoGrelhado';
import Falafel from './Falafel';
import Salmao from './Salmao';
import Sopa from './Sopa';
import Tofu from './Tofu';
import Wrap from './Wrap';
import AboutUs from './AboutUs';
import Avaliacao from './Avaliacao';
import BomSabor from './BomSabor';
import GreenCity from './GreenCity';
import Brownie from './Brownie';
import HumusCenoura from './HumusCenoura';
import PannaCotta from './PannaCotta';
import CroquetesEspinafre from './CroquetesEspinafre';
import BarraGranola from './BarraGranola';





import logo from './Imagens/logo.png';
import fundo from './Imagens/fundo.png';

const Home = () => (
  <div className="background">
    <div className="container">
      <img src={logo} alt="MyNutriChoice" className="logo-img" />
      <div className="logo-text">MyNutriChoice</div>
      <div className="slogan">Sabor que nutre, escolhas que cuidam</div>
      <div className="buttons">
        <Link to="/LogIn" className="btn">Login</Link>
        <Link to="/CriarConta" className="btn">Criar Conta</Link>
        <Link to="/LoginProf" className="btn profissional">Profissional</Link>
        
      </div>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CriarConta" element={<CriarConta />} />
      <Route path="/TipoDieta" element={<TipoDieta />} />
      <Route path="/Preferencias" element={<Preferencias />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/Recomendacoes" element={<Recomendacoes />} />
      <Route path="/conta_cliente" element={<ContaCliente />} /> {/* ROTA PARA CONTA CLIENTE */}
      <Route path="/LoginProf" element={<LoginProfissional />} />
      <Route path="/ContaEstafeta" element={<ContaEstafeta />} /> {/* ROTA PARA CONTA CLIENTE */}
      <Route path="/ContaRestaurante" element={<ContaRestaurante />} /> {/* ROTA PARA CONTA CLIENTE */}
      <Route path="/Carrinho" element={<Carrinho />} /> {/* ROTA PARA CONTA CLIENTE */}
      <Route path="/LasanhaVeg" element={<LasanhaVeg />} /> {/* ROTA PARA A LASANHA VEG */}
      <Route path="/Quinoa" element={<Quinoa />} /> {/* ROTA PARA A Quinoa */}
      <Route path="/SaladaCaprese" element={<SaladaCaprese />} /> {/* ROTA PARA A Salada Caprese */}
      <Route path="/FrangoGrelhado" element={<FrangoGrelhado />} /> {/* ROTA PARA A FrangoGrelhado */}
      <Route path="/Falafel" element={<Falafel />} /> {/* ROTA PARA O FALAFEL */}
      <Route path="/Sopa" element={<Sopa />} /> {/* ROTA PARA A Sopa */}
      <Route path="/Salmao" element={<Salmao />} /> {/* ROTA PARA A Sopa */}
      <Route path="/Tofu" element={<Tofu />} /> {/* ROTA PARA A Tofu */}
      <Route path="/Wrap" element={<Wrap />} /> {/* ROTA PARA A Wrap */}
      <Route path="/AboutUs" element={<AboutUs />} /> {/* ROTA PARA A Wrap */}
      <Route path="/Avaliacao" element={<Avaliacao />} /> {/* ROTA PARA A Wrap */}
      <Route path="/BomSabor" element={<BomSabor />} /> {/* ROTA PARA A Wrap */}
      <Route path="/GreenCity" element={<GreenCity />} /> {/* ROTA PARA A Wrap */}
      <Route path="/Brownie" element={<Brownie />} />
      <Route path="/HumusCenoura" element={<HumusCenoura />} />
      <Route path="/PannaCotta" element={<PannaCotta />} />
      <Route path="/CroquetesEspinafre" element={<CroquetesEspinafre />} />
      <Route path="/BarraGranola" element={<BarraGranola />} />





    </Routes>
  </Router>
);

export default App;

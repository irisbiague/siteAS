import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Componentes/Header';

const Preferencias = () => {
  const [calorias, setCalorias] = useState('');
  const [alergias, setAlergias] = useState('');
  const [subscricao, setSubscricao] = useState('');
  const navigate = useNavigate();

  const finalizar = (e) => {
    e.preventDefault();

    if (!alergias.trim()) {
      alert('Por favor, indique se tem alergias alimentares (escreva "nenhuma" se não tiver).');
      return;
    }

    // Obtem as preferencias existentes (sem apagar nome, dieta, etc.)
    const preferenciasAntigas = JSON.parse(localStorage.getItem('preferenciasNutricionais')) || {};

    // Atualiza apenas os novos campos
    const novasPreferencias = {
      ...preferenciasAntigas,
      calorias,
      alergias,
      subscricao
    };

    // Guarda tudo em 'preferenciasNutricionais'
    localStorage.setItem('preferenciasNutricionais', JSON.stringify(novasPreferencias));

    // Subscreve plano?
    if (subscricao === 'sim') {
      const todasRefeicoes = [
        { nome: 'Salada Mediterrânea', preco: 6.5, tipoDieta: 'mediterrânea' },
        { nome: 'Tofu com Legumes', preco: 7.0, tipoDieta: 'vegana' },
        { nome: 'Massa Integral com Legumes', preco: 6.8, tipoDieta: 'vegetariana' },
        { nome: 'Frango Grelhado com Salada', preco: 7.2, tipoDieta: 'cetogênica' },
        { nome: 'Quinoa com Vegetais', preco: 6.9, tipoDieta: 'vegana' },
        { nome: 'Omelete com Espinafre', preco: 6.4, tipoDieta: 'vegetariana' },
        { nome: 'Sopa de Legumes', preco: 5.5, tipoDieta: 'mediterrânea' },
        { nome: 'Tábua de Falafel com Húmus', preco: 6.9, tipoDieta: 'mediterrânea' },
        { nome: 'Lasanha Vegetariana', preco: 7.9, tipoDieta: 'vegetariana' },
        { nome: 'Quinoa Bowl', preco: 7.2, tipoDieta: 'vegana' },
        { nome: 'Salada Caprese', preco: 5.49, tipoDieta: 'vegetariana' },
        { nome: 'Sopa do Dia', preco: 3.9, tipoDieta: 'mediterrânea' },
        { nome: 'Tofu Teriyaki', preco: 6.8, tipoDieta: 'vegana' },
        { nome: 'Wrap Vegetariano', preco: 6.2, tipoDieta: 'vegetariana' },
        { nome: 'Brownie de Batata Doce', preco: 3.7, tipoDieta: 'vegana' },
        { nome: 'Húmus com Palitos de Cenoura', preco: 2.9, tipoDieta: 'vegana' },
        { nome: 'Panna Cotta de Coco', preco: 4.1, tipoDieta: 'vegana' },
        { nome: 'Croquetes de Espinafre', preco: 4.0, tipoDieta: 'vegetariana' },
        { nome: 'Barra de Granola Caseira', preco: 2.5, tipoDieta: 'vegetariana' }
      ];

      const selecionadas = todasRefeicoes.slice(0, 7);
      localStorage.setItem('carrinho', JSON.stringify(selecionadas));
    }

    navigate('/Recomendacoes');
  };

  return (
    <>
      <Header />
      <div className="background">
        <div className="container">
          <h1>Preferências Nutricionais</h1>
          <form onSubmit={finalizar}>
            <div className="buttons">
              <input
                type="text"
                placeholder="Calorias por refeição"
                value={calorias}
                onChange={(e) => setCalorias(e.target.value)}
                className="btn profissional"
                required
              />

              <textarea
                placeholder='Liste as alergias alimentares (escreva "nenhuma" se não tiver)'
                value={alergias}
                onChange={(e) => setAlergias(e.target.value)}
                className="btn profissional"
                required
                style={{ height: '100px', resize: 'vertical' }}
              />

              <label className="checkbox-label">
                <div className="slogan">Subscrever plano semanal?</div>
                <input
                  type="checkbox"
                  checked={subscricao === 'sim'}
                  onChange={(e) => setSubscricao(e.target.checked ? 'sim' : 'nao')}
                />
              </label>

              <button className="btn" type="submit">Finalizar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Preferencias;

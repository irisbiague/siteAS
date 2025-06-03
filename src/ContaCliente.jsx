import React, { useState, useEffect } from 'react';
import Header2 from './Componentes/Header2';
import perfil from './Imagens/perfil.png';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ContaCliente = () => {
  const [dadosCliente, setDadosCliente] = useState({});
  const [preferencias, setPreferencias] = useState({});
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem('dadosCliente')) || {};
    const prefs = JSON.parse(localStorage.getItem('preferenciasNutricionais')) || {};
    let hist = JSON.parse(localStorage.getItem('historicoPedidos'));

    if (!hist || hist.length === 0) {
      hist = [
        { nome: 'Salada de Quinoa', calorias: 450 },
        { nome: 'Frango Grelhado com Legumes', calorias: 620 },
        { nome: 'Tofu ao Curry', calorias: 510 },
        { nome: 'Sopa de Lentilhas', calorias: 390 },
        { nome: 'Wrap Vegano', calorias: 470 },
      ];
      localStorage.setItem('historicoPedidos', JSON.stringify(hist));
    }

    setDadosCliente(dados);
    setPreferencias(prefs);
    setHistorico(hist);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosCliente(prev => ({ ...prev, [name]: value }));
  };

  const handlePrefsChange = (e) => {
    const { name, value } = e.target;
    setPreferencias(prev => ({ ...prev, [name]: value }));
  };

  const gerarRefeicoesComBaseNasPreferencias = () => {
    const todasRefeicoes = [
      { nome: 'Salada Mediterrânea', calorias: 450, ingredientes: ['alface', 'tomate', 'azeitonas'], preco: 7.5 },
      { nome: 'Tofu Grelhado', calorias: 500, ingredientes: ['tofu', 'abobrinha'], preco: 8.0 },
      { nome: 'Sopa de Legumes', calorias: 380, ingredientes: ['cenoura', 'batata'], preco: 6.0 },
      { nome: 'Wrap Vegetariano', calorias: 470, ingredientes: ['tortilha', 'vegetais'], preco: 7.0 },
      { nome: 'Couscous com Grão', calorias: 490, ingredientes: ['couscous', 'grão-de-bico'], preco: 7.8 },
      { nome: 'Esparguete Integral', calorias: 520, ingredientes: ['massa integral', 'molho tomate'], preco: 8.2 },
      { nome: 'Caril de Lentilhas', calorias: 510, ingredientes: ['lentilhas', 'especiarias'], preco: 7.9 },
      { nome: 'Salada de Atum', calorias: 430, ingredientes: ['atum', 'milho', 'alface'], preco: 7.3 },
    ];

    let filtradas = todasRefeicoes;

    if (preferencias.tipoDieta) {
      filtradas = filtradas.filter(r =>
        preferencias.tipoDieta === 'vegetariana' ? !r.ingredientes.includes('atum') :
        preferencias.tipoDieta === 'vegana' ? !r.ingredientes.includes('atum') && !r.ingredientes.includes('tofu') :
        true
      );
    }

    if (preferencias.calorias) {
      filtradas = filtradas.filter(r => r.calorias <= Number(preferencias.calorias));
    }

    const refeicoesSelecionadas = filtradas.slice(0, 7);
    while (refeicoesSelecionadas.length < 7 && filtradas.length > 0) {
      const random = filtradas[Math.floor(Math.random() * filtradas.length)];
      refeicoesSelecionadas.push(random);
    }

    return refeicoesSelecionadas.map(r => ({
      ...r,
      origem: 'plano'
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('dadosCliente', JSON.stringify(dadosCliente));
    localStorage.setItem('preferenciasNutricionais', JSON.stringify(preferencias));

    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (preferencias.subscricao === 'sim') {
      const refeicoesPlano = gerarRefeicoesComBaseNasPreferencias();
      const carrinhoSemPlano = carrinhoAtual.filter(r => r.origem !== 'plano');
      const novoCarrinho = [...carrinhoSemPlano, ...refeicoesPlano];
      localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    } else {
      const carrinhoSemPlano = carrinhoAtual.filter(r => r.origem !== 'plano');
      localStorage.setItem('carrinho', JSON.stringify(carrinhoSemPlano));
    }

    alert('Alterações guardadas com sucesso!');
  };

  const dadosCalorias = historico.map((pedido, index) => ({
    dia: `Pedido ${index + 1}`,
    calorias: pedido.calorias || 0,
  }));

  return (
    <>
      <Header2 />
      <div className="background">
        <div className="container_prof">
          <img src={perfil} alt="Perfil" className="logo-img" />
          <div className="logo-text">A minha conta</div>

          <form onSubmit={handleSave} className="buttons">
            <h3>Alterar Dados Pessoais</h3>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              className="btn profissional"
              value={dadosCliente.nome || ''}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="btn profissional"
              value={dadosCliente.email || ''}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="telemovel"
              placeholder="nº telemóvel"
              className="btn profissional"
              value={dadosCliente.telemovel || ''}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="morada"
              placeholder="Morada"
              className="btn profissional"
              value={dadosCliente.morada || ''}
              onChange={handleChange}
              required
            />

            <h3>Alterar Preferências Nutricionais</h3>
            <input
              type="number"
              name="calorias"
              placeholder="Calorias por refeição"
              className="btn profissional"
              value={preferencias.calorias || ''}
              onChange={handlePrefsChange}
              min="0"
            />
            <input
              type="text"
              name="alergias"
              placeholder="Alergias (separadas por vírgula)"
              className="btn profissional"
              value={preferencias.alergias || ''}
              onChange={handlePrefsChange}
            />
            <select
              name="tipoDieta"
              className="btn profissional"
              value={preferencias.tipoDieta || ''}
              onChange={handlePrefsChange}
            >
              <option value="">Seleciona o tipo de dieta</option>
              <option value="vegetariana">Vegetariana</option>
              <option value="vegana">Vegana</option>
              <option value="mediterrânea">Mediterrânea</option>
              <option value="cetogênica">Cetogênica</option>
              <option value="detox">Low-Carb</option>
              <option value="low-carb">Detox</option>

            </select>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="subscricao"
                checked={preferencias.subscricao === 'sim'}
                onChange={(e) =>
                  setPreferencias(prev => ({
                    ...prev,
                    subscricao: e.target.checked ? 'sim' : 'nao'
                  }))
                }
              />
              <div className="slogan">Subscrever plano semanal?</div>
            </label>

            <button type="submit" className="btn">Guardar Alterações</button>
          </form>

          <div className="historico">
            <h3>Histórico de Pedidos</h3>
            {historico.length === 0 ? (
              <p>Nenhum pedido realizado ainda.</p>
            ) : (
              <ul>
                {historico.map((pedido, index) => (
                  <li key={index}>{pedido.nome} - {pedido.calorias} kcal</li>
                ))}
              </ul>
            )}
          </div>

          <div className="grafico">
            <h3>Calorias Ingeridas</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dadosCalorias}>
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="calorias" fill="#000000" />
              </BarChart>
            </ResponsiveContainer>

            <div className="btn-group" style={{ marginTop: "20px", textAlign: "center" }}>
              <button className="btn" onClick={() => alert("As calorias que ingeriu hoje vão ser exportadas para a sua conta de apple health.")}>
                Export de dados calóricos
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContaCliente;

import React, { useEffect, useRef, useState } from 'react';
import Header from './Componentes/Header';
import { Chart } from 'chart.js/auto';
import logo from './Imagens/logo.png';
import restauranteFoto from './Imagens/restaurante.jpg';

const ContaRestaurante = () => {
  const chartRef = useRef(null);
  const pratosChartRef = useRef(null);

  const [pedidos, setPedidos] = useState([
    { id: 1, cliente: 'Joana Oliveira', refeicao: 'Frango Grelhado com Legumes', estado: 'Pendente' },
    { id: 2, cliente: 'Carlos Tavares', refeicao: 'Sopa do Dia', estado: 'A preparar' },
    { id: 3, cliente: 'Ana Mendes', refeicao: 'Salmão ao Molho de Limão', estado: 'Pendente' },
    { id: 4, cliente: 'Bruno Costa', refeicao: 'Sopa do Dia', estado: 'Pronto' },
    { id: 5, cliente: 'Mariana Silva', refeicao: 'Frango Grelhado com Legumes', estado: 'Pendente' }
  ]);

  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    const dados = localStorage.getItem('pratosRestaurante');
    if (dados) {
      setPratos(JSON.parse(dados));
    } else {
      reporPratosExemplo();
    }

    if (!chartRef.current || !pratosChartRef.current) return;

    // === Gráfico: Pedidos por Dia da Semana ===
    const ctxSemana = chartRef.current.getContext('2d');
    const graficoSemanal = new Chart(ctxSemana, {
      type: 'bar',
      data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [{
          label: 'Pedidos por dia',
          data: [12, 9, 14, 11, 15, 8, 5],
          backgroundColor: '#000',
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: '#000' } },
          tooltip: {
            backgroundColor: '#000',
            titleColor: '#fff',
            bodyColor: '#fff',
            callbacks: {
              label: context => `${context.parsed.y} pedidos`
            }
          }
        },
        scales: {
          x: { ticks: { color: '#000' }, grid: { color: '#00000033' } },
          y: {
            beginAtZero: true,
            ticks: { color: '#000' },
            grid: { color: '#00000033' },
            title: { display: true, text: 'Pedidos', color: '#000' }
          }
        }
      }
    });

    // === Gráfico: Pedidos por Prato ===
    const ctxPratos = pratosChartRef.current.getContext('2d');
    const contagem = {};
    pedidos.forEach(p => {
      contagem[p.refeicao] = (contagem[p.refeicao] || 0) + 1;
    });

    const graficoPratos = new Chart(ctxPratos, {
      type: 'bar',
      data: {
        labels: Object.keys(contagem),
        datasets: [{
          label: 'Pedidos por Prato',
          data: Object.values(contagem),
          backgroundColor: ['rgba(24, 160, 65, 0.97)', 'rgb(2, 86, 27)', 'rgb(190, 255, 210)', '#4bc0c0'],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: '#000' } },
          tooltip: {
            backgroundColor: '#000',
            titleColor: '#fff',
            bodyColor: '#fff',
            callbacks: {
              label: context => `${context.parsed.y} pedidos`
            }
          }
        },
        scales: {
          x: { ticks: { color: '#000' }, grid: { color: '#00000033' } },
          y: {
            beginAtZero: true,
            ticks: { color: '#000' },
            grid: { color: '#00000033' },
            title: { display: true, text: 'Nº de Pedidos', color: '#000' }
          }
        }
      }
    });

    return () => {
      graficoSemanal.destroy();
      graficoPratos.destroy();
    };
  }, [pedidos]);

  

  const reporPratosExemplo = () => {
    const pratosIniciais = [
      {
        id: 1,
        nome: "Frango Grelhado com Legumes",
        descricao: "Peito de frango marinado e grelhado, acompanhado por legumes da estação salteados.",
        preco: 9,
        calorias: 430,
        categoria: "Prato principal",
        imagem: "frango.jpg",
        alergiasPossiveis: [],
        subscricoesCompativeis: ["mediterrânea", "sem-glúten", "low-carb"],
        link: "/FrangoGrelhado",
        visivel: true,
      },
      {
        id: 2,
        nome: "Salmão ao Molho de Limão",
        descricao: "Filete de salmão grelhado com arroz integral e espargos.",
        preco: 9.2,
        calorias: 510,
        categoria: "Prato principal",
        imagem: "salmao.jpg",
        alergiasPossiveis: ["peixe"],
        subscricoesCompativeis: ["mediterrânea", "sem-glúten", "low-carb"],
        link: "/Salmao",
        visivel: true,
      },
      {
        id: 3,
        nome: "Sopa do Dia",
        descricao: "Sopa feita com legumes frescos. Pode variar entre creme de legumes, caldo verde ou cenoura.",
        preco: 3.9,
        calorias: 120,
        categoria: "Entrada",
        imagem: "sopa.jpg",
        alergiasPossiveis: [],
        subscricoesCompativeis: ["vegana", "vegetariana", "mediterrânea", "sem-glúten"],
        link: "/Sopa",
        visivel: true,
      }
    ];
    setPratos(pratosIniciais);
    localStorage.setItem('pratosRestaurante', JSON.stringify(pratosIniciais));
    alert("Pratos de exemplo repostos com sucesso!");
  };

  const marcarComoPronto = (id) => {
    setPedidos(prev =>
      prev.map(p => p.id === id ? { ...p, estado: 'Pronto' } : p)
    );
  };

  const atualizarPrato = (id, campo, valor) => {
    setPratos(prev =>
      prev.map(p => p.id === id ? { ...p, [campo]: valor } : p)
    );
  };

  const guardarAlteracoes = () => {
    const pratosValidos = pratos.filter(p =>
      p.nome && p.descricao && p.preco && p.calorias && p.imagem && p.link
    );
    localStorage.setItem('pratosRestaurante', JSON.stringify(pratosValidos));
    alert('Alterações guardadas com sucesso!');
  };

  return (
    <>
      <Header />
      <div className="background">
        <div className="container_prof">
          <img src={logo} alt="MyNutriChoice" className="logo-img" />
          <div className="logo-text">MyNutriChoice</div>
          <div className="slogan">Sabor que nutre, escolhas que cuidam</div>

          <img src={restauranteFoto} alt="Foto do Restaurante" className="profile-img" />
          <h1>Bem-vindo, Bom Sabor</h1>

          <div className="section-title">Pedidos Recebidos</div>
          {pedidos.map(p => (
            <div key={p.id} className="pedido-container">
              <p><strong>Cliente:</strong> {p.cliente}</p>
              <p><strong>Refeição:</strong> {p.refeicao}</p>
              <p><strong>Estado:</strong> {p.estado}</p>
              {p.estado !== 'Pronto' && (
                <button className="btn" onClick={() => marcarComoPronto(p.id)}>Marcar como pronto</button>
              )}
            </div>
          ))}

          <div className="section-title">Editar Pratos</div>
          {pratos.map(prato => (
            <div key={prato.id} className="prato-container">
              <label>Nome: <input value={prato.nome} onChange={e => atualizarPrato(prato.id, 'nome', e.target.value)} /></label>
              <label>Descrição: <input value={prato.descricao} onChange={e => atualizarPrato(prato.id, 'descricao', e.target.value)} /></label>
              <label>Preço (€): <input type="number" step="0.01" value={prato.preco} onChange={e => atualizarPrato(prato.id, 'preco', parseFloat(e.target.value))} /></label>
              <label>Calorias: <input type="number" value={prato.calorias} onChange={e => atualizarPrato(prato.id, 'calorias', parseInt(e.target.value))} /></label>
              <label>Categoria:
                <select value={prato.categoria} onChange={e => atualizarPrato(prato.id, 'categoria', e.target.value)}>
                  <option value="">Selecione...</option>
                  <option value="Entrada">Entrada</option>
                  <option value="Prato principal">Prato principal</option>
                  <option value="Snack">Snack</option>
                  <option value="Sobremesa">Sobremesa</option>
                </select>
              </label>
              <label>Alergias Possíveis:
                <input type="text" value={prato.alergiasPossiveis?.join(', ') || ''} onChange={e => atualizarPrato(prato.id, 'alergiasPossiveis', e.target.value.split(',').map(s => s.trim()))} />
              </label>
              <label>Dietas Compatíveis:
                <input type="text" value={prato.subscricoesCompativeis?.join(', ') || ''} onChange={e => atualizarPrato(prato.id, 'subscricoesCompativeis', e.target.value.split(',').map(s => s.trim()))} />
              </label>
              <label>Imagem: <input value={prato.imagem || ''} onChange={e => atualizarPrato(prato.id, 'imagem', e.target.value)} /></label>
              <label>Link: <input value={prato.link || ''} onChange={e => atualizarPrato(prato.id, 'link', e.target.value)} /></label>
              <label>Visível nas Recomendações:
                <input type="checkbox" checked={prato.visivel} onChange={e => atualizarPrato(prato.id, 'visivel', e.target.checked)} />
              </label>
            </div>
          ))}

          <button className="btn" onClick={guardarAlteracoes}>Guardar alterações</button>

          <div className="section-title">Avaliações de Clientes</div>
          <div className="avaliacao"><strong>Joana M.</strong><div className="stars">★★★★☆</div><p>Comida deliciosa e chegou bem embalada!</p></div>
          <div className="avaliacao"><strong>André T.</strong><div className="stars">★★★★★</div><p>Refeições muito equilibradas e saborosas. Voltarei a pedir.</p></div>
          <div className="avaliacao"><strong>Inês R.</strong><div className="stars">★★★☆☆</div><p>Boa qualidade, mas o pedido atrasou um pouco.</p></div>

          <div className="section-title">Pedidos da Semana</div>
          <canvas ref={chartRef} width="100%" height="60"></canvas>
          <div className="section-title">Pedidos por Prato</div>
          <canvas ref={pratosChartRef} width="100%" height="60"></canvas>
       
        </div>
      </div>
    </>
  );
};

export default ContaRestaurante;
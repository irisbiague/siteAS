import React, { useEffect, useRef } from 'react';
import Header from './Componentes/Header';
import { Chart } from 'chart.js/auto';
import logo from './Imagens/logo.png';
import estafetaFoto from './Imagens/estafeta.jpg'; // Certifique-se que o caminho está correto

const EstafetaDashboard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartRef.current._chartInstance) {
      chartRef.current._chartInstance.destroy();
    }

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [{
          label: 'Entregas',
          data: [5, 7, 6, 4, 8, 3, 2],
          backgroundColor: '#000000', // Barras pretas
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#000000',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            callbacks: {
              label: context => `${context.parsed.y} entregas`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { 
              display: true, 
              text: 'Entregas', 
              color: '#000000' 
            },
            ticks: { color: '#000000cc' },
            grid: { color: '#00000033' }
          },
          x: {
            ticks: { color: '#000000cc' },
            grid: { color: '#00000033' }
          }
        }
      }
    });

    chartRef.current._chartInstance = chart;

    return () => chart.destroy();
  }, []);

  return (
    <>
      <Header />
      <div className="background">
        <div className="container_prof">
          <img src={logo} alt="MyNutriChoice" className="logo-img" />
          <div className="logo-text">MyNutriChoice</div>
          <div className="slogan">Sabor que nutre, escolhas que cuidam</div>

          <img src={estafetaFoto} alt="Foto de Perfil" className="profile-img" />
          <h1>Bem-vindo, Carlos Mendes</h1>

          <div className="stats">
            <div className="stat">
              <h2>87</h2>
              <p>Entregas feitas</p>
            </div>
            <div className="stat">
              <h2>3</h2>
              <p>Entregas em curso</p>
            </div>
            <div className="stat">
              <h2>12 min</h2>
              <p>Tempo médio</p>
            </div>
          </div>

          <div className="section-title">Pedidos atribuídos</div>

          <div className="pedido">
            <div className="pedido-info">
              <p><strong>Cliente:</strong> Joana Oliveira</p>
              <p><strong>Refeição:</strong> Salada Caprese</p>
              <p><strong>Morada:</strong> Rua das Flores, 123</p>
            </div>
            <div className="pedido-botao">
              <button className="btn">Confirmar entrega</button>
            </div>
          </div>

          <div className="pedido">
            <div className="pedido-info">
              <p><strong>Cliente:</strong> Miguel Costa</p>
              <p><strong>Refeição:</strong> Sopa do dia</p>
              <p><strong>Morada:</strong> Av. Central, 45</p>
            </div>
            <div className="pedido-botao">
              <button className="btn">Confirmar entrega</button>
            </div>
          </div>

          <div className="section-title">Avaliações de Clientes</div>

          <div className="avaliacao">
            <strong>Joana M.</strong>
            <div className="stars">★★★★☆</div>
            <p>Estafeta super simpático e entregou rapidinho!</p>
          </div>

          <div className="avaliacao">
            <strong>André T.</strong>
            <div className="stars">★★★★★</div>
            <p>Entrega no tempo certo e muito atencioso. Recomendo!</p>
          </div>

          <div className="avaliacao">
            <strong>Inês R.</strong>
            <div className="stars">★★★☆☆</div>
            <p>Chegou com um pouco de atraso, mas foi cordial.</p>
          </div>

          <div className="section-title">Entregas da Semana</div>
          <canvas ref={chartRef} width="100%" height="60"></canvas>
        </div>
      </div>
    </>
  );
};

export default EstafetaDashboard;

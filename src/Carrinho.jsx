import React, { useEffect, useState } from 'react';
import Header2 from './Componentes/Header2';

// Lista de todas as refeições disponíveis
const todasAsRefeicoesDisponiveis = [
  { nome: "Salada de Quinoa com Legumes Grelhados", calorias: 450, ingredientes: ["quinoa", "courgette", "beringela", "pimento", "azeite"], tipoDieta: "vegetariana", preco: 7.99 },
  { nome: "Peito de Frango Grelhado com Brócolos", calorias: 520, ingredientes: ["frango", "brócolos", "arroz integral", "alho"], tipoDieta: "normal", preco: 8.49 },
  { nome: "Tofu Salteado com Legumes", calorias: 400, ingredientes: ["tofu", "cenoura", "pimento", "molho de soja"], tipoDieta: "vegana", preco: 7.49 },
  { nome: "Lasanha de Lentilhas", calorias: 480, ingredientes: ["lentilhas", "massa", "tomate", "cenoura"], tipoDieta: "vegetariana", preco: 7.99 },
  { nome: "Salmão com Espargos", calorias: 530, ingredientes: ["salmão", "espargos", "batata doce"], tipoDieta: "normal", preco: 9.49 },
  { nome: "Caril de Grão com Arroz de Coco", calorias: 470, ingredientes: ["grão", "leite de coco", "caril", "arroz basmati"], tipoDieta: "vegana", preco: 8.29 },
  { nome: "Bife de Peru com Puré de Batata", calorias: 550, ingredientes: ["peru", "batata", "leite", "azeite"], tipoDieta: "normal", preco: 8.19 },
  { nome: "Hambúrguer de Feijão Preto", calorias: 490, ingredientes: ["feijão preto", "pão integral", "alface", "tomate"], tipoDieta: "vegana", preco: 7.89 },
  { nome: "Massa Integral com Cogumelos e Espinafres", calorias: 460, ingredientes: ["massa integral", "cogumelos", "espinafres", "alho"], tipoDieta: "vegetariana", preco: 7.69 },
  { nome: "Omelete de Legumes", calorias: 430, ingredientes: ["ovos", "pimento", "cebola", "tomate"], tipoDieta: "normal", preco: 6.99 }
];

const Carrinho = () => {
  const [refeicoes, setRefeicoes] = useState([]);
  const [selecionadas, setSelecionadas] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [codigoDesconto, setCodigoDesconto] = useState('');
  const [descontoAplicado, setDescontoAplicado] = useState(0);
  const [mensagemDesconto, setMensagemDesconto] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const ultimaAtualizacao = localStorage.getItem('ultimaAtualizacaoPreferencias');
      if (ultimaAtualizacao !== sessionStorage.getItem('ultimaAtualizacaoLida')) {
        sessionStorage.setItem('ultimaAtualizacaoLida', ultimaAtualizacao);
        setRefresh(prev => prev + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const carrinhoGuardado = JSON.parse(localStorage.getItem('carrinho')) || [];
    const prefs = JSON.parse(localStorage.getItem('preferenciasNutricionais')) || {};
    const carrinhoAuto = localStorage.getItem('carrinhoAuto') === 'sim';

    if (prefs.subscricao === 'sim') {
      if (carrinhoGuardado.length === 0 || carrinhoAuto) {
        const filtradas = todasAsRefeicoesDisponiveis
          .filter(r => r.tipoDieta === prefs.tipoDieta)
          .slice(0, 7);
        setRefeicoes(filtradas);
        setSelecionadas(filtradas.map((_, i) => i));
        localStorage.setItem('carrinho', JSON.stringify(filtradas));
        localStorage.setItem('carrinhoAuto', 'sim');
      } else {
        setRefeicoes(carrinhoGuardado);
        setSelecionadas(carrinhoGuardado.map((_, i) => i));
      }
    } else {
      if (carrinhoAuto) {
        setRefeicoes([]);
        setSelecionadas([]);
        localStorage.removeItem('carrinho');
        localStorage.removeItem('carrinhoAuto');
      } else {
        setRefeicoes(carrinhoGuardado);
        setSelecionadas(carrinhoGuardado.map((_, i) => i));
      }
    }
  }, [refresh]);

  const toggleSelecionada = (index) => {
    setSelecionadas(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const totalSemDesconto = selecionadas.reduce((acc, i) => acc + (refeicoes[i]?.preco || 0), 0);
  const totalComDesconto = totalSemDesconto - descontoAplicado;

  const handlePagamento = () => {
    const dadosCliente = JSON.parse(localStorage.getItem('dadosCliente')) || {};
    const telemovel = dadosCliente.telemovel || 'N/A';

    const confirmado = window.confirm(
      `O número de telefone associado é ${telemovel}.\n` +
      `Será enviado um pedido de pagamento MBWay no valor de €${totalComDesconto.toFixed(2)}.\n` +
      `Confirma o pagamento?`
    );

    if (confirmado) {
      window.location.href = '/Avaliacao';
    }
  };

  const handleEliminarItens = () => {
    if (window.confirm('Tem a certeza que quer eliminar todos os itens do carrinho?')) {
      setRefeicoes([]);
      setSelecionadas([]);
      localStorage.removeItem('carrinho');
      localStorage.removeItem('carrinhoAuto');
    }
  };

  const aplicarDesconto = () => {
    if (codigoDesconto === "vinte") {
      setDescontoAplicado(totalSemDesconto * 0.2);
      setMensagemDesconto("Desconto de 20% aplicado!");
    } else if (codigoDesconto === "MYDESCONTO") {
      setDescontoAplicado(totalSemDesconto * 0.5);
      setMensagemDesconto("Desconto de 50% aplicado!");
    } else {
      setDescontoAplicado(0);
      setMensagemDesconto("Código inválido.");
    }
  };

  return (
    <>
      <Header2 />
      <div className="background">
        <div className="container_prof">
          <h2>O Meu Carrinho</h2>
          {refeicoes.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <>
              <div className="refeicoes-grid">
                {refeicoes.map((ref, i) => (
                  <div
                    key={i}
                    className={`refeicao-card ${selecionadas.includes(i) ? 'selecionada' : ''}`}
                    onClick={() => toggleSelecionada(i)}
                    style={{
                      cursor: 'pointer',
                      border: selecionadas.includes(i) ? '2px solid #4CAF50' : '1px solid #ccc',
                      padding: '10px',
                      marginBottom: '10px',
                      borderRadius: '5px',
                      userSelect: 'none',
                      backgroundColor: selecionadas.includes(i) ? '#eaffea' : '#fff'
                    }}
                  >
                    <h4>{ref.nome}</h4>
                    <p>{ref.preco.toFixed(2)}€</p>
                    <p>{ref.calorias} kcal</p>
                  </div>
                ))}
              </div>

              <div className="codigo-desconto">
                <input
                  type="text"
                  value={codigoDesconto}
                  onChange={(e) => setCodigoDesconto(e.target.value)}
                  placeholder="Digite o código de desconto"
                />
                <button className= "btn_desconto" onClick={aplicarDesconto}>Aplicar</button>
                {mensagemDesconto && <p>{mensagemDesconto}</p>}
              </div>

              
                <h3>Total: {totalComDesconto.toFixed(2)}€</h3>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  className="btn"
                  onClick={handlePagamento}
                  disabled={selecionadas.length === 0}
                >
                  Ir para Pagamento
                </button>

                <button
                  className="btn-eliminar"
                  onClick={handleEliminarItens}
                >
                  Eliminar Itens
                </button>
              </div>

            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Carrinho;

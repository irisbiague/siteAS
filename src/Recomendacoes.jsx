import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from './Componentes/Header2';
import imagens from './imagens';

const Recomendacoes = () => {
  const [preferencias, setPreferencias] = useState(null);
  const [pesquisa, setPesquisa] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('Todos');
  const navigate = useNavigate();

  useEffect(() => {
    const dados = localStorage.getItem('preferenciasNutricionais');
    if (dados) {
      const prefs = JSON.parse(dados);
      setPreferencias(prefs);
    }
  }, []);


  

  // Pratos fixos definidos manualmente
const pratosFixos = [
  {
    nome: "Tábua de Falafel com Húmus",
    calorias: 410,
    descricao: "Croquetes crocantes de grão-de-bico temperados com especiarias do Médio Oriente, servidos com húmus cremoso, salada de pepino e pão pita artesanal.",
    imagem: "falafel.jpg",
    alergiasPossiveis: ["grão-de-bico", "glúten"],
    subscricoesCompativeis: ["vegana", "vegetariana", "mediterrânea"],
    preco: 6.90,
    link: "/falafel",
    categoria: "Prato principal"
  },
  
  {
    nome: "Lasanha Vegetariana",
    calorias: 460,
    descricao: "Camadas de massa integral recheadas com legumes, molho de tomate caseiro e queijo vegetal.",
    imagem: "lasanha.jpg",
    alergiasPossiveis: ["glúten"],
    subscricoesCompativeis: ["vegetariana"],
    preco: 7.90,
    link: "/LasanhaVeg",
    categoria: "Prato principal"
  },
  {
    nome: "Quinoa Bowl",
    calorias: 420,
    descricao: "Quinoa, grão-de-bico assado, abacate, legumes grelhados e molho de tahine.",
    imagem: "quinoa.jpg",
    alergiasPossiveis: ["grão-de-bico"],
    subscricoesCompativeis: ["vegana", "vegetariana", "sem-glúten", "mediterrânea"],
    preco: 7.20,
    link: "/Quinoa",
    categoria: "Prato principal"
  },
  {
    nome: "Salada Caprese",
    calorias: 250,
    descricao: "Tomate fresco, mozzarella de búfala e folhas de manjericão com azeite e balsâmico.",
    imagem: "salada-caprese-2.jpeg",
    alergiasPossiveis: ["lacticínios"],
    subscricoesCompativeis: ["vegetariana", "mediterrânea", "low-carb"],
    preco: 5.49,
    link: "/SaladaCaprese",
    categoria: "Entrada"
  },
  {
    nome: "Tofu Teriyaki",
    calorias: 380,
    descricao: "Cubos de tofu salteados em molho teriyaki com arroz integral e legumes.",
    imagem: "tofu.jpg",
    alergiasPossiveis: ["soja"],
    subscricoesCompativeis: ["vegana", "vegetariana", "sem-glúten", "asiática"],
    preco: 6.80,
    link: "/Tofu",
    categoria: "Prato principal"
  },
  {
    nome: "Wrap Vegetariano",
    calorias: 380,
    descricao: "Wrap com legumes grelhados, húmus de grão e molho de iogurte natural.",
    imagem: "wrap.jpg",
    alergiasPossiveis: ["lacticínios", "glúten", "grão-de-bico"],
    subscricoesCompativeis: ["vegetariana"],
    preco: 6.20,
    link: "/Wrap",
    categoria: "Snack"
  },
  {
    nome: "Brownie de Batata Doce",
    calorias: 280,
    descricao: "Brownie saudável feito com batata doce, cacau e adoçante natural.",
    imagem: "brownie.jpg",
    alergiasPossiveis: [],
    subscricoesCompativeis: ["vegana", "vegetariana", "mediterrânea"],
    preco: 3.70,
    link: "/Brownie",
    categoria: "Sobremesa"
  },
  {
    nome: "Húmus com Palitos de Cenoura",
    calorias: 150,
    descricao: "Húmus de grão-de-bico servido com palitos crocantes de cenoura fresca.",
    imagem: "humus-cenoura.jpg",
    alergiasPossiveis: ["grão-de-bico", "cenoura"],
    subscricoesCompativeis: ["vegana", "vegetariana", "detox", "low-carb"],
    preco: 2.90,
    link: "/HumusCenoura",
    categoria: "Snack"
  },
  {
    nome: "Panna Cotta de Coco",
    calorias: 230,
    descricao: "Sobremesa italiana com leite de coco e coulis de frutos vermelhos.",
    imagem: "pannacotta.jpg",
    alergiasPossiveis: ["coco"],
    subscricoesCompativeis: ["vegana"],
    preco: 4.10,
    link: "/PannaCotta",
    categoria: "Sobremesa"
  },
  {
    nome: "Croquetes de Espinafre",
    calorias: 210,
    descricao: "Croquetes crocantes de espinafre e queijo feta.",
    imagem: "croquetes-espinafre.jpg",
    alergiasPossiveis: ["lacticínios", "glúten"],
    subscricoesCompativeis: ["vegetariana"],
    preco: 4.00,
    link: "/CroquetesEspinafre",
    categoria: "Entrada"
  },
  {
    nome: "Barra de Granola Caseira",
    calorias: 190,
    descricao: "Barra energética com aveia, sementes, frutos secos e mel.",
    imagem: "barra-granola.jpg",
    alergiasPossiveis: ["frutos secos", "glúten"],
    subscricoesCompativeis: ["vegetariana", "detox", "low-carb"],
    preco: 2.50,
    link: "/BarraGranola",
    categoria: "Snack"
  }
];

// Pega os pratos do restaurante salvos no localStorage
const pratosDoRestaurante = JSON.parse(localStorage.getItem("pratosRestaurante") || "[]").filter(p => p.visivel);


const todasRefeicoes = [...pratosFixos, ...pratosDoRestaurante];
  

  const obterRefeicoesFiltradas = () => {
    if (!preferencias) return [];

    const alergias = preferencias.alergias
      ? preferencias.alergias.toLowerCase().split(',').map(a => a.trim())
      : [];
    const limiteCalorias = preferencias.calorias
      ? parseInt(preferencias.calorias.toString().match(/\d+/)?.[0], 10)
      : NaN;
    const tipoDieta = preferencias.tipoDieta
      ? preferencias.tipoDieta.toLowerCase()
      : '';

    return todasRefeicoes.filter(ref => {
      const temAlergia = Array.isArray(ref.alergiasPossiveis) &&
      ref.alergiasPossiveis.some(al => alergias.includes(al.toLowerCase()));

      const dentroLimiteCalorias = isNaN(limiteCalorias) || ref.calorias <= limiteCalorias;
      const correspondePesquisa = ref.nome.toLowerCase().includes(pesquisa.toLowerCase());
      const compativelComDieta =
      tipoDieta === '' || (Array.isArray(ref.subscricoesCompativeis) &&
      ref.subscricoesCompativeis.some(d => d.toLowerCase() === tipoDieta));

      const correspondeCategoria = filtroCategoria === 'Todos' || ref.categoria === filtroCategoria;

      return !temAlergia && dentroLimiteCalorias && correspondePesquisa && compativelComDieta && correspondeCategoria;
    });
  };

  const refeicoesFiltradas = obterRefeicoesFiltradas();


  return (
    <>
      <Header2 />
      <div className="background">
        <div className="page-wrapper">
        <div className="filtros-laterais">
          <h4 className="titulo-filtro">Filtrar por tipo</h4>
            <div className="filtros-botoes">
              {["Todos", "Prato principal", "Entrada", "Snack", "Sobremesa"].map((categoria) => (
                <button
                  key={categoria}
                  className={`btn-filtro ${filtroCategoria === categoria ? 'ativo' : ''}`}
                  onClick={() => setFiltroCategoria(categoria)}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>


          <div className="recomendacoes-bloco-esquerdo">
            <div className="barra-pesquisa-wrapper">
              <input
                type="text"
                placeholder="Pesquisar nas recomendações..."
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                className="barra-pesquisa"
              />
            </div>

            <div className="recomendacoes-container">
              {refeicoesFiltradas.length === 0 ? (
                <p className="mensagem-vazia">
                  Nenhuma refeição corresponde às tuas preferências.
                </p>
              ) : (
                refeicoesFiltradas.map((ref, idx) => (
                  <div key={idx}
                    className="refeicao-cartao"
                    onClick={() => navigate(ref.link)}
                  >
                    <img
                      src={imagens[ref.imagem]}
                      alt={ref.nome}
                      className="refeicao-img"
                    />
                    <h3>{ref.nome}</h3>
                    <p>{ref.descricao}</p>
                    <p className="preco">€ {ref.preco.toFixed(2)}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recomendacoes;

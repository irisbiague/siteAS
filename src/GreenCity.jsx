import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";

import greencityImg from "./Imagens/greencity.jpg";

import tofuImg from "./Imagens/tofu.jpg";
import wrapImg from "./Imagens/wrap.jpg";
import falafelImg from "./Imagens/falafel.jpg";
import lasanhaImg from "./Imagens/lasanha.jpg";
import quinoaImg from "./Imagens/quinoa.jpg";
import saladaCapreseImg from "./Imagens/salada-caprese-2.jpeg";
import pannaCottaImg from "./Imagens/pannacotta.jpg";
import croquetesEspinafreImg from "./Imagens/croquetes-espinafre.jpg";
import barraGranolaImg from "./Imagens/barra-granola.jpg";
import brownieImg from "./Imagens/brownie.jpg";
import humusCenouraImg from "./Imagens/humus-cenoura.jpg";

export default function GreenCity() {
  const navigate = useNavigate();

  const restaurante = {
    nome: "GreenCity",
    estrelas: 4.9,
    avaliadores: 124,
    imagem: greencityImg,
    refeicoes: [
      {
        nome: "Tofu Teriyaki",
        calorias: 380,
        descricao: "Cubos de tofu salteados em molho teriyaki com arroz integral e legumes.",
        imagem: tofuImg,
        alergiasPossiveis: ["soja"],
        subscricoesCompativeis: ["vegana", "vegetariana", "sem-glúten", "asiática"],
        preco: 6.80,
        link: "/Tofu",
      },
      {
        nome: "Wrap Vegetariano",
        calorias: 380,
        descricao: "Wrap com legumes grelhados, húmus de grão e molho de iogurte natural.",
        imagem: wrapImg,
        alergiasPossiveis: ["lacticínios", "glúten", "grão-de-bico"],
        subscricoesCompativeis: ["vegetariana"],
        preco: 6.20,
        link: "/Wrap",
      },
      {
        nome: "Tábua de Falafel com Húmus",
        calorias: 410,
        descricao:
          "Croquetes crocantes de grão-de-bico temperados com especiarias do Médio Oriente, servidos com húmus cremoso, salada de pepino e pão pita artesanal.",
        imagem: falafelImg,
        alergiasPossiveis: ["grão-de-bico", "glúten"],
        subscricoesCompativeis: ["vegana", "vegetariana", "mediterrânea"],
        preco: 6.90,
        link: "/falafel",
      },
      {
        nome: "Lasanha Vegetariana",
        calorias: 460,
        descricao:
          "Camadas de massa integral recheadas com legumes, molho de tomate caseiro e queijo vegetal.",
        imagem: lasanhaImg,
        alergiasPossiveis: ["glúten"],
        subscricoesCompativeis: ["vegetariana"],
        preco: 7.90,
        link: "/LasanhaVeg",
      },
      {
        nome: "Quinoa Bowl",
        calorias: 420,
        descricao:
          "Quinoa, grão-de-bico assado, abacate, legumes grelhados e molho de tahine.",
        imagem: quinoaImg,
        alergiasPossiveis: ["grão-de-bico"],
        subscricoesCompativeis: ["vegana", "vegetariana", "sem-glúten", "mediterrânea"],
        preco: 7.20,
        link: "/Quinoa",
      },
      {
        nome: "Salada Caprese",
        calorias: 250,
        descricao:
          "Tomate fresco, mozzarella de búfala e folhas de manjericão com azeite e balsâmico.",
        imagem: saladaCapreseImg,
        alergiasPossiveis: ["lacticínios"],
        subscricoesCompativeis: ["vegetariana", "mediterrânea", "low-carb"],
        preco: 5.49,
        link: "/SaladaCaprese",
      },

      // Novas refeições adicionadas:
      {
        nome: "Panna Cotta de Coco",
        calorias: 230,
        descricao: "Sobremesa italiana com leite de coco e coulis de frutos vermelhos.",
        imagem: pannaCottaImg,
        alergiasPossiveis: ["coco"],
        subscricoesCompativeis: ["vegana"],
        preco: 4.10,
        link: "/PannaCotta",
        categoria: "Sobremesa",
      },
      {
        nome: "Croquetes de Espinafre",
        calorias: 210,
        descricao: "Croquetes crocantes de espinafre e queijo feta.",
        imagem: croquetesEspinafreImg,
        alergiasPossiveis: ["lacticínios", "glúten"],
        subscricoesCompativeis: ["vegetariana"],
        preco: 4.00,
        link: "/CroquetesEspinafre",
        categoria: "Entrada",
      },
      {
        nome: "Barra de Granola Caseira",
        calorias: 190,
        descricao: "Barra energética com aveia, sementes, frutos secos e mel.",
        imagem: barraGranolaImg,
        alergiasPossiveis: ["frutos secos", "glúten"],
        subscricoesCompativeis: ["vegetariana"],
        preco: 2.50,
        link: "/BarraGranola",
        categoria: "Snack",
      },
      {
        nome: "Brownie de Batata Doce",
        calorias: 280,
        descricao: "Brownie saudável feito com batata doce, cacau e adoçante natural.",
        imagem: brownieImg,
        alergiasPossiveis: [],
        subscricoesCompativeis: ["vegana", "vegetariana", "mediterrânea"],
        preco: 3.70,
        link: "/Brownie",
        categoria: "Sobremesa",
      },
      {
        nome: "Húmus com Palitos de Cenoura",
        calorias: 150,
        descricao: "Húmus de grão-de-bico servido com palitos crocantes de cenoura fresca.",
        imagem: humusCenouraImg,
        alergiasPossiveis: ["grão-de-bico", "cenoura"],
        subscricoesCompativeis: ["vegana", "vegetariana"],
        preco: 2.90,
        link: "/HumusCenoura",
        categoria: "Snack",
      },
    ],
  };


  const handleVoltar = () => {
    window.history.back();
  };

  const handleClickRefeicao = (link) => {
    navigate(link);
  };

  return (
    <>
      <Header2 />
      <div className="background">
        <div className="container_prof" style={{ maxWidth: "700px", margin: "auto" }}>
          

          {/* Foto do restaurante */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src={restaurante.imagem}
              alt={`${restaurante.nome} - Foto de Perfil`}
              style={{
                width: "160px",
                height: "160px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 0 8px rgba(0,0,0,0.15)",
              }}
            />
          </div>

          <h1 className="section-title">{restaurante.nome}</h1>

          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            Avaliação:{" "}
            <span className="stars" style={{ color: "#f5a623", fontSize: "22px" }}>
              {"★".repeat(Math.floor(restaurante.estrelas))}
              {restaurante.estrelas % 1 >= 0.5 ? "⯨" : ""}
              {"☆".repeat(5 - Math.ceil(restaurante.estrelas))}
            </span>{" "}
            ({restaurante.avaliadores} avaliações)
          </p>

          <h2 className="section-title">Refeições disponíveis:</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {restaurante.refeicoes.map((refeicao, i) => (
              <div
                key={i}
                onClick={() => handleClickRefeicao(refeicao.link)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  gap: "20px",
                  padding: "15px",
                  borderRadius: "12px",
                  boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                  backgroundColor: "#fff",
                  transition: "transform 0.15s ease, box-shadow 0.15s ease",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={refeicao.imagem}
                  alt={refeicao.nome}
                  className="profile-img-comida"
                  style={{ borderRadius: "10px", width: "130px", height: "90px", objectFit: "cover" }}
                />
                <div style={{ flex: 1 }}>
                  <strong className="section-title" style={{ fontSize: "20px" }}>
                    {refeicao.nome}
                  </strong>
                  <p style={{ margin: "8px 0", color: "#555" }}>{refeicao.descricao}</p>
                  <div className="price" style={{ fontWeight: "600", fontSize: "16px", color: "#2e7d32" }}>
                    {refeicao.preco.toFixed(2)} €
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

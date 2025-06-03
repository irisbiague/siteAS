import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";

import bomsaborImg from "./Imagens/restaurante.jpg";

import frangoImg from "./Imagens/frango.jpg";
import salmaoImg from "./Imagens/salmao.jpg";
import sopaImg from "./Imagens/sopa.jpg";

export default function BomSabor() {
  const navigate = useNavigate();

  const restaurante = {
    nome: "Bom Sabor",
    estrelas: 4.7,
    avaliadores: 89,
    imagem: bomsaborImg,
    refeicoes: [
      {
        nome: "Frango Grelhado com Legumes",
        calorias: 430,
        descricao:
          "Peito de frango marinado e grelhado, acompanhado por legumes da estação salteados.",
        imagem: frangoImg,
        alergiasPossiveis: [],
        subscricoesCompativeis: ["mediterrânea", "sem-glúten", "low-carb"],
        preco: 7.8,
        link: "/FrangoGrelhado",
      },
      {
        nome: "Salmão ao Molho de Limão",
        calorias: 510,
        descricao: "Filete de salmão grelhado com arroz integral e espargos.",
        imagem: salmaoImg,
        alergiasPossiveis: ["peixe"],
        subscricoesCompativeis: [
          "mediterrânea",
          "sem-glúten",
          "low-carb",
          "pescetariana",
        ],
        preco: 9.2,
        link: "/Salmao",
      },
      {
        nome: "Sopa do Dia",
        calorias: 120,
        descricao:
          "Sopa feita com legumes frescos. Pode variar entre creme de legumes, caldo verde ou cenoura.",
        imagem: sopaImg,
        alergiasPossiveis: [],
        subscricoesCompativeis: ["vegana", "vegetariana", "mediterrânea", "sem-glúten"],
        preco: 3.9,
        link: "/Sopa",
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

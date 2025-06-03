import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";
import quinoaImg from "./Imagens/quinoa.jpg";

export default function QuinoaBowl() {
  const navigate = useNavigate();

  const handlePedir = () => {
    const novaRefeicao = {
      nome: "Quinoa Bowl",
      preco: 7.20,
      calorias: 420,
      descricao:
        "Uma taça nutritiva com quinoa, grão-de-bico assado, abacate, legumes grelhados e molho de tahine. Ideal para quem procura equilíbrio e energia.",
      // Imagem não necessária no carrinho
    };

    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinhoAtual.push(novaRefeicao);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));

    navigate("/carrinho");
  };


  const handleVerRestaurante = () => {
    navigate("/GreenCity");
  };

  return (
    <>
      <Header2 />
      <div className="background">
        <div className="container_prof">
          <div className="imagem-centro">
            <img src={quinoaImg} alt="Quinoa Bowl" className="profile-img-comida" />
          </div>

          <h1 className="section-title">Quinoa Bowl</h1>
          <div className="slogan">20 min de preparação</div>
          <div className="price">7.20€</div>

          <div className="desc">
            Uma taça nutritiva com quinoa, grão-de-bico assado, abacate, legumes grelhados e molho de tahine. Ideal para quem procura equilíbrio e energia.
          </div>

          <div className="slogan">
            ≈ 420 kcal | 12g de proteína | 16g de gordura | 48g de hidratos de carbono
          </div>

          <div className="btn-group">
            <button className="btn" onClick={handleVerRestaurante}>
              Perfil do restaurante
            </button>
            <button className="btn" onClick={handlePedir}>
              Pedir
            </button>
          </div>

          <div className="section-title">Avaliações</div>
          <div className="stars">★★★★☆</div>

          <div className="section-title">Comentários de Clientes</div>

          <div className="avaliacao">
            <strong>Leonor F.</strong>
            <div className="stars">★★★★☆</div>
            <p>Super saudável e bem servido! Ideal para o pós-treino.</p>
          </div>

          <div className="avaliacao">
            <strong>Bruno C.</strong>
            <div className="stars">★★★★★</div>
            <p>Excelente apresentação e sabor. Recomendo!</p>
          </div>
        </div>
      </div>
    </>
  );
}

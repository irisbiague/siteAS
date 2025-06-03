import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";
import humusImg from "./Imagens/humus-cenoura.jpg";

export default function HumusCenoura() {
  const navigate = useNavigate();

  const handlePedir = () => {
    const novaRefeicao = {
      nome: "Húmus com Palitos de Cenoura",
      preco: 2.90,
      calorias: 150,
      descricao:
        "Húmus de grão-de-bico servido com palitos crocantes de cenoura fresca.",
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
            <img
              src={humusImg}
              alt="Húmus com Palitos de Cenoura"
              className="profile-img-comida"
            />
          </div>

          <h1 className="section-title">Húmus com Palitos de Cenoura</h1>
          <div className="slogan">5 min de preparação</div>
          <div className="price">2.90€</div>

          <div className="desc">
            Húmus de grão-de-bico servido com palitos crocantes de cenoura fresca.
          </div>

          <div className="slogan">
            ≈ 150 kcal | 7g de gordura | 4g de proteína | 16g de hidratos de carbono
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
            <strong>Sofia A.</strong>
            <div className="stars">★★★★☆</div>
            <p>Snack leve e muito saboroso. Adoro o húmus caseiro!</p>
          </div>

          <div className="avaliacao">
            <strong>Rafael L.</strong>
            <div className="stars">★★★★☆</div>
            <p>Ideal para um lanche saudável. Bem temperado e fresco.</p>
          </div>
        </div>
      </div>
    </>
  );
}

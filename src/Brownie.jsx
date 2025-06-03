import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";
import brownie from "./Imagens/brownie.jpg";

export default function Brownie() {
  const navigate = useNavigate();

  const handlePedir = () => {
    const novaRefeicao = {
      nome: "Brownie de Batata Doce",
      preco: 3.70,
      calorias: 280,
      descricao: "Brownie saudável feito com batata doce, cacau e adoçante natural.",
      // Imagem não incluída no carrinho
    };

    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinhoAtual.push(novaRefeicao);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));

    navigate("/carrinho");
  };

  const handleVerRestaurante = () => {
    navigate("/GreenCity"); // Altera se for outro restaurante
  };

  return (
    <>
      <Header2 />
      <div className="background">
        <div className="container_prof">
          <div className="imagem-centro">
            <img src={brownie} alt="Brownie de Batata Doce" className="profile-img-comida" />
          </div>

          <h1 className="section-title">Brownie de Batata Doce</h1>
          <div className="slogan">10 min de preparação</div>
          <div className="price">3.70€</div>

          <div className="desc">
            Brownie saudável feito com batata doce, cacau e adoçante natural.
          </div>

          <div className="slogan">
            ≈ 280 kcal | 10g de gordura | 4g de proteína | 38g de hidratos de carbono
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
            <strong>Beatriz F.</strong>
            <div className="stars">★★★★★</div>
            <p>Surpreendentemente delicioso e sem culpa!</p>
          </div>
          <div className="avaliacao">
            <strong>João M.</strong>
            <div className="stars">★★★★☆</div>
            <p>Doce no ponto certo. A textura é ótima.</p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";
import saladaImg from "./Imagens/salada-caprese-2.jpeg";

export default function SaladaCaprese() {
  const navigate = useNavigate();

  const handlePedir = () => {
    const novaRefeicao = {
      nome: "Salada Caprese",
      preco: 5.49,
      calorias: 250,
      descricao:
        "Clássica combinação italiana de tomate fresco, mozzarella de búfala e folhas de manjericão, temperada com azeite extra virgem e um toque de balsâmico. Leve e refrescante, perfeita como entrada ou refeição ligeira.",
      // Imagem não necessária para o carrinho
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
            <img src={saladaImg} alt="Salada Caprese" className="profile-img-comida" />
          </div>

          <h1 className="section-title">Salada Caprese</h1>
          <div className="slogan">15 min de preparação</div>
          <div className="price">5.49€</div>

          <div className="desc">
            Clássica combinação italiana de tomate fresco, mozzarella de búfala e folhas de manjericão, temperada com azeite extra virgem e um toque de balsâmico.
            <br />
            Leve e refrescante, perfeita como entrada ou refeição ligeira.
          </div>

          <div className="slogan">
            ≈ 250 kcal | 14g de gordura | 10g de proteína | 8g de hidratos de carbono
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
          <div className="stars">★★★☆☆</div>

          <div className="section-title">Comentários de Clientes</div>

          <div className="avaliacao">
            <strong>Joana M.</strong>
            <div className="stars">★★★★☆</div>
            <p>Refeição super fresca e saborosa! A entrega foi rápida e o sabor excelente.</p>
          </div>
          <div className="avaliacao">
            <strong>Pedro S.</strong>
            <div className="stars">★★★☆☆</div>
            <p>Gostei da qualidade dos ingredientes. Voltaria a pedir.</p>
          </div>
          <div className="avaliacao">
            <strong>Inês R.</strong>
            <div className="stars">★★★★☆</div>
            <p>Leve e perfeita para o almoço. Recomendo!</p>
          </div>
        </div>
      </div>
    </>
  );
}

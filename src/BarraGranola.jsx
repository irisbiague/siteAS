import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";
import granolaImg from "./Imagens/barra-granola.jpg";

export default function BarraGranola() {
  const navigate = useNavigate();

  const handlePedir = () => {
    const novaRefeicao = {
      nome: "Barra de Granola Caseira",
      preco: 2.50,
      calorias: 190,
      descricao:
        "Barra energética com aveia, sementes, frutos secos e mel.",
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
              src={granolaImg}
              alt="Barra de Granola Caseira"
              className="profile-img-comida"
            />
          </div>

          <h1 className="section-title">Barra de Granola Caseira</h1>
          <div className="slogan">10 min de preparação</div>
          <div className="price">2.50€</div>

          <div className="desc">
            Barra energética com aveia, sementes, frutos secos e mel.
          </div>

          <div className="slogan">
            ≈ 190 kcal | 8g de gordura | 5g de proteína | 24g de hidratos de carbono
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
            <strong>Joana M.</strong>
            <div className="stars">★★★★☆</div>
            <p>Ideal para um lanche saudável. Muito saborosa e prática!</p>
          </div>

          <div className="avaliacao">
            <strong>Tiago F.</strong>
            <div className="stars">★★★☆☆</div>
            <p>Boa, mas podia ter menos mel. Um pouco doce para o meu gosto.</p>
          </div>
        </div>
      </div>
    </>
  );
}

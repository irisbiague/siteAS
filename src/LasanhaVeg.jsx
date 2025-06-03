import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";
import lasanhaImg from "./Imagens/lasanha_veg.avif";

export default function LasanhaVeg() {
  const navigate = useNavigate();

  const handlePedir = () => {
    const novaRefeicao = {
      nome: "Lasanha Vegetariana",
      preco: 7.90,
      calorias: 460,
      descricao:
        "Camadas de massa integral recheadas com legumes salteados, molho de tomate caseiro e queijo vegetal. Uma explosão de sabor numa opção reconfortante.",
      // A imagem não é necessária para o carrinho
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
            <img src={lasanhaImg} alt="Lasanha Vegetariana" className="profile-img-comida" />
          </div>

          <h1 className="section-title">Lasanha Vegetariana</h1>
          <div className="slogan">30 min de preparação</div>
          <div className="price">7.90€</div>

          <div className="desc">
            Camadas de massa integral recheadas com legumes salteados, molho de tomate caseiro e queijo vegetal.
            Uma explosão de sabor numa opção reconfortante.
          </div>

          <div className="slogan">
            ≈ 460 kcal | 18g de gordura | 15g de proteína | 50g de hidratos de carbono
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
            <strong>Beatriz N.</strong>
            <div className="stars">★★★★☆</div>
            <p>A lasanha é muito bem temperada e saborosa! Aconselho.</p>
          </div>

          <div className="avaliacao">
            <strong>Daniel P.</strong>
            <div className="stars">★★★★★</div>
            <p>Boa opção vegetariana. A dose é generosa e super saborosa.</p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";
import wrapImg from "./Imagens/wrap.jpg";

export default function WrapVegetariano() {
  const navigate = useNavigate();

  const handlePedir = () => {
    const item = {
      id: "wrap-vegetariano",
      nome: "Wrap Vegetariano",
      preco: 6.20,
      calorias: 380,
      descricao:
        "Wrap recheado com legumes grelhados, húmus de grão, alface crocante e molho de iogurte natural. Ideal para refeições leves e nutritivas durante o dia.",
      // imagem não é salva no carrinho
    };

    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinhoAtual.push(item);
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
            <img src={wrapImg} alt="Wrap Vegetariano" className="profile-img-comida" />
          </div>

          <h1 className="section-title">Wrap Vegetariano</h1>
          <div className="slogan">10 min de preparação</div>
          <div className="price">6.20€</div>

          <div className="desc">
            Wrap recheado com legumes grelhados, húmus de grão, alface crocante e molho de iogurte natural. Ideal para refeições leves e nutritivas durante o dia.
          </div>

          <div className="slogan">
            ≈ 380 kcal | 18g de gordura | 12g de proteína | 25g de hidratos de carbono
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
            <strong>Maria F.</strong>
            <div className="stars">★★★★☆</div>
            <p>Fresco e delicioso. Ótima opção vegetariana!</p>
          </div>

          <div className="avaliacao">
            <strong>Ricardo L.</strong>
            <div className="stars">★★★★☆</div>
            <p>Gostei muito do molho. Voltaria a pedir sem dúvida.</p>
          </div>
        </div>
      </div>
    </>
  );
}

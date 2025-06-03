import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";
import croquetesImg from "./Imagens/croquetes-espinafre.jpg";

export default function CroquetesEspinafre() {
  const navigate = useNavigate();

  const handlePedir = () => {
    const novaRefeicao = {
      nome: "Croquetes de Espinafre",
      preco: 4.00,
      calorias: 210,
      descricao: "Croquetes crocantes de espinafre e queijo feta.",
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
              src={croquetesImg}
              alt="Croquetes de Espinafre"
              className="profile-img-comida"
            />
          </div>

          <h1 className="section-title">Croquetes de Espinafre</h1>
          <div className="slogan">15 min de preparação</div>
          <div className="price">4.00€</div>

          <div className="desc">
            Croquetes crocantes de espinafre e queijo feta.
          </div>

          <div className="slogan">
            ≈ 210 kcal | 10g de gordura | 6g de proteína | 18g de hidratos de carbono
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
            <strong>Ana S.</strong>
            <div className="stars">★★★★☆</div>
            <p>Textura crocante por fora e cremosa por dentro. Muito bom!</p>
          </div>

          <div className="avaliacao">
            <strong>Rui M.</strong>
            <div className="stars">★★★☆☆</div>
            <p>Gostei bastante, mas achei o sabor do queijo um pouco forte.</p>
          </div>
        </div>
      </div>
    </>
  );
}

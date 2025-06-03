import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";
import tofuImg from "./Imagens/tofu.jpg";

export default function TofuTeriyaki() {
  const navigate = useNavigate();

  const handlePedir = () => {
    const novaRefeicao = {
      nome: "Tofu Teriyaki",
      preco: 6.8,
      calorias: 380,
      descricao:
        "Cubos de tofu salteados em molho teriyaki artesanal, acompanhados de arroz integral, brócolos e cenoura. Uma opção deliciosa e rica em proteína vegetal.",
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
            <img src={tofuImg} alt="Tofu Teriyaki" className="profile-img-comida" />
          </div>

          <h1 className="section-title">Tofu Teriyaki</h1>
          <div className="slogan">25 min de preparação</div>
          <div className="price">6.80€</div>

          <div className="desc">
            Cubos de tofu salteados em molho teriyaki artesanal, acompanhados de arroz integral, brócolos e cenoura. Uma opção deliciosa e rica em proteína vegetal.
          </div>

          <div className="slogan">
            ≈ 380 kcal | 18g de proteína | 12g de gordura | 40g de hidratos de carbono
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
          <div className="stars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>

          <div className="section-title">Comentários de Clientes</div>
          <div className="avaliacao">
            <strong>Raquel V.</strong>
            <div className="stars">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p>Simplesmente delicioso! Um dos melhores tofus que já provei.</p>
          </div>
          <div className="avaliacao">
            <strong>João M.</strong>
            <div className="stars">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p>Adorei a textura e o molho. A repetir sem dúvida!</p>
          </div>
        </div>
      </div>
    </>
  );
}

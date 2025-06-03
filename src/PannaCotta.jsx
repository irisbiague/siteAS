import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";
import pannaCottaImg from "./Imagens/pannacotta.jpg";

export default function PannaCotta() {
  const navigate = useNavigate();

  const handlePedir = () => {
    const novaRefeicao = {
      nome: "Panna Cotta de Coco",
      preco: 4.10,
      calorias: 230,
      descricao:
        "Sobremesa italiana com leite de coco e coulis de frutos vermelhos.",
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
              src={pannaCottaImg}
              alt="Panna Cotta de Coco"
              className="profile-img-comida"
            />
          </div>

          <h1 className="section-title">Panna Cotta de Coco</h1>
          <div className="slogan">10 min de preparação</div>
          <div className="price">4.10€</div>

          <div className="desc">
            Sobremesa italiana com leite de coco e coulis de frutos vermelhos.
          </div>

          <div className="slogan">
            ≈ 230 kcal | 14g de gordura | 2g de proteína | 22g de hidratos de carbono
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
            <strong>Inês M.</strong>
            <div className="stars">★★★★☆</div>
            <p>Leve e refrescante! A combinação com frutos vermelhos é deliciosa.</p>
          </div>

          <div className="avaliacao">
            <strong>João T.</strong>
            <div className="stars">★★★★★</div>
            <p>Uma das melhores sobremesas veganas que já provei. Muito suave.</p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";
import falafel from "./Imagens/falafel.jpg";

export default function Falafel() {
  const navigate = useNavigate();

  const handlePedir = () => {
    const novaRefeicao = {
      nome: "Tábua de Falafel com Húmus",
      preco: 6.90,
      calorias: 410,
      descricao: "Croquetes crocantes de grão-de-bico temperados com especiarias do Médio Oriente, servidos com húmus cremoso, salada de pepino e pão pita artesanal.",
      // Não precisa da imagem aqui porque não vais mostrar no carrinho
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
            <img src={falafel} alt="Falafel com Húmus" className="profile-img-comida" />
          </div>

          <h1 className="section-title">Tábua de Falafel com Húmus</h1>
          <div className="slogan">20 min de preparação</div>
          <div className="price">6.90€</div>

          <div className="desc">
            Croquetes crocantes de grão-de-bico temperados com especiarias do Médio Oriente,
            servidos com húmus cremoso, salada de pepino e pão pita artesanal.
          </div>

          <div className="slogan">
            ≈ 410 kcal | 15g de gordura | 18g de proteína | 40g de hidratos de carbono
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
            <strong>Rita B.</strong>
            <div className="stars">★★★★★</div>
            <p>Delicioso! O húmus é super cremoso e o falafel sequinho.</p>
          </div>
          <div className="avaliacao">
            <strong>André G.</strong>
            <div className="stars">★★★★☆</div>
            <p>Opção vegetariana muito bem conseguida. Gostei muito!</p>
          </div>
        </div>
      </div>
    </>
  );
}

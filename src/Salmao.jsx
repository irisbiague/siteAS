import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";
import imagens from "./imagens"; // para buscar a imagem dinamicamente

export default function SalmaoLimao() {
  const navigate = useNavigate();
  const [prato, setPrato] = useState(null);

  useEffect(() => {
    const pratos = JSON.parse(localStorage.getItem("pratosRestaurante") || "[]");
    const pratoEncontrado = pratos.find(p => p.nome === "Salmão ao Molho de Limão");
    if (pratoEncontrado) {
      setPrato(pratoEncontrado);
    }
  }, []);

  const handlePedir = () => {
    if (!prato) return;
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinhoAtual.push(prato);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
    navigate("/carrinho");
  };

  const handleVerRestaurante = () => {
    navigate("/BomSabor");
  };

  if (!prato) {
    return (
      <>
        <Header2 />
        <div className="background">
          <div className="container_prof">
            <p>Este prato não está disponível de momento.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header2 />
      <div className="background">
        <div className="container_prof">
          <div className="imagem-centro">
            <img src={imagens[prato.imagem] || "/default.jpg"} alt={prato.nome} className="profile-img-comida" />
          </div>

          <h1 className="section-title">{prato.nome}</h1>
          <div className="slogan">{prato.tempoPreparo || "20 min de preparação"}</div>
          <div className="price">{prato.preco.toFixed(2)}€</div>

          <div className="desc">{prato.descricao}</div>

          <div className="slogan">
            ≈ {prato.calorias} kcal
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
          <div className="stars">★★★★★</div>

          <div className="section-title">Comentários de Clientes</div>
          <div className="avaliacao">
            <strong>João C.</strong>
            <div className="stars">★★★★★</div>
            <p>Perfeito! O salmão estava suculento e o molho maravilhoso.</p>
          </div>
          <div className="avaliacao">
            <strong>Sara M.</strong>
            <div className="stars">★★★★★</div>
            <p>Acompanhamentos bem pensados. Uma das minhas favoritas!</p>
          </div>
        </div>
      </div>
    </>
  );
}

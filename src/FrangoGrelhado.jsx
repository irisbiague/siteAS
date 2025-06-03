import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";
import frangoImg from "./Imagens/frango.jpg"; // imagem estática de fallback

export default function FrangoGrelhado() {
  const navigate = useNavigate();
  const [prato, setPrato] = useState(null);

  useEffect(() => {
    const pratos = JSON.parse(localStorage.getItem("pratosRestaurante")) || [];
    const pratoEncontrado = pratos.find(
      (p) => p.nome === "Frango Grelhado com Legumes"
    );

    if (pratoEncontrado) {
      setPrato(pratoEncontrado);
    }
  }, []);

  const handlePedir = () => {
    if (!prato) return;

    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinhoAtual.push({
      nome: prato.nome,
      preco: prato.preco,
      calorias: prato.calorias,
      descricao: prato.descricao,
    });
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
        <div className="container_prof">
          <p>Carregando dados da refeição...</p>
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
            <img
              src={require(`./Imagens/${prato.imagem || "frango.jpg"}`)}
              alt={prato.nome}
              className="profile-img-comida"
            />
          </div>

          <h1 className="section-title">{prato.nome}</h1>
          <div className="slogan">25 min de preparação</div>
          <div className="price">{prato.preco.toFixed(2)}€</div>

          <div className="desc">{prato.descricao}</div>

          <div className="slogan">
            ≈ {prato.calorias} kcal
            {prato.gordura && ` | ${prato.gordura}g de gordura`}
            {prato.proteina && ` | ${prato.proteina}g de proteína`}
            {prato.hidratos && ` | ${prato.hidratos}g de hidratos de carbono`}
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
            <strong>Luís P.</strong>
            <div className="stars">★★★★☆</div>
            <p>Frango suculento e legumes frescos, perfeito para uma refeição leve.</p>
          </div>
          <div className="avaliacao">
            <strong>Clara S.</strong>
            <div className="stars">★★★★★</div>
            <p>Gostei muito da combinação e tempero. Voltarei a pedir!</p>
          </div>
        </div>
      </div>
    </>
  );
}

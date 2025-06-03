import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Componentes/Header2";
import sopaImg from "./Imagens/sopa.jpg"; // fallback se nenhuma imagem for encontrada

export default function SopaDoDia() {
  const navigate = useNavigate();
  const [prato, setPrato] = useState(null);

  useEffect(() => {
    const pratos = JSON.parse(localStorage.getItem("pratosRestaurante")) || [];
    const pratoEncontrado = pratos.find(p => p.nome === "Sopa do Dia");

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
          <p>Carregando dados da sopa...</p>
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
              src={require(`./Imagens/${prato.imagem || "sopa.jpg"}`)}
              alt={prato.nome}
              className="profile-img-comida"
            />
          </div>

          <h1 className="section-title">{prato.nome}</h1>
          <div className="slogan">12 min de preparação</div>
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
          <div className="stars">
            <span>★</span><span>★</span><span>★</span><span>☆</span><span>☆</span>
          </div>

          <div className="section-title">Comentários de Clientes</div>

          <div className="avaliacao">
            <strong>Ana C.</strong>
            <div className="stars">
              <span>★</span><span>★</span><span>★</span><span>☆</span><span>☆</span>
            </div>
            <p>Sabor caseiro e reconfortante. Excelente opção para dias frios.</p>
          </div>
          <div className="avaliacao">
            <strong>João D.</strong>
            <div className="stars">
              <span>★</span><span>★</span><span>★</span><span>☆</span><span>☆</span>
            </div>
            <p>Boa quantidade e bem temperada. Voltarei a pedir com certeza!</p>
          </div>
        </div>
      </div>
    </>
  );
}

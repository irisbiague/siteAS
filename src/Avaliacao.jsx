import React, { useEffect, useState } from "react";
import Header2 from "./Componentes/Header2";

export default function Avaliacao() {
  const [tempoRestante, setTempoRestante] = useState(15);
  const [podeAvaliar, setPodeAvaliar] = useState(false);
  const [avaliacao, setAvaliacao] = useState(0);
  const [gorjeta, setGorjeta] = useState("");
  const [telefone, setTelefone] = useState("");

  // Obter o número de telefone automaticamente do localStorage
  useEffect(() => {
    const dadosCliente = JSON.parse(localStorage.getItem("dadosCliente")) || {};
    setTelefone(dadosCliente.telemovel || "");
  }, []);

  useEffect(() => {
    if (tempoRestante > 0) {
      const timer = setTimeout(() => {
        setTempoRestante((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setPodeAvaliar(true);
    }
  }, [tempoRestante]);

  const handleAvaliacao = (estrela) => {
    setAvaliacao(estrela);
    alert(`Obrigado pela sua avaliação: ${estrela} estrela(s)!`);
  };

  const handleEnviarGorjeta = () => {
    if (!gorjeta) {
      alert("Por favor introduza o valor da gorjeta.");
      return;
    }

    if (!telefone) {
      alert("Erro: número de telefone não disponível.");
      return;
    }

    alert(`O pagamento da gorjeta de ${gorjeta}€ será enviado via MBWay para o número ${telefone}.`);
    // Aqui poderias fazer o envio real da gorjeta via API
    setGorjeta("");
  };

  return (
    <>
      <Header2 />
      <div className="background">
        <div className="container_prof">
          <h1 className="section-title">Aguarde pela entrega...</h1>
          {!podeAvaliar ? (
            <p className="desc">
              A sua refeição está a caminho! Estimativa de entrega: <strong>{tempoRestante}s</strong>
            </p>
          ) : (
            <>
              <h2 className="section-title">Avalie o Estafeta</h2>
              <div className="stars clickable">
                {[1, 2, 3, 4, 5].map((estrela) => (
                  <span
                    key={estrela}
                    onClick={() => handleAvaliacao(estrela)}
                    style={{
                      cursor: "pointer",
                      fontSize: "2rem",
                      color: estrela <= avaliacao ? "#FFD700" : "#ccc",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              <div className="gorjeta-section" style={{ marginTop: "20px" }}>
                <h3>Deseja deixar uma gorjeta?</h3>
                <input
                  type="number"
                  placeholder="Valor da gorjeta (€)"
                  value={gorjeta}
                  onChange={(e) => setGorjeta(e.target.value)}
                  style={{ padding: "8px", marginRight: "10px" }}
                />
                <button onClick={handleEnviarGorjeta} className="btn">
                  Enviar Gorjeta
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

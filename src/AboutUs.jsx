import React from "react";
import Header2 from "./Componentes/Header2";
import logo from "./Imagens/logo.png"; // certifica-te de que o caminho está correto


export default function AboutUs() {
  return (
    <>
      <Header2 />
      <div className="background">
        <div className="container_prof about-container">
          <div className="logo-img">
            <img src={logo} alt="Logo BeFit" className="logo-img" />
          </div>

          <h1 className="section-title">Sobre Nós</h1>

          <p className="about_us">
            O desenvolvimento do novo sistema foi pedido pela <strong>BeFit</strong>, uma cadeia de ginásios que quer expandir o seu negócio para a área da restauração e entrega de comida. <br /><br />
            Uma vez que a BeFit tem uma vasta quantidade de clientes que têm como objetivo ter um estilo de vida saudável, esta empresa decidiu explorar o conceito para uma nova plataforma. Tais clientes têm sentido a necessidade de ter algo que lhes permita encontrar, de forma simples e eficaz, restaurantes que respondam às suas necessidades e requisitos nutricionais.
            <br /><br />
            Para isso, a organização identificou a necessidade de desenvolver um novo sistema de informação, com capacidades adequadas ao novo posicionamento do negócio, incluindo uma plataforma que através da formação de um perfil nutricional do cliente, consiga sugerir restaurantes que disponham tanto de refeições adequadas, como de informações nutricionais sobre as mesmas.
          </p>


          <h2 className="section-title">Tem alguma reclamação?</h2>
          <textarea
            className="reclamacao"
            placeholder="Descreva aqui a sua reclamação..."
            rows={6}
          />
        </div>
      </div>
    </>
  );
}

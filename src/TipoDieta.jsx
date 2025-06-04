import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Componentes/Header';

const TipoDieta = () => {
  const [selectedDiet, setSelectedDiet] = useState(null);
  const navigate = useNavigate();

  const selectDiet = (dietName) => {
    setSelectedDiet(dietName);
  };

  const goToPreferences = () => {
    if (selectedDiet) {
      // Atualiza ou cria objeto de preferências
      const preferenciasAtuais = JSON.parse(localStorage.getItem('preferenciasNutricionais')) || {};
      preferenciasAtuais.tipoDieta = selectedDiet.toLowerCase();
      localStorage.setItem('preferenciasNutricionais', JSON.stringify(preferenciasAtuais));

      navigate('/Preferencias');
    }
  };

  const dietas = [
    { nome: 'Mediterrânea', descricao: 'Baseada em alimentos frescos como frutas, legumes, azeite, peixe e grãos integrais.' },
    { nome: 'Detox', descricao: 'Foco em eliminar toxinas do corpo, baseada em sumos, chás e alimentos naturais.' },
    { nome: 'Vegetariana', descricao: 'Elimina carne, focando-se em vegetais, frutas, grãos, legumes e laticínios.' },
    { nome: 'Vegana', descricao: 'Exclui todos os produtos de origem animal, priorizando alimentos de origem vegetal.' },
    { nome: 'Low-Carb', descricao: 'Reduz a ingestão de carboidratos para promover a perda de peso e controlar o açúcar.' },
  ];

  return (
    <>
      <Header />
      <div className="background">
        <div className="container">
          <h1>Escolha o seu tipo de dieta:</h1>
          {dietas.map((dieta) => (
            <div
              key={dieta.nome}
              className={`card ${selectedDiet === dieta.nome ? 'selected' : ''}`}
              onClick={() => selectDiet(dieta.nome)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') selectDiet(dieta.nome); }}
              style={{ cursor: 'pointer' }}
            >
              <h2>Dieta {dieta.nome}</h2>
              <p>{dieta.descricao}</p>
            </div>
          ))}
          <button className="btn" onClick={goToPreferences} disabled={!selectedDiet}>Continuar</button>
        </div>
      </div>
    </>
  );
};

export default TipoDieta;

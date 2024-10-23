import React, { useState } from "react";

const Trivia = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showColors, setShowColors] = useState(false);

  const question = "¿Cuál es el planeta más grande del sistema solar?";
  const options = [
    { id: 1, text: "Tierra", isCorrect: false },
    { id: 2, text: "Júpiter", isCorrect: true },
    { id: 3, text: "Marte", isCorrect: false },
    { id: 4, text: "Venus", isCorrect: false },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.id);
    setIsCorrect(option.isCorrect);
    setShowColors(true);

    // Resalta las respuestas por 2 segundos
    setTimeout(() => {
      setShowColors(false);
    }, 2000);
  };

  const getButtonClass = (option) => {
    if (showColors) {
      if (option.isCorrect) {
        return "correct"; // Verde para la correcta
      }
      if (selectedOption === option.id && !option.isCorrect) {
        return "incorrect"; // Rojo para la incorrecta
      }
    }
    return ""; // Sin color si no ha seleccionado
  };

  return (
    <div>
      <h2>{question}</h2>
      {options.map((option) => (
        <button
          key={option.id}
          className={`option-button ${getButtonClass(option)}`}
          onClick={() => handleOptionClick(option)}
          disabled={showColors} // Desactiva botones después de elegir una opción
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Trivia;

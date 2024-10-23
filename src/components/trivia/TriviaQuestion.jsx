import React, { useState } from "react";

const TriviaQuestion = ({ questionData, onAnswer, showColors }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleClick = (option) => {
    setSelectedAnswer(option);
    onAnswer(option === questionData.correctAnswer, option);
  };

  const getButtonClass = (option) => {
    if (showColors) {
      if (option === questionData.correctAnswer) {
        return "correct"; // Respuesta correcta (verde)
      }
      if (option === selectedAnswer && option !== questionData.correctAnswer) {
        return "incorrect"; // Respuesta seleccionada incorrecta (rojo)
      }
    }
    return ""; // Sin color por defecto
  };

  return (
    <div>
      <h2 className="text-3xl sm:text-5xl mb-4">{questionData.question}</h2>
      {questionData.options.map((option, index) => (
        
        <button
          key={index}
          className={`option-button text-2xl block w-full  bg-blue-700 ${getButtonClass(option)}`}
          onClick={() => handleClick(option)}
          disabled={showColors} // Desactiva después de la selección
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default TriviaQuestion;

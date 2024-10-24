import React, { useState, useEffect, useRef } from "react";

const TriviaQuestion = ({ questionData, onAnswer, showColors }) => {
  const correctSound = useRef(null);
  const errorSound = useRef(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    correctSound.current = new Audio('/correct.mp3');
    errorSound.current = new Audio('/error.mp3');
  }, []); // 
  const handleClick = (option) => {
    // Guarda la opción seleccionada
    setSelectedAnswer(option);
    // Llama a onAnswer con un booleano indicando si es correcta
    onAnswer(option === questionData.correctAnswer, option);
  };

  const getButtonClass = (option) => {
    // Comprueba si el componente debe mostrar colores (es decir, si se deben resaltar las respuestas)
    if (showColors) {
      // Si esta opción es la respuesta correcta
      if (option === questionData.correctAnswer) {
        // Verificar si la opción correcta también fue seleccionada por el usuario
        if (option === selectedAnswer) {
          // Reproduce el sonido correct solo si la opción seleccionada es correcta
          if (correctSound.current) {
            correctSound.current.play();
          }
        }
        // Devuelve la clase "correct" (verde)
        return "correct";
      }
  
      // Si la opción seleccionada NO es correcta
      if (option === selectedAnswer && option !== questionData.correctAnswer) {
        // Reproduce el sonido error
        if (errorSound.current) {
          errorSound.current.play();
        }
        // Devuelve la clase "incorrect" (rojo)
        return "incorrect";
      }
    }
  
    // Si no se cumple ninguna condición, no asigna ninguna clase
    return "";
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

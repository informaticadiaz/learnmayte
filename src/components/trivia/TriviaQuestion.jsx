import React, { useState, useEffect, useRef } from "react";

const TriviaQuestion = ({ questionData, onAnswer, showColors }) => {
  const correctSound = useRef(null);
  const errorSound = useRef(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    correctSound.current = new Audio('/correct.mp3');
    errorSound.current = new Audio('/error.mp3');
  }, []);

  const handleClick = (option) => {
    setSelectedAnswer(option);
    onAnswer(option === questionData.correctAnswer, option);

    // Reproduce el sonido en base a si la respuesta es correcta o incorrecta
    if (option === questionData.correctAnswer) {
      if (correctSound.current) {
        correctSound.current.play();
      }
    } else {
      if (errorSound.current) {
        errorSound.current.play();
      }
    }
  };

  const getButtonClass = (option) => {
    if (showColors) {
      if (option === questionData.correctAnswer) {
        return "correct corazon"; // Clase correcta
      }
      if (option === selectedAnswer && option !== questionData.correctAnswer) {
        return "incorrect corazon"; // Clase incorrecta
      }
    }
    return ""; // Sin clase adicional
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl sm:text-5xl mb-4">{questionData.question}</h2>
      {questionData.options.map((option, index) => (
        <button
          key={index}
          className={`text-2xl block w-full  bg-blue-700 my-4 p-2 rounded ${getButtonClass(option)}`}
          onClick={() => handleClick(option)}
          disabled={showColors} // Desactiva después de la selección
        >
          {option}
        </button>
      ))}

      {/* Mostrar la explicación si está presente */}
      {showColors && questionData.explanation && (
        <div className="mt-4 text-gray-600">
          {questionData.explanation}
        </div>
      )}
    </div>
  );
};

export default TriviaQuestion;

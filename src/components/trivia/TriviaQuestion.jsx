import React from "react";

const TriviaQuestion = ({ questionData, onAnswer }) => {
  const handleOptionClick = (option) => {
    const isCorrect = option === questionData.correctAnswer;
    onAnswer(isCorrect);
  };

  return (
    <div>
      <h2 className="text-2xl sm:text-5xl m-8">{questionData.question}</h2>
      {questionData.options.map((option, index) => (
        <button key={index} onClick={() => handleOptionClick(option)}
        className="m-auto mt-2 w-3/4 rounded bg-blue-800 p-2 text-2xl text-slate-100">
          {option}
        </button>
      ))}
    </div>
  );
};

export default TriviaQuestion;

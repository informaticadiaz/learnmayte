import React, { useState } from "react";
import TriviaQuestion from "./TriviaQuestion";
import triviaData from "./triviaData";

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState(null); // Estado para el tema seleccionado
  const [selectedSubtopic, setSelectedSubtopic] = useState(null); // Estado para el subtema seleccionado
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState(null);

  const handleAnswer = (isCorrect) => {
    // Muestra la respuesta correcta durante un segundo
    setFeedback(
      isCorrect
        ? "¡Correcto!"
        : `Incorrecto. La respuesta es ${triviaData[selectedTopic].subtopics[selectedSubtopic][currentQuestion].correctAnswer}`
    );
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setFeedback(null);
      setCurrentQuestion(currentQuestion + 1);
    }, 1000);
  };

  // Maneja la selección de tema
  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
    setSelectedSubtopic(null); // Restablece el subtema
    setScore(0);
    setCurrentQuestion(0);
  };

  // Maneja la selección de subtema
  const handleSubtopicSelection = (subtopic) => {
    setSelectedSubtopic(subtopic);
    setScore(0);
    setCurrentQuestion(0);
  };

  // Pantalla de selección de temas
  if (!selectedTopic) {
    return (
      <div>
        <h1 className="m-8 text-2xl sm:text-5xl">Elige un tema para la trivia</h1>
        {Object.keys(triviaData).map((topic) => (
          <button className="m-auto mt-2 w-3/4 rounded bg-blue-800 p-2 text-2xl text-slate-100" key={topic} onClick={() => handleTopicSelection(topic)}
          >
            {triviaData[topic].name}
          </button>
        ))}
      </div>
    );
  }

  // Pantalla de selección de subtemas
  if (selectedTopic && !selectedSubtopic) {
    return (
      <div>
        <h1 className="text-2xl sm:text-5xl m-8">Elige un tema para {triviaData[selectedTopic].name}</h1>
        {Object.keys(triviaData[selectedTopic].subtopics).map((subtopic) => (
          <button
            key={subtopic}
            onClick={() => handleSubtopicSelection(subtopic)}
            className="m-auto mt-2 w-3/4 rounded bg-blue-800 p-2 text-2xl text-slate-100"
          >
            {subtopic}
          </button>
        ))}
      </div>
    );
  }

  // Pantalla de preguntas
  return (
    <div>
      <h1>
        Trivia sobre {selectedSubtopic} en {triviaData[selectedTopic].name}
      </h1>
      {currentQuestion <
      triviaData[selectedTopic].subtopics[selectedSubtopic].length ? (
        <>
          <TriviaQuestion
            questionData={
              triviaData[selectedTopic].subtopics[selectedSubtopic][
                currentQuestion
              ]
            }
            onAnswer={handleAnswer}
          />
          {feedback && <p>{feedback}</p>}
        </>
      ) : (
        <p>
          ¡Has completado la trivia! Tu puntaje es {score} de{" "}
          {triviaData[selectedTopic].subtopics[selectedSubtopic].length}.
          <button onClick={() => setSelectedTopic(null)}>
            Elige otro tema
          </button>
        </p>
      )}
    </div>
  );
};

export default App;

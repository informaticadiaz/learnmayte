import React, { useState, useEffect } from 'react';

export default function AntesyDespues() {
  const [generatedNumber, setGeneratedNumber] = useState(0);
  const [beforeNumber, setBeforeNumber] = useState('');
  const [afterNumber, setAfterNumber] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);
  const [showRetryButton, setShowRetryButton] = useState(false);

  useEffect(() => {
    generateRandomNumber();
  }, [attempts]); // Se actualiza el número generado cada vez que cambia el número de intentos

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    setGeneratedNumber(randomNumber);
  };

  const checkAnswer = () => {
    const before = parseInt(beforeNumber);
    const after = parseInt(afterNumber);
    const correctBefore = generatedNumber - 1;
    const correctAfter = generatedNumber + 1;

    if (before === correctBefore && after === correctAfter) {
      setResultMessage('¡Respuesta correcta!');
      setCorrectAttempts(correctAttempts + 1);
    } else {
      setResultMessage('Respuesta incorrecta, intenta de nuevo.');
      setIncorrectAttempts(incorrectAttempts + 1);
    }

    setAttempts(attempts + 1);
    setBeforeNumber('');
    setAfterNumber('');

    if (attempts === 9) {
      setShowRetryButton(true);
      if (correctAttempts > 7) {
        setResultMessage('¡Prueba superada!');
      } else {
        setResultMessage('No pasaste la prueba.');
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  };

  const retryTest = () => {
    setShowRetryButton(false);
    setResultMessage('');
    setAttempts(0);
    setCorrectAttempts(0);
    setIncorrectAttempts(0);
    generateRandomNumber();
  };

  return (
    <div className="mx-auto p-10 bg-slate-900 h-screen">
      <h1 className="container mx-auto text-center text-2xl font-semibold mb-4 text-slate-300">Antes y Después</h1>
      <p className="container mx-auto text-center text-xl font-semibold mb-4 text-slate-300">Adivina el número</p>
      <p className="text-center text-lg mt-2 text-slate-300">{resultMessage}</p>
      <div className="flex items-center justify-center mt-4">
        <input
          type="number"
          className="border rounded py-2 px-4 mr-2"
          placeholder="Antes"
          value={beforeNumber}
          onChange={(e) => setBeforeNumber(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={showRetryButton}
        />
        <span className="mx-4 text-slate-300">{generatedNumber}</span>
        <input
          type="number"
          className="border rounded py-2 px-4 ml-2"
          placeholder="Después"
          value={afterNumber}
          onChange={(e) => setAfterNumber(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={showRetryButton}
        />
      </div>
      <div className="text-center text-lg mt-2 text-slate-300">
      {showRetryButton ? (
        <div className="flex justify-center my-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={retryTest}
          >
            Hacer prueba otra vez
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={checkAnswer}
          >
            Verificar respuesta
          </button>
        </div>
      )}
      <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-4"
          >
           Aciertos: {correctAttempts}
        </button>
        <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 mx-4"
          >
           Errores: {incorrectAttempts}
        </button>
        <p className="text-center text-lg mt-2 text-slate-300">Intentos restantes: {10 - attempts}</p>        
      </div>
    </div>
  );
}

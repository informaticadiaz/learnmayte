import React, { useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import { useLogic } from './utils/useLogic';

export default function AntesyDespues() {
  const {
    generatedNumber,
    beforeNumber,
    afterNumber,
    resultMessage,
    attempts,
    correctAttempts,
    incorrectAttempts,
    showRetryButton,
    setBeforeNumber,
    setAfterNumber,
    generateRandomNumber,
    checkAnswer,
    retryTest,
  } = useLogic();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  return (
    

    <MainLayout>
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
      </MainLayout>    
  );
}

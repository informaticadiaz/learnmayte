import React, { useEffect } from "react";

import { useLogic } from "./utils/useLogic";

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
    if (event.key === "Enter") {
      checkAnswer();
    }
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  return (
    <div className="mx-auto h-screen bg-slate-900 p-10">
      <h1 className="container mx-auto mb-4 text-center text-2xl font-semibold text-slate-300">
        Antes y Después
      </h1>
      <p className="container mx-auto mb-4 text-center text-xl font-semibold text-slate-300">
        Adivina el número
      </p>
      <p className="mt-2 text-center text-lg text-slate-300">{resultMessage}</p>
      <div className="mt-4 flex items-center justify-center">
        <input
          type="number"
          className="w-20 rounded border py-2 text-center sm:mr-2"
          placeholder="Antes"
          value={beforeNumber}
          onChange={(e) => setBeforeNumber(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={showRetryButton}
        />
        <span className="mx-4 text-slate-300">{generatedNumber}</span>
        <input
          type="number"
          className="w-20 rounded border py-2 text-center sm:ml-2 sm:px-4"
          placeholder="Después"
          value={afterNumber}
          onChange={(e) => setAfterNumber(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={showRetryButton}
        />
      </div>
      <div className="mt-2 text-center text-lg text-slate-300">
        {showRetryButton ? (
          <div className="my-4 flex justify-center">
            <button
              className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={retryTest}
            >
              Hacer prueba otra vez
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={checkAnswer}
            >
              Verificar respuesta
            </button>
          </div>
        )}
        <button className="mx-4 mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Aciertos: {correctAttempts}
        </button>
        <button className="mx-4 mt-4 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
          Errores: {incorrectAttempts}
        </button>
        <p className="mt-2 text-center text-lg text-slate-300">
          Intentos restantes: {10 - attempts}
        </p>
      </div>
    </div>
  );
}

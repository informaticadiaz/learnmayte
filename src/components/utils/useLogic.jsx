import { useState } from "react";

export function useLogic() {
  const [generatedNumber, setGeneratedNumber] = useState(0);
  const [beforeNumber, setBeforeNumber] = useState("");
  const [afterNumber, setAfterNumber] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);
  const [showRetryButton, setShowRetryButton] = useState(false);

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
      setResultMessage("¡Respuesta correcta!");
      setCorrectAttempts(correctAttempts + 1);
    } else {
      setResultMessage("Respuesta incorrecta, intenta de nuevo.");
      setIncorrectAttempts(incorrectAttempts + 1);
    }

    setAttempts(attempts + 1);
    setBeforeNumber("");
    setAfterNumber("");

    if (attempts === 9) {
      setShowRetryButton(true);
      if (correctAttempts > 7) {
        setResultMessage("¡Prueba superada!");
      } else {
        setResultMessage("No pasaste la prueba.");
      }
    }
  };

  const retryTest = () => {
    setShowRetryButton(false);
    setResultMessage("");
    setAttempts(0);
    setCorrectAttempts(0);
    setIncorrectAttempts(0);
    generateRandomNumber();
  };

  return {
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
    setResultMessage,
    setAttempts,
    setCorrectAttempts,
    setIncorrectAttempts,
    setShowRetryButton,
    generateRandomNumber,
    checkAnswer,
    retryTest,
  };
}

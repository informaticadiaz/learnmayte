import React, { useState } from "react";

const IncrementoDos = () => {
  const [numeroInicial] = useState(Math.floor(Math.random() * 1000)); // Número aleatorio entre 0 y 999
  const [respuestas, setRespuestas] = useState(Array(5).fill("")); // Array de 5 inputs
  const [aciertos, setAciertos] = useState(Array(5).fill(null)); // Array para almacenar aciertos

  const handleInputChange = (index, value) => {
    const nuevosValores = [...respuestas];
    nuevosValores[index] = value;
    setRespuestas(nuevosValores);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoAciertos = respuestas.map((respuesta, index) => {
      // Comprobar si la respuesta es correcta
      const valorEsperado = numeroInicial + (index + 1) * 2; // Sumar 2 a partir del número inicial
      return parseInt(respuesta) === valorEsperado;
    });
    setAciertos(nuevoAciertos);
  };

  return (
    <div>
      <h3>Contar hacia adelante sumando dos unidades</h3>
      <div>Número inicial: {numeroInicial}</div>
      <form onSubmit={handleSubmit}>
        {respuestas.map((respuesta, index) => (
          <div key={index}>
            <input
              type="number"
              value={respuesta}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder={`Respuesta ${index + 1}`}
            />
            {aciertos[index] !== null && (
              <span>{aciertos[index] ? " ¡Correcto!" : " Incorrecto"}</span>
            )}
          </div>
        ))}
        <button type="submit">Comprobar</button>
      </form>
    </div>
  );
};

export default IncrementoDos;

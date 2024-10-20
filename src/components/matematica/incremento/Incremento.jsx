import React, { useState } from "react";

const Incremento = () => {
  // Generar un número aleatorio entre 0 y 999
  const generarNumeroAleatorio = () => Math.floor(Math.random() * 1000);

  const [numeroInicial, setNumeroInicial] = useState(generarNumeroAleatorio());
  const [respuestas, setRespuestas] = useState(Array(5).fill(""));
  const [aciertos, setAciertos] = useState(Array(5).fill(null));

  const handleChange = (index, value) => {
    // Actualizar el valor de la respuesta del input correspondiente
    const newRespuestas = [...respuestas];
    newRespuestas[index] = value;
    setRespuestas(newRespuestas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoAciertos = respuestas.map((respuesta, index) => {
      // Comprobar si la respuesta es correcta
      const valorEsperado = numeroInicial + index + 1; // Incrementar desde el número inicial
      return parseInt(respuesta) === valorEsperado;
    });
    setAciertos(nuevoAciertos);
  };

  return (
    <div>
      <h3>Contar hacia adelante</h3>
      <div>
        <p>Número inicial: {numeroInicial}</p>
        <form onSubmit={handleSubmit}>
          {[...Array(5)].map((_, index) => (
            <div key={index} className="contar-container">
              <input
                type="number"
                value={respuestas[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder={`Respuesta ${index + 1}`}
              />
              {aciertos[index] !== null && (
                <span>{aciertos[index] ? "✔️" : "❌"}</span>
              )}
            </div>
          ))}
          <button type="submit">Comprobar</button>
        </form>
      </div>
      {aciertos.every((acierto) => acierto === true) && (
        <p>¡Todas las respuestas son correctas!</p>
      )}
    </div>
  );
};

export default Incremento;
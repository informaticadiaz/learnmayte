import React, { useState } from "react";
import { Link } from "react-router-dom";

const RestarTresCifras = () => {
  const generarNumero = () => {
    const centena = Math.floor(Math.random() * 9) + 1; // de 1 a 9
    const decena = Math.floor(Math.random() * 10); // de 0 a 9
    const unidad = Math.floor(Math.random() * 10); // de 0 a 9
    return { centena, decena, unidad };
  };

  const generarNumerosValidos = () => {
    let minuendo = generarNumero();
    let sustraendo = generarNumero();

    // Asegurarse de que el sustraendo no sea mayor que el minuendo
    while (calcularResultado(sustraendo) > calcularResultado(minuendo)) {
      sustraendo = generarNumero();
    }

    return { minuendo, sustraendo };
  };

  const calcularResultado = (n) => n.centena * 100 + n.decena * 10 + n.unidad;

  const [numeros, setNumeros] = useState(() => generarNumerosValidos());
  const [respuestaCentenas, setRespuestaCentenas] = useState("");
  const [respuestaDecenas, setRespuestaDecenas] = useState("");
  const [respuestaUnidades, setRespuestaUnidades] = useState("");
  const [acierto, setAcierto] = useState(null);

  // Nuevos estados para pedir decena y centena
  const [pediDecena, setPediDecena] = useState(false);
  const [pediCentena, setPediCentena] = useState(false);

  const handlePedirDecena = () => {
    if (numeros.minuendo.decena > 0) {
      setNumeros((prev) => ({
        ...prev,
        minuendo: {
          ...prev.minuendo,
          decena: prev.minuendo.decena - 1,
          unidad: prev.minuendo.unidad + 10,
        },
      }));
      setPediDecena(true);
    }
  };

  const handlePedirCentena = () => {
    if (numeros.minuendo.centena > 0) {
      setNumeros((prev) => ({
        ...prev,
        minuendo: {
          ...prev.minuendo,
          centena: prev.minuendo.centena - 1,
          decena: prev.minuendo.decena + 10,
        },
      }));
      setPediCentena(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultadoCorrecto =
      calcularResultado(numeros.minuendo) -
      calcularResultado(numeros.sustraendo);

    const resultadoCentenas = Math.floor(resultadoCorrecto / 100);
    const resultadoDecenas = Math.floor((resultadoCorrecto % 100) / 10);
    const resultadoUnidades = resultadoCorrecto % 10;

    if (
      parseInt(respuestaCentenas) === resultadoCentenas &&
      parseInt(respuestaDecenas) === resultadoDecenas &&
      parseInt(respuestaUnidades) === resultadoUnidades
    ) {
      setAcierto(true);
    } else {
      setAcierto(false);
    }
  };

  return (
    <div className="p-20 sm:text-7xl">
      <h3>Resta de tres cifras</h3>
      <div className="grid grid-cols-4 gap-4 m-4">
        <div></div>
        <div></div>
        {/* Botones para pedir decena o centena */}
        <div>
          {!pediDecena &&
            numeros.minuendo.unidad < numeros.sustraendo.unidad && (
              <button
                onClick={handlePedirDecena}
                className="bg-blue-500 text-white p-2 rounded m-2 text-xl"
              >
                Pedir Decena
              </button>
            )}
        </div>
        <div>
          {!pediCentena &&
            numeros.minuendo.decena < numeros.sustraendo.decena && (
              <button
                onClick={handlePedirCentena}
                className="bg-blue-500 text-white p-2 rounded m-2 text-xl"
              >
                Pedir Centena
              </button>
            )}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 m-4">
        <div></div>
        <div className="celda">{numeros.minuendo.centena}</div>
        <div className="celda">{numeros.minuendo.decena}</div>
        <div className="celda">{numeros.minuendo.unidad}</div>
        <div></div>
      </div>
      <div className="grid grid-cols-4 gap-4 m-4">
        <div className="font">-</div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="grid grid-cols-4 gap-4 m-4">
        <div></div>
        <div className="celda">{numeros.sustraendo.centena}</div>
        <div className="celda">{numeros.sustraendo.decena}</div>
        <div className="celda">{numeros.sustraendo.unidad}</div>
        <div></div>
      </div>
      <div className="border"></div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-4 m-4">
          <div></div>
          <input
            type="number"
            value={respuestaCentenas}
            onChange={(e) => setRespuestaCentenas(e.target.value)}
            className="h-20 w-20 text-center"
          />
          <input
            type="number"
            value={respuestaDecenas}
            onChange={(e) => setRespuestaDecenas(e.target.value)}
            className="h-20 w-20 text-center"
          />
          <input
            type="number"
            value={respuestaUnidades}
            onChange={(e) => setRespuestaUnidades(e.target.value)}
            className="h-20 w-20 text-center"
          />
        </div>
        <button type="submit">Comprobar</button>
      </form>
      {acierto === true && <p>¡Correcto!</p>}
      {acierto === false && <p>Respuesta incorrecta. Intenta de nuevo.</p>}

      <div className="grid grid-cols-2 gap-4 mt-8">
        <Link
          to="/matematica"
          className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold text-xl p-2 rounded"
        >
          Volver
        </Link>

        <button
          onClick={() => setNumeros(generarNumerosValidos())}
          className="w-full bg-green-500 text-white p-2 text-xl rounded"
        >
          Nueva Cuenta
        </button>
      </div>
    </div>
  );
};

export default RestarTresCifras;

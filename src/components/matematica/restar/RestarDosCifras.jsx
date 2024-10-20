import React, { useState } from "react";
import { Link } from "react-router-dom";

const RestarDosCifras = () => {
  const generarNumero = () => {
    const decena = Math.floor(Math.random() * 9) + 1; // de 1 a 9
    const unidad = Math.floor(Math.random() * 10); // de 0 a 9
    return { decena, unidad };
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

  const calcularResultado = (n) => n.decena * 10 + n.unidad;

  const [numeros, setNumeros] = useState(() => generarNumerosValidos());
  const [respuestaUnidades, setRespuestaUnidades] = useState("");
  const [respuestaDecenas, setRespuestaDecenas] = useState("");
  const [acierto, setAcierto] = useState(null);
  const [decenaModificada, setDecenaModificada] = useState(null); // Estado para la decena modificada
  const [unidadModificada, setUnidadModificada] = useState(null); // Estado para la unidad modificada

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultadoCorrecto =
      calcularResultado(numeros.minuendo) -
      calcularResultado(numeros.sustraendo);

    const resultadoDecenas = Math.floor(resultadoCorrecto / 10);
    const resultadoUnidades = resultadoCorrecto % 10;

    if (
      parseInt(respuestaDecenas) === resultadoDecenas &&
      parseInt(respuestaUnidades) === resultadoUnidades
    ) {
      setAcierto(true);
    } else {
      setAcierto(false);
    }
  };

  // Función para determinar si es necesario pedir una decena
  const necesitaPedirDecena =
    numeros.minuendo.unidad < numeros.sustraendo.unidad;

  // Función para quitar una decena y transferirla a la unidad
  const pedirDecena = () => {
    if (necesitaPedirDecena && numeros.minuendo.decena > 0) {
      setDecenaModificada(numeros.minuendo.decena - 1); // Quitar una decena
      setUnidadModificada(numeros.minuendo.unidad + 10); // Transferir la decena a la unidad
    }
  };

  return (
    <div className="p-20 text-center text-4xl sm:text-7xl">
      <h3 className="my-8 text-center sm:text-6xl">Resta de dos cifras</h3>
      <div className="mt-12 grid grid-cols-3 gap-4">
        <div></div>
        <div>
          {/* Mostrar la decena modificada si existe */}
          {decenaModificada !== null
            ? decenaModificada
            : numeros.minuendo.decena}
        </div>
        <div>
          {/* Mostrar la unidad modificada si existe */}
          {unidadModificada !== null
            ? unidadModificada
            : numeros.minuendo.unidad}
          {necesitaPedirDecena && (
            <div>
              <button
                className="ml-4 text-2xl text-red-500 underline"
                onClick={pedirDecena}
              >
                Pedir Decena
              </button>
            </div>
          )}
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="font">-</div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div></div>
        <div>{numeros.sustraendo.decena}</div>
        <div>{numeros.sustraendo.unidad}</div>
        <div></div>
      </div>
      <div className="m-auto my-8 border"></div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 place-items-center gap-4">
          <div></div>

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

        {acierto === true && <p className="mt-8 text-2xl">¡Correcto!</p>}
        {acierto === false && (
          <p className="mt-8 text-2xl">
            Respuesta incorrecta. Intenta de nuevo.
          </p>
        )}

        <button
          type="submit"
          className="m-auto mt-4 w-full rounded bg-blue-800 p-2 text-xl text-slate-100"
        >
          Comprobar
        </button>
      </form>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <Link
          to="/matematica"
          className="w-full rounded bg-purple-500 p-2 text-xl font-bold text-white hover:bg-purple-700"
        >
          Volver
        </Link>

        <button
          onClick={() => setNumeros(generarNumerosValidos())}
          className="w-full rounded bg-green-500 p-2 text-xl text-white"
        >
          Nueva Cuenta
        </button>
      </div>
    </div>
  );
};

export default RestarDosCifras;

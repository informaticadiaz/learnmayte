import React, { useState, useEffect } from "react";

const EvaluacionMultiplicacion = () => {
  const [numero, setNumero] = useState(0);
  const [multiplicador, setMultiplicador] = useState(0);

  const [unidad, setUnidad] = useState("");
  const [acarreoUnidad, setAcarreoUnidad] = useState("");

  const [decena, setDecena] = useState("");
  const [acarreoDecena, setAcarreoDecena] = useState("");

  const [centena, setCentena] = useState("");
  const [acarreoCentena, setAcarreoCentena] = useState("");

  const [unidadMil, setUnidadMil] = useState("");
  const [acarreoMil, setAcarreoMil] = useState("");

  const [resultado, setResultado] = useState("");

  const [unidades, setUnidades] = useState(0);
  const [decenas, setDecenas] = useState(0);
  const [centenas, setCentenas] = useState(0);
  const [unidadesMil, setUnidadesMil] = useState(0);

  const separarNumero = (num) => {
    setUnidades(num % 10);
    setDecenas(Math.floor((num % 100) / 10));
    setCentenas(Math.floor((num % 1000) / 100));
    setUnidadesMil(Math.floor(num / 1000));
  };

  useEffect(() => {
    const unidadAleatoria = Math.floor(Math.random() * 10);
    const decenaAleatoria = Math.floor(Math.random() * 10);
    const centenaAleatoria = Math.floor(Math.random() * 10);
    const unidadMilAleatoria = Math.floor(Math.random() * 10);
    const multiplicadorAleatorio = Math.floor(Math.random() * 5) + 2;

    const nuevoNumero =
      unidadMilAleatoria * 1000 +
      centenaAleatoria * 100 +
      decenaAleatoria * 10 +
      unidadAleatoria;
    setNumero(nuevoNumero);
    setMultiplicador(multiplicadorAleatorio);
    separarNumero(nuevoNumero);
  }, []);

  // Función para evaluar la multiplicación y los acarreos
  const evaluarMultiplicacion = () => {
    let mensaje = "Evaluación: ";
    let aciertos = true;

    // Evaluar unidad
    if (parseInt(unidad) !== (unidades * multiplicador) % 10) {
      aciertos = false;
      mensaje += "Error en la unidad. ";
    }

    // Evaluar acarreo de unidad si es diferente de 0
    if (
      acarreoUnidad &&
      parseInt(acarreoUnidad) !== Math.floor((unidades * multiplicador) / 10)
    ) {
      aciertos = false;
      mensaje += "Error en el acarreo de unidad. ";
    }

    // Evaluar decena
    if (
      parseInt(decena) !==
      (decenas * multiplicador + Math.floor((unidades * multiplicador) / 10)) %
        10
    ) {
      aciertos = false;
      mensaje += "Error en la decena. ";
    }

    // Evaluar acarreo de decena si es diferente de 0
    if (
      acarreoDecena &&
      parseInt(acarreoDecena) !==
        Math.floor(
          (decenas * multiplicador +
            Math.floor((unidades * multiplicador) / 10)) /
            10,
        )
    ) {
      aciertos = false;
      mensaje += "Error en el acarreo de decena. ";
    }

    // Evaluar centena
    if (
      parseInt(centena) !==
      (centenas * multiplicador + Math.floor((decenas * multiplicador) / 10)) %
        10
    ) {
      aciertos = false;
      mensaje += "Error en la centena. ";
    }

    // Evaluar acarreo de centena si es diferente de 0
    if (
      acarreoCentena &&
      parseInt(acarreoCentena) !==
        Math.floor(
          (centenas * multiplicador +
            Math.floor((decenas * multiplicador) / 10)) /
            10,
        )
    ) {
      aciertos = false;
      mensaje += "Error en el acarreo de centena. ";
    }

    // Evaluar unidad de mil
    if (
      parseInt(unidadMil) !==
      (unidadesMil * multiplicador +
        Math.floor((centenas * multiplicador) / 10)) %
        10
    ) {
      aciertos = false;
      mensaje += "Error en la unidad de mil. ";
    }

    // Evaluar acarreo de mil si es diferente de 0
    if (
      acarreoMil &&
      parseInt(acarreoMil) !==
        Math.floor(
          (unidadesMil * multiplicador +
            Math.floor((centenas * multiplicador) / 10)) /
            10,
        )
    ) {
      aciertos = false;
      mensaje += "Error en el acarreo de unidad de mil. ";
    }

    if (aciertos) {
      mensaje = "¡Todo correcto!";
    }

    setResultado(mensaje);
  };

  return (
    <div className="text-center p-20">
      <h1 className="text-5xl">Evaluación de Multiplicación</h1>
      <p className="text-4xl p-8">
        {numero} x {multiplicador}
      </p>
      <div className="p-20 m-auto">
        <div className="text-4xl grid grid-cols-5 my-4 place-items-center">
          <div className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-20 h-20 flex items-center justify-center">
            DM
          </div>
          <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-20 h-20 flex items-center justify-center">
            UM
          </div>
          <div className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-20 h-20 flex items-center justify-center">
            C
          </div>
          <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-20 h-20 flex items-center justify-center">
            D
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20 h-20 flex items-center justify-center">
            U
          </div>
        </div>
        <div className="text-4xl grid grid-cols-5 place-items-center">
          <div></div>
          <input
            className="w-20 h-20 rounded text-center text-white bg-red-500"
            type="number"
            value={acarreoCentena}
            onChange={(e) => setAcarreoCentena(e.target.value)}
          />
          <input
            className="w-20 h-20 roundad text-center text-white bg-yellow-500"
            type="number"
            value={acarreoDecena}
            onChange={(e) => setAcarreoDecena(e.target.value)}
          />
          <input
            className="w-20 h-20 rounded text-center text-white bg-green-500"
            type="number"
            value={acarreoUnidad}
            onChange={(e) => setAcarreoUnidad(e.target.value)}
          />
        </div>
        {/* Sección gráfica para mostrar las posiciones descompuestas del número */}
        <div className="text-4xl grid grid-cols-5 my-4 place-items-center">
          <div></div>
          <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-20 h-20 flex items-center justify-center">
            {unidadesMil}
          </div>
          <div className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-20 h-20 flex items-center justify-center">
            {centenas}
          </div>
          <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-20 h-20 flex items-center justify-center">
            {decenas}
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20 h-20 flex items-center justify-center">
            {unidades}
          </div>
          <div></div>
          <div className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded w-20 h-20 flex items-center justify-center">
            x
          </div>
          <div></div>
          <div></div>
          <div className="my-4 bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded w-20 h-20 flex items-center justify-center">
            {multiplicador}
          </div>
        </div>
        <hr className="mb-2 border-yellow-200 border-2" />
        <div className="text-4xl grid grid-cols-5 place-items-center">
          <input
            className="w-20 h-20 rounded  text-center bg-purple-500 hover:bg-purple-700 text-white font-bold"
            type="number"
            value={acarreoMil}
            onChange={(e) => setAcarreoMil(e.target.value)}
          />
          <input
            className="w-20 h-20 rounded  text-center bg-red-500 hover:bg-red-700 text-white font-bold"
            type="number"
            value={unidadMil}
            onChange={(e) => setUnidadMil(e.target.value)}
          />
          <input
            className="w-20 h-20 rounded  text-center bg-yellow-500 hover:bg-yellow-700 text-white font-bold "
            type="number"
            value={centena}
            onChange={(e) => setCentena(e.target.value)}
          />
          <input
            className="w-20 h-20 rounded  text-center bg-green-500 hover:bg-green-700 text-white font-bold"
            type="number"
            value={decena}
            onChange={(e) => setDecena(e.target.value)}
          />
          <input
            className="w-20 h-20 rounded  text-center bg-blue-500 hover:bg-blue-700 text-white font-bold"
            type="number"
            value={unidad}
            onChange={(e) => setUnidad(e.target.value)}
          />
        </div>
      </div>

      <button onClick={evaluarMultiplicacion}>Evaluar</button>

      <p>{resultado}</p>
    </div>
  );
};

export default EvaluacionMultiplicacion;

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
    <div className="p-20 text-center">
      <h1 className="text-5xl">Evaluación de Multiplicación</h1>
      <p className="p-8 text-4xl">
        {numero} x {multiplicador}
      </p>
      <div className="m-auto p-20">
        <div className="my-4 grid grid-cols-5 place-items-center text-4xl">
          <div className="flex h-20 w-20 items-center justify-center rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700">
            DM
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
            UM
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700">
            C
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
            D
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            U
          </div>
        </div>
        <div className="grid grid-cols-5 place-items-center text-4xl">
          <div></div>
          <input
            className="h-20 w-20 rounded bg-red-500 text-center text-white"
            type="number"
            value={acarreoCentena}
            onChange={(e) => setAcarreoCentena(e.target.value)}
          />
          <input
            className="roundad h-20 w-20 bg-yellow-500 text-center text-white"
            type="number"
            value={acarreoDecena}
            onChange={(e) => setAcarreoDecena(e.target.value)}
          />
          <input
            className="h-20 w-20 rounded bg-green-500 text-center text-white"
            type="number"
            value={acarreoUnidad}
            onChange={(e) => setAcarreoUnidad(e.target.value)}
          />
        </div>
        {/* Sección gráfica para mostrar las posiciones descompuestas del número */}
        <div className="my-4 grid grid-cols-5 place-items-center text-4xl">
          <div></div>
          <div className="flex h-20 w-20 items-center justify-center rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
            {unidadesMil}
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700">
            {centenas}
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
            {decenas}
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            {unidades}
          </div>
          <div></div>
          <div className="flex h-20 w-20 items-center justify-center rounded bg-zinc-500 px-4 py-2 font-bold text-white hover:bg-zinc-700">
            x
          </div>
          <div></div>
          <div></div>
          <div className="my-4 flex h-20 w-20 items-center justify-center rounded bg-zinc-500 px-4 py-2 font-bold text-white hover:bg-zinc-700">
            {multiplicador}
          </div>
        </div>
        <hr className="mb-2 border-2 border-yellow-200" />
        <div className="grid grid-cols-5 place-items-center text-4xl">
          <input
            className="h-20 w-20 rounded bg-purple-500 text-center font-bold text-white hover:bg-purple-700"
            type="number"
            value={acarreoMil}
            onChange={(e) => setAcarreoMil(e.target.value)}
          />
          <input
            className="h-20 w-20 rounded bg-red-500 text-center font-bold text-white hover:bg-red-700"
            type="number"
            value={unidadMil}
            onChange={(e) => setUnidadMil(e.target.value)}
          />
          <input
            className="h-20 w-20 rounded bg-yellow-500 text-center font-bold text-white hover:bg-yellow-700"
            type="number"
            value={centena}
            onChange={(e) => setCentena(e.target.value)}
          />
          <input
            className="h-20 w-20 rounded bg-green-500 text-center font-bold text-white hover:bg-green-700"
            type="number"
            value={decena}
            onChange={(e) => setDecena(e.target.value)}
          />
          <input
            className="h-20 w-20 rounded bg-blue-500 text-center font-bold text-white hover:bg-blue-700"
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

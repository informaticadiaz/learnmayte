import { useState, useEffect } from "react";

export default function SumarDosCifras() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [respuestaUnidades, setRespuestaUnidades] = useState("");
  const [respuestaDecenas, setRespuestaDecenas] = useState("");

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 90) + 10);
    setNum2(Math.floor(Math.random() * 90) + 10);
  }, []);

  const handleChangeUnidades = (e) => {
    setRespuestaUnidades(e.target.value);
  };

  const handleChangeDecenas = (e) => {
    setRespuestaDecenas(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultado = num1 + num2;
    const respuesta = parseInt(respuestaDecenas + respuestaUnidades);

    if (respuesta === resultado) {
      alert("¡Respuesta correcta!");
    } else {
      alert("Respuesta incorrecta. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900 p-10 text-white">
      <p className="mb-4 text-7xl tracking-[0.5em]">{num1}</p>
      <p className="mb-4 text-7xl tracking-[0.5em]">{num2}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="number"
            value={respuestaDecenas}
            onChange={handleChangeDecenas}
            max="99"
            min="0"
            className="m-4 p-2 py-4"
          />
          <input
            type="number"
            value={respuestaUnidades}
            onChange={handleChangeUnidades}
            max="9"
            min="0"
            className="m-4 p-4"
          />
        </div>
        <button
          className="mt-2 rounded bg-blue-800 p-2 text-xl text-slate-100"
          type="submit"
        >
          Comprobar
        </button>
      </form>
    </div>
  );
}

{
  <div className="bg-blue-200 p-10">
    <div className="grid grid-cols-3 gap-2 text-center">
      <div className="col-span-1 row-span-2 flex flex-col justify-center rounded bg-blue-200 p-4">
        <p className="text-7xl text-yellow-200">+</p>
      </div>
      <div className="col-span-1 rounded bg-green-100 p-4">
        <p className="text-7xl">5</p>
      </div>
      <div className="col-span-1 rounded bg-red-100 p-4">
        <p className="text-7xl">6</p>
      </div>
      <div className="col-span-1 row-span-1 rounded bg-green-100 p-4">
        <p className="text-7xl">4</p>
      </div>
      <div className="col-span-1 rounded bg-red-100 p-4">
        <p className="text-7xl">5</p>
      </div>
    </div>
    <hr className="my-2 border-2 border-yellow-200"></hr>
    <div className="mt-2 grid grid-cols-3 gap-2 text-center">
      <div className="col-span-1 rounded bg-indigo-700 p-4">
        <p className="text-7xl">1</p>
      </div>
      <div className="col-span-1 rounded bg-green-100 p-4">
        <p className="text-7xl">0</p>
      </div>
      <div className="col-span-1 rounded bg-red-100 p-4">
        <p className="text-7xl">7</p>
      </div>
    </div>
  </div>;
}

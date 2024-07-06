import { useState, useEffect } from "react";

export default function SumarDosCifras() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [respuestaCentena, setRespuestaCentena] = useState("");
  const [respuestaDecenas, setRespuestaDecenas] = useState("");
  const [respuestaUnidades, setRespuestaUnidades] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 90) + 10);
    setNum2(Math.floor(Math.random() * 90) + 10);
  }, []);

  const u1 = num1 % 10;
  const d1 = Math.floor(num1 / 10);
  const u2 = num2 % 10;
  const d2 = Math.floor(num2 / 10);

  const sumaUnidades = u1 + u2;
  const sumaDecenas = d1 + d2;
  const acarreoUnidades = sumaUnidades >= 10 ? 1 : 0;

  const resultadoUnidades = sumaUnidades % 10;
  const resultadoDecenas = (sumaDecenas + acarreoUnidades) % 10;
  const resultadoCentenas = Math.floor((sumaDecenas + acarreoUnidades) / 10);

  const handleChangeUnidades = (e) => {
    setRespuestaUnidades(e.target.value);
  };

  const handleChangeDecenas = (e) => {
    setRespuestaDecenas(e.target.value);
  };

  const handleChangeCentenas = (e) => {
    setRespuestaCentena(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const centenasCorrectas = resultadoCentenas === 0 ? respuestaCentena === '' : parseInt(respuestaCentena) === resultadoCentenas;
    if (
      parseInt(respuestaUnidades) === resultadoUnidades &&
      parseInt(respuestaDecenas) === resultadoDecenas &&
      centenasCorrectas
    ) {
      setMensaje("¡Respuesta correcta!");
    } else {
      setMensaje("Respuesta incorrecta. Inténtalo de nuevo.");
    }
  };

  return (
      <div className="p-10 sm:p-20 bg-slate-900">
        {/* suma */}
        <div className="grid grid-cols-3 gap-2 text-center text-4xl sm:text-7xl">   
          <div className="bg-blue-200 p-4 rounded col-span-1 row-span-2 flex flex-col justify-center">
            <p className=" text-yellow-200">+</p>
          </div>
          <div className="bg-green-100 p-4 rounded col-span-1">
            <p>{d1}</p>
          </div>
          <div className="bg-red-100 p-4 rounded col-span-1">
            <p>{u1}</p>
          </div>
          <div className="bg-green-100 p-4 rounded col-span-1 row-span-1">
            <p>{d2}</p>
          </div>
          <div>
            <div className="bg-red-100 p-4 rounded col-span-1">
              <p>{u2}</p>
            </div>
          </div>
        </div>
        <hr className="my-2 border-yellow-200 border-2" />
        {/* input respuesta */}
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-2 text-4xl text-center mt-2">     
              <div className="bg-indigo-700 p-4 rounded col-span-1">
                <input
                  value={respuestaCentena}
                  onChange={handleChangeCentenas}
                  className="w-12 sm:w-20 sm:px-2 sm:py-4 sm:my-4 text-center"
                />
              </div>
            <div className="bg-green-100 p-4 rounded col-span-1">
              <input
                value={respuestaDecenas}
                onChange={handleChangeDecenas}
                className="w-12 sm:w-20 sm:px-2 sm:py-4 sm:my-4 text-center"
              />
            </div>
            <div className="bg-red-100 p-4 rounded col-span-1">
              <input
                value={respuestaUnidades}
                onChange={handleChangeUnidades}
                className="w-12 sm:w-20 sm:px-2 sm:py-4 sm:my-4 text-center"
              />
              </div>
              <button
              className="w-full m-auto bg-blue-800 text-slate-100 text-xl rounded p-2 mt-2"
              type="submit"
            >
              CORREGIR
            </button>    
        </form>
        
        <p>{mensaje}</p>
      </div> 
  );
}

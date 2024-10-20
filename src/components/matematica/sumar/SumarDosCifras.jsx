import { useState, useEffect } from "react";

export default function SumarDosCifras() {
  const [aciertos, setAciertos] = useState(0);
  const [errores, setErrores] = useState(0);
  // Controla la visibilidad de la calculadora
  const [mostrarCalculadora, setMostrarCalculadora] = useState(true);
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
    const centenasCorrectas =
      resultadoCentenas === 0
        ? respuestaCentena === ""
        : parseInt(respuestaCentena) === resultadoCentenas;
    if (
      parseInt(respuestaUnidades) === resultadoUnidades &&
      parseInt(respuestaDecenas) === resultadoDecenas &&
      centenasCorrectas
    ) {
      setMensaje("¡Respuesta correcta!");
      setAciertos(aciertos + 1);
    } else {
      setMensaje("Respuesta incorrecta. Inténtalo de nuevo.");
      setErrores(errores + 1);
    }
    // Verifica si la suma de aciertos y errores es 10 o más
    if (aciertos + errores + 1 >= 10) {
      if (aciertos + 1 >= 7) {
        setMensaje("¡Prueba superada!");
      } else {
        setMensaje("No pasaste la prueba.");
      }
      // Desaparece la calculadora y muestra el mensaje final
      setMostrarCalculadora(false);
    } else {
      // Hace que el mensaje desaparezca después de 10 segundos (10000 milisegundos)
      setTimeout(() => {
        setMensaje(""); // Limpia el mensaje después de 10 segundos
        setRespuestaCentena("");
        setRespuestaDecenas("");
        setRespuestaUnidades("");
        setNum1(Math.floor(Math.random() * 90) + 10);
        setNum2(Math.floor(Math.random() * 90) + 10);
      }, 2000);
    }
  };

  return (
    <div>
      {mostrarCalculadora ? (
        <div className="h-screen bg-dark p-10 sm:p-20">
          {/* suma */}

          <div className="grid grid-cols-3 gap-2 text-center text-4xl sm:text-7xl">
            <div className="col-span-1 row-span-2 flex flex-col justify-center rounded bg-btn-dark p-4">
              <p className="text-yellow-200">+</p>
            </div>
            <div className="col-span-1 rounded bg-btn-dark p-4 text-t-btn-light">
              <p>{d1}</p>
            </div>
            <div className="col-span-1 rounded bg-btn-dark p-4 text-t-btn-light">
              <p>{u1}</p>
            </div>
            <div className="col-span-1 row-span-1 rounded bg-btn-dark p-4 text-t-btn-light">
              <p>{d2}</p>
            </div>
            <div>
              <div className="col-span-1 rounded bg-btn-dark p-4 text-t-btn-light">
                <p>{u2}</p>
              </div>
            </div>
          </div>
          <hr className="my-2 border-2 border-yellow-200" />
          {/* input respuesta */}
          <form onSubmit={handleSubmit}>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center text-4xl">
              <div className="col-span-1 rounded bg-btn-dark p-4">
                <input
                  value={respuestaCentena}
                  onChange={handleChangeCentenas}
                  className="w-12 text-center sm:my-4 sm:w-20 sm:px-2 sm:py-4"
                />
              </div>
              <div className="col-span-1 rounded bg-btn-dark p-4">
                <input
                  value={respuestaDecenas}
                  onChange={handleChangeDecenas}
                  className="w-12 text-center sm:my-4 sm:w-20 sm:px-2 sm:py-4"
                />
              </div>
              <div className="col-span-1 rounded bg-btn-dark p-4">
                <input
                  value={respuestaUnidades}
                  onChange={handleChangeUnidades}
                  className="w-12 text-center sm:my-4 sm:w-20 sm:px-2 sm:py-4"
                />
              </div>
            </div>
            <button
              className="m-auto mt-2 w-full rounded bg-blue-800 p-2 text-xl text-slate-100"
              type="submit"
            >
              CORREGIR
            </button>
          </form>

          <p className="mt-4 text-center text-4xl text-t-btn-light">
            {mensaje}
          </p>
          <p className="mt-4 text-center text-4xl text-t-btn-light">
            los aciertos son {aciertos}
          </p>
          <p className="mt-4 text-center text-4xl text-t-btn-light">
            los errores son {errores}
          </p>
        </div>
      ) : (
        <div className="h-screen bg-dark p-10 sm:p-20">
          {/* Aquí va lo que se mostrará cuando la calculadora desaparezca */}
          <h1 className="mt-4 text-center text-7xl text-t-btn-light">
            {mensaje}
          </h1>
          <p className="mt-4 text-center text-4xl text-t-btn-light">
            los aciertos son {aciertos}
          </p>
          <p className="mt-4 text-center text-4xl text-t-btn-light">
            los errores son {errores}
          </p>
          <button
            className="m-auto mt-4 w-full rounded bg-blue-800 p-2 text-xl text-slate-100"
            onClick={() => window.location.reload()}
          >
            Reiniciar
          </button>
        </div>
      )}
    </div>
  );
}

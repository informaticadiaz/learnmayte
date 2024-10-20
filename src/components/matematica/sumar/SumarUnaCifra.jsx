import { useEffect, useState } from "react";

export default function SumarUnaCifra() {
  const [numeros, setNumeros] = useState("");
  const [aciertos, setAciertos] = useState(0);
  const [errores, setErrores] = useState(0);
  const [intentos, setIntentos] = useState(0);
  const [mensaje, setMensaje] = useState("Vamos a sumar");
  const [inputVisible, setInputVisible] = useState(true);

  useEffect(() => {
    generarNumeros();
    mostrarResultados();
  }, []);

  useEffect(() => {
    if (intentos >= 20) {
      setInputVisible(false);
      evaluarResultado();
    }
  }, [intentos]);

  const generarNumeros = () => {
    if (intentos >= 21) {
      return;
    }

    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    setNumeros(`${num1} + ${num2}`);
    setIntentos(intentos + 1);
  };

  const verificarSuma = (respuestaIngresada) => {
    const sumaCorrecta = eval(numeros);
    if (isNaN(respuestaIngresada)) {
      setMensaje("Por favor, ingresa un número válido.");
      return;
    }
    if (respuestaIngresada === sumaCorrecta) {
      setMensaje("¡Correcto!\nEres muy inteligente.");
      incrementarAciertos();
    } else {
      setMensaje(`Oops...\nLa respuesta correcta es ${sumaCorrecta}.`);
      incrementarErrores();
    }
    generarNumeros();

    // Limpiar contenido del input
    document.getElementById("respuesta").value = "";
  };

  const evaluarResultado = () => {
    const porcentajeAciertos = (aciertos / intentos) * 100;
    if (porcentajeAciertos > 70) {
      setMensaje("¡Prueba superada!");
    } else {
      setMensaje("Inténtalo de nuevo.");
    }
  };

  const reiniciarContadores = () => {
    setAciertos(0);
    setErrores(0);
    setIntentos(0);
  };

  const incrementarAciertos = () => {
    const nuevosAciertos = aciertos + 1;
    setAciertos(nuevosAciertos);
    mostrarResultados();
  };

  const incrementarErrores = () => {
    const nuevosErrores = errores + 1;
    setErrores(nuevosErrores);
    mostrarResultados();
  };

  const mostrarResultados = () => {
    localStorage.setItem("aciertos", aciertos);
    localStorage.setItem("errores", errores);
  };

  const resetResultados = () => {
    localStorage.removeItem("aciertos");
    localStorage.removeItem("errores");
    reiniciarContadores();
    setMensaje("");
    setInputVisible(true);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      const respuestaIngresada = parseInt(event.target.value);
      verificarSuma(respuestaIngresada);
      event.target.value = "";
    }
  };

  return (
    <div className="h-screen bg-slate-900 py-10 text-center">
      {mensaje && <p className="py-8 text-2xl text-slate-200">{mensaje}</p>}
      <p id="numeros" className="text-6xl text-slate-200">
        {numeros}
      </p>
      {inputVisible && (
        <input
          type="number"
          id="respuesta"
          className="m-4 rounded border p-2"
          onKeyDown={handleKeyPress}
        />
      )}
      {inputVisible && (
        <button
          onClick={() =>
            verificarSuma(parseInt(document.getElementById("respuesta").value))
          }
          className="mt-2 rounded bg-blue-800 p-2 text-xl text-slate-100"
        >
          Verificar
        </button>
      )}

      <div className="space-x-20 py-8 text-xl text-slate-200" id="resultados">
        <span className="rounded bg-green-800 p-4 font-black text-slate-100">
          Aciertos: {aciertos}
        </span>
        <span className="rounded bg-red-800 p-4 font-black text-slate-100">
          Errores: {errores}
        </span>
      </div>
      <button
        onClick={resetResultados}
        className="mt-8 rounded bg-green-800 p-4 text-xl font-black text-slate-100"
      >
        JUEGA OTRA VEZ
      </button>
    </div>
  );
}

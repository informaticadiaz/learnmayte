import React, { useState, useEffect } from 'react';


function TablaMultiplicar({ numeroTabla }) {
  const [indice, setIndice] = useState(1); // Para controlar la multiplicación actual (ej. 4x1, 4x2, etc.)
  const [respuesta, setRespuesta] = useState(''); // Para almacenar la respuesta del input
  const [mensaje, setMensaje] = useState(''); // Mensaje de corrección
  const [tablaResuelta, setTablaResuelta] = useState([]); // Almacena las respuestas correctas ya resueltas
  const [aciertos, setAciertos] = useState(0); // Estado para contar los aciertos
  const [sugerenciaMostrada, setSugerenciaMostrada] = useState(false); // Estado para verificar si se usó la sugerencia


  const corregirRespuesta = () => {
    const respuestaCorrecta = numeroTabla * indice;
    if (parseInt(respuesta) === respuestaCorrecta) {
      // Si la respuesta es correcta y no se ha mostrado la sugerencia
      if (!sugerenciaMostrada) {
        setAciertos(aciertos + 1); // Aumentar el contador de aciertos
      }
      // Si la respuesta es correcta, se almacena en la tabla resuelta
      setTablaResuelta([...tablaResuelta, `${numeroTabla} x ${indice} = ${respuestaCorrecta}`]);
      setIndice(indice + 1); // Avanzar al siguiente multiplicador
      setRespuesta(''); // Limpiar el input
      setMensaje('');
      setSugerenciaMostrada(false); // Restablecer el estado de sugerencia
      // Desplazar hacia abajo 100px al corregir la respuesta
      scrollByPixels(20);
    } else {
      setMensaje('Incorrecto, intenta de nuevo');
    }
  };

  const darSugerencia = () => {
    setMensaje(`La respuesta correcta es: ${numeroTabla * indice}`);
    setSugerenciaMostrada(true); // Marcar que se ha mostrado la sugerencia
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      corregirRespuesta();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,           // Posición vertical a la que se desplaza (0 es la parte superior)
      behavior: 'smooth' // Desplazamiento suave
    });
  };

  const scrollByPixels = (px) => {
    window.scrollBy({
      top: px,        // Cantidad de píxeles para desplazar verticalmente
      behavior: 'smooth'  // Desplazamiento suave
    });
  };

    // Resetea los estados cuando cambia la tabla de multiplicar
    useEffect(() => {
      setIndice(1);
      setRespuesta('');
      setMensaje('');
      setTablaResuelta([]);
      setAciertos(0);
    }, [numeroTabla]);

  return (
    <div className="mt-8 bg-dark text-t-btn-light h-[130vh]">
      <h1 className="text-5xl text-center">Tabla del {numeroTabla}</h1>

      {/* Mostrar tabla ya resuelta */}
      <div className="text-3xl text-center my-4">
        {tablaResuelta.map((linea, idx) => (
          <p key={idx}>{linea}</p>
        ))}
      </div>

      {/* Mostrar la próxima multiplicación si no se ha completado toda la tabla */}
      {indice <= 10 && (
        <>
          <div className="grid grid-cols-3 gap-2 py-8 text-center text-lg sm:text-2xl">
            <p className="text-4xl sm:text-7xl">{numeroTabla} x {indice}</p>
            <p className="text-4xl sm:text-7xl">=</p>
            <div className="flex justify-center">
              <input
                type="number"
                value={respuesta}
                onChange={(e) => setRespuesta(e.target.value)}
                onKeyDown={handleKeyDown} // Maneja el evento de presionar Enter
                className="w-10 sm:w-20 rounded flex text-black text-center text-4xl sm:text-4xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 py-8 text-center text-lg sm:text-2xl">
            <button
              className="w-full m-auto bg-blue-800 text-slate-100 text-2xl rounded p-2 mt-2"
              onClick={scrollToTop}
            >
              Tablas
            </button>
            <button
              className="w-full m-auto bg-blue-800 text-slate-100 text-2xl rounded p-2 mt-2"
              onClick={darSugerencia}
            >
              Sugerir
            </button>

            <button
              className="w-full m-auto bg-blue-800 text-slate-100 text-2xl rounded p-2 mt-2"
              onClick={corregirRespuesta}
            >
              Corregir
            </button>
          </div>
          <p className="text-lg sm:text-5xl text-center">{mensaje}</p>
        </>
      )}

      {/* Mensaje al finalizar la tabla */}
      {indice > 10 && (
        <>
          <p className="text-lg sm:text-5xl text-center">¡Has completado la tabla del {numeroTabla}!</p>
          <p className="text-lg sm:text-5xl text-center">Aciertos: {aciertos}</p>
          <button
            className="w-full m-auto bg-blue-800 text-slate-100 text-2xl rounded p-2 mt-2"
            onClick={scrollToTop}
          >
            Tablas
          </button>
        </>

      )
      }
    </div>
  );
}

export default TablaMultiplicar;

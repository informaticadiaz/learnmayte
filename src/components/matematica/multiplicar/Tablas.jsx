import React, { useState, useRef } from "react";
import TablaMultiplicar from "./TablaMultiplicar";
import will from "@/assets/walltransparente.webp";

function App() {
  const [numeroTabla, setNumeroTabla] = useState(1); // Tabla seleccionada
  const sectionTabla = useRef(null);

  // Función para seleccionar la tabla
  const seleccionarTabla = (numero) => {
    setNumeroTabla(numero);
    sectionTabla.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-dark p-8 text-t-btn-light sm:p-20">
      <div className="h-screen">
        <h1 className="mb-8 text-center text-5xl">
          Selecciona una tabla para evaluar
        </h1>
        {/* Botones para seleccionar la tabla */}
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
          {[...Array(10)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => seleccionarTabla(index + 1)}
              className={`rounded bg-blue-800 p-4 text-xl text-slate-100 ${
                numeroTabla === index + 1 ? "bg-green-600" : ""
              }`}
            >
              Tabla del {index + 1}
            </button>
          ))}
        </div>

        {/* Imagen de Will */}
        <img src={will} alt="will" className="mx-auto h-80 w-80 sm:mt-20" />
      </div>

      {/* Componente que muestra la tabla seleccionada */}
      <div ref={sectionTabla}></div>
      <TablaMultiplicar numeroTabla={numeroTabla} />
    </div>
  );
}

export default App;

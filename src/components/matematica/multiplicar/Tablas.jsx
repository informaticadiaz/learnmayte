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
    <div className="p-8 sm:p-20 bg-dark  text-t-btn-light">
      <div className="h-screen">
        <h1 className="text-5xl text-center mb-8">
          Selecciona una tabla para evaluar
        </h1>
        {/* Botones para seleccionar la tabla */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
          {[...Array(10)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => seleccionarTabla(index + 1)}
              className={`bg-blue-800 text-slate-100 text-xl rounded p-4 ${
                numeroTabla === index + 1 ? "bg-green-600" : ""
              }`}
            >
              Tabla del {index + 1}
            </button>
          ))}
        </div>

        {/* Imagen de Will */}
        <img src={will} alt="will" className="w-80 h-80 sm:mt-20 mx-auto" />
      </div>

      {/* Componente que muestra la tabla seleccionada */}
      <div ref={sectionTabla}></div>
      <TablaMultiplicar numeroTabla={numeroTabla} />
    </div>
  );
}

export default App;

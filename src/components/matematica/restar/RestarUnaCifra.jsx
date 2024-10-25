import React, { useState } from "react";
import TablaMultiplicar from "../multiplicar/TablaMultiplicar";

function App() {
  const [numeroTabla, setNumeroTabla] = useState(1); // Tabla seleccionada

  // Función para seleccionar la tabla
  const seleccionarTabla = (numero) => {
    setNumeroTabla(numero);
  };

  return (
    <div className="h-screen p-10 text-t-btn-light sm:p-20">
      <h1 className="mb-8 text-center text-5xl">
        Selecciona una tabla para evaluar
      </h1>

      {/* Botones para seleccionar la tabla */}
      <div className="mb-10 grid grid-cols-5 gap-4">
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

      {/* Componente que muestra la tabla seleccionada */}
      <TablaMultiplicar numeroTabla={numeroTabla} />
    </div>
  );
}

export default App;

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Matematica() {
  const [submenu, setSubmenu] = useState(""); // Estado para controlar qué submenú mostrar

  // Función para manejar el clic de los botones principales
  const handleButtonClick = (operation) => {
    setSubmenu(operation); // Al hacer clic, cambia el submenú mostrado
  };

  return (
    <div className="bg-dark text-center h-screen">
      <div className="py-20 container mx-auto">
        {/* Botones principales */}
        {submenu === "" && (
          <div className="grid grid-cols-3 gap-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleButtonClick("sumar")}
            >
              SUMAR
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleButtonClick("restar")}
            >
              RESTAR
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleButtonClick("multiplicar")}
            >
              MULTIPLICAR
            </button>
            <Link
              to="/multiplicar/tablas"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              TABLAS
            </Link>
          </div>
        )}

        {/* Submenú de SUMAR */}
        {submenu === "sumar" && (
          <div className="grid grid-cols-3 gap-4">
            <Link
              to="/sumar/una-cifra"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Sumar Una Cifra
            </Link>
            <Link
              to="/sumar/dos-cifras"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Sumar Dos Cifras
            </Link>
            <Link
              to="/sumar/tres-cifras"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Sumar Tres Cifras</Link>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setSubmenu("")} // Botón para volver al menú principal
            >
              Volver
            </button>
          </div>
        )}
        {/* Submenú de RESTAR (puedes agregar más opciones aquí) */}
        {submenu === "restar" && (
          <div className="grid grid-cols-3 gap-4">
            <Link
              to="/restar/una-cifra"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Restar Una Cifra
            </Link>
            <Link
              to="/restar/dos-cifras"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Restar dos Cifras
            </Link>
            <Link
              to="/restar/tres-cifras"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Restar tres Cifras
            </Link>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setSubmenu("")} // Botón para volver al menú principal
            >
              Volver
            </button>
          </div>
        )}

        {/* Submenú de MULTIPLICAR */}
        {submenu === "multiplicar" && (
          <div className="grid grid-cols-3 gap-4">
            <Link
              to="/multiplicar/cuatro-cifras"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Cuatro Cifras</Link>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setSubmenu("")} // Botón para volver al menú principal
            >
              Volver
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

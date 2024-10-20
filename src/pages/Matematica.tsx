import { useState } from "react";
import { Link } from "react-router-dom";

export default function Matematica() {
  const [submenu, setSubmenu] = useState(""); // Estado para controlar qué submenú mostrar

  // Función para manejar el clic de los botones principales
  const handleButtonClick = (operation) => {
    setSubmenu(operation); // Al hacer clic, cambia el submenú mostrado
  };

  return (
    <div className="h-screen bg-dark text-center">
      <div className="container mx-auto py-20">
        {/* Botones principales */}
        {submenu === "" && (
          <div className="grid grid-cols-3 gap-4">
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={() => handleButtonClick("sumar")}
            >
              SUMAR
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={() => handleButtonClick("restar")}
            >
              RESTAR
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={() => handleButtonClick("multiplicar")}
            >
              MULTIPLICAR
            </button>
            <Link
              to="/multiplicar/tablas"
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              TABLAS
            </Link>
          </div>
        )}

        {/* Submenú de SUMAR */}
        {submenu === "sumar" && (
          <div className="grid grid-cols-3 gap-4">
            <Link
              to="/sumar/una-cifra"
              className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            >
              Sumar Una Cifra
            </Link>
            <Link
              to="/sumar/dos-cifras"
              className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            >
              Sumar Dos Cifras
            </Link>
            <Link
              to="/sumar/tres-cifras"
              className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            >
              Sumar Tres Cifras
            </Link>
            <button
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
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
              className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700"
            >
              Restar Una Cifra
            </Link>
            <Link
              to="/restar/dos-cifras"
              className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700"
            >
              Restar dos Cifras
            </Link>
            <Link
              to="/restar/tres-cifras"
              className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700"
            >
              Restar tres Cifras
            </Link>
            <button
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
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
              className="rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700"
            >
              Cuatro Cifras
            </Link>
            <button
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
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

import { Link } from "react-router-dom";

export default function Matematica() {
  return (
    <div className="bg-dark text-center h-screen">
      <div className="py-20 container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/sumar/una-cifra" >SUMAR</Link>
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/sumar/una-cifra" >RESTAR</Link>
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/sumar/una-cifra" >MULTIPLICAR</Link>
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/multiplicar/tablas" >TABLAS</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
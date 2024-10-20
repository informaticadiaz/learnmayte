import { useState } from "react";

export default function Cursiva() {
  const [inputText, setInputText] = useState("");
  const [textoConvertido, setTextoConvertido] = useState("");
  const convertirACursiva = () => {
    setTextoConvertido(inputText);
  };
  return (
    <div className="p-10 bg-dark h-screen">
      <h1 className="font-cursiva text-8xl text-slate-400">Letra Cursiva</h1>
      <textarea
        rows="3"
        className="border border-gray-300 rounded p-4 w-full bg-slate-200 text-slate-800"
        placeholder="Ingresa un texto"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="bg-slate-700 text-slate-400 font-bold p-4 rounded mt-4"
        onClick={convertirACursiva}
      >
        Convertir a cursiva
      </button>
      <p className="mt-4 font-cursiva text-9xl text-slate-400">
        {textoConvertido}
      </p>
    </div>
  );
}

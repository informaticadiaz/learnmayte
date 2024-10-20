import { useState } from "react";

export default function Cursiva() {
  const [inputText, setInputText] = useState("");
  const [textoConvertido, setTextoConvertido] = useState("");
  const convertirACursiva = () => {
    setTextoConvertido(inputText);
  };
  return (
    <div className="h-screen bg-dark p-10">
      <h1 className="font-cursiva text-8xl text-slate-400">Letra Cursiva</h1>
      <textarea
        rows="3"
        className="w-full rounded border border-gray-300 bg-slate-200 p-4 text-slate-800"
        placeholder="Ingresa un texto"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="mt-4 rounded bg-slate-700 p-4 font-bold text-slate-400"
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

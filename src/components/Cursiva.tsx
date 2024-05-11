import { useState } from 'react'

export default function Cursiva() {
  const [inputText, setInputText] = useState('')
  const [textoConvertido, setTextoConvertido] = useState('')
  const convertirACursiva = () => {
    setTextoConvertido(inputText)
  }
  return (
    <div className='p-8'>
      <h1 className='font-cursiva text-8xl text-slate-400'>Letra Cursiva</h1>
      <textarea rows="6" cols="50"
        className='border border-gray-300 rounded p-4 w-full'
        placeholder='Ingresa un texto'
        value={inputText.toString()} // Convertir a string si es necesario
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className='bg-slate-700 text-slate-400 font-bold p-4 rounded m-4'
        onClick={convertirACursiva}
      >
        Convertir a cursiva
      </button>
      <p className='mt-4 font-cursiva text-6xl text-slate-400'>{textoConvertido}</p>
    </div>
  )
}

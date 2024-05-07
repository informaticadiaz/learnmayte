import { useState } from 'react'

export default function Cursiva() {
  const [inputText, setInputText] = useState('')
  const [textoConvertido, setTextoConvertido] = useState('')
  const convertirACursiva = () => {
    setTextoConvertido(inputText)
  }
  return (
    <div className='p-8'>
      <h1 className='font-cursiva text-8xl'>Letra Cursiva</h1>
      <textarea rows="6" cols="50"
        className='border border-gray-300 rounded p-4 w-full'
        placeholder='Ingresa un texto'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={convertirACursiva}
      >
        Convertir a cursiva
      </button>
      <p className='mt-4 font-cursiva text-6xl'>{textoConvertido}</p>
    </div>
  )
}

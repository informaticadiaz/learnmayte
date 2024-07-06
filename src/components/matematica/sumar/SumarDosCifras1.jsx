import { useState, useEffect } from 'react'


export default function SumarDosCifras() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [respuestaUnidades, setRespuestaUnidades] = useState('');
  const [respuestaDecenas, setRespuestaDecenas] = useState('');

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 90) + 10);
    setNum2(Math.floor(Math.random() * 90) + 10);
  }, []);

  const handleChangeUnidades = (e) => {
    setRespuestaUnidades(e.target.value);
  };

  const handleChangeDecenas = (e) => {
    setRespuestaDecenas(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultado = num1 + num2;
    const respuesta = parseInt(respuestaDecenas + respuestaUnidades);

    if (respuesta === resultado) {
      alert('¡Respuesta correcta!');
    } else {
      alert('Respuesta incorrecta. Inténtalo de nuevo.');
    }
  };

  return (
      <div className='p-10 bg-gray-900 h-screen flex flex-col justify-center items-center text-white'>
        <p className="text-7xl mb-4 tracking-[0.5em]">
          {num1}
        </p>
        <p className="text-7xl mb-4 tracking-[0.5em]">
          {num2}
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="number"
              value={respuestaDecenas}
              onChange={handleChangeDecenas}
              max="99"
              min="0"
              className='p-2 py-4 m-4'
            />
            <input
              type="number"
              value={respuestaUnidades}
              onChange={handleChangeUnidades}
              max="9"
              min="0"
              className='p-4 m-4'
            />
          </div>
          <button className="bg-blue-800 text-slate-100 text-xl rounded p-2 mt-2" type="submit">Comprobar</button>
        </form>
      </div>
  )
}

{
  <div className='p-10 bg-blue-200 '>
<div className="grid grid-cols-3 gap-2 text-center">
  <div className="bg-blue-200 p-4 rounded col-span-1 row-span-2 flex flex-col justify-center">
    <p className="text-7xl text-yellow-200">+</p>
  </div>
  <div className="bg-green-100 p-4 rounded col-span-1">
    <p className='text-7xl'>5</p>
  </div>
  <div className="bg-red-100 p-4 rounded col-span-1">
    <p className='text-7xl'>6</p>
  </div>
  <div className="bg-green-100 p-4 rounded col-span-1 row-span-1">
    <p className='text-7xl'>4</p>
  </div>
  <div className="bg-red-100 p-4 rounded col-span-1">
    <p className='text-7xl'>5</p>
  </div>
</div>
<hr className="my-2 border-yellow-200 border-2"></hr>
<div className="grid grid-cols-3 gap-2 text-center mt-2">
  <div className="bg-indigo-700 p-4 rounded col-span-1">
    <p className='text-7xl'>1</p>
  </div>
  <div className="bg-green-100 p-4 rounded col-span-1">
    <p className='text-7xl'>0</p>
  </div>
  <div className="bg-red-100 p-4 rounded col-span-1">
    <p className='text-7xl'>7</p>
  </div>
</div>
</div>
}

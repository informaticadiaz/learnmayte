import MainLayout from '../../../layout/MainLayout'
import { useState, useEffect } from 'react';

export default function SumarDosCifras() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [respuestaCentena, setRespuestaCentena] = useState('');
  const [respuestaDecenas, setRespuestaDecenas] = useState('');
  const [respuestaUnidades, setRespuestaUnidades] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 90) + 10);
    setNum2(Math.floor(Math.random() * 90) + 10);
  }, []);

  const u1 = num1 % 10;
  const d1 = Math.floor(num1 / 10);
  const u2 = num2 % 10;
  const d2 = Math.floor(num2 / 10);

  const sumaUnidades = u1 + u2;
  const sumaDecenas = d1 + d2;
  const acarreoUnidades = sumaUnidades >= 10 ? 1 : 0;

  const resultadoUnidades = sumaUnidades % 10;
  const resultadoDecenas = (sumaDecenas + acarreoUnidades) % 10;
  const resultadoCentenas = Math.floor((sumaDecenas + acarreoUnidades) / 10);

  const handleChangeUnidades = (e) => {
    setRespuestaUnidades(e.target.value);
  };

  const handleChangeDecenas = (e) => {
    setRespuestaDecenas(e.target.value);
  };

  const handleChangeCentenas = (e) => {
    setRespuestaCentena(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      parseInt(respuestaUnidades) === resultadoUnidades &&
      parseInt(respuestaDecenas) === resultadoDecenas &&
      parseInt(respuestaCentena) === resultadoCentenas
    ) {
      setMensaje('¡Respuesta correcta!');
    } else {
      setMensaje('Respuesta incorrecta. Inténtalo de nuevo.');
    }
  };

  return (
    <MainLayout>
    <div className='p-20 bg-blue-200 '>
      <h1>Sumar Dos Cifras</h1>
      <p>{num1}</p>
      <p>{num2}</p>
      <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="number"
            value={respuestaCentena}
            onChange={handleChangeCentenas}
            max="99"
            min="0"
            className="p-2 py-4 m-4"
          />
          <input
            type="number"
            value={respuestaDecenas}
            onChange={handleChangeDecenas}
            max="99"
            min="0"
            className="p-2 py-4 m-4"
          />
          <input
            type="number"
            value={respuestaUnidades}
            onChange={handleChangeUnidades}
            max="9"
            min="0"
            className="p-4 m-4"
          />
        </div>
        <button
          className="bg-blue-800 text-slate-100 text-xl rounded p-2 mt-2"
          type="submit"
        >
          Comprobar
        </button>
      </form>
      <p>{mensaje}</p>
    </div>
      </div>
    </MainLayout>
  );
}
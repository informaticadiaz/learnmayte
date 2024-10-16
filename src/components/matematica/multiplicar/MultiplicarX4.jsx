import React, { useState } from 'react';

const MathStepByStep = () => {
  const [randomNumber1, setRandomNumber1] = useState(Math.floor(Math.random() * 5) + 2);

  // Generamos cada dígito de forma independiente
  const [unitsDigit, setUnitsDigit] = useState(Math.floor(Math.random() * 9) + 1); // Unidad (1 a 9)
  const [tensDigit, setTensDigit] = useState(Math.floor(Math.random() * 9) + 1);   // Decena (1 a 9)
  const [hundredsDigit, setHundredsDigit] = useState(Math.floor(Math.random() * 9) + 1); // Centena (1 a 9)
  const [thousandsDigit, setThousandsDigit] = useState(Math.floor(Math.random() * 9) + 1); // Millar (1 a 9)

  const [userInput, setUserInput] = useState({ units: '', tens: '', hundreds: '', thousands: '', carry1: '', carry2: '', carry3: '', carry4: '' });
  const [feedback, setFeedback] = useState('');

  const step1 = randomNumber1 * unitsDigit; // Unidades
  const step2 = randomNumber1 * tensDigit + Math.floor(step1 / 10); // Decenas + carry
  const step3 = randomNumber1 * hundredsDigit + Math.floor(step2 / 10); // Centenas + carry
  const step4 = randomNumber1 * thousandsDigit + Math.floor(step3 / 10); // Miles + carry

  const correctUnits = step1 % 10;
  const correctTens = step2 % 10;
  const correctHundreds = step3 % 10;
  const correctThousands = step4 % 10;

  const correctCarry1 = Math.floor(step1 / 10); // Lleva de unidades a decenas
  const correctCarry2 = Math.floor(step2 / 10); // Lleva de decenas a centenas
  const correctCarry3 = Math.floor(step3 / 10); // Lleva de centenas a miles
  const correctCarry4 = Math.floor(step4 / 10); // Lleva de miles a decenas de miles

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleCheck = () => {
    if (
      parseInt(userInput.units) === correctUnits &&
      parseInt(userInput.tens) === correctTens &&
      parseInt(userInput.hundreds) === correctHundreds &&
      parseInt(userInput.thousands) === correctThousands &&
      (correctCarry1 === 0 || parseInt(userInput.carry1) === correctCarry1) &&
      (correctCarry2 === 0 || parseInt(userInput.carry2) === correctCarry2) &&
      (correctCarry3 === 0 || parseInt(userInput.carry3) === correctCarry3) &&
      (correctCarry4 === 0 || parseInt(userInput.carry4) === correctCarry4)
    ) {
      setFeedback('¡Correcto!');
    } else {
      setFeedback('Sigue intentando.');
    }
  };

  const handleNewProblem = () => {
    setRandomNumber1(Math.floor(Math.random() * 5) + 2); // Actualizamos el rango del número 1 al 5

    // Generar nuevos números aleatorios por separado
    setUnitsDigit(Math.floor(Math.random() * 9) + 1);
    setTensDigit(Math.floor(Math.random() * 9) + 1);
    setHundredsDigit(Math.floor(Math.random() * 9) + 1);
    setThousandsDigit(Math.floor(Math.random() * 9) + 1);

    setUserInput({ units: '', tens: '', hundreds: '', thousands: '', carry1: '', carry2: '', carry3: '', carry4: '' });
    setFeedback('');
  };

  return (
    <div className="p-10 sm:p-20 bg-dark h-screen">
      <h1 className='text-4xl text-t-btn-light text-center p-8'>Práctica de Matemática</h1>
      {/* Me llevo */}
      <div className="grid grid-cols-5 gap-4 text-center text-xl sm:text-xl">
      <div className='bg-btn-dark py-4 rounded col-span-1 row-span-2 flex flex-col justify-center text-t-btn-light'></div>
        <div className='bg-btn-dark py-4 rounded col-span-1 row-span-2 flex flex-col justify-center'>
        {/*<label>Lleva centena: </label>*/}
        <input
          type="number"
          name="carry3"
          value={userInput.carry3}
          onChange={handleChange}
          placeholder={correctCarry3 === 0 ? 'N/A' : ''}
          disabled={correctCarry3 === 0}
          className="text-4xl font-bold w-12 sm:w-20 sm:px-2 sm:py-4 sm:my-4 text-center m-auto"
        />
        </div>
        <div className='bg-btn-dark py-4 rounded col-span-1 row-span-2 flex flex-col justify-center'>
        {/*<label>Lleva decena: </label>*/}
        <input
          type="number"
          name="carry2"
          value={userInput.carry2}
          onChange={handleChange}
          placeholder={correctCarry2 === 0 ? 'N/A' : ''}
          disabled={correctCarry2 === 0}
          className="text-4xl font-bold w-12 sm:w-20 sm:px-2 sm:py-4 sm:my-4 text-center m-auto"
        />
        </div>    
        <div className='bg-btn-dark py-4 rounded col-span-1 row-span-2 flex flex-col justify-center'>
        {/*<label>Lleva unidad: </label>*/}
        <input
          type="number"
          name="carry1"
          value={userInput.carry1}
          onChange={handleChange}
          placeholder={correctCarry1 === 0 ? 'N/A' : ''}
          disabled={correctCarry1 === 0}
          className="text-4xl w-12 sm:w-20 sm:px-2 sm:py-4 sm:my-4 text-center m-auto font-bold"
        />
        </div>
      </div>
      {/* Cuenta */}
      <div className="mt-4 grid grid-cols-5 gap-4 text-center text-4xl sm:text-7xl">
      <div className='bg-btn-dark p-4 rounded col-span-1 row-span-2 flex flex-col justify-center text-t-btn-light'></div>
        <div className='bg-btn-dark p-4 rounded col-span-1 row-span-2 flex flex-col justify-center text-t-btn-light'>
          {thousandsDigit}
        </div>
        <div className='bg-btn-dark p-4 rounded col-span-1 row-span-2 flex flex-col justify-center text-t-btn-light'>
          {hundredsDigit}
        </div>
        <div className='bg-btn-dark p-4 rounded col-span-1 row-span-2 flex flex-col justify-center text-t-btn-light'>
          {tensDigit}
        </div>
        <div className='bg-btn-dark p-4 rounded col-span-1 row-span-2 flex flex-col justify-center text-t-btn-light'>
          {unitsDigit}
        </div>
        
        <div className='bg-btn-dark py-4 rounded col-span-1 row-span-2 flex flex-col justify-center text-t-btn-light'>x</div>
        <div className='bg-btn-dark py-4 rounded col-span-1 row-span-2 flex flex-col justify-center text-t-btn-light'></div>
        <div className='bg-btn-dark py-4 rounded col-span-1 row-span-2 flex flex-col justify-center text-t-btn-light'></div>
        <div className='bg-btn-dark py-4 rounded col-span-1 row-span-2 flex flex-col justify-center text-t-btn-light'></div>
        <div className='bg-btn-dark py-4 rounded col-span-1 row-span-2 flex flex-col justify-center text-t-btn-light'>
         {randomNumber1}
        </div>
      </div>
      <hr className="my-2 border-yellow-200 border-2" />
      {/* Resultado */}
      <div className='grid grid-cols-5 gap-4 text-center text-xl sm:text-2xl'>
      <div className='bg-btn-dark py-4 rounded col-span-1 row-span-2 flex flex-col justify-center'>
        {/*<label>Lleva miles: </label>*/}
        <input
          type="number"
          name="carry4"
          value={userInput.carry4}
          onChange={handleChange}
          placeholder={correctCarry4 === 0 ? 'N/A' : ''}
          disabled={correctCarry4 === 0}
          className="text-4xl font-bold w-12 sm:w-20 sm:px-2 sm:py-4 sm:my-4 text-center m-auto"
        />
        </div>
          <div className='bg-btn-dark py-4 rounded col-span-1 row-span-2 flex flex-col justify-center'>
            {/*<label>Miles: </label>*/}
            <input
              type="number"
              name="thousands"
              value={userInput.thousands}
              onChange={handleChange}
              className="text-4xl font-bold w-12 sm:w-20 sm:px-2 sm:py-4 sm:my-4 text-center m-auto"
            />
          </div>
          <div className='bg-btn-dark py-4 rounded col-span-1 row-span-2 flex flex-col justify-center'>
            {/*<label>Centenas: </label>*/}
            <input
              type="number"
              name="hundreds"
              value={userInput.hundreds}
              onChange={handleChange}
              className="text-4xl font-bold w-12 sm:w-20 sm:px-2 sm:py-4 sm:my-4 text-center m-auto"
            />
          </div>
          <div className='bg-btn-dark py-4 rounded col-span-1 row-span-2 flex flex-col justify-center'>
          {/*<label>Decenas: </label>*/}
          <input
            type="number"
            name="tens"
            value={userInput.tens}
            onChange={handleChange}
            className="text-4xl font-bold w-12 sm:w-20 sm:px-2 sm:py-4 sm:my-4 text-center m-auto"
          />
        </div>
        <div className='bg-btn-dark py-4 rounded col-span-1 row-span-2 flex flex-col justify-center'>
          {/*<label>Unidades: </label>*/}
          <input
            type="number"
            name="units"
            value={userInput.units}
            onChange={handleChange}
            className="text-4xl font-bold w-12 sm:w-20 sm:px-2 sm:py-4 sm:my-4 text-center m-auto"
          />
        </div>
      </div>
      <p className="w-full m-auto bg-blue-800 text-slate-100 text-xl rounded p-2 mt-4">{feedback}</p>
      <button className="w-full m-auto bg-blue-800 text-slate-100 text-xl rounded p-2 mt-4" onClick={handleCheck}>Verificar</button>
      <button className="w-full m-auto bg-blue-800 text-slate-100 text-xl rounded p-2 mt-4" onClick={handleNewProblem}>Nueva Cuenta</button>
    </div>
  );
};

export default MathStepByStep;

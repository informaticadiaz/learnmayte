import React, { useState, useEffect } from 'react';

const Sumar = () => {
    const [numeros, setNumeros] = useState("");
    const [aciertos, setAciertos] = useState(0);
    const [errores, setErrores] = useState(0);
    const [intentos, setIntentos] = useState(0);
    const [mensaje, setMensaje] = useState("");
    const [inputVisible, setInputVisible] = useState(true);

    useEffect(() => {
        generarNumeros();
        mostrarResultados();
    }, []);

    useEffect(() => {
        if (intentos >= 20) {
            setInputVisible(false);
            evaluarResultado();
        }
    }, [intentos]);

    const generarNumeros = () => {
        if (intentos >= 20) {
            return;
        }

        const num1 = Math.floor(Math.random() * 9) + 1;
        const num2 = Math.floor(Math.random() * 9) + 1;
        setNumeros(`${num1} + ${num2}`);
        setIntentos(intentos + 1);
    }

    const verificarSuma = (respuestaIngresada) => {
        const sumaCorrecta = eval(numeros);
        if (isNaN(respuestaIngresada)) {
            setMensaje("Por favor, ingresa un número válido.");
            return;
        }
        if (respuestaIngresada === sumaCorrecta) {
            setMensaje("¡Correcto!\nEres muy inteligente.");
            incrementarAciertos();
        } else {
            setMensaje(`Oops...\nLa respuesta correcta es ${sumaCorrecta}.`);
            incrementarErrores();
        }
        generarNumeros();
    }

    const evaluarResultado = () => {
        const porcentajeAciertos = (aciertos / intentos) * 100;
        if (porcentajeAciertos > 70) {
            setMensaje("¡Prueba superada!");
        } else {
            setMensaje("Inténtalo de nuevo.");
        }
    }

    const reiniciarContadores = () => {
        setAciertos(0);
        setErrores(0);
        setIntentos(0);
    }

    const incrementarAciertos = () => {
        const nuevosAciertos = aciertos + 1;
        setAciertos(nuevosAciertos);
        mostrarResultados();
    }

    const incrementarErrores = () => {
        const nuevosErrores = errores + 1;
        setErrores(nuevosErrores);
        mostrarResultados();
    }

    const mostrarResultados = () => {
        localStorage.setItem("aciertos", aciertos);
        localStorage.setItem("errores", errores);
    }

    const resetResultados = () => {
        localStorage.removeItem("aciertos");
        localStorage.removeItem("errores");
        reiniciarContadores();
        setMensaje("");
        setInputVisible(true);
    }

    const handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            const respuestaIngresada = parseInt(event.target.value);
            verificarSuma(respuestaIngresada);
            event.target.value = "";
        }
    }

    return (
        <div className="py-10 text-center bg-slate-900">
            <p id="numeros" className="text-6xl text-slate-200">{numeros}</p>
            {inputVisible && (
                <input
                    type="text"
                    id="respuesta"
                    className="border rounded p-2 m-4"
                    onKeyDown={handleKeyPress}
                />
            )}
            {inputVisible && (
                <button
                    onClick={() => verificarSuma(parseInt(document.getElementById("respuesta").value))}
                    className="bg-blue-800 text-slate-100 text-xl rounded p-2 mt-2"
                >
                    Verificar
                </button>
            )}
            {mensaje && <p className="py-8 text-2xl text-slate-200">{mensaje}</p>}
            <div className='py-8 space-x-20 text-xl text-slate-200' id="resultados">
            <span className='p-4 bg-green-800 rounded text-slate-100 font-black'>Aciertos: {aciertos}</span>
            <span className='p-4 bg-red-800 rounded text-slate-100 font-black'>Errores: {errores}</span>
            </div>
            <button
                onClick={resetResultados}
                className="bg-green-800 text-slate-100 font-black text-xl rounded p-4 mt-8"
            >
                JUEGA OTRA VEZ
            </button>
            
        </div>

    );
}

export default Sumar;
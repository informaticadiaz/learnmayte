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
            reiniciarContadores();
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
        <div>
            <p id="numeros">{numeros}</p>
            {inputVisible && <input type="text" id="respuesta" onKeyDown={handleKeyPress} />}
            {inputVisible && <button onClick={() => verificarSuma(parseInt(document.getElementById("respuesta").value))}>Verificar</button>}
            <p id="resultados">Aciertos: {aciertos}<br />Errores: {errores}</p>
            <button onClick={resetResultados}>Reset</button>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}

export default Sumar;

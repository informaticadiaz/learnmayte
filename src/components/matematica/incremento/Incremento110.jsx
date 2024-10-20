import React, { useState } from "react";

const IncrementoDos = () => {
    const [numeroInicial, setNumeroInicial] = useState(0); // Inicia en 0
    const [respuesta, setRespuesta] = useState(""); // Input actual
    const [aciertos, setAciertos] = useState([]); // Aciertos acumulados
    const [valorIncremento, setValorIncremento] = useState(2); // Incremento por defecto
    const [mensaje, setMensaje] = useState(""); // Mensaje de correcto/incorrecto

    const handleInputChange = (value) => {
        setRespuesta(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const valorEsperado = numeroInicial + valorIncremento;

        if (parseInt(respuesta) === valorEsperado) {
            // Si es correcto, sumamos el incremento al número inicial
            setNumeroInicial(numeroInicial + valorIncremento);
            setAciertos([...aciertos, true]);
            setMensaje("¡Correcto!");
            setRespuesta(""); // Limpiamos el input para la siguiente respuesta
        } else {
            setAciertos([...aciertos, false]);
            setMensaje("Incorrecto, intenta de nuevo.");
        }
    };

    return (
        <div className="text-center mt-12">
            <h3>Incremeto</h3>
            <div className="mt-4">
                <h4>Selecciona el valor de incremento:</h4>
                {[...Array(10)].map((_, i) => (
                    <button key={i + 1} onClick={() => setValorIncremento(i + 1)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
            <div className="m-4 text-xl">Número inicial: {numeroInicial} + {valorIncremento}</div>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="number"
                        value={respuesta}
                        onChange={(e) => handleInputChange(e.target.value)}
                        placeholder={`Ingresa el número`}
                        className="border border-gray-300 rounded-md p-2"
                    />
                    
                </div>
                <button type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                    Corregir
                </button>
            </form>

            {mensaje && <div>{mensaje}</div>}
        </div>
    );
};

export default IncrementoDos;

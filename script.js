function generarNumeros() {
    // Generar dos números aleatorios del 1 al 9
    var num1 = Math.floor(Math.random() * 9) + 1;
    var num2 = Math.floor(Math.random() * 9) + 1;

    // Mostrar los números en la página
    var numerosElement = document.getElementById("numeros");
    numerosElement.textContent = num1 + " + " + num2;

    // Guardar la suma correcta en un atributo de datos
    var sumaCorrecta = num1 + num2;
    numerosElement.dataset.sumaCorrecta = sumaCorrecta;
}

function verificarSuma() {
    // Obtener la respuesta ingresada por tu hija
    var respuestaElement = document.getElementById("respuesta");
    var sumaIngresada = parseInt(respuestaElement.value);

    // Obtener la suma correcta del atributo de datos
    var sumaCorrecta = parseInt(document.getElementById("numeros").dataset.sumaCorrecta);

    // Comprobar si la respuesta es un número válido
    if (isNaN(sumaIngresada)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    // Comprobar si la respuesta es correcta
    var mensajeElement = document.getElementById("mensaje");
    if (sumaIngresada === sumaCorrecta) {
        mensajeElement.textContent = "¡Correcto! Eres muy inteligente.";
        incrementarAciertos();
    } else {
        mensajeElement.textContent = "Oops... La respuesta correcta es " + sumaCorrecta + ".";
        incrementarErrores();
    }

    // Generar nuevos números para seguir practicando
    generarNumeros();

    // Limpiar la respuesta ingresada
    respuestaElement.value = "";
}

function incrementarAciertos() {
    var aciertos = obtenerAciertos();
    aciertos++;
    localStorage.setItem("aciertos", aciertos);
    mostrarResultados();
}

function incrementarErrores() {
    var errores = obtenerErrores();
    errores++;
    localStorage.setItem("errores", errores);
    mostrarResultados();
}

function obtenerAciertos() {
    var aciertos = localStorage.getItem("aciertos");
    return aciertos ? parseInt(aciertos) : 0;
}

function obtenerErrores() {
    var errores = localStorage.getItem("errores");
    return errores ? parseInt(errores) : 0;
}

function mostrarResultados() {
    var resultadosElement = document.getElementById("resultados");
    var aciertos = obtenerAciertos();
    var errores = obtenerErrores();
    resultadosElement.textContent = "Aciertos: " + aciertos + ", Errores: " + errores;
}

function resetResultados() {
    localStorage.removeItem("aciertos");
    localStorage.removeItem("errores");
    mostrarResultados();
}

function verificarEnter(event) {
    if (event.keyCode === 13) {
        verificarSuma();
    }
}

// Generar los primeros números al cargar la página
generarNumeros();
mostrarResultados();

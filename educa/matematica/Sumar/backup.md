```jsx
function generarNumeroAleatorio() {

return Math.floor(Math.random() * 90) + 10;

// Genera un número aleatorio entre 10 y 99 }

function verificarSuma() {

const num1 = generarNumeroAleatorio();

const num2 = generarNumeroAleatorio(); console.log(`Números generados: ${num1} y ${num2}`);

// Extraer las unidades y decenas de cada número

const u1 = num1 % 10;

const d1 = Math.floor(num1 / 10);

const u2 = num2 % 10;

const d2 = Math.floor(num2 / 10);

// Calcular la suma de las unidades y decenas por separado

const sumaUnidades = u1 + u2;

const sumaDecenas = d1 + d2;

// Verificar si hay acarreo en las unidades

let acarreoUnidades = 0;

if (sumaUnidades >= 10) { acarreoUnidades = 1; }

// Calcular el resultado final

const resultadoUnidades = sumaUnidades % 10;

const resultadoDecenas = (sumaDecenas + acarreoUnidades) % 10;

const resultadoCentenas = Math.floor((sumaDecenas + acarreoUnidades) / 10);

// Construir el resultado final

const resultado = resultadoCentenas * 100 + resultadoDecenas * 10 + resultadoUnidades;

// Comparar el resultado con la suma original

if (resultado === num1 + num2) { console.log("La suma es correcta."); } else { console.log("La suma es incorrecta."); }

}

// Llamada a la función para verificar la suma de los números generados

verificarSuma();

}
```


```jsx
// Generar dos números aleatorios entre 10 y 99

// const num1 = Math.floor(Math.random() * 90) + 10;

// const num2 = Math.floor(Math.random() * 90) + 10;

// Extraer las unidades y decenas de cada número

// const u1 = num1 % 10;

// const d1 = Math.floor(num1 / 10);

// const u2 = num2 % 10;

// const d2 = Math.floor(num2 / 10);

// Calcular la suma de las unidades y decenas por separado

// const sumaUnidades = u1 + u2;

// const sumaDecenas = d1 + d2;

// Verificar si hay acarreo en las unidades

// let acarreoUnidades = 0;

// if (sumaUnidades >= 10) { acarreoUnidades = 1; }

// Calcular el resultado final

// const resultadoUnidades = sumaUnidades % 10;

// const resultadoDecenas = (sumaDecenas + acarreoUnidades) % 10;

// const resultadoCentenas = Math.floor((sumaDecenas + acarreoUnidades) / 10);

// Construir el resultado final

// const resultado = resultadoCentenas * 100 + resultadoDecenas * 10 + resultadoUnidades;

// Comparar el resultado con la suma original

// if (resultado === num1 + num2) { console.log("La suma es correcta."); } else { console.log("La suma es incorrecta."); }
```


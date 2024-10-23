### componente documentado

```javascript
import React from "react";

// Componente TriviaQuestion que recibe dos props: 
// - 'questionData': un objeto que contiene la información de la pregunta y sus opciones.
// - 'onAnswer': una función que se ejecuta cuando el usuario selecciona una opción.
const TriviaQuestion = ({ questionData, onAnswer }) => {

  // Esta función se activa cuando el usuario hace clic en una opción.
  // Recibe la opción seleccionada como argumento.
  const handleOptionClick = (option) => {
    // Compara si la opción seleccionada es igual a la respuesta correcta que se pasa en 'questionData'.
    // 'isCorrect' será true si la opción es correcta, de lo contrario será false.
    const isCorrect = option === questionData.correctAnswer;

    // Llama a la función 'onAnswer' con el valor de 'isCorrect', 
    // que se utilizará fuera del componente para manejar la respuesta del usuario.
    onAnswer(isCorrect);
  };

  // Renderiza el contenido del componente.
  return (
    <div>
      {/* Muestra la pregunta en un elemento <h2> */}
      <h2 className="text-2xl sm:text-5xl m-8">{questionData.question}</h2>

      {/* Mapea las opciones disponibles y crea un botón para cada opción.
          El valor de 'option' es el texto que se muestra en el botón, y cuando se hace clic en el botón,
          se llama a 'handleOptionClick' con esa opción. */}
      {questionData.options.map((option, index) => (
        <button 
          key={index} // Clave única para identificar cada botón en la lista.
          onClick={() => handleOptionClick(option)} // Al hacer clic, llama a 'handleOptionClick'.
          className="m-auto mt-2 w-3/4 rounded bg-blue-800 p-2 text-2xl text-slate-100" // Estilos de Tailwind CSS.
        >
          {option} {/* Texto de la opción dentro del botón */}
        </button>
      ))}
    </div>
  );
};

export default TriviaQuestion;
```

### Explicación del funcionamiento:

1. **Props**:
   - El componente `TriviaQuestion` recibe dos props:
     - `questionData`: un objeto que contiene la información de la pregunta, las opciones de respuesta y la respuesta correcta.
     - `onAnswer`: una función que se ejecuta cuando el usuario selecciona una opción, permitiendo manejar la respuesta (correcta o incorrecta) fuera del componente.

2. **`handleOptionClick`**:
   - Esta función se ejecuta cuando el usuario hace clic en una de las opciones. Compara la opción seleccionada con la respuesta correcta (que se encuentra en `questionData.correctAnswer`) y guarda el resultado en la variable `isCorrect`.
   - Luego, llama a la función `onAnswer`, pasándole el valor de `isCorrect`. Esto le permite al componente padre (o cualquier otra lógica que pase esta función) saber si la respuesta seleccionada fue correcta o no.

3. **Renderizado**:
   - El componente renderiza un `<h2>` que contiene el texto de la pregunta (`questionData.question`).
   - A continuación, utiliza el método `map` para iterar sobre las opciones de respuesta (`questionData.options`) y crear un botón para cada opción.
   - Cada botón tiene un controlador de eventos `onClick` que llama a `handleOptionClick` con la opción seleccionada.
   - Los botones están estilizados con Tailwind CSS.

Este componente es funcional para un escenario de trivia o cuestionario donde el usuario selecciona una respuesta de varias opciones, y se puede saber si la respuesta fue correcta o incorrecta.

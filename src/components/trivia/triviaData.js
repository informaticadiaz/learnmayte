// triviaData.js
const triviaData = {
  sistemaSolar: {
    name: "Sistema Solar",
    subtopics: {
      planetas: [
        {
          question: "¿Cuál es el planeta más cercano al sol?",
          options: ["Mercurio", "Venus", "Tierra", "Marte"],
          correctAnswer: "Mercurio",
        },
        {
          question: "¿Cuál es el planeta más grande del sistema solar?",
          options: ["Tierra", "Júpiter", "Saturno", "Urano"],
          correctAnswer: "Júpiter",
        },
        // más preguntas...
      ],
      lunas: [
        {
          question: "¿Cuál es la luna más grande del sistema solar?",
          options: ["Luna", "Europa", "Ganímedes", "Titán"],
          correctAnswer: "Ganímedes",
        },
        {
          question: "¿Cuál es la luna que orbita alrededor de la Tierra?",
          options: ["Luna", "Io", "Calisto", "Tritón"],
          correctAnswer: "Luna",
        },
        // más preguntas...
      ],
    },
  },
  animales: {
    name: "Animales",
    subtopics: {
      mamiferos: [
        {
          question: "¿Cuál es el mamífero más grande?",
          options: ["Elefante", "Ballena azul", "Rinoceronte", "Hipopótamo"],
          correctAnswer: "Ballena azul",
        },
        {
          question: "¿Cuál es el animal terrestre más rápido?",
          options: ["León", "Tigre", "Guepardo", "Caballo"],
          correctAnswer: "Guepardo",
        },
        // más preguntas...
      ],
      aves: [
        {
          question: "¿Cuál es el ave más rápida?",
          options: ["Halcón peregrino", "Águila", "Tucán", "Cuervo"],
          correctAnswer: "Halcón peregrino",
        },
        {
          question: "¿Cuál es el ave más grande?",
          options: ["Cóndor", "Águila", "Avestruz", "Buitre"],
          correctAnswer: "Avestruz",
        },
        // más preguntas...
      ],
    },
  },
  Entretenimiento: {
    name: "Entretenimiento",
    subtopics: {
      "Gravity Falls": [
        {
          question: "¿Cómo se llama el misterioso diario que Dipper encuentra?",
          options: ["Diario 1", "Diario 2", "Diario 3", "Diario 4"],
          correctAnswer: "Diario 3",
        },
        {
          question: "¿Qué criatura intenta engañar a Dipper para que le entregue el diario?",
          options: ["Bill Cipher", "El Hombre Ciempiés", "El Gremio de la Cripta", "Manotauro"],
          correctAnswer: "Bill Clave",
        },
        {
          question: "¿Cuál es el verdadero nombre del tío Stan?",
          options: ["Stanley Pines", "Stanford Pines", "Samuel Pines", "Steve Pines"],
          correctAnswer: "Stanley Pines",
        },
        {
          question: "¿Cómo se llama el cerdito de Mabel?",
          options: ["Pato", "Snuffles", "Bacon", "Porky"],
          correctAnswer: "Pato",
        },
        {
          question: "¿Quién es el verdadero autor de los diarios?",
          options: ["Ford Pines", "Stan Pines", "Soos", "Bill Cipher"],
          correctAnswer: "Ford Pines",
        },
        // más preguntas...
      ],
    },
  },

  historiaArgentina: {
    name: "Historia Argentina",
    subtopics: {
      "Presidentes": [
        {
          question: "¿Quién fue el primer presidente de Argentina?",
          options: [
            "Domingo Faustino Sarmiento",
            "Bartolomé Mitre",
            "Justo José de Urquiza",
            "Cornelio Saavedra",
          ],
          correctAnswer: "Justo José de Urquiza",
        },
        {
          question:
            "¿Quién fue el presidente de Argentina durante la crisis del 2001?",
          options: [
            "Carlos Menem",
            "Fernando de la Rúa",
            "Eduardo Duhalde",
            "Néstor Kirchner",
          ],
          correctAnswer: "Fernando de la Rúa",
        },
        // más preguntas...
      ],
      "Fechas Patrias": [
        {
          question: "¿Qué se conmemora en Argentina el 25 de mayo?",
          options: [
            "Día de la Independencia",
            "Revolución de Mayo",
            "Batalla de Tucumán",
            "Primera Junta de Gobierno",
          ],
          correctAnswer: "Revolución de Mayo",
        },
        {
          question:
            "¿En qué fecha se celebra la Declaración de la Independencia de Argentina?",
          options: ["20 de junio", "9 de julio", "25 de mayo", "17 de agosto"],
          correctAnswer: "9 de julio",
        },
        // más preguntas...
      ],
      "Capitales de Provincias": [
        {
          question: "¿Cuál es la capital de la provincia de Buenos Aires?",
          options: [
            "La Plata",
            "Buenos Aires",
            "Mar del Plata",
            "Bahía Blanca",
          ],
          correctAnswer: "La Plata",
        },
        {
          question: "¿Cuál es la capital de la provincia de Catamarca?",
          options: [
            "Belén",
            "San Fernando del Valle de Catamarca",
            "Tinogasta",
            "Andalgalá",
          ],
          correctAnswer: "San Fernando del Valle de Catamarca",
        },
        {
          question: "¿Cuál es la capital de la provincia de Chaco?",
          options: [
            "Roque Sáenz Peña",
            "Villa Ángela",
            "Resistencia",
            "Charata",
          ],
          correctAnswer: "Resistencia",
        },
        {
          question: "¿Cuál es la capital de la provincia de Chubut?",
          options: [
            "Rawson",
            "Comodoro Rivadavia",
            "Puerto Madryn",
            "Trelew"
          ],
          correctAnswer: "Rawson",
        },
        {
          question: "¿Cuál es la capital de la provincia de Córdoba?",
          options: [
            "Villa Carlos Paz",
            "Río Cuarto",
            "Alta Gracia",
            "Córdoba"
          ],
          correctAnswer: "Córdoba",
        },
        {
          question: "¿Cuál es la capital de la provincia de Corrientes?",
          options: [
            "Goya",
            "Corrientes",
            "Paso de los Libres",
            "Mercedes"
          ],
          correctAnswer: "Corrientes",
        },
        {
          question: "¿Cuál es la capital de la provincia de Entre Ríos?",
          options: [
            "Concordia",
            "Gualeguaychú",
            "Paraná",
            "Victoria"
          ],
          correctAnswer: "Paraná",
        },
        {
          question: "¿Cuál es la capital de la provincia de Formosa?",
          options: [
            "Clorinda",
            "Pirané",
            "El Colorado",
            "Formosa"
          ],
          correctAnswer: "Formosa",
        },
        {
          question: "¿Cuál es la capital de la provincia de Jujuy?",
          options: [
            "Palpalá",
            "San Salvador de Jujuy",
            "Libertador General San Martín",
            "Tilcara",
          ],
          correctAnswer: "San Salvador de Jujuy",
        },
        {
          question: "¿Cuál es la capital de la provincia de La Pampa?",
          options: [
            "General Pico",
            "Santa Rosa",
            "Toay",
            "Realicó"],
          correctAnswer: "Santa Rosa",
        },
        {
          question: "¿Cuál es la capital de la provincia de La Rioja?",
          options: [
            "Chilecito",
            "Aimogasta",
            "La Rioja",
            "Chamical"
          ],
          correctAnswer: "La Rioja",
        },
        {
          question: "¿Cuál es la capital de la provincia de Mendoza?",
          options: [
            "Mendoza",
            "San Rafael",
            "Malargüe",
            "Godoy Cruz"
          ],
          correctAnswer: "Mendoza",
        },
        {
          question: "¿Cuál es la capital de la provincia de Misiones?",
          options: [
            "Oberá",
            "Posadas",
            "Eldorado",
            "Puerto Iguazú"
          ],
          correctAnswer: "Posadas",
        },
        {
          question: "¿Cuál es la capital de la provincia de Neuquén?",
          options: [
            "San Martín de los Andes",
            "Neuquén",
            "Zapala",
            "Plottier"
          ],
          correctAnswer: "Neuquén",
        },
        {
          question: "¿Cuál es la capital de la provincia de Río Negro?",
          options: [
            "Bariloche",
            "General Roca",
            "Viedma",
            "Cipolletti"
          ],
          correctAnswer: "Viedma",
        },
        {
          question: "¿Cuál es la capital de la provincia de Salta?",
          options: [
            "Tartagal",
            "Salta",
            "Orán",
            "Cafayate"
          ],
          correctAnswer: "Salta",
        },
        {
          question: "¿Cuál es la capital de la provincia de San Juan?",
          options: [
            "San Juan",
            "Jáchal",
            "Caucete",
            "Pocito"
          ],
          correctAnswer: "San Juan",
        },
        {
          question: "¿Cuál es la capital de la provincia de San Luis?",
          options: [
            "Villa Mercedes",
            "Merlo",
            "San Luis",
            "La Punta"
          ],
          correctAnswer: "San Luis",
        },
        {
          question: "¿Cuál es la capital de la provincia de Santa Cruz?",
          options: [
            "Caleta Olivia",
            "El Calafate",
            "Puerto Deseado",
            "Río Gallegos",
          ],
          correctAnswer: "Río Gallegos",
        },
        {
          question: "¿Cuál es la capital de la provincia de Santa Fe?",
          options: [
            "Rosario",
            "Santa Fe",
            "Rafaela",
            "Reconquista"
          ],
          correctAnswer: "Santa Fe",
        },
        {
          question:
            "¿Cuál es la capital de la provincia de Santiago del Estero?",
          options: [
            "Santiago del Estero",
            "La Banda",
            "Termas de Río Hondo",
            "Añatuya",
          ],
          correctAnswer: "Santiago del Estero",
        },
        {
          question: "¿Cuál es la capital de la provincia de Tierra del Fuego?",
          options: [
            "Río Grande",
            "Tolhuin",
            "Ushuaia",
            "Puerto Almanza"
          ],
          correctAnswer: "Ushuaia",
        },
        {
          question: "¿Cuál es la capital de la provincia de Tucumán?",
          options: [
            "Tafí Viejo",
            "Concepción",
            "Yerba Buena",
            "San Miguel de Tucumán",
          ],
          correctAnswer: "San Miguel de Tucumán",
        },
      ],
    },
  },
  // más temas...
};

export default triviaData;

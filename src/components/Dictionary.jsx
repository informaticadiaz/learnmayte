import React, { useState } from "react";
import SearchBar from "./SearchBar";

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  // Diccionario apto para chivos
  const dictionary = {
    // A
    abeja:
      "Insecto volador de cuerpo peludo que liba el néctar de las flores y del que se crían en colmenas para obtener miel y cera.",
    agua: "Líquido transparente, incoloro, inodoro e insípido en su estado puro.",
    águila:
      "Ave rapaz diurna, de gran tamaño, pico fuerte y curvo, patas robustas con garras afiladas y alas anchas y agudas.",
    ángel:
      "Ser espiritual, mensajero de Dios en algunas religiones, representado generalmente como una figura alada y luminosa.",
    araña:
      "Artrópodo arácnido de tamaño pequeño o mediano, con el cuerpo dividido en dos partes, cuatro pares de patas y sin alas ni antenas.",
    árbol:
      "Planta perenne, de tronco leñoso y ramas que brotan a cierta altura del suelo.",
    avión:
      "Aparato que vuela más pesado que el aire, provisto de alas y propulsado por uno o más motores.",
    algodón:
      "Planta de tallo herbáceo, hojas lobuladas y flores amarillas o rojizas, cuyo fruto es una cápsula que encierra semillas envueltas en una borra suave y blanca.",
    amarillo: "Color que resulta de la mezcla de luz roja y verde.",
    alma: "Parte espiritual e inmortal del ser humano, según algunas religiones y filosofías.",
    amigo: "Persona a la que se quiere y se aprecia desinteresadamente.",
    ángulo: "Figura formada por dos líneas que parten de un mismo punto.",
    anillo: "Objeto circular que se usa como adorno en los dedos de la mano.",
    árido: "Que carece de humedad y de vegetación.",
    animal:
      "Ser vivo que se mueve y respira, y que generalmente se alimenta de otros seres vivos.",
    aire: "Mezcla de gases que forman la atmósfera de la Tierra y que los seres vivos necesitan para respirar.",
    ardilla:
      "Roedor de pequeño tamaño, de cola larga y pelaje suave, que vive en los árboles y se alimenta de frutos y semillas.",
    azul: "Color que resulta de la mezcla de luz verde y azul.",
    alimentar:
      "Proporcionar a alguien o a algo los alimentos necesarios para su subsistencia o desarrollo.",
    amor: "Sentimiento afectivo hacia una persona o cosa a la que se le desea todo lo bueno.",
    alumno: "Persona que recibe enseñanza en una institución educativa.",
    astronauta:
      "Persona que viaja o está entrenada para viajar al espacio exterior.",
    arte: "Manifestación de la actividad humana mediante la cual se expresa una visión sensible sobre el mundo, ya sea real o imaginario.",
    atardecer:
      "Momento del día en que el sol se pone en el horizonte, dando lugar al ocaso.",
    álamo:
      "Árbol de tronco alto y delgado, con la corteza lisa y de color grisáceo, y hojas dentadas y casi redondas.",
    amplio: "Que tiene gran extensión o espacio.",
    azar: "Suceso o hecho fortuito e imprevisible.",
    alfombra:
      "Tejido que se pone en el suelo para adornar o para aislar del frío.",
    anchoa:
      "Pequeño pez comestible, de la familia de los clupeidos, parecido a la sardina pero de menor tamaño.",
    alcalde:
      "Persona que preside un ayuntamiento y tiene atribuciones políticas y administrativas en el gobierno municipal.",
    acordeón:
      "Instrumento musical portátil, de viento, formado por un fuelle y dos cajas, una para las teclas y otra para los bajos.",
    atún: "Pez marino de gran tamaño, de cuerpo alargado y color azulado o grisáceo, muy apreciado en gastronomía.",
    armadura:
      "Conjunto de piezas metálicas que cubren y protegen el cuerpo del guerrero.",
    alas: "Órganos de vuelo de algunos animales, como aves e insectos.",
    arena:
      "Material suelto y granular formado por partículas pequeñas de rocas y minerales.",
    año: "Período de 365 días, dividido en meses, que comienza el 1 de enero y termina el 31 de diciembre.",
    arcoíris:
      "Fenómeno óptico y meteorológico que produce un espectro de luz visible en el cielo cuando los rayos del sol atraviesan gotas de agua en suspensión.",
    auto: "Vehículo de transporte terrestre que funciona con motor y se utiliza para desplazarse de un lugar a otro.",
    alba: "Momento del día en que comienza a clarear, antes de la salida del sol.",
    // B
    bailar: "Mover el cuerpo al ritmo de la música.",
    bailarina: "Persona que baila como profesión o hobby.",
    balón: "Pelota utilizada en diferentes deportes.",
    ballena: "Mamífero marino de gran tamaño que vive en el océano.",
    banana: "Fruta alargada y amarilla que se pela antes de comer.",
    bandera: "Tela de colores que representa a un país o equipo.",
    barbacoa:
      "Evento al aire libre donde se cocina carne y otros alimentos en una parrilla.",
    barco: "Embarcación que flota en el agua y se usa para navegar.",
    barra: "Objeto largo y delgado de forma cilíndrica.",
    barrendero: "Persona que se encarga de limpiar las calles.",
    bastón: "Palo largo y delgado que sirve de apoyo al caminar.",
    bebé: "Persona recién nacida o muy pequeña.",
    bebida: "Líquido que se ingiere para saciar la sed.",
    beso: "Gesto de cariño en el que se juntan los labios.",
    bicicleta: "Vehículo de dos ruedas que se impulsa con los pies o pedales.",
    bola: "Objeto redondo que se utiliza en varios juegos.",
    bote: "Embarcación pequeña que se utiliza para remar o pescar.",
    botella: "Recipiente de vidrio o plástico para guardar líquidos.",
    botón: "Pieza pequeña que se usa para abrochar o cerrar la ropa.",
    brazo: "Parte del cuerpo humano que une la mano con el hombro.",
    burbuja: "Pequeña esfera de aire atrapada en agua o líquido.",
    bufanda:
      "Prenda de vestir larga y estrecha que se usa alrededor del cuello para abrigarse.",
    burro: "Animal de carga parecido al caballo, pero más pequeño.",
    búho: "Ave rapaz nocturna que tiene los ojos grandes.",
    batería: "Conjunto de tambores y platillos que se tocan para hacer música.",
    biblioteca: "Lugar donde se guardan y prestan libros para leer.",
    // C
    cama: "Mueble para dormir, generalmente con un colchón y sábanas.",
    camarón: "Crustáceo marino que se come como alimento.",
    camión: "Vehículo grande utilizado para transportar mercancías.",
    canción: "Composición musical que se canta.",
    caramelo: "Dulce hecho de azúcar fundido y endurecido.",
    caracol:
      "Animal de concha espiral que se mueve lentamente y lleva su casa en la espalda.",
    carta: "Mensaje escrito que se envía a través del correo.",
    casa: "Lugar donde vive una familia.",
    castillo:
      "Edificio grande y antiguo con torres y murallas, típicamente de piedra.",
    círculo:
      "Figura geométrica cerrada que tiene todos sus puntos a la misma distancia del centro.",
    cielo:
      "Espacio que se ve sobre nuestras cabezas y donde están el sol, la luna y las estrellas.",
    chocolate: "Dulce hecho con cacao y azúcar.",
    cuerda: "Objeto largo y delgado que se utiliza para atar o sujetar cosas.",
    cuerpo: "Parte física de una persona o animal.",
    cuaderno: "Libro con hojas en blanco para escribir o dibujar.",
    cuadrado:
      "Figura geométrica con cuatro lados iguales y cuatro ángulos rectos.",
    cumpleaños:
      "Día en que se celebra el aniversario del nacimiento de una persona.",
    cactus:
      "Planta suculenta con espinas, típicamente encontrada en climas áridos.",
    calcetines: "Prenda de vestir que se usa en los pies para abrigarse.",
    caballo:
      "Animal grande de cuatro patas que se monta para montar o trabajar.",
    computadora:
      "Dispositivo electrónico que se utiliza para procesar y almacenar información.",
    conejo:
      "Animal pequeño y peludo que come zanahorias y vive en madrigueras.",
    corazón: "Órgano en el cuerpo humano que bombea sangre.",
    cocina: "Lugar de la casa donde se preparan y cocinan los alimentos.",
    color: "Propiedad de los objetos que depende de la luz que reflejan.",
    // D
    dado: "Objeto con seis caras numeradas que se utiliza en juegos de mesa.",
    delfín: "Mamífero marino inteligente que vive en los océanos.",
    dedo: "Parte del cuerpo humano que está en la mano o en el pie y se usa para tocar o agarrar cosas.",
    día: "Periodo de tiempo que comprende las horas de luz del sol.",
    diente: "Pieza dura en la boca que se utiliza para masticar los alimentos.",
    dinosaurio:
      "Animal prehistórico que vivió en la Tierra hace millones de años.",
    dulce: "Alimento que tiene un sabor azucarado y agradable al paladar.",
    dormir:
      "Estado de descanso en el que se cierran los ojos y se descansa el cuerpo.",
    dibujo:
      "Representación gráfica de algo hecho con lápiz, crayón, o pintura.",
    donut: "Dulce redondo y horneado que a menudo se cubre con glaseado.",
    dentista: "Profesional médico que cuida y trata los dientes y las encías.",
    dormitorio: "Habitación de la casa destinada para dormir y descansar.",
    dragón: "Criatura mitológica con alas y escamas que escupe fuego.",
    dedal:
      "Pequeño objeto de metal o plástico que se usa para proteger el dedo al coser.",
    delantal:
      "Prenda de vestir que se coloca sobre la ropa para protegerla mientras se cocina o trabaja.",
    diario:
      "Libro o cuaderno en el que se escribe regularmente sobre eventos personales o noticias.",
    duende:
      "Criatura mágica y pequeña que según la leyenda vive en los bosques o en las casas.",
    desayuno: "Primera comida del día, que se toma por la mañana.",
    deporte: "Actividad física que se realiza con reglas y competición.",
    disfraz:
      "Ropa especial que se usa para cambiar de apariencia en una fiesta o evento.",
    divertido: "Que produce alegría o diversión.",
    dibujar:
      "Acción de crear imágenes utilizando lápices, crayones o pinturas.",
    // E
    elefante: "Animal grande con trompa que vive en la selva y en la sabana.",
    escuela: "Lugar donde los niños van a aprender y estudiar.",
    estrella: "Objeto brillante en el cielo que produce luz propia.",
    escuchar: "Prestar atención a los sonidos con los oídos.",
    espejo:
      "Superficie reflectante que muestra la imagen de lo que está delante de él.",
    escribir: "Formar palabras y frases utilizando un lápiz, pluma o teclado.",
    estómago: "Órgano en el cuerpo donde se digieren los alimentos.",
    enorme: "Muy grande en tamaño o cantidad.",
    estudiar: "Prestar atención y aprender sobre un tema.",
    escalera:
      "Conjunto de peldaños que se utilizan para subir o bajar de un lugar elevado.",
    eclipse:
      "Evento astronómico en el que un cuerpo celeste se oculta total o parcialmente por otro.",
    espacio:
      "Región fuera de la Tierra donde se encuentran los planetas, las estrellas y las galaxias.",
    esponja: "Objeto suave y poroso que se utiliza para limpiar y lavar cosas.",
    excavar: "Cavar o hacer un hoyo en la tierra.",
    excursión: "Viaje organizado para visitar un lugar interesante.",
    explorar: "Viajar y descubrir nuevos lugares o cosas.",
    explotar: "Hacer estallar algo violentamente.",
    extender: "Hacer que algo cubra un área más grande.",
    extraño: "Que es diferente o inusual.",
    // F
    fuego: "Calor y luz producidos por la combustión.",
    fiesta: "Celebración o evento especial con música, comida y diversión.",
    frio: "Temperatura baja que hace que se sienta sensación de frío.",
    futbol:
      "Deporte de equipo en el que dos equipos compiten por marcar goles en la portería del oponente.",
    familia:
      "Grupo de personas relacionadas entre sí por lazos de sangre o afecto.",
    fantasma:
      "Espíritu o aparición de una persona muerta que se cree que vaga en la Tierra.",
    faro: "Torre alta con una luz brillante en la parte superior, utilizada para guiar a los barcos en el mar.",
    futbolín:
      "Juego de mesa que simula un partido de fútbol con jugadores en barras que se mueven lateralmente.",
    felicidad: "Estado de sentirse feliz o contento.",
    fantasía: "Historia o cuento imaginativo y creativo.",
    fresa: "Fruta roja y jugosa con pequeñas semillas en su superficie.",
    flor: "Parte de una planta que produce semillas y a menudo es colorida y fragante.",
    foca: "Animal mamífero marino que vive en el agua y en la tierra.",
    fútbol:
      "Deporte de equipo en el que dos equipos compiten por marcar goles en la portería del oponente.",
    // G
    globo: "Objeto inflable de colores que se utiliza para decorar o jugar.",
    gato: "Animal doméstico de cuatro patas que maúlla y ronronea.",
    guitarra:
      "Instrumento musical de cuerda que se toca con los dedos o una púa.",
    galleta: "Dulce horneado y crujiente que se come como merienda.",
    gusano: "Animal pequeño y alargado que vive en la tierra y en el agua.",
    girasol:
      "Planta que produce grandes flores amarillas que siguen el movimiento del sol.",
    grande: "De tamaño superior al promedio.",
    // H
    hada: "Criatura mágica con alas que vive en cuentos de hadas.",
    hamburguesa: "Bocadillo que consiste en carne entre dos panes.",
    hámster: "Pequeño roedor que se mantiene como mascota.",
    helado: "Postre frío y dulce hecho de leche o crema con saborizante.",
    helicóptero:
      "Aeronave con hélices que puede elevarse y descender verticalmente.",
    héroe: "Persona valiente o admirable que realiza hazañas heroicas.",
    hierba: "Planta verde que crece en el suelo.",
    hierro: "Elemento metálico que es duro y resistente.",
    hiena: "Animal carnívoro de la familia de los cánidos.",
    hipopótamo: "Animal grande y pesado con piel gruesa y hocico ancho.",
    hogar: "Lugar donde vive una familia.",
    hormiga: "Insecto pequeño y trabajador que vive en colonias.",
    hospital: "Lugar donde las personas enfermas reciben tratamiento médico.",
    huevo: "Cáscara dura que contiene una cría de ave.",
    hábil: "Tener habilidad o destreza en algo.",
    // I
    impar: "Número que no puede dividirse exactamente por dos.",
    invierno:
      "Una de las cuatro estaciones del año, caracterizada por el frío.",
    iguana:
      "Reptil de cuerpo alargado, cubierto de escamas y con una larga cola.",
    inflar:
      "Aumentar el volumen de algo, como un globo o una pelota, llenándolo de aire.",
    iniciar: "Empezar o comenzar algo.",
    imagen: "Representación visual de algo.",
    infantil: "Relacionado con los niños o la infancia.",
    igual: "Que tiene las mismas características o cantidad que otra cosa.",
    isla: "Porción de tierra rodeada de agua por todas partes.",
    imán: "Objeto que atrae objetos metálicos, como hierro o acero.",
    imprimir: "Reproducir texto o imágenes en papel utilizando una impresora.",
    interesante: "Que despierta curiosidad o atención.",
    insecto:
      "Clase de animales invertebrados con el cuerpo dividido en tres segmentos y seis patas.",
    información: "Datos o conocimientos que se comunican.",
    ir: "Moverse de un lugar a otro.",
    insecticida: "Sustancia que se utiliza para matar insectos.",
    iglú: "Vivienda de los esquimales, hecha de bloques de hielo.",
    // J
    jaula: "Recipiente de alambre o barrotes utilizado para contener animales.",
    juego: "Actividad recreativa o competitiva organizada por reglas.",
    juguete: "Objeto destinado a ser jugado por niños.",
    jazz: "Estilo de música originario de Estados Unidos, caracterizado por ritmos sincopados y improvisación.",
    junto: "Cerca o al lado de algo o alguien.",
    jamón: "Carne curada y ahumada procedente del cerdo.",
    jabón: "Sustancia utilizada para limpiar el cuerpo o los objetos.",
    jardín:
      "Espacio al aire libre con plantas, flores y a menudo césped, utilizado para la recreación o la decoración.",
    jirafa: "Animal con un cuello largo que vive en la sabana africana.",
    jugar: "Participar en un juego o actividad recreativa.",
    joya: "Objeto valioso que se usa como adorno personal.",
    jazmín: "Planta trepadora con flores blancas y fragantes.",
    jarra: "Recipiente con asa y pico utilizado para verter líquidos.",
    joven: "Persona que está en la juventud.",
    júbilo: "Alegría o satisfacción intensa.",
    // L
    lápiz:
      "Instrumento de escritura o dibujo, generalmente hecho de madera y grafito.",
    lámpara:
      "Dispositivo que produce luz artificial cuando se le suministra energía eléctrica.",
    lágrima:
      "Gota de líquido que se produce en los ojos cuando se llora o se irritan.",
    lana: "Fibra suave que se obtiene de la oveja y se utiliza para tejer.",
    león: "Animal carnívoro de la familia de los félidos, conocido por su melena y su rugido.",
    luna: "Satélite natural de la Tierra que refleja la luz del sol durante la noche.",
    lago: "Gran masa de agua rodeada de tierra.",
    limón: "Fruto amarillo y ácido con muchas aplicaciones culinarias.",
    lindo: "Que tiene una apariencia agradable o bonita.",
    largo: "Que tiene una longitud mayor de lo normal.",
    ladrón: "Persona que roba o comete delitos.",
    lata: "Envase de metal utilizado para almacenar alimentos o bebidas.",
    luz: "Fenómeno que permite ver los objetos, producido por la radiación electromagnética.",
    libro:
      "Conjunto de hojas impresas que forman una obra literaria o científica.",
    // M
    mano: "Parte del cuerpo humano que se utiliza para agarrar, tocar y manipular objetos.",
    mascota: "Animal domesticado que se cría o se adopta como compañero.",
    mesa: "Mueble con una superficie plana y generalmente cuatro patas, utilizado para comer o trabajar.",
    mariposa: "Insecto volador con alas grandes y coloridas.",
    mundo:
      "Planeta Tierra y todo lo que hay en él, incluyendo la naturaleza y la humanidad.",
    manzana: "Fruta comestible del manzano, de color rojo, verde o amarillo.",
    mamá: "Nombre afectuoso que se le da a la madre.",
    madera: "Material sólido y fibroso que se obtiene de los árboles.",
    montaña: "Elevación natural y considerable del terreno.",
    mono: "Primate de cuerpo ágil y cola larga que vive en los árboles.",
    // N
    nadar: "Moverse en el agua utilizando los brazos y las piernas.",
    nariz: "Órgano del cuerpo humano utilizado para oler y respirar.",
    noche: "Periodo del día en el que es oscuro y se duerme.",
    niño: "Persona joven, especialmente un niño varón.",
    nube: "Masa visible de gotas de agua o cristales de hielo suspendidos en la atmósfera.",
    naranja: "Fruta cítrica de color naranja y sabor ácido o dulce.",
    // O
    oca: "Ave palmípeda de tamaño grande, con el pico y las patas cortas.",
    ola: "Onda formada en la superficie del mar.",
    oveja: "Animal mamífero domesticado criado por su lana y su carne.",
    olla: "Recipiente de cocina, generalmente de metal, utilizado para cocinar alimentos líquidos o sólidos.",
    ojo: "Órgano de la vista.",
    otoño:
      "Una de las cuatro estaciones del año, caracterizada por la caída de las hojas de los árboles.",
    oso: "Animal mamífero de gran tamaño cubierto de pelo y con garras afiladas.",
    // P
    palabra: "Secuencia de letras que tienen un significado.",
    perro:
      "Mamífero doméstico de la familia de los cánidos, de tamaño, forma y pelaje muy diversos, que se caracteriza por su inteligencia y fidelidad.",
    pequeño: "De tamaño reducido o inferior al promedio.",
    piña: "Fruta tropical con cáscara áspera y pulpa jugosa.",
    planta: "Organismo vivo que crece en la tierra o en el agua.",
    pollo:
      "Cría de la gallina, especialmente cuando aún no ha alcanzado la madurez.",
    pulpo: "Molusco marino con ocho brazos y una cabeza grande.",
    pato: "Ave acuática con pico ancho y patas palmeadas.",
    pelota: "Objeto esférico utilizado en diversos deportes y juegos.",
    pájaro: "Animal vertebrado, generalmente con alas y plumas, que vuela.",
    // Q
    querubín:
      "Un tipo de ángel representado en la iconografía religiosa como un niño alado.",
    queso: "Alimento sólido obtenido por la coagulación de la leche.",
    quetzal: "Ave de plumaje colorido que habita en América Central.",
    química:
      "Ciencia que estudia la composición, estructura y propiedades de la materia.",
    quinua: "Planta herbácea cuyas semillas se utilizan como alimento.",
    quinta: "Una casa de campo o finca.",
    quemar: "Producir fuego o calor en algo.",
    quesadilla:
      "Platillo mexicano que consiste en una tortilla de maíz o trigo rellena de queso.",
    quirófano: "Sala de un hospital destinada a las operaciones quirúrgicas.",
    quince: "Número ordinal que sigue al catorce.",
    // R
    rosa: "Flor con pétalos generalmente de color rosa.",
    rana: "Anfibio de piel húmeda y lisa, y cuerpo corto y rechoncho.",
    río: "Corriente natural de agua que fluye hacia el mar.",
    rayo: "Descarga eléctrica producida durante una tormenta.",
    ranita:
      "Forma diminutiva de rana, utilizada para referirse a una rana pequeña.",
    reina: "Mujer que tiene el título de soberana en un reino.",
    ratón: "Pequeño mamífero roedor con orejas grandes y cola larga.",
    reloj: "Dispositivo que indica la hora.",
    ramo: "Conjunto de flores atadas que se regalan como muestra de afecto o felicitación.",
    // S
    sol: "Estrella alrededor de la cual gira la Tierra y que proporciona luz y calor.",
    sapo: "Anfibio similar a la rana pero de aspecto más robusto y piel verrugosa.",
    sandía:
      "Fruta jugosa y refrescante de gran tamaño, con pulpa roja y semillas negras.",
    silla:
      "Asiento con respaldo, generalmente de cuatro patas, diseñado para una persona.",
    serpiente: "Reptil largo y sin extremidades, que se arrastra por el suelo.",
    sombrero:
      "Prenda de vestir que se lleva sobre la cabeza para protegerse del sol o del frío.",
    // T
    taza: "Recipiente pequeño, generalmente con asa, utilizado para beber líquidos.",
    tigre: "Gran felino de rayas oscuras en un fondo naranja o amarillo.",
    tortuga:
      "Reptil de caparazón duro que se mueve lentamente y vive en tierra o agua.",
    tren: "Vehículo que circula sobre raíles y transporta pasajeros o mercancías.",
    tiburón: "Pez cartilaginoso marino, generalmente grande y carnívoro.",
    tambor:
      "Instrumento musical de percusión formado por una membrana estirada sobre un aro.",
    // U
    uña: "Placa córnea que recubre la parte superior de los dedos de la mano y del pie.",
    uniforme:
      "Conjunto de prendas de vestir que identifican a un grupo o institución.",
    unicornio:
      "Criatura mítica representada como un caballo con un solo cuerno en la frente.",
    uva: "Fruta redonda y pequeña, de piel fina y sabor dulce o ácido.",
    // V
    vaca: "Animal doméstico que produce leche y carne.",
    vaso: "Recipientes generalmente cilíndricos utilizados para beber líquidos.",
    vela: "Objeto que se enciende para producir luz.",
    ventana: "Abertura en una pared que permite la entrada de luz y aire.",
    vestido: "Prenda de vestir que cubre el cuerpo de una persona.",
    viento: "Movimiento del aire en la atmósfera.",
    volante: "Dispositivo que controla la dirección de un vehículo.",
    volcán:
      "Abertura en la superficie terrestre de la que emerge magma, ceniza y gases durante una erupción.",
    // X
    xilófono:
      "Instrumento musical de percusión formado por láminas de madera dispuestas como un teclado.",
    xenofobia: "Rechazo u odio hacia los extranjeros.",
    xerografía: "Proceso de reproducción de documentos mediante fotocopiado.",
    xilografía:
      "Técnica de impresión que utiliza una plancha de madera grabada.",
    // Y
    yate: "Embarcación de lujo utilizada para recreo o transporte privado en el mar.",
    yema: "Parte interna y más tierna de algunos alimentos, como el huevo o la fruta.",
    yoga: "Conjunto de disciplinas físicas y mentales originarias de la India, que buscan el equilibrio y el bienestar del individuo.",
    yunque:
      "Instrumento de metal sobre el que se golpea para forjar o dar forma a otros metales.",
    yeso: "Material de construcción utilizado para revestir paredes o hacer molduras.",
    yogurt:
      "Producto lácteo obtenido por la fermentación bacteriana de la leche.",
    // Z
    zapato: "Calzado que se utiliza para proteger y cubrir el pie.",
    zanahoria:
      "Vegetal de color naranja alargado, comúnmente consumido crudo o cocido.",
    zapatilla:
      "Tipo de calzado ligero y cómodo, similar a una zapatilla deportiva.",
    zoológico:
      "Lugar donde se exhiben animales vivos para el entretenimiento y la educación de las personas.",
    zorro:
      "Mamífero carnívoro de la familia de los cánidos, conocido por su astucia y agilidad.",
    // Añadir más palabras y definiciones aquí
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setDefinition(dictionary[term.toLowerCase()] || "Palabra no encontrada");
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-dark p-4 md:p-8">
      <SearchBar onSearch={handleSearch} dictionary={Object.keys(dictionary)} />
      <div className="mt-6 w-full max-w-2xl rounded-lg bg-dark p-6 text-t-dark shadow-md">
        <h2 className="mb-4 bg-dark text-xl font-semibold text-t-dark">
          Definición
        </h2>
        {searchTerm && <p>{definition}</p>}
      </div>
    </div>
  );
};

export default Dictionary;

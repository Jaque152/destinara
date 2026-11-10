import { IMG } from "./images";

export const CATEGORIES = [
  "Pueblos Mágicos",
  "Naturaleza y Aventura",
  "Playa y Costa",
  "Circuitos",
  "Cultura y Tradición",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Product {
  slug: string;
  code: string;
  title: string;
  short: string;
  category: Category;
  price: number;
  region: string;
  duration: string;
  departure: string;
  minPeople: number;
  image: string;
  summary: string;
  why: string;
  special: string;
  includes: string[];
  excludes?: string[];
  info?: string[];
  tips?: string;
  featured?: boolean;
}

const DEFAULT_EXCLUDES = [
  "Propinas para guías y coordinadores",
  "Alimentos y bebidas no especificados",
  "Servicios adicionales no especificados",
];

const DEFAULT_INFO = [
  "Se recomienda puntualidad: no hay tiempo de tolerancia en el punto de encuentro",
  "El horario de salida puede variar según la temporada",
  "Itinerario sujeto a condiciones climáticas y de operación",
  "Reservación sujeta a disponibilidad hasta confirmar el pago",
];

const DEFAULT_TIPS =
  "Lleva ropa cómoda y en capas, calzado adecuado para caminar, bloqueador solar biodegradable, una botella reutilizable y efectivo para gastos personales.";

const raw: Product[] = [
  {
    slug: "san-miguel-de-allende-timmyland-y-tradicion-colonial",
    code: "DST-001",
    title: "Arquitectura de Ensueño en San Miguel de Allende: Timmyland y Tradición Colonial",
    short: "San Miguel de Allende",
    category: "Pueblos Mágicos",
    price: 1960,
    region: "Guanajuato",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.sanMiguel,
    featured: true,
    summary:
      "Un día entre fachadas color ocre, la Parroquia de San Miguel Arcángel y la arquitectura fantástica de Timmyland, una casa-escultura que parece salida de un cuento.",
    why: "San Miguel es una de las ciudades coloniales más fotogénicas del país: Patrimonio de la Humanidad, con galerías, terrazas y calles empedradas que invitan a caminar sin prisa.",
    special:
      "Combinamos el recorrido clásico por el centro con la visita a Timmyland, una pieza de arquitectura orgánica poco conocida que cambia la forma de mirar la ciudad.",
    includes: [
      "Transporte turístico redondo desde CDMX",
      "Entrada a Timmyland",
      "Recorrido guiado por el centro histórico",
      "Tiempo libre para comer y explorar galerías",
      "Seguro de viajero durante el traslado",
    ],
  },
  {
    slug: "teotihuacan-vuelo-en-globo",
    code: "DST-002",
    title: "Aventura Aérea en Teotihuacán: Vuelo en Globo y Experiencia Cultural",
    short: "Teotihuacán en globo",
    category: "Naturaleza y Aventura",
    price: 4598,
    region: "Estado de México",
    duration: "8 horas",
    departure: "Salida desde CDMX",
    minPeople: 3,
    image: IMG.teotihuacanBalloons,
    featured: true,
    summary:
      "Sobrevuela Teotihuacán al amanecer en un globo aerostático y contempla desde las alturas la antigua Ciudad de los Dioses mientras la luz ilumina sus pirámides y avenidas.",
    why: "Esta experiencia ofrece una perspectiva única de Teotihuacán, combinando aventura y cultura en un solo recorrido: el vuelo permite apreciar el sitio desde el aire y el recorrido guiado lo completa con historia.",
    special:
      "Elevarte mientras el sol ilumina la Calzada de los Muertos crea un momento irrepetible. Integramos transporte, alimentos y guías especializados para que no pienses en la logística.",
    includes: [
      "Traslado turístico redondo desde Ciudad de México",
      "Coffee break previo al vuelo",
      "Vuelo en globo aerostático con piloto certificado",
      "Certificado de vuelo al finalizar la experiencia",
      "Desayuno buffet de comida mexicana",
      "Acceso, visita y recorrido guiado en Teotihuacán",
      "Guía bilingüe (español/inglés)",
      "Seguro de viajero durante el traslado y el vuelo",
    ],
    excludes: ["Propinas para guías y coordinadores", "Servicios adicionales no especificados"],
    info: [
      "El tour requiere un mínimo de 3 personas para operar",
      "El vuelo dura aproximadamente de 45 a 60 minutos y depende del clima",
      "En caso de cancelación por clima, no se contempla compensación adicional",
      "Se recomienda puntualidad, ya que no hay tiempo de tolerancia",
      "Duración aproximada del tour: 8 horas",
    ],
    tips: "Lleva ropa cómoda, chamarra ligera para el vuelo matutino, calzado adecuado, cámara fotográfica y dinero extra para gastos personales.",
  },
  {
    slug: "taxco-pozas-azules-y-tradicion-colonial",
    code: "DST-003",
    title: "Aventura Natural en Taxco: Pozas Azules y Tradición Colonial",
    short: "Taxco y Pozas Azules",
    category: "Naturaleza y Aventura",
    price: 1450,
    region: "Guerrero",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.taxco,
    summary:
      "Nado en las Pozas Azules de Atzala, aguas turquesa entre montañas, y una tarde en Taxco, la ciudad de la plata, con su templo de Santa Prisca y sus callejones blancos.",
    why: "Taxco reúne naturaleza y patrimonio en un mismo día: agua cristalina por la mañana y arquitectura barroca por la tarde.",
    special:
      "Llegamos temprano a las pozas para disfrutarlas casi en silencio y dejamos la tarde para caminar Taxco cuando la luz cae sobre sus azoteas.",
    includes: [
      "Transporte turístico redondo desde CDMX",
      "Entrada a Pozas Azules de Atzala",
      "Recorrido a pie por el centro de Taxco",
      "Coordinador de viaje",
      "Seguro de viajero",
    ],
  },
  {
    slug: "villa-del-carbon-presas-bosques-y-tradicion-artesanal",
    code: "DST-004",
    title: "Escapada Natural y Cultural en Villa del Carbón: Presas, Bosques y Tradición Artesanal",
    short: "Villa del Carbón",
    category: "Pueblos Mágicos",
    price: 1030,
    region: "Estado de México",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.forestLake,
    summary:
      "Bosques de oyamel, la presa del Llano y un pueblo mágico conocido por su piel trabajada a mano y su gastronomía de montaña.",
    why: "A menos de dos horas de la ciudad, Villa del Carbón es la escapada perfecta para respirar aire de bosque sin largas distancias.",
    special:
      "Incluimos tiempo en la presa para remar o caminar y una visita a talleres artesanales donde conocerás el oficio de cerca.",
    includes: [
      "Transporte turístico redondo",
      "Visita a la Presa del Llano",
      "Recorrido por el pueblo y talleres artesanales",
      "Coordinador de viaje",
      "Seguro de viajero",
    ],
  },
  {
    slug: "huauchinango-cascadas-la-morena",
    code: "DST-005",
    title: "Experiencia Aventura en Huauchinango: Senderismo en Cascadas La Morena",
    short: "Cascadas La Morena",
    category: "Naturaleza y Aventura",
    price: 999,
    region: "Puebla",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.waterfall,
    summary:
      "Sendero entre bosque de niebla hasta las Cascadas La Morena y visita al pueblo mágico de Huauchinango, en la Sierra Norte de Puebla.",
    why: "La Sierra Norte es uno de los paisajes más verdes del centro del país: niebla, helechos gigantes y caídas de agua que se escuchan antes de verse.",
    special:
      "Una caminata de dificultad moderada, guiada por gente local, con pausas para nadar y comer en el pueblo.",
    includes: [
      "Transporte turístico redondo",
      "Acceso a Cascadas La Morena",
      "Guía local de senderismo",
      "Recorrido por Huauchinango",
      "Seguro de viajero",
    ],
  },
  {
    slug: "puerto-vallarta-y-sayulita-ballenas-jorobadas",
    code: "DST-006",
    title: "Experiencia Ballenas Jorobadas, Sayulita y Puerto Vallarta: Mar y Riviera del Pacífico",
    short: "Ballenas en Vallarta",
    category: "Playa y Costa",
    price: 6585,
    region: "Jalisco · Nayarit",
    duration: "3 días / 2 noches",
    departure: "En destino",
    minPeople: 2,
    image: IMG.whale,
    featured: true,
    summary:
      "Avistamiento de ballenas jorobadas en la Bahía de Banderas, una tarde surfista en Sayulita y el malecón de Puerto Vallarta al atardecer.",
    why: "Cada invierno, cientos de ballenas jorobadas llegan a la bahía para reproducirse. Verlas saltar a pocos metros es de esas cosas que no se olvidan.",
    special:
      "Navegamos con operadores certificados que respetan las distancias y los tiempos de los animales. Hospedaje boutique a pasos de la playa.",
    includes: [
      "2 noches de hospedaje en hotel boutique",
      "Tour de avistamiento de ballenas (temporada dic–mar)",
      "Traslado a Sayulita",
      "Traslados aeropuerto–hotel–aeropuerto",
      "Desayunos diarios",
      "Seguro de viajero",
    ],
  },
  {
    slug: "centro-ceremonial-otomi-y-metepec",
    code: "DST-007",
    title: "Experiencia Centro Ceremonial Otomí y Metepec: Tradición, Naturaleza y Cultura Mexiquense",
    short: "Otomí y Metepec",
    category: "Pueblos Mágicos",
    price: 1152,
    region: "Estado de México",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.pottery,
    summary:
      "El monumental Centro Ceremonial Otomí entre bosques y Metepec, cuna del Árbol de la Vida, con sus talleres de barro policromado.",
    why: "Una ruta para entender la cultura otomí y la tradición alfarera mexiquense, a muy poca distancia de la capital.",
    special:
      "Visitamos un taller familiar de Árbol de la Vida donde podrás ver cómo se modela y se pinta cada pieza.",
    includes: [
      "Transporte turístico redondo",
      "Acceso al Centro Ceremonial Otomí",
      "Visita a taller artesanal en Metepec",
      "Coordinador de viaje",
      "Seguro de viajero",
    ],
  },
  {
    slug: "chignahuapan-aguas-termales-y-pueblo-magico",
    code: "DST-008",
    title: "Aguas Termales de Chignahuapan + Pueblo Mágico: Relajación en la Sierra de Puebla",
    short: "Chignahuapan",
    category: "Naturaleza y Aventura",
    price: 970,
    region: "Puebla",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.hotSprings,
    summary:
      "Pozas termales en medio de la sierra y un pueblo mágico famoso por sus esferas navideñas hechas a mano y su kiosco mudéjar.",
    why: "Un día para bajar el ritmo: agua caliente, montaña y la calma de un pueblo serrano.",
    special:
      "Llegamos a las termas antes de la hora de mayor afluencia y cerramos en un taller de esferas donde puedes pintar la tuya.",
    includes: [
      "Transporte turístico redondo",
      "Acceso a balneario de aguas termales",
      "Visita a fábrica de esferas",
      "Recorrido por el pueblo",
      "Seguro de viajero",
    ],
  },
  {
    slug: "jardines-de-mexico-y-tepoztlan",
    code: "DST-009",
    title: "Experiencia en Jardines de México + Tepoztlán: Naturaleza, Colores y Pueblo Mágico",
    short: "Jardines de México",
    category: "Naturaleza y Aventura",
    price: 1680,
    region: "Morelos",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.tepoztlan,
    summary:
      "El jardín floral más grande del mundo, con más de 50 hectáreas temáticas, y una tarde entre mercados y montañas en Tepoztlán.",
    why: "Color, aroma y paisaje en un solo día. Tepoztlán aporta el misticismo del Tepozteco y una cocina de mercado inolvidable.",
    special:
      "Recorrido a tu ritmo por los jardines y tiempo libre en Tepoztlán para probar las nieves y el mercado artesanal.",
    includes: [
      "Transporte turístico redondo",
      "Acceso a Jardines de México",
      "Visita libre a Tepoztlán",
      "Coordinador de viaje",
      "Seguro de viajero",
    ],
  },
  {
    slug: "grutas-de-cacahuamilpa-y-taxco",
    code: "DST-010",
    title: "Experiencia Grutas de Cacahuamilpa y Taxco: Naturaleza Subterránea y Encanto Colonial",
    short: "Grutas de Cacahuamilpa",
    category: "Naturaleza y Aventura",
    price: 1256,
    region: "Guerrero",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.cave,
    summary:
      "Salones subterráneos de hasta 80 metros de altura con formaciones milenarias y una tarde de plata y barroco en Taxco.",
    why: "Cacahuamilpa es uno de los sistemas de cavernas más grandes del mundo: una catedral natural bajo la montaña.",
    special:
      "Recorrido guiado de 2 km dentro de las grutas, seguido de una caminata por Taxco con visita a un taller de platería.",
    includes: [
      "Transporte turístico redondo",
      "Acceso y recorrido guiado en las grutas",
      "Visita a Taxco y taller de platería",
      "Coordinador de viaje",
      "Seguro de viajero",
    ],
  },
  {
    slug: "guanajuato-colonial-y-la-gruta-spa",
    code: "DST-011",
    title: "Experiencia Guanajuato Colonial y La Gruta Spa: Historia, Callejones y Aguas Termales",
    short: "Guanajuato + La Gruta",
    category: "Circuitos",
    price: 4429,
    region: "Guanajuato",
    duration: "2 días / 1 noche",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.guanajuato,
    featured: true,
    summary:
      "Callejones, túneles y casas de colores en Guanajuato capital, callejoneada nocturna y una mañana en las aguas termales de La Gruta Spa.",
    why: "Guanajuato es una ciudad para perderse a pie: plazas pequeñas, teatro, música y una historia minera que se lee en cada fachada.",
    special:
      "Equilibramos ciudad y descanso: un día intenso de cultura y otro de agua termal antes de regresar.",
    includes: [
      "1 noche de hospedaje en el centro de Guanajuato",
      "Transporte turístico redondo",
      "Recorrido guiado por Guanajuato",
      "Callejoneada nocturna",
      "Acceso a La Gruta Spa",
      "Seguro de viajero",
    ],
  },
  {
    slug: "huamantla-la-noche-que-nadie-duerme",
    code: "DST-012",
    title: "Experiencia Huamantla y La Noche que Nadie Duerme: Tradición, Color y Arte Efímero",
    short: "La Noche que Nadie Duerme",
    category: "Cultura y Tradición",
    price: 1035,
    region: "Tlaxcala",
    duration: "1 noche",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.flowerCarpet,
    summary:
      "Kilómetros de alfombras de aserrín y flores elaboradas durante la noche del 14 de agosto en honor a la Virgen de la Caridad.",
    why: "Es una de las expresiones de arte efímero más impresionantes del país: toda una ciudad trabaja de noche para crear un camino de color.",
    special:
      "Llegamos al anochecer para ver la elaboración de las alfombras y el paso de la procesión de madrugada.",
    includes: [
      "Transporte turístico redondo",
      "Recorrido guiado nocturno",
      "Bebida caliente de bienvenida",
      "Coordinador de viaje",
      "Seguro de viajero",
    ],
  },
  {
    slug: "huasteca-potosina-3-dias",
    code: "DST-013",
    title: "Experiencia Huasteca Potosina 3 Días: Cascadas, Ríos Turquesa y Naturaleza Surrealista",
    short: "Huasteca Potosina",
    category: "Circuitos",
    price: 6470,
    region: "San Luis Potosí",
    duration: "3 días / 2 noches",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.huasteca,
    featured: true,
    summary:
      "Cascada de Tamul en panga, Puente de Dios, Cascadas de Micos y el jardín surrealista de Edward James en Xilitla.",
    why: "La Huasteca tiene los ríos más azules de México y uno de los jardines más extraños del mundo. Tres días que parecen un sueño.",
    special:
      "Ruta pensada para evitar los horarios más concurridos, con guías locales certificados en cada actividad acuática.",
    includes: [
      "2 noches de hospedaje en Ciudad Valles",
      "Transporte turístico redondo",
      "Paseo en panga a Cascada de Tamul",
      "Acceso a Puente de Dios, Micos y Las Pozas de Xilitla",
      "Chaleco salvavidas y guías certificados",
      "Desayunos",
      "Seguro de viajero",
    ],
  },
  {
    slug: "los-tuxtlas-selva-y-acantilados",
    code: "DST-014",
    title: "Experiencia Los Tuxtlas y Punta Roca Partida: Selva, Acantilados y Naturaleza Veracruzana",
    short: "Los Tuxtlas",
    category: "Circuitos",
    price: 4801,
    region: "Veracruz",
    duration: "3 días / 2 noches",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.jungleCoast,
    summary:
      "La selva tropical más al norte del continente, la laguna de Catemaco, el Salto de Eyipantla y los acantilados de Punta Roca Partida.",
    why: "Los Tuxtlas es una reserva de la biósfera donde la selva baja hasta el mar. Pocos lugares combinan así agua dulce, selva y océano.",
    special:
      "Paseo en lancha por Catemaco hasta la isla de los monos y caminata hasta el mirador de Roca Partida.",
    includes: [
      "2 noches de hospedaje en Catemaco",
      "Transporte turístico redondo",
      "Paseo en lancha por la laguna",
      "Acceso al Salto de Eyipantla",
      "Visita a Punta Roca Partida",
      "Seguro de viajero",
    ],
  },
  {
    slug: "tlaxcala-ruta-de-la-miel-y-girasoles",
    code: "DST-015",
    title: "Experiencia Natural en Tlaxcala: Ruta de la Miel y Campos de Girasoles",
    short: "Ruta de la Miel",
    category: "Naturaleza y Aventura",
    price: 1570,
    region: "Tlaxcala",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.sunflowers,
    summary:
      "Visita a un apiario familiar con cata de mieles y una caminata entre campos de girasoles en temporada.",
    why: "Una experiencia lenta y luminosa para conocer el trabajo de los apicultores tlaxcaltecas.",
    special: "Cata guiada de cinco mieles distintas y tiempo libre para fotografía entre girasoles.",
    includes: [
      "Transporte turístico redondo",
      "Visita y cata en apiario",
      "Acceso a campo de girasoles",
      "Coordinador de viaje",
      "Seguro de viajero",
    ],
  },
  {
    slug: "atlixco-y-cholula-villa-iluminada",
    code: "DST-016",
    title: "Experiencia Navideña en Atlixco: Villa Iluminada, Cerveza Artesanal y Cholula",
    short: "Atlixco Villa Iluminada",
    category: "Cultura y Tradición",
    price: 1240,
    region: "Puebla",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.cholula,
    summary:
      "La Gran Pirámide de Cholula con el Popocatépetl de fondo, cata de cerveza artesanal y la Villa Iluminada de Atlixco al anochecer.",
    why: "Una ruta de temporada que combina historia prehispánica, sabores locales y miles de luces navideñas.",
    special: "Llegamos a Atlixco justo cuando se encienden las luces para vivir el momento completo.",
    includes: [
      "Transporte turístico redondo",
      "Visita a Cholula",
      "Cata de cerveza artesanal",
      "Visita a la Villa Iluminada",
      "Seguro de viajero",
    ],
  },
  {
    slug: "tecolutla-y-papantla-playa-y-cultura-totonaca",
    code: "DST-017",
    title: "Experiencia Playa Tecolutla + Papantla: Mar, Cultura Totonaca y Pueblo Mágico",
    short: "Tecolutla + Papantla",
    category: "Playa y Costa",
    price: 958,
    region: "Veracruz",
    duration: "1 día",
    departure: "Salida desde Poza Rica",
    minPeople: 2,
    image: IMG.gulfBeach,
    summary:
      "Playas tranquilas del Golfo, la ceremonia de los Voladores de Papantla y el aroma a vainilla del pueblo mágico.",
    why: "La Costa Esmeralda es un Veracruz más íntimo: mar tibio, cultura totonaca viva y pueblos sin prisa.",
    special: "Presenciamos la ceremonia de los Voladores, Patrimonio Cultural Inmaterial de la Humanidad.",
    includes: [
      "Transporte turístico redondo",
      "Tiempo de playa en Tecolutla",
      "Visita a Papantla",
      "Ceremonia de Voladores",
      "Seguro de viajero",
    ],
  },
  {
    slug: "ruta-maya-8-dias",
    code: "DST-018",
    title: "Experiencia Ruta Maya 8 Días: Cultura Maya, Caribe Mexicano y Ciudades Coloniales",
    short: "Ruta Maya · 8 días",
    category: "Circuitos",
    price: 38500,
    region: "Yucatán · Quintana Roo · Campeche",
    duration: "8 días / 7 noches",
    departure: "En destino",
    minPeople: 2,
    image: IMG.chichenItza,
    featured: true,
    summary:
      "Chichén Itzá, Uxmal, Mérida, Campeche amurallada, cenotes sagrados, Bacalar y el Caribe de Tulum en un solo viaje.",
    why: "La península de Yucatán guarda la memoria maya en piedra y agua. Este circuito la recorre completa, con calma y en orden.",
    special:
      "Hospedaje en haciendas y hoteles boutique, guías arqueólogos en las zonas principales y días libres para descansar en el Caribe.",
    includes: [
      "7 noches de hospedaje en haciendas y hoteles boutique",
      "Transporte privado durante todo el circuito",
      "Accesos a zonas arqueológicas y cenotes",
      "Guía bilingüe especializado",
      "Desayunos diarios y 3 cenas",
      "Traslados aeropuerto",
      "Seguro de viajero",
    ],
  },
  {
    slug: "tlaxcala-santuario-de-las-luciernagas",
    code: "DST-019",
    title: "Experiencia Santuario de las Luciérnagas y Tlaxcala: Bosques Encantados y Magia Nocturna",
    short: "Santuario de Luciérnagas",
    category: "Naturaleza y Aventura",
    price: 1281,
    region: "Tlaxcala",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.fireflies,
    featured: true,
    summary:
      "Al caer la noche, miles de luciérnagas iluminan el bosque de Nanacamilpa en uno de los espectáculos naturales más mágicos del país.",
    why: "Solo ocurre unas semanas al año (junio–agosto): el bosque entero parpadea en silencio.",
    special: "Grupos reducidos y protocolo de observación responsable para proteger a las luciérnagas.",
    includes: [
      "Transporte turístico redondo",
      "Acceso al santuario",
      "Guía local",
      "Cena típica",
      "Seguro de viajero",
    ],
  },
  {
    slug: "santuario-monarca-y-valle-de-bravo",
    code: "DST-020",
    title: "Experiencia Santuario Monarca y Valle de Bravo: Naturaleza, Bosques y Pueblo Mágico",
    short: "Mariposa Monarca",
    category: "Naturaleza y Aventura",
    price: 977,
    region: "Estado de México",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.monarch,
    summary:
      "Millones de mariposas monarca cubriendo los oyameles del santuario Piedra Herrada y una tarde junto al lago de Valle de Bravo.",
    why: "La migración de la monarca es uno de los fenómenos naturales más extraordinarios del planeta, y sucede aquí cada invierno.",
    special: "Subida a caballo o a pie con guías comunitarios y comida frente al lago.",
    includes: [
      "Transporte turístico redondo",
      "Acceso al santuario",
      "Guía comunitario",
      "Visita a Valle de Bravo",
      "Seguro de viajero",
    ],
  },
  {
    slug: "tecolutla-y-papantla-tortugas-marinas",
    code: "DST-021",
    title: "Experiencia Tortugas Marinas, Tecolutla y Papantla: Ecoturismo y Tradición Veracruzana",
    short: "Tortugas Marinas",
    category: "Playa y Costa",
    price: 1892,
    region: "Veracruz",
    duration: "2 días / 1 noche",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.seaTurtle,
    summary:
      "Liberación de tortugas marinas en un campamento de conservación en Tecolutla y visita a la cultura totonaca de Papantla.",
    why: "Participar en la liberación de crías es una forma directa de apoyar la conservación de especies en peligro.",
    special: "Trabajamos con un campamento tortuguero comunitario; parte del costo se destina a su operación.",
    includes: [
      "1 noche de hospedaje en Tecolutla",
      "Transporte turístico redondo",
      "Liberación de tortugas (temporada)",
      "Visita a Papantla",
      "Seguro de viajero",
    ],
  },
  {
    slug: "teotihuacan-express-piramides-e-historia",
    code: "DST-022",
    title: "Tour Teotihuacán Express: Pirámides, Historia y Cultura Prehispánica desde CDMX",
    short: "Teotihuacán Express",
    category: "Cultura y Tradición",
    price: 990,
    region: "Estado de México",
    duration: "6 horas",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.teotihuacanPyramid,
    summary:
      "Pirámide del Sol, Pirámide de la Luna y Calzada de los Muertos en un recorrido ágil, guiado y con regreso a mediodía.",
    why: "Ideal si tienes poco tiempo en la ciudad y no quieres perderte la zona arqueológica más visitada de México.",
    special: "Salida temprano para recorrer antes del calor y las multitudes.",
    includes: [
      "Transporte turístico redondo",
      "Acceso a la zona arqueológica",
      "Guía certificado",
      "Seguro de viajero",
    ],
  },
  {
    slug: "tlaquepaque-y-navidalia-magia-navidena",
    code: "DST-023",
    title: "Magia Navideña en Tlaquepaque y Navidalia",
    short: "Tlaquepaque y Navidalia",
    category: "Cultura y Tradición",
    price: 2670,
    region: "Jalisco",
    duration: "1 día",
    departure: "Salida desde Guadalajara",
    minPeople: 2,
    image: IMG.papelPicado,
    summary:
      "Calles de papel picado, galerías y mariachi en Tlaquepaque y el parque temático navideño Navidalia por la noche.",
    why: "Una forma festiva de vivir Guadalajara en temporada decembrina, con artesanía, música y luces.",
    special: "Comida en el Parián con mariachi en vivo antes de entrar a Navidalia.",
    includes: [
      "Transporte turístico redondo",
      "Recorrido por Tlaquepaque",
      "Acceso a Navidalia",
      "Coordinador de viaje",
      "Seguro de viajero",
    ],
  },
  {
    slug: "tequila-tradicion-y-paisajes-de-agave",
    code: "DST-024",
    title: "Ruta del Tequila en Tequila: Tradición, Cultura y Paisajes de Agave",
    short: "Ruta del Tequila",
    category: "Circuitos",
    price: 4875,
    region: "Jalisco",
    duration: "2 días / 1 noche",
    departure: "Salida desde Guadalajara",
    minPeople: 2,
    image: IMG.agave,
    featured: true,
    summary:
      "Paisaje agavero Patrimonio de la Humanidad, jima de agave, destilerías históricas y catas guiadas en el pueblo mágico de Tequila.",
    why: "El tequila se entiende mejor en el campo, entre surcos azules y hornos de piedra.",
    special: "Noche en hacienda tequilera y cata vertical con un maestro tequilero.",
    includes: [
      "1 noche en hacienda tequilera",
      "Transporte turístico redondo",
      "Demostración de jima",
      "Visita a 2 destilerías con cata",
      "Desayuno",
      "Seguro de viajero",
    ],
  },
  {
    slug: "tlaxcala-girasoles-y-valquirico",
    code: "DST-025",
    title: "Ruta Floral y Cultural en Tlaxcala: Santuario de Girasoles y Val'Quirico",
    short: "Girasoles y Val'Quirico",
    category: "Naturaleza y Aventura",
    price: 2290,
    region: "Tlaxcala",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 2,
    image: IMG.pinkWall,
    summary:
      "Santuario de girasoles en temporada y la villa de estilo toscano Val'Quirico, con sus callejones de piedra y restaurantes.",
    why: "Un día fotogénico y relajado, ideal en pareja o con amigos.",
    special: "Comida incluida en Val'Quirico y tiempo libre para recorrer sus tiendas.",
    includes: [
      "Transporte turístico redondo",
      "Acceso al santuario de girasoles",
      "Visita a Val'Quirico",
      "Comida",
      "Seguro de viajero",
    ],
  },
  {
    slug: "ciudad-de-mexico-burger-tour",
    code: "DST-026",
    title: "Ruta Gastronómica en Ciudad de México: Burger Tour",
    short: "CDMX Burger Tour",
    category: "Cultura y Tradición",
    price: 970,
    region: "Ciudad de México",
    duration: "4 horas",
    departure: "Roma · Condesa",
    minPeople: 2,
    image: IMG.burger,
    summary:
      "Tres paradas en las mejores hamburgueserías de autor de la Roma y la Condesa, con historia del barrio entre bocado y bocado.",
    why: "La escena gastronómica de la ciudad también se cuenta a través de sus barras más queridas.",
    special: "Degustación en tres locales independientes y una bebida artesanal incluida.",
    includes: [
      "Degustación en 3 hamburgueserías",
      "1 bebida artesanal",
      "Guía gastronómico",
      "Recorrido a pie por Roma y Condesa",
    ],
  },
];

export const PRODUCTS: Product[] = raw.map((p) => ({
  ...p,
  excludes: p.excludes ?? DEFAULT_EXCLUDES,
  info: p.info ?? [
    `El tour requiere un mínimo de ${p.minPeople} ${p.minPeople === 1 ? "persona" : "personas"} para operar`,
    ...DEFAULT_INFO,
    `Duración aproximada: ${p.duration}`,
  ],
  tips: p.tips ?? DEFAULT_TIPS,
}));

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);

export const getRelated = (product: Product, n = 3) =>
  PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, n);

export const formatMXN = (n: number) =>
  `$${n.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN`;

export const formatMXNShort = (n: number) => `$${n.toLocaleString("es-MX")}`;

export const COUPONS: Record<string, { label: string; type: "percent" | "fixed"; value: number }> = {
  DESTINARA10: { label: "10% de bienvenida", type: "percent", value: 10 },
  CRITERIO500: { label: "$500 de descuento", type: "fixed", value: 500 },
};

export const computeDiscount = (subtotal: number, code: string | null) => {
  if (!code) return 0;
  const c = COUPONS[code];
  if (!c) return 0;
  if (c.type === "percent") return Math.round(subtotal * (c.value / 100));
  return Math.min(c.value, subtotal);
};

export const CONTACT = {
  phone: "+52 55 0000 0000",
  phoneHref: "tel:+525500000000",
  email: "reserva@destinara.com.mx",
  city: "CDMX · México",
  domain: "destinara.com.mx",
};


import type { Product } from "./products";

type DescriptionFields = Pick<
  Product,
  "summary" | "includes" | "excludes" | "tips"
>;

type DescriptionOverrides = Record<
  string,
  {
    es: DescriptionFields;
    en: DescriptionFields;
  }
>;

export const PRODUCT_DESCRIPTIONS: DescriptionOverrides = {
  "san-miguel-de-allende-timmyland-y-tradicion-colonial": {
    es: {
      summary:
        "Déjate sorprender por un viaje en el que la arquitectura, el patrimonio histórico y las expresiones artísticas se encuentran en lugares extraordinarios.\nLa aventura comienza en el Santuario de Jesús Nazareno de Atotonilco, reconocido como la “Capilla Sixtina Mexicana” gracias a sus impresionantes pinturas murales y ornamentación religiosa.\nDespués visitarás Rancho Cascabeles, un fascinante espacio de arquitectura surrealista con influencias del trabajo de Antoni Gaudí. Sus formas poco convencionales y escenarios llenos de imaginación crean un ambiente donde la creatividad y la fantasía cobran vida.\nPara cerrar el recorrido, descubrirás San Miguel de Allende, una ciudad emblemática de México. Entre callejones empedrados, edificios barrocos y monumentos como la Parroquia de San Miguel Arcángel, disfrutarás de un entorno repleto de historia, identidad y tradición.",
      includes: [
        "Entrada y recorrido por Rancho Cascabeles",
        "Visita acompañada por guía dentro del rancho",
        "Recorrido por Atotonilco y su Santuario de Jesús Nazareno",
        "Estancia y visita a San Miguel de Allende",
        "Paseo por el mercado local de artesanías",
        "Acompañamiento de coordinador bilingüe español-inglés",
        "Cobertura de seguro de viajero durante la experiencia",
      ],
      excludes: [
        "Experiencias complementarias ofrecidas en los lugares visitados",
        "Gratificaciones para coordinadores y guías locales",
        "Prestaciones extra no contempladas en el programa",
      ],
      tips:
        "Procura vestir prendas confortables, usar zapatos apropiados para caminar y llevar cámara, protección solar y efectivo adicional para alimentos, compras o actividades opcionales.",
    },
    en: {
      summary:
        "Discover a remarkable journey where architectural beauty, artistic expression, and history come together in extraordinary places.\nBegin at the Sanctuary of Jesus Nazarene in Atotonilco, often called the 'Mexican Sistine Chapel' because of its elaborate religious artwork and magnificent murals.\nContinue to Rancho Cascabeles, an imaginative setting featuring surreal architecture influenced by Antoni Gaudí. Its unusual structures and enchanting atmosphere invite you into a world where creativity and fantasy meet.\nThe journey concludes in San Miguel de Allende, an iconic Mexican city filled with cobblestone lanes, baroque buildings, and landmarks such as the Parish of San Miguel Arcángel.",
      includes: [
        "Admission and visit to Rancho Cascabeles",
        "Accompanied guided exploration of the ranch",
        "Tour of Atotonilco and its Jesus Nazarene Sanctuary",
        "Visit and time in San Miguel de Allende",
        "Walk through the local artisan market",
        "Spanish-English bilingual trip coordination",
        "Travel insurance coverage throughout the experience",
      ],
      excludes: [
        "Optional activities available at the visited attractions",
        "Gratuities for local guides and trip coordinators",
        "Extra services not listed in the itinerary",
      ],
      tips:
        "Choose comfortable outfits and suitable walking footwear. Pack a camera, sun protection, and extra cash for meals, souvenirs, and optional experiences.",
    },
  },

  "teotihuacan-vuelo-en-globo": {
    es: {
      summary:
        "Contempla Teotihuacán desde una perspectiva espectacular mientras sobrevuelas uno de los complejos arqueológicos más fascinantes del territorio mexicano.\nDurante las primeras luces del día, subirás a un globo aerostático para admirar desde el cielo la antigua Ciudad de los Dioses, observando cómo el amanecer resalta sus monumentales pirámides y grandes avenidas.\nUna vez concluido el vuelo, podrás disfrutar de un desayuno tipo buffet y recibirás un certificado como recuerdo de esta aventura aérea.\nLa experiencia continúa con una visita guiada a la zona arqueológica para conocer la Pirámide del Sol, la Pirámide de la Luna y la Calzada de los Muertos, mientras descubres aspectos históricos y culturales de esta civilización prehispánica.",
      includes: [
        "Transportación turística de ida y regreso desde CDMX",
        "Servicio de café y refrigerio antes de despegar",
        "Paseo en globo aerostático dirigido por piloto certificado",
        "Entrega de constancia conmemorativa del vuelo",
        "Desayuno buffet con platillos mexicanos",
        "Entrada y recorrido acompañado en la zona arqueológica de Teotihuacán",
        "Servicio de guía en español e inglés",
        "Póliza de viajero durante el transporte y vuelo",
      ],
      excludes: [
        "Gratificaciones voluntarias a guías y personal coordinador",
        "Prestaciones complementarias no incluidas en el itinerario",
      ],
      tips:
        "Utiliza vestimenta confortable, lleva una chamarra ligera para las primeras horas del día, zapatos adecuados, cámara y efectivo para compras o gastos particulares.",
    },
    en: {
      summary:
        "Admire Teotihuacán from an extraordinary viewpoint as you soar above one of Mexico's most fascinating archaeological treasures.\nIn the early morning, board a hot air balloon and watch the ancient City of the Gods unfold beneath you while the rising sun illuminates its monumental pyramids and broad avenues.\nAfter touching down, enjoy a Mexican buffet breakfast and receive a commemorative flight certificate.\nYour adventure continues with a guided exploration of the archaeological complex, where you will discover the Pyramid of the Sun, the Pyramid of the Moon, and the Avenue of the Dead while learning about this remarkable ancient civilization.",
      includes: [
        "Round-trip sightseeing transportation from Mexico City",
        "Coffee and light refreshments before takeoff",
        "Certified-pilot hot air balloon experience",
        "Commemorative flight certificate",
        "Buffet breakfast featuring Mexican dishes",
        "Archaeological site admission and accompanied Teotihuacán tour",
        "Guiding services in English and Spanish",
        "Travel insurance for both transfer and balloon flight",
      ],
      excludes: [
        "Voluntary gratuities for guides and coordinators",
        "Optional services outside the scheduled program",
      ],
      tips:
        "Wear comfortable clothing and suitable footwear, bring a light jacket for the early flight, and carry a camera and spare cash for personal expenses.",
    },
  },

  "taxco-pozas-azules-y-tradicion-colonial": {
    es: {
      summary:
        "Explora un rincón natural sorprendente muy cerca de Taxco: las Pozas Azules de Atzala, donde pequeñas cascadas y piscinas naturales muestran tonalidades turquesas producidas por los minerales del agua.\nRodeado de vegetación y formaciones pétreas, este paisaje es ideal para refrescarte, relajarte o contemplar la belleza del entorno.\nLa segunda parte de la experiencia se desarrolla en Taxco, célebre por sus construcciones coloniales de cantera clara y sus calles adoquinadas. Tendrás oportunidad de explorar el centro histórico, acercarte a sus talleres de orfebrería y conocer sus sabores tradicionales.\nEntre sus principales atractivos destaca el templo de Santa Prisca, una de las construcciones religiosas más representativas de la localidad.",
      includes: [
        "Estancia en Pozas Azules de Atzala (acceso por cuenta del viajero)",
        "Visita a Taxco acompañada de guía",
        "Periodo libre para comer y recorrer Taxco",
        "Asistencia de coordinador de viaje bilingüe",
        "Protección mediante seguro de viajero durante el recorrido",
      ],
      excludes: [
        "Entrada a Pozas Azules de Atzala (adultos $100; niños de 3 a 12 años $50; llevar importe exacto en efectivo)",
        "Gratificaciones para el equipo de guías y coordinación",
        "Actividades opcionales o prestaciones fuera del programa",
      ],
      tips:
        "Empaca prendas cómodas, traje de baño, toalla, calzado para agua o sandalias, protector solar, muda seca y efectivo para entradas y consumos personales.",
    },
    en: {
      summary:
        "Explore a beautiful natural retreat close to Taxco: the Pozas Azules de Atzala, where waterfalls and clear natural pools reveal turquoise shades created by minerals in the water.\nSurrounded by lush greenery and rocky formations, the setting is ideal for swimming, unwinding, or simply enjoying the scenery.\nThe journey then takes you to Taxco, celebrated for its light-colored colonial buildings and cobbled streets. Wander through the historic center, discover traditional silver workshops, and sample the local cuisine.",
      includes: [
        "Stop at Pozas Azules de Atzala (admission purchased separately)",
        "Accompanied sightseeing tour of Taxco",
        "Free time for dining and exploring Taxco",
        "English-Spanish bilingual trip coordinator",
        "Travel insurance protection during the outing",
      ],
      excludes: [
        "Pozas Azules entrance (MXN $100 adults; MXN $50 children aged 3–12; bring exact cash)",
        "Gratuities for coordinators and local guides",
        "Optional activities and services outside the program",
      ],
      tips:
        "Pack comfortable clothes, swimwear, a towel, water-friendly shoes, sunblock, dry clothing, and cash for entrance fees and personal purchases.",
    },
  },

  "villa-del-carbon-presas-bosques-y-tradicion-artesanal": {
    es: {
      summary:
        "Escápate a Villa del Carbón, un pintoresco destino de montañas y paisajes verdes donde podrás dejar atrás el ritmo cotidiano. Conocido por su tradición en la elaboración de botines charros, este Pueblo Mágico conserva construcciones de piedra, balcones de madera, tejados rojizos y callejones empedrados que reflejan su pasado colonial.\nSus artesanos trabajan la piel para crear botas, cinturones, chamarras y accesorios, mientras su gastronomía de campo y bebidas tradicionales, como el pulque, enriquecen la visita.\nLa naturaleza será protagonista en la Presa del Llano, un espacio rodeado de bosques de pinos, oyameles, encinos y eucaliptos.\nTambién visitarás la Presa Taxhimay, cuyo paisaje destaca por la torre de una antigua iglesia que permanece bajo el agua.",
      includes: [
        "Paseo turístico por Villa del Carbón",
        "Recorrido a Presa del Llano (boleto de entrada no incluido)",
        "Estancia y visita en Presa Taxhimay",
        "Paseo compartido en embarcación en Taxhimay (boleto no incluido)",
        "Servicio de coordinador en inglés y español",
        "Seguro para viajeros durante el desarrollo de la actividad",
      ],
      excludes: [
        "Entradas a Presa del Llano y Taxhimay (desde 12 años $90; menores de 0 a 2 años $60; llevar cambio exacto en efectivo)",
        "Actividades y prestaciones extras no detalladas",
      ],
      tips:
        "Viste ropa confortable y tenis con buena tracción para caminos de tierra; agrega sudadera, repelente, bloqueador y efectivo para accesos y compras.",
    },
    en: {
      summary:
        "Escape to Villa del Carbón, a picturesque mountain town surrounded by greenery where you can take a break from everyday life. Famous for its traditional charro boots, the town retains stone buildings, wooden balconies, red-tiled roofs, and charming cobbled lanes.\nLocal artisans transform leather into footwear, belts, jackets, and accessories, while country-style cooking and traditional pulque enhance the visit.\nEnjoy the natural beauty of Presa del Llano amid pine and oyamel woodland, followed by Presa Taxhimay, known for the church tower rising from its waters.",
      includes: [
        "Sightseeing walk around Villa del Carbón",
        "Excursion to Presa del Llano (entrance paid separately)",
        "Visit and time at Presa Taxhimay",
        "Shared boat outing at Taxhimay (ticket not included)",
        "English-Spanish bilingual travel coordinator",
        "Traveler insurance throughout the activity",
      ],
      excludes: [
        "Dam admission charges (MXN $90 for ages 12 and older; MXN $60 for ages 0–2; exact cash recommended)",
        "Optional services or activities not listed",
      ],
      tips:
        "Choose comfortable outfits and grippy walking shoes, plus a warm layer, insect repellent, sunscreen, and cash for shopping and entrance tickets.",
    },
  },

  "huauchinango-cascadas-la-morena": {
    es: {
      summary:
        "Adéntrate en los paisajes de la Sierra Norte de Puebla mediante una ruta ecoturística ideal para amantes de la aventura, las caminatas y los espacios naturales.\nLa experiencia inicia en las Cascadas La Morena, un sitio rodeado de montañas, abundante vegetación y caminos rústicos donde el sonido de las corrientes de agua acompaña cada paso y permite conectar de lleno con el ambiente del bosque.\nMás tarde visitarás la Presa de Tenango de las Flores para disfrutar de un relajante recorrido en lancha. La jornada termina en Huauchinango, un Pueblo Mágico lleno de identidad y tradición regional.",
      includes: [
        "Excursión a Cascadas La Morena (boleto de entrada por separado)",
        "Orientación inicial sobre senderismo antes de comenzar",
        "Visita y recorrido en lancha por la Presa de Tenango de las Flores (acceso no incluido)",
        "Paseo turístico en el Pueblo Mágico de Huauchinango",
        "Acompañamiento permanente de coordinador bilingüe",
      ],
      excludes: [
        "Boletos para cascadas y otras actividades (aproximadamente $150 MXN)",
        "Gratificaciones a coordinadores y guías de la localidad",
        "Servicios opcionales ajenos a lo indicado",
      ],
      tips:
        "Utiliza ropa deportiva ligera, botas o tenis con suela antiderrapante, impermeable, prendas de cambio, agua para hidratarte y protección solar.",
    },
    en: {
      summary:
        "Journey into Puebla's northern highlands on an ecotourism adventure designed for nature enthusiasts and those who enjoy hiking through stunning landscapes.\nBegin at La Morena Waterfalls, hidden among mountains, thick vegetation, and rustic trails where running water creates a peaceful woodland atmosphere.\nContinue to Tenango de las Flores Dam for a relaxing boat excursion before ending the day in the culturally rich Magical Town of Huauchinango.",
      includes: [
        "Excursion to La Morena Waterfalls (entrance purchased separately)",
        "Pre-hike safety and introductory briefing",
        "Dam visit and boat excursion at Tenango de las Flores (ticket excluded)",
        "Sightseeing in Huauchinango Magical Town",
        "Bilingual coordinator accompanying the full experience",
      ],
      excludes: [
        "Waterfall and activity admissions (approximately MXN $150)",
        "Gratuities for local guides and trip coordinators",
        "Extra services not described in the program",
      ],
      tips:
        "Wear suitable athletic clothing and non-slip hiking footwear; pack rain protection, spare clothes, drinking water, and sunscreen.",
    },
  },

  "puerto-vallarta-y-sayulita-ballenas-jorobadas": {
    es: {
      summary:
        "Descubre la belleza del litoral del Pacífico mexicano en una escapada que reúne paisajes tropicales, vida marina y momentos de descanso junto al océano.\nUno de los momentos más emocionantes será observar ballenas jorobadas en las aguas de Bahía de Banderas, donde estos impresionantes animales ofrecen un espectáculo natural memorable.\nEl viaje también incluye Sayulita, famoso por su ambiente bohemio y tradición surfista, además de un paseo al atardecer por el emblemático malecón de Puerto Vallarta.",
      includes: [
        "Traslados de ida y vuelta en autobús para turismo",
        "Alojamiento por 2 noches en establecimiento de 3 estrellas",
        "Estancia en habitación estándar para dos personas",
        "Servicio de desayuno cada día",
        "Excursión marítima para observar ballenas jorobadas",
        "Recorrido por Sayulita y Punta de Mita",
        "Visita y paseo por Puerto Vallarta",
        "Acompañamiento de coordinador y cobertura de viajero",
      ],
      excludes: [
        "Contribuciones y tarifas portuarias",
        "Gratificaciones al personal",
        "Paseos adicionales en catamarán",
      ],
      tips:
        "Prepara prendas frescas, sandalias, traje de baño, protector solar biodegradable y una chaqueta ligera para los paseos cerca del mar.",
    },
    en: {
      summary:
        "Discover Mexico's Pacific shoreline on a getaway that brings together tropical scenery, marine wildlife, and relaxing moments by the ocean.\nA major highlight is watching humpback whales in the waters of Banderas Bay, where these magnificent animals create an unforgettable natural display.\nThe itinerary also explores laid-back Sayulita, known for its surfing culture, and Puerto Vallarta's celebrated waterfront promenade at sunset.",
      includes: [
        "Return transportation aboard a tourist coach",
        "Two nights in a three-star accommodation",
        "Standard double-occupancy room",
        "Breakfast served each day",
        "Boat excursion to observe humpback whales",
        "Stops at Sayulita and Punta de Mita",
        "Sightseeing around Puerto Vallarta",
        "Travel coordinator assistance and insurance",
      ],
      excludes: [
        "Harbor fees and port charges",
        "Staff gratuities",
        "Additional optional catamaran excursions",
      ],
      tips:
        "Pack breathable clothing, swimwear, sandals, environmentally friendly sunscreen, and a lightweight jacket for time on the water.",
    },
  },

  "centro-ceremonial-otomi-y-metepec": {
    es: {
      summary:
        "Conoce dos destinos emblemáticos del Estado de México en una jornada donde se encuentran los paisajes naturales, las costumbres ancestrales y la riqueza artesanal.\nVisitarás el imponente Centro Ceremonial Otomí, enclavado entre montañas y zonas boscosas, antes de continuar hacia Metepec, Pueblo Mágico reconocido por su cerámica y sus famosos Árboles de la Vida.",
      includes: [
        "Servicio de transporte redondo en minibús o autobús",
        "Recorrido por el Centro Ceremonial Otomí",
        "Estancia en Metepec con paseo a bordo de tranvía",
        "Asistencia de coordinador y protección para viajeros",
      ],
      excludes: [
        "Boleto de entrada al Centro Ceremonial Otomí",
        "Gratificaciones voluntarias",
        "Consumo de comidas",
      ],
      tips:
        "Empaca una chamarra para el clima fresco, zapatos cómodos para recorrer los sitios y dinero disponible para adquirir artesanías.",
    },
    en: {
      summary:
        "Discover two remarkable destinations in the State of Mexico on a journey blending natural scenery, ancestral customs, and traditional craftsmanship.\nExplore the impressive Otomí Ceremonial Center nestled among mountains and woodland, then continue to Metepec, a Magical Town celebrated for its pottery and iconic Tree of Life creations.",
      includes: [
        "Round-trip travel by bus or minibus",
        "Exploration of the Otomí Ceremonial Center",
        "Visit to Metepec with a tram sightseeing ride",
        "Travel coordinator assistance and insurance protection",
      ],
      excludes: [
        "Admission ticket to the Otomí Ceremonial Center",
        "Optional gratuities",
        "Meals and food purchases",
      ],
      tips:
        "Pack a warm jacket for the mountain climate, comfortable walking footwear, and cash for locally made handicrafts.",
    },
  },

  "chignahuapan-aguas-termales-y-pueblo-magico": {
    es: {
      summary:
        "Regálate un día de tranquilidad en la Sierra Norte de Puebla, disfrutando de albercas de aguas minerales termales y recorriendo un Pueblo Mágico conocido por la elaboración artesanal de esferas navideñas.",
      includes: [
        "Transportación turística de ida y regreso",
        "Estancia en balneario termal (boleto no contemplado)",
        "Paseo por Chignahuapan y taller de esferas artesanales",
        "Cobertura de seguro durante el viaje",
      ],
      excludes: [
        "Boleto de ingreso al balneario (cerca de $150 MXN)",
        "Gratificaciones al personal",
        "Consumo de alimentos",
      ],
      tips:
        "No olvides empacar bañador, sandalias, toalla personal y una muda de ropa seca.",
    },
    en: {
      summary:
        "Treat yourself to a relaxing day in Puebla's northern mountains, enjoying mineral-rich thermal pools and exploring a Magical Town renowned for its handcrafted Christmas ornaments.",
      includes: [
        "Return sightseeing transportation",
        "Time at the thermal baths (entrance fee excluded)",
        "Visit to Chignahuapan and a traditional ornament workshop",
        "Travel insurance protection",
      ],
      excludes: [
        "Thermal resort entrance (around MXN $150)",
        "Staff gratuities",
        "Food and meals",
      ],
      tips:
        "Remember to pack swimwear, sandals, your own towel, and an extra set of dry clothes.",
    },
  },

  "jardines-de-mexico-y-tepoztlan": {
    es: {
      summary:
        "Recorre más de 50 hectáreas de impresionantes jardines temáticos en uno de los complejos florales más extensos del planeta, y disfruta después de una tarde entre calles tradicionales, mercados y montañas en Tepoztlán.",
      includes: [
        "Traslado turístico de ida y retorno",
        "Boleto de entrada a Jardines de México",
        "Tiempo de exploración independiente en Tepoztlán",
        "Servicio de coordinación y seguro para viajeros",
      ],
      excludes: [
        "Gastos de alimentación",
        "Gratificaciones voluntarias",
      ],
      tips:
        "Elige zapatos confortables para caminar y lleva gorra y bloqueador solar.",
    },
    en: {
      summary:
        "Explore over 50 hectares of spectacular themed landscapes at one of the world's largest floral gardens, then spend the afternoon enjoying the markets, mountain views, and traditional streets of Tepoztlán.",
      includes: [
        "Round-trip sightseeing transfer",
        "Entrance ticket to Jardines de México",
        "Independent exploration time in Tepoztlán",
        "Trip coordination and traveler insurance",
      ],
      excludes: [
        "Food and dining expenses",
        "Voluntary gratuities",
      ],
      tips:
        "Choose supportive walking shoes and remember to pack a cap and sunscreen.",
    },
  },

  "grutas-de-cacahuamilpa-y-taxco": {
    es: {
      summary:
        "Admira las enormes cámaras de las Grutas de Cacahuamilpa, con alturas que alcanzan los 80 metros y formaciones rocosas de miles de años, antes de dedicar la tarde a descubrir la tradición platera de Taxco.",
      includes: [
        "Traslado turístico en viaje redondo",
        "Entrada y visita acompañada por guía en las grutas",
        "Paseo por Taxco y visita a un taller de plata",
        "Protección mediante seguro de viajero",
      ],
      excludes: [
        "Comidas y consumos alimenticios",
        "Gratificaciones al personal",
      ],
      tips:
        "Prefiere zapatos cómodos de suela antideslizante y lleva una chaqueta ligera.",
    },
    en: {
      summary:
        "Marvel at the vast chambers of Cacahuamilpa Caves, reaching heights of 80 meters and featuring ancient rock formations, before spending the afternoon discovering Taxco's renowned silversmithing tradition.",
      includes: [
        "Return tourist transportation",
        "Cave admission and accompanied guided exploration",
        "Sightseeing in Taxco and a visit to a silver workshop",
        "Travel insurance coverage",
      ],
      excludes: [
        "Meals and food purchases",
        "Staff gratuities",
      ],
      tips:
        "Choose comfortable footwear with slip-resistant soles and pack a light jacket.",
    },
  },

  "guanajuato-colonial-y-la-gruta-spa": {
    es: {
      summary:
        "Explora los coloridos edificios, túneles y callejones de Guanajuato capital; disfruta por la noche de una tradicional callejoneada con estudiantina y dedica la mañana siguiente a relajarte en las albercas termales de La Gruta Spa.",
      includes: [
        "Hospedaje por una noche en la zona céntrica de Guanajuato",
        "Servicio turístico de transporte de ida y regreso",
        "Visita guiada y participación en callejoneada tradicional",
        "Boleto de ingreso a La Gruta Spa",
        "Cobertura de seguro para viajeros",
      ],
      excludes: [
        "Comidas que no se encuentren detalladas",
        "Gratificaciones voluntarias",
      ],
      tips:
        "Utiliza zapatos confortables para calles empedradas y empaca traje de baño.",
    },
    en: {
      summary:
        "Explore Guanajuato city's colorful buildings, tunnels, and winding alleys, enjoy a traditional evening callejoneada accompanied by musicians, and unwind the following morning in the soothing thermal waters of La Gruta Spa.",
      includes: [
        "One-night accommodation in downtown Guanajuato",
        "Round-trip tourist transportation",
        "Guided sightseeing and traditional callejoneada experience",
        "Entrance pass to La Gruta Spa",
        "Traveler insurance protection",
      ],
      excludes: [
        "Meals not specifically included",
        "Optional gratuities",
      ],
      tips:
        "Select comfortable shoes for cobblestone streets and remember your swimsuit.",
    },
  },

  "huamantla-la-noche-que-nadie-duerme": {
    es: {
      summary:
        "Contempla las extensas alfombras creadas con flores y aserrín de múltiples colores durante la noche del 14 de agosto, una tradición artesanal dedicada a la Virgen de la Caridad en Huamantla.",
      includes: [
        "Servicio turístico de traslado redondo",
        "Paseo nocturno acompañado por guía",
        "Bebida caliente como cortesía de bienvenida",
        "Asistencia de coordinador y cobertura de seguro",
      ],
      excludes: [
        "Consumos de alimentos",
        "Gratificaciones al personal",
      ],
      tips:
        "Prepara prendas térmicas o una chamarra abrigadora para las horas de madrugada.",
    },
    en: {
      summary:
        "Admire the extensive carpets crafted from colorful sawdust and flowers throughout the night of August 14, a remarkable artisan tradition honoring the Virgen de la Caridad in Huamantla.",
      includes: [
        "Round-trip tourist transfer service",
        "Accompanied nighttime guided walk",
        "Complimentary hot welcome beverage",
        "Coordinator assistance and insurance coverage",
      ],
      excludes: [
        "Food and meal purchases",
        "Staff gratuities",
      ],
      tips:
        "Pack thermal layers or a warm jacket for the chilly early-morning hours.",
    },
  },

  "huasteca-potosina-3-dias": {
    es: {
      summary:
        "Descubre la majestuosa Cascada de Tamul navegando en panga, explora Puente de Dios y las Cascadas de Micos, y maravíllate con el extraordinario jardín surrealista de Edward James en Xilitla.",
      includes: [
        "Estancia de 2 noches en Ciudad Valles",
        "Transportación turística de ida y vuelta",
        "Excursión en panga hacia la Cascada de Tamul",
        "Boletos para Puente de Dios, Micos y Xilitla",
        "Servicio de desayunos y equipo de protección",
      ],
      excludes: [
        "Comidas no contempladas expresamente",
        "Gratificaciones a prestadores de servicio",
      ],
      tips:
        "Utiliza zapatos diseñados para agua y prendas ligeras que sequen rápidamente.",
    },
    en: {
      summary:
        "Discover spectacular Tamul Waterfall aboard a traditional boat, explore Puente de Dios and Micos Waterfalls, and admire Edward James' extraordinary surrealist garden in Xilitla.",
      includes: [
        "Two-night stay in Ciudad Valles",
        "Return tourist transportation",
        "Traditional boat excursion to Tamul Waterfall",
        "Admission to Puente de Dios, Micos, and Xilitla",
        "Breakfast service and protective equipment",
      ],
      excludes: [
        "Meals not expressly included",
        "Service provider gratuities",
      ],
      tips:
        "Choose water-friendly footwear and lightweight garments that dry quickly.",
    },
  },

  "los-tuxtlas-selva-y-acantilados": {
    es: {
      summary:
        "Adéntrate en la selva tropical más al norte del continente y descubre la laguna de Catemaco, la imponente cascada de Eyipantla y los espectaculares acantilados costeros de Punta Roca Partida.",
      includes: [
        "Alojamiento durante 2 noches en Catemaco",
        "Traslados de ida y vuelta",
        "Excursión en embarcación por la laguna",
        "Boletos de acceso a Eyipantla y Roca Partida",
        "Seguro de protección para viajeros",
      ],
      excludes: [
        "Gastos por comidas",
        "Gratificaciones voluntarias",
      ],
      tips:
        "Empaca prendas frescas y repelente de insectos respetuoso con el medio ambiente.",
    },
    en: {
      summary:
        "Journey into the continent's northernmost tropical rainforest and discover Catemaco Lagoon, magnificent Eyipantla Waterfall, and the breathtaking coastal cliffs of Punta Roca Partida.",
      includes: [
        "Two nights of accommodation in Catemaco",
        "Transportation in both directions",
        "Boat excursion across the lagoon",
        "Admission tickets to Eyipantla and Roca Partida",
        "Traveler insurance protection",
      ],
      excludes: [
        "Dining and meal costs",
        "Voluntary gratuities",
      ],
      tips:
        "Pack breathable clothing and environmentally responsible insect repellent.",
    },
  },

  "tlaxcala-ruta-de-la-miel-y-girasoles": {
    es: {
      summary:
        "Conoce un apiario atendido por una familia local, participa en una degustación sensorial de distintas mieles y disfruta de un paseo fotográfico entre extensos campos de girasoles durante su floración.",
      includes: [
        "Servicio turístico de transporte redondo",
        "Recorrido por apiario con degustación de miel",
        "Entrada a campos cultivados de girasoles",
        "Acompañamiento de coordinador y seguro",
      ],
      excludes: [
        "Consumo de comidas",
        "Gratificaciones voluntarias",
      ],
      tips:
        "Viste prendas confortables y no olvides llevar una cámara para fotografías.",
    },
    en: {
      summary:
        "Discover a family-operated apiary, enjoy a sensory sampling of different honey varieties, and take memorable photographs while walking through golden sunflower fields during their blooming season.",
      includes: [
        "Round-trip tourist transportation service",
        "Apiary exploration with honey sampling",
        "Admission to cultivated sunflower fields",
        "Coordinator assistance and insurance",
      ],
      excludes: [
        "Food and dining purchases",
        "Optional gratuities",
      ],
      tips:
        "Wear comfortable clothing and remember to bring your camera for photographs.",
    },
  },

  "atlixco-y-cholula-villa-iluminada": {
    es: {
      summary:
        "Contempla la Gran Pirámide de Cholula frente al majestuoso Popocatépetl, disfruta una degustación de cerveza elaborada localmente y termina el recorrido entre las luces festivas de la Villa Iluminada de Atlixco.",
      includes: [
        "Traslado turístico en viaje redondo",
        "Recorrido y estancia en Cholula",
        "Degustación de cerveza de producción artesanal",
        "Boleto de ingreso a la Villa Iluminada",
        "Protección con seguro para viajeros",
      ],
      excludes: [
        "Comidas y alimentos",
        "Gratificaciones voluntarias",
      ],
      tips:
        "Incluye una chamarra o prendas cálidas para disfrutar cómodamente el paseo nocturno.",
    },
    en: {
      summary:
        "Admire Cholula's Great Pyramid with majestic Popocatépetl in the background, sample locally brewed craft beer, and finish the day surrounded by the festive lights of Atlixco's Illuminated Village.",
      includes: [
        "Return sightseeing transportation",
        "Visit and exploration of Cholula",
        "Tasting of locally crafted beer",
        "Admission pass to the Illuminated Village",
        "Traveler insurance protection",
      ],
      excludes: [
        "Meals and food",
        "Voluntary gratuities",
      ],
      tips:
        "Pack a jacket or warm layers so you can comfortably enjoy the evening visit.",
    },
  },

  "tecolutla-y-papantla-playa-y-cultura-totonaca": {
    es: {
      summary:
        "Disfruta de las tranquilas playas del Golfo de México, descubre la tradicional ceremonia de los Voladores de Papantla y déjate envolver por el característico aroma de la vainilla veracruzana.",
      includes: [
        "Transportación de ida y regreso",
        "Periodo libre para disfrutar la playa de Tecolutla",
        "Recorrido turístico por Papantla",
        "Presentación ceremonial de los Voladores",
        "Cobertura de seguro de viajero",
      ],
      excludes: [
        "Consumos alimenticios",
        "Gratificaciones voluntarias",
      ],
      tips:
        "Empaca bañador y bloqueador solar para las actividades en la playa.",
    },
    en: {
      summary:
        "Relax on the peaceful shores of the Gulf of Mexico, discover the traditional Papantla Flyers ceremony, and experience the distinctive fragrance of Veracruz vanilla.",
      includes: [
        "Transportation to and from the destination",
        "Free time on Tecolutla Beach",
        "Sightseeing visit to Papantla",
        "Traditional Flyers ceremonial performance",
        "Travel insurance protection",
      ],
      excludes: [
        "Food and dining costs",
        "Optional gratuities",
      ],
      tips:
        "Pack swimwear and sunscreen for your time enjoying the beach.",
    },
  },

  "ruta-maya-8-dias": {
    es: {
      summary:
        "Viaja por la herencia de la civilización maya con visitas a Chichén Itzá y Uxmal, las ciudades históricas de Mérida y Campeche, cenotes de aguas cristalinas, la laguna de Bacalar y las playas caribeñas de Tulum.",
      includes: [
        "Hospedaje por 7 noches en haciendas y hoteles boutique",
        "Servicio de transporte privado durante el recorrido completo",
        "Boletos para cenotes y sitios arqueológicos",
        "Acompañamiento de guía especializado bilingüe",
        "Desayuno diario y servicio de 3 cenas",
      ],
      excludes: [
        "Boletos de avión",
        "Bebidas ajenas a las incluidas expresamente",
        "Gratificaciones al personal",
      ],
      tips:
        "Lleva prendas frescas de lino, sombrero para el sol y zapatos resistentes para caminar en zonas arqueológicas.",
    },
    en: {
      summary:
        "Travel through the legacy of Maya civilization, visiting Chichén Itzá and Uxmal, the historic cities of Mérida and Campeche, crystal-clear cenotes, Bacalar Lagoon, and Tulum's Caribbean coastline.",
      includes: [
        "Seven nights in boutique hotels and historic haciendas",
        "Private transportation for the entire itinerary",
        "Tickets to cenotes and archaeological sites",
        "Accompaniment by a specialized bilingual guide",
        "Daily breakfast and three included dinners",
      ],
      excludes: [
        "Airline tickets",
        "Beverages not expressly included",
        "Staff gratuities",
      ],
      tips:
        "Pack breathable linen outfits, a sun hat, and durable footwear for exploring archaeological sites.",
    },
  },

  "tlaxcala-santuario-de-las-luciernagas": {
    es: {
      summary:
        "Cuando oscurece, miles de luciérnagas crean destellos entre los árboles del bosque de Nanacamilpa, transformando el paisaje nocturno en un espectáculo natural verdaderamente extraordinario.",
      includes: [
        "Servicio de transporte turístico redondo",
        "Entrada autorizada al Santuario de las Luciérnagas",
        "Acompañamiento de guía certificado de la región",
        "Cena con especialidades típicas locales",
        "Protección mediante seguro de viajero",
      ],
      excludes: [
        "Consumo de bebidas adicionales",
        "Gratificaciones voluntarias",
      ],
      tips:
        "Dentro del bosque evita encender linternas o utilizar la luz blanca de tu teléfono celular.",
    },
    en: {
      summary:
        "As darkness falls, thousands of fireflies create glowing flashes among the trees of Nanacamilpa Forest, turning the nighttime landscape into a truly extraordinary natural spectacle.",
      includes: [
        "Round-trip tourist transportation",
        "Authorized admission to the Firefly Sanctuary",
        "Accompaniment by a certified regional guide",
        "Dinner featuring traditional local dishes",
        "Traveler insurance protection",
      ],
      excludes: [
        "Additional beverage purchases",
        "Optional gratuities",
      ],
      tips:
        "Avoid switching on flashlights or using the white light from your phone while inside the forest.",
    },
  },

  "santuario-monarca-y-valle-de-bravo": {
    es: {
      summary:
        "Observa cómo innumerables mariposas monarca se agrupan sobre los árboles de oyamel en el santuario Piedra Herrada y disfruta más tarde de una visita junto al hermoso lago de Valle de Bravo.",
      includes: [
        "Transportación turística de ida y retorno",
        "Boleto de ingreso al santuario de mariposas",
        "Recorrido acompañado por guía de la comunidad",
        "Estancia turística en Valle de Bravo",
        "Seguro de protección para viajeros",
      ],
      excludes: [
        "Gastos de alimentación",
        "Gratificaciones al personal",
      ],
      tips:
        "Elige botas o tenis resistentes y cómodos para recorrer senderos de montaña.",
    },
    en: {
      summary:
        "Watch countless monarch butterflies gather on the oyamel fir trees at Piedra Herrada Sanctuary, then spend the afternoon enjoying the beautiful lakeside scenery of Valle de Bravo.",
      includes: [
        "Return tourist transportation",
        "Admission ticket to the butterfly sanctuary",
        "Guided exploration with a community representative",
        "Sightseeing visit to Valle de Bravo",
        "Travel insurance coverage",
      ],
      excludes: [
        "Meals and dining expenses",
        "Staff gratuities",
      ],
      tips:
        "Choose sturdy, comfortable hiking shoes or boots for the mountain trails.",
    },
  },

  "tecolutla-y-papantla-tortugas-marinas": {
    es: {
      summary:
        "Participa en una experiencia nocturna de liberación de tortugas marinas en un campamento de conservación en Tecolutla y complementa la aventura con un acercamiento a las tradiciones totonacas de Papantla.",
      includes: [
        "Una noche de alojamiento en Tecolutla",
        "Servicio de traslado de ida y vuelta",
        "Participación en actividad de liberación de tortugas",
        "Paseo cultural por Papantla",
        "Protección mediante seguro para viajeros",
      ],
      excludes: [
        "Comidas y alimentos",
        "Gratificaciones voluntarias",
      ],
      tips:
        "Prefiere vestimenta oscura y evita utilizar flash al momento de liberar las tortugas.",
    },
    en: {
      summary:
        "Take part in a nighttime sea turtle release at a conservation camp in Tecolutla, then complement the journey with an introduction to Papantla's living Totonac traditions.",
      includes: [
        "One-night accommodation in Tecolutla",
        "Round-trip transfer service",
        "Participation in a sea turtle release activity",
        "Cultural sightseeing in Papantla",
        "Traveler insurance protection",
      ],
      excludes: [
        "Food and meals",
        "Optional gratuities",
      ],
      tips:
        "Choose dark-colored clothing and refrain from using flash photography during the turtle release.",
    },
  },

  "teotihuacan-express-piramides-e-historia": {
    es: {
      summary:
        "Descubre la Pirámide del Sol, la Pirámide de la Luna y la Calzada de los Muertos mediante una visita guiada dinámica que te permitirá regresar antes del mediodía.",
      includes: [
        "Servicio de transporte turístico redondo",
        "Boleto de ingreso al complejo arqueológico",
        "Recorrido acompañado de guía con certificación",
        "Protección mediante seguro para viajeros",
      ],
      excludes: [
        "Consumo de alimentos",
        "Gratificaciones voluntarias",
      ],
      tips:
        "Protege tu piel con bloqueador solar y utiliza una gorra para el recorrido.",
    },
    en: {
      summary:
        "Discover the Pyramid of the Sun, Pyramid of the Moon, and Avenue of the Dead on a dynamic guided exploration designed to get you back before midday.",
      includes: [
        "Return sightseeing transportation",
        "Admission pass to the archaeological complex",
        "Tour accompanied by a certified guide",
        "Traveler insurance coverage",
      ],
      excludes: [
        "Meals and food purchases",
        "Optional gratuities",
      ],
      tips:
        "Protect yourself from the sun with sunscreen and a comfortable cap.",
    },
  },

  "tlaquepaque-y-navidalia-magia-navidena": {
    es: {
      summary:
        "Pasea por las coloridas calles de Tlaquepaque entre adornos de papel picado, talleres de artesanos y música de mariachi, y culmina el día disfrutando de Navidalia, un parque temático inspirado en la Navidad.",
      includes: [
        "Transportación turística en viaje redondo",
        "Paseo y visita por Tlaquepaque",
        "Entrada al parque temático Navidalia",
        "Acompañamiento de coordinador y seguro",
      ],
      excludes: [
        "Gastos de alimentación",
        "Gratificaciones voluntarias",
      ],
      tips:
        "Usa zapatos especialmente cómodos para caminar durante la visita al parque.",
    },
    en: {
      summary:
        "Stroll along Tlaquepaque's colorful streets lined with papel picado, artisan workshops, and mariachi music, then finish the day enjoying Navidalia, a festive Christmas-themed attraction.",
      includes: [
        "Round-trip tourist transportation",
        "Sightseeing and exploration of Tlaquepaque",
        "Entrance admission to Navidalia theme park",
        "Travel coordinator assistance and insurance",
      ],
      excludes: [
        "Dining and food costs",
        "Optional gratuities",
      ],
      tips:
        "Wear particularly comfortable walking shoes for your visit around the theme park.",
    },
  },

  "tequila-tradicion-y-paisajes-de-agave": {
    es: {
      summary:
        "Explora los campos de agave reconocidos como Patrimonio Mundial, conoce el proceso tradicional de jima y visita destilerías históricas donde disfrutarás de degustaciones guiadas de tequila.",
      includes: [
        "Estancia de una noche en una hacienda tequilera",
        "Servicio de transportación redonda",
        "Exhibición del proceso artesanal de jima",
        "Visitas a dos destilerías con degustación incluida",
        "Desayuno y cobertura de seguro",
      ],
      excludes: [
        "Comidas y cenas adicionales",
        "Gratificaciones voluntarias",
      ],
      tips:
        "Incluye un sombrero y gafas oscuras para protegerte durante los recorridos.",
    },
    en: {
      summary:
        "Explore the World Heritage agave fields, learn about traditional jima harvesting techniques, and visit historic distilleries offering guided tequila tastings.",
      includes: [
        "One-night stay at a traditional tequila hacienda",
        "Round-trip transportation service",
        "Demonstration of artisanal agave harvesting",
        "Visits to two distilleries with included tastings",
        "Breakfast and insurance coverage",
      ],
      excludes: [
        "Additional lunches and dinners",
        "Optional gratuities",
      ],
      tips:
        "Pack a sun hat and dark sunglasses for protection during outdoor visits.",
    },
  },

  "tlaxcala-girasoles-y-valquirico": {
    es: {
      summary:
        "Admira un santuario de girasoles durante su temporada de floración y recorre Val'Quirico, una encantadora villa inspirada en la Toscana con callejones empedrados y plazas de ambiente europeo.",
      includes: [
        "Transportación turística de ida y regreso",
        "Boleto de ingreso al santuario de girasoles",
        "Recorrido y estancia en Val'Quirico",
        "Servicio de comida contemplado en el paquete",
        "Protección mediante seguro de viajero",
      ],
      excludes: [
        "Bebidas consumidas durante la comida",
        "Gratificaciones al personal",
      ],
      tips:
        "Lleva una batería portátil para mantener cargados tu teléfono y cámara.",
    },
    en: {
      summary:
        "Admire a sunflower sanctuary during its blooming season and discover Val'Quirico, a charming Tuscan-inspired village featuring cobbled alleyways and picturesque European-style squares.",
      includes: [
        "Return tourist transportation",
        "Admission to the sunflower sanctuary",
        "Sightseeing and free time in Val'Quirico",
        "Meal included in the experience",
        "Travel insurance protection",
      ],
      excludes: [
        "Beverages ordered with the included meal",
        "Staff gratuities",
      ],
      tips:
        "Bring a portable charger to keep your phone and camera powered throughout the visit.",
    },
  },

  "ciudad-de-mexico-burger-tour": {
    es: {
      summary:
        "Visita tres reconocidos establecimientos de hamburguesas artesanales en Roma y Condesa mientras exploras la identidad urbana y la historia de estas populares colonias capitalinas.",
      includes: [
        "Degustación de hamburguesas en tres establecimientos",
        "Una bebida de elaboración artesanal",
        "Acompañamiento de especialista en gastronomía",
        "Paseo a pie por las colonias Roma y Condesa",
      ],
      excludes: [
        "Pedidos y consumos complementarios",
        "Gratificaciones voluntarias",
      ],
      tips:
        "Llega con buen apetito y utiliza zapatos cómodos para recorrer las calles de la Roma.",
    },
    en: {
      summary:
        "Explore three acclaimed artisan burger restaurants across Roma and Condesa while discovering the urban character and history of these popular Mexico City neighborhoods.",
      includes: [
        "Burger tastings at three different establishments",
        "One handcrafted specialty beverage",
        "Accompaniment by a culinary specialist",
        "Walking exploration through Roma and Condesa",
      ],
      excludes: [
        "Additional orders and purchases",
        "Optional gratuities",
      ],
      tips:
        "Arrive with a healthy appetite and wear comfortable shoes for walking through Roma.",
    },
  },
};


export const PRODUCT_EXTRA_DESCRIPTIONS: Record<
  string,
  {
    es: { why: string; special: string };
    en: { why: string; special: string };
  }
> = {
  "san-miguel-de-allende-timmyland-y-tradicion-colonial": {
    es: {
      why: "Este viaje reúne distintas expresiones artísticas, arquitectónicas y culturales en una misma experiencia. Desde los impresionantes murales religiosos del Santuario de Jesús Nazareno de Atotonilco, pasando por las sorprendentes construcciones de Rancho Cascabeles, hasta llegar al encanto colonial de San Miguel de Allende, cada lugar revela una historia diferente. Además, su centro histórico forma parte del Patrimonio Mundial reconocido por la UNESCO, gracias a su relevancia cultural, riqueza arquitectónica y extraordinaria belleza.",
      special: "La principal característica de esta aventura es la variedad de paisajes arquitectónicos que podrás descubrir durante una sola jornada. Conocerás pinturas religiosas históricas, espacios de diseño surrealista y las tradicionales calles de una ciudad emblemática. Rancho Cascabeles destaca por sus originales construcciones y rincones ideales para fotografías, mientras San Miguel de Allende aporta una combinación de historia, artesanías, gastronomía y ambiente colonial.",
    },
    en: {
      why: "This journey brings together different artistic, architectural, and cultural expressions in one experience. From the remarkable religious murals of the Sanctuary of Jesus Nazarene in Atotonilco to the imaginative buildings of Rancho Cascabeles and the colonial beauty of San Miguel de Allende, every stop reveals something distinctive. The historic center is also recognized as part of a UNESCO World Heritage Site for its cultural significance and architectural beauty.",
      special: "The main appeal of this adventure is discovering remarkably different architectural settings in one journey. Explore historic religious paintings, unconventional surrealist structures, and charming colonial streets. Rancho Cascabeles provides creative spaces for memorable photographs, while San Miguel de Allende adds traditional crafts, local cuisine, and historical character.",
    },
  },

  "teotihuacan-vuelo-en-globo": {
    es: {
      why: "Descubrir Teotihuacán desde el cielo permite apreciar su grandeza de una manera completamente diferente. Esta aventura integra la emoción de viajar en globo aerostático con el aprendizaje cultural de una visita guiada a sus principales monumentos. Resulta ideal para parejas, familias o grupos de amigos que desean compartir una actividad extraordinaria y contemplar uno de los sitios arqueológicos más importantes de México desde una perspectiva privilegiada.",
      special: "La combinación de un vuelo durante el amanecer y un recorrido por tierra convierte esta experiencia en una aventura memorable. Observar cómo los primeros rayos del sol iluminan las pirámides y la Calzada de los Muertos es uno de sus mayores atractivos. Además, el programa reúne traslados, alimentos y acompañamiento especializado para ofrecer un recorrido organizado, cómodo y sin complicaciones logísticas.",
    },
    en: {
      why: "Seeing Teotihuacán from above reveals the impressive scale of this ancient city in a completely different way. This experience combines the excitement of hot air ballooning with the cultural discoveries of a guided archaeological visit. It is an excellent choice for couples, families, and friends looking to share a memorable adventure at one of Mexico's most celebrated historical landmarks.",
      special: "Combining a sunrise balloon flight with exploration on the ground makes this journey particularly memorable. Watching the morning light spread across the pyramids and Avenue of the Dead is a remarkable highlight. Transportation, meals, and specialized guidance are brought together to create a comfortable, well-organized experience.",
    },
  },

  "taxco-pozas-azules-y-tradicion-colonial": {
    es: {
      why: "Esta escapada permite disfrutar de paisajes naturales y patrimonio histórico sin necesidad de realizar un viaje de varios días. Las Pozas Azules de Atzala ofrecen un escenario refrescante de aguas cristalinas, mientras Taxco invita a descubrir su arquitectura tradicional y cultura platera. Es una alternativa atractiva para quienes buscan una excursión accesible que combine descanso, naturaleza y tradiciones mexicanas.",
      special: "El contraste entre las piscinas naturales de tonos turquesa y las construcciones coloniales de Taxco hace que este recorrido resulte especialmente atractivo. Primero podrás disfrutar de un entorno de cascadas y formaciones rocosas; después, explorarás calles históricas y espacios artesanales. Esta combinación permite vivir dos ambientes completamente diferentes en una misma jornada.",
    },
    en: {
      why: "This getaway combines beautiful natural scenery and historical heritage without requiring a multi-day trip. The crystal-clear waters of Pozas Azules de Atzala offer a refreshing escape, while Taxco invites visitors to explore its colonial architecture and silvermaking traditions. It is an appealing choice for travelers seeking an affordable blend of relaxation, nature, and Mexican culture.",
      special: "The contrast between turquoise natural pools and Taxco's colonial buildings makes this itinerary especially appealing. Enjoy waterfalls and rocky landscapes before discovering historic streets and artisan workshops. These two distinctive settings offer a varied and rewarding experience in a single day.",
    },
  },

  "villa-del-carbon-presas-bosques-y-tradicion-artesanal": {
    es: {
      why: "Villa del Carbón es una excelente alternativa para desconectarse de la ciudad y disfrutar de un entorno natural tranquilo. Sus paisajes boscosos y cuerpos de agua permiten realizar paseos agradables, mientras la Presa Taxhimay sorprende por la singular vista de su iglesia parcialmente sumergida. Todo ello se complementa con el ambiente tradicional de este Pueblo Mágico.",
      special: "Este recorrido integra escenarios naturales y oficios artesanales característicos de la región. Podrás conocer la Presa del Llano y recorrer el centro de Villa del Carbón, donde los talleres especializados en artículos de piel conservan una importante tradición local. Es una experiencia que combina paisajes serranos, costumbres y productos elaborados por artesanos.",
    },
    en: {
      why: "Villa del Carbón is an excellent place to escape city life and enjoy peaceful natural surroundings. Its wooded landscapes and reservoirs provide pleasant opportunities to explore, while Presa Taxhimay surprises visitors with its partially submerged church. The town's traditional character adds another dimension to the journey.",
      special: "This itinerary combines beautiful outdoor settings with the region's traditional craftsmanship. Discover Presa del Llano and explore central Villa del Carbón, where workshops producing leather goods preserve a longstanding local trade. Mountain scenery, cultural traditions, and handmade products come together in one experience.",
    },
  },

  "huauchinango-cascadas-la-morena": {
    es: {
      why: "Es una excelente opción para viajeros que desean explorar espacios naturales alejados de los recorridos turísticos tradicionales. La experiencia combina caminatas por senderos de montaña, paisajes de bosque de niebla, vistas de la presa y la riqueza cultural de Huauchinango, ofreciendo una manera distinta de conocer la Sierra Norte de Puebla.",
      special: "Esta aventura se enfoca en descubrir escenarios montañosos de gran belleza natural y sitios que conservan un ambiente poco intervenido. El recorrido permite conectar con la naturaleza mediante actividades de senderismo y exploración, con orientación de personas conocedoras de la región.",
    },
    en: {
      why: "An excellent option for travelers interested in discovering natural places beyond conventional tourist routes. The experience brings together mountain trails, cloud forest scenery, impressive reservoir views, and the cultural heritage of Huauchinango, offering a distinctive introduction to Puebla's northern highlands.",
      special: "This adventure focuses on exploring beautiful mountain environments and landscapes that retain their natural character. Hiking and outdoor discovery provide opportunities to connect with the surroundings while benefiting from the knowledge of local guides.",
    },
  },

  "puerto-vallarta-y-sayulita-ballenas-jorobadas": {
    es: {
      why: "Esta escapada es ideal para quienes buscan disfrutar del océano desde diferentes perspectivas. Podrás combinar la emoción de observar ballenas jorobadas en su entorno natural con momentos de descanso junto al mar y recorridos por algunos de los destinos más representativos de la costa del Pacífico mexicano.",
      special: "La experiencia destaca por incluir una salida marítima para observar ballenas mediante operadores certificados, además de alojamiento boutique ubicado a poca distancia de la playa. Esta combinación permite disfrutar del espectáculo de la naturaleza y de un ambiente costero relajado.",
    },
    en: {
      why: "This getaway is ideal for travelers who want to experience the ocean in different ways. Enjoy the excitement of observing humpback whales in their natural habitat, relaxing moments beside the sea, and visits to some of the Mexican Pacific coast's most recognizable destinations.",
      special: "A certified-operator whale-watching excursion is one of the highlights, complemented by boutique accommodation located just steps from the beach. Together, these features combine remarkable marine encounters with a relaxing coastal atmosphere.",
    },
  },

  "centro-ceremonial-otomi-y-metepec": {
    es: {
      why: "Una excelente oportunidad para acercarse a las raíces culturales del pueblo otomí y conocer la reconocida tradición artesanal de Metepec. El recorrido reúne patrimonio indígena, paisajes naturales y expresiones artísticas del Estado de México, a una distancia accesible de la capital.",
      special: "La experiencia incorpora un paseo panorámico en tranvía por Metepec y visitas a espacios donde se elaboran piezas tradicionales de barro decorado. Así podrás conocer de cerca una de las expresiones artesanales más representativas de la región.",
    },
    en: {
      why: "A wonderful opportunity to discover Otomí cultural heritage and Metepec's celebrated artisan traditions. This itinerary combines Indigenous history, natural landscapes, and artistic expressions from the State of Mexico, all within convenient reach of the capital.",
      special: "The experience features a panoramic tram ride around Metepec and visits to workshops producing traditional decorated pottery. These activities offer a closer look at one of the region's most distinctive forms of craftsmanship.",
    },
  },

  "chignahuapan-aguas-termales-y-pueblo-magico": {
    es: {
      why: "Una escapada ideal para descansar del ritmo cotidiano entre aguas termales, paisajes montañosos y la tranquilidad de un pueblo de la sierra poblana. La combinación de relajación y tradiciones locales permite disfrutar de una jornada diferente.",
      special: "El itinerario contempla llegar a las aguas termales antes de los horarios de mayor concurrencia y conocer un taller dedicado a la elaboración artesanal de esferas navideñas, una de las tradiciones más conocidas de Chignahuapan.",
    },
    en: {
      why: "A perfect getaway for escaping everyday routines among warm thermal waters, mountain scenery, and the peaceful atmosphere of a Puebla highland town. Relaxation and local traditions make this a refreshing day trip.",
      special: "The itinerary includes arriving at the thermal pools before the busiest hours and exploring a workshop where traditional Christmas ornaments are handmade, one of Chignahuapan's best-known crafts.",
    },
  },

  "jardines-de-mexico-y-tepoztlan": {
    es: {
      why: "Una experiencia que reúne jardines llenos de color, aromas naturales y paisajes montañosos durante una sola jornada, complementada con el ambiente tradicional y místico característico de Tepoztlán.",
      special: "Disfrutarás de un paseo a tu propio ritmo por los diferentes jardines temáticos y contarás con tiempo libre en Tepoztlán para explorar sus calles y degustar sus populares nieves artesanales.",
    },
    en: {
      why: "A colorful day combining floral landscapes, natural fragrances, and scenic mountains, complemented by the traditional atmosphere and mystical character associated with Tepoztlán.",
      special: "Explore the themed gardens at your own pace, then enjoy leisure time in Tepoztlán to discover its charming streets and taste the town's popular handcrafted ice cream.",
    },
  },

  "grutas-de-cacahuamilpa-y-taxco": {
    es: {
      why: "Las Grutas de Cacahuamilpa destacan por formar parte de uno de los conjuntos de cavernas más impresionantes del mundo. Esta experiencia permite admirar extraordinarias formaciones geológicas y complementar el recorrido con la riqueza histórica y arquitectónica de Taxco.",
      special: "El programa incluye una exploración guiada de aproximadamente 2 kilómetros por el interior de las grutas, además de una visita a un taller tradicional donde podrás conocer el trabajo artesanal de la plata.",
    },
    en: {
      why: "Cacahuamilpa Caves belong to one of the world's most impressive cave systems. This experience offers the chance to admire extraordinary geological formations before discovering the historical and architectural heritage of Taxco.",
      special: "The itinerary includes an approximately two-kilometer guided walk through the caves, followed by a visit to a traditional workshop where you can discover the craftsmanship behind locally produced silver goods.",
    },
  },

  "guanajuato-colonial-y-la-gruta-spa": {
    es: {
      why: "Guanajuato conserva un patrimonio minero, arquitectónico y cultural que puede descubrirse mientras recorres sus plazas, túneles y callejones. Cada rincón refleja historias y tradiciones que convierten a esta ciudad en un destino especialmente atractivo.",
      special: "La experiencia ofrece una combinación equilibrada de recorridos culturales durante la noche y momentos de tranquilidad en aguas termales, ideal para disfrutar tanto del ambiente histórico como del descanso.",
    },
    en: {
      why: "Guanajuato preserves a remarkable mining, architectural, and cultural heritage that reveals itself through its plazas, tunnels, and winding alleys. Every corner reflects the stories and traditions that make this city such a distinctive destination.",
      special: "The itinerary provides a balanced combination of evening cultural exploration and relaxing thermal waters, allowing visitors to enjoy the city's historical atmosphere alongside moments of rest.",
    },
  },

  "huamantla-la-noche-que-nadie-duerme": {
    es: {
      why: "Esta celebración representa una de las manifestaciones de arte temporal más extraordinarias de México, gracias a sus extensas alfombras ornamentales y al trabajo colectivo de los habitantes de Huamantla.",
      special: "La llegada durante las primeras horas de la noche permite observar cómo los artesanos crean sus impresionantes alfombras y presenciar posteriormente la tradicional procesión que tiene lugar durante la madrugada.",
    },
    en: {
      why: "This celebration represents one of Mexico's most remarkable forms of temporary art, thanks to its elaborate decorative carpets and the collective craftsmanship of Huamantla's residents.",
      special: "Arriving in the evening allows visitors to watch artisans assemble their elaborate carpets before experiencing the traditional procession that takes place during the early-morning hours.",
    },
  },

  "huasteca-potosina-3-dias": {
    es: {
      why: "La Huasteca Potosina sorprende por sus ríos de intensos tonos azules, impresionantes cascadas y escenarios naturales que contrastan con las originales construcciones surrealistas que pueden descubrirse en la región.",
      special: "El recorrido contempla acompañamiento de guías locales certificados en las actividades acuáticas y una organización de visitas pensada para aprovechar mejor los lugares y reducir la coincidencia con grandes grupos de turistas.",
    },
    en: {
      why: "The Huasteca Potosina region amazes visitors with intensely blue rivers, spectacular waterfalls, and natural landscapes that contrast beautifully with the unusual surrealist architecture found throughout the area.",
      special: "The itinerary features certified local guides for water-based activities and carefully arranged visits designed to make the most of each destination while reducing encounters with large tourist crowds.",
    },
  },

  "los-tuxtlas-selva-y-acantilados": {
    es: {
      why: "Este destino permite conocer un entorno de enorme riqueza ecológica donde la vegetación de la selva tropical llega hasta las costas del Golfo de México, creando paisajes de gran belleza dentro de una reserva de biosfera.",
      special: "La experiencia incluye un recorrido en embarcación por la laguna de Catemaco y una caminata con vistas panorámicas hacia las formaciones volcánicas y los imponentes acantilados de Punta Roca Partida.",
    },
    en: {
      why: "This destination reveals an ecologically rich environment where tropical rainforest vegetation extends toward the Gulf of Mexico, creating beautiful scenery within a protected biosphere reserve.",
      special: "The experience includes a boat excursion across Catemaco Lagoon and a scenic walk toward the impressive volcanic formations and dramatic sea cliffs of Punta Roca Partida.",
    },
  },

  "tlaxcala-ruta-de-la-miel-y-girasoles": {
    es: {
      why: "Una actividad relajada y llena de paisajes luminosos que permite apreciar el trabajo de las familias dedicadas a la apicultura y conocer de cerca la elaboración artesanal de miel en la región.",
      special: "Participarás en una degustación dirigida de cinco tipos de miel y tendrás la oportunidad de ingresar de manera privada a campos dedicados al cultivo de flores, ideales para disfrutar del paisaje y tomar fotografías.",
    },
    en: {
      why: "A peaceful experience filled with bright landscapes that highlights the dedication of local beekeeping families and offers an opportunity to discover the traditional production of regional honey.",
      special: "Enjoy an accompanied tasting of five different honey varieties and private access to cultivated flower fields, providing a beautiful setting for sightseeing and photography.",
    },
  },

  "atlixco-y-cholula-villa-iluminada": {
    es: {
      why: "Este recorrido reúne el patrimonio prehispánico de Cholula, las costumbres relacionadas con la elaboración de cerveza artesanal y el ambiente festivo creado por las miles de luces que decoran Atlixco durante la temporada navideña.",
      special: "La programación está organizada para llegar a Atlixco en el momento del encendido de las decoraciones luminosas, permitiendo disfrutar de uno de los momentos más representativos de la celebración.",
    },
    en: {
      why: "This journey brings together Cholula's pre-Hispanic heritage, local craft brewing traditions, and the festive atmosphere created by thousands of lights decorating Atlixco during the Christmas season.",
      special: "The schedule is arranged to reach Atlixco around the moment its festive lights are switched on, allowing visitors to enjoy one of the celebration's most memorable highlights.",
    },
  },

  "tecolutla-y-papantla-playa-y-cultura-totonaca": {
    es: {
      why: "Una excelente manera de descubrir los paisajes de Costa Esmeralda mientras te acercas a las tradiciones, costumbres y expresiones culturales que mantienen viva la identidad del pueblo totonaca.",
      special: "Tendrás la oportunidad de presenciar la ceremonia tradicional de los Voladores de Papantla, reconocida por la UNESCO como parte del Patrimonio Cultural Inmaterial de la Humanidad.",
    },
    en: {
      why: "An excellent way to discover Costa Esmeralda's coastal scenery while learning about the traditions, customs, and cultural expressions that preserve the living identity of the Totonac people.",
      special: "Enjoy the opportunity to witness the traditional Papantla Flyers ceremony, recognized by UNESCO as part of the Intangible Cultural Heritage of Humanity.",
    },
  },

  "ruta-maya-8-dias": {
    es: {
      why: "La península de Yucatán conserva extraordinarios testimonios del pasado maya, reflejados en sus monumentos de piedra, antiguos asentamientos y paisajes de aguas cristalinas que forman parte de su riqueza natural y cultural.",
      special: "El recorrido combina alojamiento en haciendas históricas y establecimientos boutique con visitas acompañadas por especialistas certificados en arqueología, creando una experiencia cultural más completa.",
    },
    en: {
      why: "The Yucatán Peninsula preserves extraordinary traces of Maya history, reflected in its stone monuments, ancient settlements, and crystal-clear waters that form part of the region's natural and cultural heritage.",
      special: "This journey combines accommodation in historic haciendas and boutique properties with guided visits led by certified archaeological specialists, creating a more complete cultural experience.",
    },
  },

  "tlaxcala-santuario-de-las-luciernagas": {
    es: {
      why: "Este extraordinario fenómeno natural ocurre únicamente durante algunas semanas entre junio y agosto, cuando miles de pequeñas luces intermitentes transforman el bosque en un escenario silencioso y sorprendente.",
      special: "Las visitas se realizan con grupos de tamaño controlado y siguiendo reglas rigurosas de observación responsable, diseñadas para proteger el ecosistema y reducir el impacto sobre las luciérnagas.",
    },
    en: {
      why: "This extraordinary natural phenomenon happens only during several weeks between June and August, when thousands of flickering lights transform the forest into a quiet and breathtaking nighttime setting.",
      special: "Visits take place in carefully controlled groups under strict responsible-observation guidelines designed to protect the ecosystem and minimize disturbances to the fireflies.",
    },
  },

  "santuario-monarca-y-valle-de-bravo": {
    es: {
      why: "El desplazamiento anual de las mariposas monarca constituye uno de los fenómenos migratorios más impresionantes de la naturaleza, atrayendo visitantes que desean contemplar de cerca esta extraordinaria maravilla ecológica.",
      special: "La experiencia contempla una caminata de ascenso acompañada por integrantes de la comunidad local y un periodo libre para disfrutar de alimentos mientras contemplas el paisaje del lago.",
    },
    en: {
      why: "The monarch butterfly's annual migration is one of nature's most remarkable seasonal journeys, attracting visitors who wish to observe this extraordinary ecological phenomenon up close.",
      special: "The experience includes an uphill walk accompanied by members of the local community, followed by leisure time to enjoy a meal while admiring the lakeside scenery.",
    },
  },

  "tecolutla-y-papantla-tortugas-marinas": {
    es: {
      why: "Una experiencia que permite acercarse a los esfuerzos de conservación de especies marinas vulnerables y participar en una actividad vinculada con la protección y preservación de las tortugas en su entorno natural.",
      special: "El recorrido contribuye directamente a las actividades de un campamento comunitario dedicado al cuidado, seguimiento y protección de tortugas marinas en las costas de Tecolutla.",
    },
    en: {
      why: "An experience that introduces visitors to the conservation of vulnerable marine species and provides an opportunity to participate in activities supporting the protection of sea turtles in their natural environment.",
      special: "The excursion directly supports the work of a community-run conservation camp dedicated to monitoring, caring for, and protecting sea turtles along Tecolutla's coastline.",
    },
  },

  "teotihuacan-express-piramides-e-historia": {
    es: {
      why: "Es una alternativa ideal para personas con poco tiempo disponible que desean conocer uno de los complejos arqueológicos más representativos del Altiplano Central sin comprometer el resto de sus actividades del día.",
      special: "La salida se programa durante las primeras horas de la mañana para recorrer la zona arqueológica con temperaturas más agradables y evitar, en lo posible, las mayores concentraciones de visitantes.",
    },
    en: {
      why: "An excellent option for travelers with limited time who want to explore one of the Central Mexican Plateau's most important archaeological sites without taking up their entire day.",
      special: "The excursion departs early in the morning to provide more comfortable temperatures while exploring the archaeological area and, whenever possible, avoid the largest visitor crowds.",
    },
  },

  "tlaquepaque-y-navidalia-magia-navidena": {
    es: {
      why: "Una escapada llena de tradiciones, música y ambiente festivo que permite disfrutar de las celebraciones decembrinas de Jalisco mediante espacios artesanales y atracciones especialmente preparadas para la Navidad.",
      special: "La experiencia contempla una visita a El Parián para disfrutar de una comida acompañada por música de mariachi en vivo, antes de continuar hacia el parque temático Navidalia.",
    },
    en: {
      why: "A festive getaway filled with local traditions, music, and seasonal charm, offering an opportunity to experience December celebrations in Jalisco through artisan spaces and Christmas-themed attractions.",
      special: "The itinerary includes a visit to El Parián for a meal accompanied by live mariachi music before continuing to the Navidalia Christmas theme park.",
    },
  },

  "tequila-tradicion-y-paisajes-de-agave": {
    es: {
      why: "La cultura mexicana adquiere un significado especial entre extensas plantaciones de agave azul y antiguas instalaciones de producción, donde podrás conocer las tradiciones que han dado identidad a esta emblemática bebida.",
      special: "El recorrido contempla una noche de estancia en una hacienda vinculada con la producción de tequila, además de una degustación especializada conducida por un maestro tequilero.",
    },
    en: {
      why: "Mexican cultural traditions take on a special meaning among expansive blue agave plantations and historic production facilities, where visitors can discover the heritage behind the country's iconic spirit.",
      special: "The journey includes an overnight stay at a traditional tequila hacienda along with a specialized tasting session conducted by a master tequila expert.",
    },
  },

  "tlaxcala-girasoles-y-valquirico": {
    es: {
      why: "Un paseo tranquilo y lleno de escenarios atractivos que combina paisajes florales con la arquitectura de inspiración europea de Val'Quirico, ideal para compartir momentos agradables y capturar fotografías memorables.",
      special: "El paquete contempla una comida en un restaurante ubicado en Val'Quirico y dispone de tiempo libre para recorrer sus calles, visitar establecimientos y realizar compras personales.",
    },
    en: {
      why: "A relaxed journey filled with beautiful scenery, combining vibrant flower fields with Val'Quirico's European-inspired architecture. It is ideal for spending quality time together and capturing memorable photographs.",
      special: "The package includes a meal at a Val'Quirico restaurant and free time to explore the streets, browse local establishments, and enjoy personal shopping.",
    },
  },

  "ciudad-de-mexico-burger-tour": {
    es: {
      why: "La escena culinaria moderna de Ciudad de México también se descubre a través de sus hamburgueserías independientes, donde las propuestas artesanales reflejan la creatividad y diversidad gastronómica de la capital.",
      special: "La experiencia incluye degustaciones completas en tres establecimientos independientes especializados en hamburguesas, acompañadas por una bebida artesanal incluida dentro del recorrido.",
    },
    en: {
      why: "Mexico City's modern food culture can also be discovered through its independent burger restaurants, where handcrafted creations reflect the capital's culinary diversity and creativity.",
      special: "The experience features complete burger tastings at three independently operated establishments, complemented by an artisanal beverage included as part of the tour.",
    },
  },
};


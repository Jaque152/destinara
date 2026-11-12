import type { Product } from "./products";

type DescriptionFields = Pick<
  Product,
  "summary" | "includes" | "excludes" | "info" | "tips"
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
        "Embárcate en una experiencia donde el arte, la historia y la arquitectura se combinan en escenarios únicos. Este recorrido te llevará a descubrir espacios que parecen sacados de un cuento, iniciando en el Santuario de Jesús Nazareno de Atotonilco, conocido como la “Capilla Sixtina Mexicana” por la riqueza de sus murales y detalles religiosos.\nPosteriormente, conocerás el sorprendente Rancho Cascabeles, un lugar con arquitectura surrealista inspirada en el estilo del arquitecto Antoni Gaudí. Aquí, sus estructuras únicas y su ambiente mágico te permitirán explorar un espacio creativo donde lo artístico y lo fantástico se mezclan.\nFinalmente, recorrerás San Miguel de Allende, una de las ciudades más emblemáticas del país. Sus calles empedradas, arquitectura barroca y sitios icónicos como la Parroquia de San Miguel Arcángel crean un ambiente lleno de cultura, historia y tradición.",
      includes: [
        "Acceso y visita a Rancho Cascabeles",
        "Recorrido guiado dentro del rancho",
        "Visita a Atotonilco y al Santuario de Jesús Nazareno de Atotonilco",
        "Visita a San Miguel de Allende",
        "Recorrido por mercado de artesanías",
        "Coordinador de viaje en español e inglés",
        "Seguro de viajero durante la actividad",
      ],
      excludes: [
        "Actividades adicionales dentro de los sitios",
        "Propinas para guías locales y coordinadores",
        "Servicios adicionales no especificados",
      ],
      tips:
        "Se recomienda llevar ropa cómoda, calzado adecuado para caminar, cámara fotográfica, protector solar y dinero extra para compras, alimentos y actividades adicionales.",
    },
    en: {
      summary:
        "Embark on an experience where art, history, and architecture combine in unique settings. This tour will take you to discover spaces that seem straight out of a fairy tale, starting at the Sanctuary of Jesus Nazarene of Atotonilco, known as the 'Mexican Sistine Chapel' for its rich murals and religious details.\nLater, you will visit the surprising Rancho Cascabeles, a place with surrealist architecture inspired by Antoni Gaudí. Here, its unique structures and magical atmosphere let you explore a creative space where art and fantasy merge.\nFinally, you will tour San Miguel de Allende, one of the country's most emblematic cities. Its cobblestone streets, baroque architecture, and iconic sites like the Parish of San Miguel Arcángel create an atmosphere full of culture, history, and tradition.",
      includes: [
        "Access and visit to Rancho Cascabeles",
        "Guided tour inside the ranch",
        "Visit to Atotonilco and the Sanctuary of Jesus Nazareno of Atotonilco",
        "Visit to San Miguel de Allende",
        "Tour through the handicraft market",
        "Trip coordinator in Spanish and English",
        "Traveler insurance during the activity",
      ],
      excludes: [
        "Additional activities within the sites",
        "Tips for local guides and coordinators",
        "Unspecified additional services",
      ],
      tips:
        "We recommend comfortable clothes, proper walking shoes, a camera, sunscreen, and extra cash for shopping, food, and additional activities.",
    },
  },

  "teotihuacan-vuelo-en-globo": {
    es: {
      summary:
        "Vive una experiencia inolvidable sobrevolando Teotihuacán, una de las zonas arqueológicas más impresionantes de México. Al amanecer, abordarás un globo aerostático para contemplar desde las alturas la majestuosidad de la antigua Ciudad de los Dioses, mientras la luz del sol ilumina sus pirámides y avenidas principales.\nTras el aterrizaje, disfrutarás de un desayuno buffet y recibirás tu certificado de vuelo como recuerdo de esta experiencia. Posteriormente, continuarás con un recorrido guiado por la zona arqueológica, donde conocerás sitios emblemáticos como la Pirámide del Sol, la Pirámide de la Luna y la Calzada de los Muertos, descubriendo la historia y el misticismo de esta antigua civilización.",
      includes: [
        "Traslado turístico redondo desde Ciudad de México",
        "Coffee break previo al vuelo",
        "Vuelo en globo aerostático con piloto certificado",
        "Certificado de vuelo al finalizar la experiencia",
        "Desayuno buffet de comida mexicana",
        "Acceso, visita y recorrido guiado en Teotihuacán",
        "Guía bilingüe (español/inglés)",
        "Seguro de viajero durante el traslado y durante el vuelo",
      ],
      excludes: [
        "Propinas para guías y coordinadores",
        "Servicios adicionales no especificados",
      ],
      info: [
        "El tour requiere un mínimo de 3 personas para operar",
        "El vuelo dura aproximadamente de 45 a 60 minutos y depende de condiciones climáticas",
        "En caso de cancelación por clima, no se contempla compensación adicional",
        "Se recomienda puntualidad, ya que no hay tiempo de tolerancia",
        "El horario de salida puede variar según la temporada",
        "Duración aproximada del tour: 8 horas",
      ],
      tips:
        "Se sugiere llevar ropa cómoda, chamarra ligera para el vuelo matutino, calzado adecuado, cámara fotográfica y dinero extra para gastos personales.",
    },
    en: {
      summary:
        "Live an unforgettable experience flying over Teotihuacán, one of the most impressive archaeological zones in Mexico. At dawn, you will board a hot air balloon to contemplate the majesty of the ancient City of the Gods from above, while the sunlight illuminates its pyramids and main avenues.\nAfter landing, you will enjoy a buffet breakfast and receive your flight certificate as a souvenir of this experience. Later, you will continue with a guided tour of the archaeological zone, where you will discover iconic sites such as the Pyramid of the Sun, the Pyramid of the Moon, and the Avenue of the Dead, discovering the history and mysticism of this ancient civilization.",
      includes: [
        "Round-trip tourist transfer from Mexico City",
        "Pre-flight coffee break",
        "Hot air balloon flight with certified pilot",
        "Flight certificate at the end of the experience",
        "Mexican food buffet breakfast",
        "Access, visit, and guided tour in Teotihuacán",
        "Bilingual guide (Spanish/English)",
        "Traveler insurance during transfer and flight",
      ],
      excludes: [
        "Tips for guides and coordinators",
        "Unspecified additional services",
      ],
      info: [
        "The tour requires a minimum of 3 people to operate",
        "The flight lasts approximately 45 to 60 minutes and depends on weather conditions",
        "In case of weather cancellation, no additional compensation is contemplated",
        "Punctuality is recommended, as there is no tolerance time",
        "Departure time may vary depending on the season",
        "Approximate tour duration: 8 hours",
      ],
      tips:
        "We suggest wearing comfortable clothes, a light jacket for the morning flight, proper footwear, a camera, and extra cash for personal expenses.",
    },
  },

  "taxco-pozas-azules-y-tradicion-colonial": {
    es: {
      summary:
        "Descubre un paraíso natural escondido en las cercanías de Taxco: las Pozas Azules de Atzala, un conjunto de pozas y cascadas de agua cristalina con tonos turquesa formados por minerales naturales. Este entorno ofrece un espacio perfecto para nadar, descansar o simplemente disfrutar del paisaje rodeado de vegetación y formaciones rocosas.\nPosteriormente, el recorrido continúa en Taxco, una ciudad reconocida por su arquitectura colonial de cantera blanca y calles empedradas. Aquí podrás caminar por su centro histórico, conocer talleres de plata y disfrutar de su gastronomía tradicional.\nEntre sus puntos más representativos se encuentra la Iglesia de Santa Prisca, uno de los íconos arquitectónicos más importantes de la ciudad.",
      includes: [
        "Visita a Pozas Azules de Atzala (entrada no incluida)",
        "Recorrido guiado en Taxco",
        "Tiempo libre para comida y exploración en Taxco",
        "Coordinador de viaje en español e inglés",
        "Seguro de viajero durante la actividad",
      ],
      excludes: [
        "Acceso a Pozas Azules de Atzala (adultos $100 / menores de 3 a 12 años $50; llevar efectivo exacto)",
        "Propinas para guías y coordinadores",
        "Actividades adicionales y servicios no especificados",
      ],
      tips:
        "Se recomienda llevar ropa cómoda, traje de baño, toalla, sandalias o calzado acuático, bloqueador solar, ropa extra seca y dinero en efectivo para accesos y gastos personales.",
    },
    en: {
      summary:
        "Discover a hidden natural paradise near Taxco: the Pozas Azules de Atzala, a set of crystal-clear pools and waterfalls with turquoise tones formed by natural minerals. This environment offers a perfect space to swim, rest, or simply enjoy the landscape surrounded by vegetation and rock formations.\nLater, the tour continues in Taxco, a city recognized for its white quarry colonial architecture and cobblestone streets. Here you can walk through its historic center, visit silver workshops, and enjoy its traditional gastronomy.\nAmong its most representative points is the Church of Santa Prisca, one of the most important architectural icons of the city.",
      includes: [
        "Visit to Pozas Azules de Atzala (admission not included)",
        "Guided tour in Taxco",
        "Free time for food and exploration in Taxco",
        "Trip coordinator in Spanish and English",
        "Traveler insurance during the activity",
      ],
      excludes: [
        "Access to Pozas Azules de Atzala (adults $100 / children 3 to 12 years $50; bring exact cash)",
        "Tips for guides and coordinators",
        "Additional activities and unspecified services",
      ],
      tips:
        "It is recommended to bring comfortable clothes, swimsuit, towel, sandals or water shoes, sunscreen, extra dry clothes, and cash for admissions and personal expenses.",
    },
  },

  "villa-del-carbon-presas-bosques-y-tradicion-artesanal": {
    es: {
      summary:
        "Disfruta de una escapada en Villa del Carbón, un destino rodeado de montañas y abundante vegetación, perfecto para desconectarte de la rutina. Este encantador pueblo, conocido como la capital del botín charro, conserva un aire colonial con casas de piedra, balcones de madera, techos de teja roja y calles empedradas que crean un ambiente pintoresco y relajante.\nLa tradición artesanal basada en la piel es uno de sus mayores atractivos, destacando productos como calzado, cinturones, chamarras y bolsos, además de su deliciosa gastronomía campirana y bebidas típicas como el pulque.\nEl entorno natural invita a la aventura en la Presa del Llano, donde podrás convivir con la naturaleza entre bosques de oyamel, pino, encino y eucalipto. Aquí es posible realizar actividades como paseos en bote, cabalgatas, tirolesa y caminatas por puentes rústicos.\nMás adelante, conocerás la Presa Taxhimay, famosa por su paisaje único. Durante el recorrido en lancha podrás observar la torre del campanario de una antigua parroquia que quedó sumergida tras la construcción de la presa, perteneciente a un antiguo poblado otomí.",
      includes: [
        "Recorrido por Villa del Carbón",
        "Visita a Presa del Llano (entrada no incluida)",
        "Visita a Presa Taxhimay",
        "Paseo en lancha colectiva en la Presa Taxhimay (ticket no incluido)",
        "Coordinador de viaje en español e inglés",
        "Seguro de viajero durante la actividad",
      ],
      excludes: [
        "Accesos a Presa del Llano y Presa Taxhimay (adultos y menores desde 12 años: $90 / niños de 0 a 2 años: $60; llevar efectivo exacto)",
        "Servicios adicionales no mencionados",
      ],
      tips:
        "Se sugiere llevar ropa cómoda, tenis o calzado antiderrapante para terracería (el suelo suele ser húmedo), una chamarra o sudadera adicional, repelente de insectos, protector solar, cámara fotográfica y dinero extra para compras y accesos (aprox. $90 por persona, llevar cambio exacto). También puedes llevar alimentos ligeros para disfrutar de un picnic durante la visita.",
    },
    en: {
      summary:
        "Enjoy a getaway in Villa del Carbón, a destination surrounded by mountains and abundant vegetation, perfect for disconnecting from routine. This charming town, known as the capital of the charro boot, preserves a colonial air with stone houses, wooden balconies, red tile roofs, and cobblestone streets that create a picturesque and relaxing atmosphere.\nThe leather-based craft tradition is one of its greatest attractions, highlighting products such as footwear, belts, jackets, and bags, in addition to its delicious country gastronomy and typical drinks such as pulque.\nThe natural environment invites adventure at Presa del Llano, where you can live with nature among oyamel, pine, oak, and eucalyptus forests. Here it is possible to do activities such as boat rides, horseback riding, ziplining, and walks across rustic bridges.\nLater, you will visit Presa Taxhimay, famous for its unique landscape. During the boat tour you can observe the bell tower tower of an old parish that was submerged after the construction of the dam, belonging to an old Otomi town.",
      includes: [
        "Tour of Villa del Carbón",
        "Visit to Presa del Llano (admission not included)",
        "Visit to Presa Taxhimay",
        "Collective boat ride at Presa Taxhimay (ticket not included)",
        "Trip coordinator in Spanish and English",
        "Traveler insurance during the activity",
      ],
      excludes: [
        "Access to Presa del Llano and Presa Taxhimay (adults and children from 12 years: $90 / children 0 to 2 years: $60; bring exact cash)",
        "Additional services not mentioned",
      ],
      tips:
        "It is suggested to bring comfortable clothes, tennis or non-slip shoes for dirt roads (the ground is usually humid), an additional jacket or sweatshirt, insect repellent, sunscreen, camera, and extra money for purchases and admissions (approx. $90 per person, bring exact change). You can also bring light food to enjoy a picnic during the visit.",
    },
  },

  "huauchinango-cascadas-la-morena": {
    es: {
      summary:
        "Vive una de las rutas de ecoturismo más auténticas de la Sierra Norte de Puebla con esta aventura diseñada para quienes buscan naturaleza, actividad física y paisajes impresionantes.\nLa primera parte del recorrido nos lleva a las Cascadas La Morena, un entorno natural escondido entre montañas, vegetación densa y senderos de tierra donde el sonido del agua y el ambiente selvático crean una experiencia completamente inmersiva. Aquí realizarás una caminata guiada tipo senderismo, ideal para conectar con la naturaleza y descubrir uno de los paisajes más puros de la región.\nPrevio a la caminata, se ofrece una plática introductoria de senderismo para conocer recomendaciones básicas de seguridad y aprovechar al máximo la experiencia en terreno natural.\nPosteriormente, el recorrido continúa hacia la Presa de Tenango de las Flores, un espacio rodeado de montañas y vegetación exuberante donde podrás disfrutar de un paseo en lancha en un ambiente tranquilo y natural. Este sitio es ideal para relajarse y contemplar el paisaje de la Sierra poblana desde el agua.\nFinalmente, la experiencia culmina en el Pueblo Mágico de Huauchinango, un destino lleno de historia, cultura y tradiciones. Sus calles, su arquitectura tradicional y su ambiente serrano ofrecen una visión auténtica de la vida en la montaña, complementando perfectamente la aventura natural del día.",
      includes: [
        "Visita a Cascadas La Morena (no incluye ticket de acceso)",
        "Plática de introducción al senderismo antes del recorrido",
        "Visita y paseo en lancha en la Presa de Tenango de las Flores (no incluye ticket de acceso)",
        "Recorrido en el Pueblo Mágico de Huauchinango",
        "Coordinador de viaje en español e inglés durante toda la experiencia",
      ],
      excludes: [
        "Tickets de acceso a cascadas y actividades (estimado $150 MXN)",
        "Propinas para guías locales y coordinadores de viaje",
        "Actividades adicionales no especificadas en el itinerario",
      ],
      info: [
        "El acceso a Cascadas La Morena puede verse limitado en temporada de lluvias por seguridad",
        "El clima en la zona puede incluir lluvia, neblina, frío, lodo y terrenos irregulares",
        "Edad mínima requerida: 10 años",
        "No apto para personas con problemas de movilidad, rodillas o articulaciones",
        "Se recomienda informar a todos los acompañantes antes de reservar",
      ],
      tips:
        "Se recomienda llevar ropa deportiva cómoda, calzado antiderrapante o de senderismo, impermeable o chamarra ligera, cambio de ropa, hidratación, snacks ligeros, protector solar, repelente de insectos y dinero en efectivo. También es importante prepararse para condiciones de clima variable y terrenos irregulares, ya que parte del recorrido se realiza en zonas naturales con lodo, humedad y pendientes.",
    },
    en: {
      summary:
        "Live one of the most authentic ecotourism routes of the Sierra Norte de Puebla with this adventure designed for those seeking nature, physical activity, and impressive landscapes.\nThe first part of the tour takes us to Cascadas La Morena, a natural environment hidden between mountains, dense vegetation, and dirt trails where the sound of water and the jungle atmosphere create a completely immersive experience. Here you will take a guided hiking-style walk, ideal for connecting with nature and discovering one of the purest landscapes in the region.\nPrior to the hike, an introductory hiking talk is offered to learn basic safety recommendations and make the most of the experience in natural terrain.\nLater, the tour continues towards the Presa de Tenango de las Flores, a space surrounded by mountains and exuberant vegetation where you can enjoy a boat ride in a calm and natural environment. This site is ideal for relaxing and contemplating the landscape of the Puebla mountains from the water.\nFinally, the experience culminates in the Magical Town of Huauchinango, a destination full of history, culture, and traditions. Its streets, traditional architecture, and mountain atmosphere offer an authentic view of mountain life, perfectly complementing the day's natural adventure.",
      includes: [
        "Visit to Cascadas La Morena (access ticket not included)",
        "Hiking introduction talk before the tour",
        "Visit and boat ride at Presa de Tenango de las Flores (access ticket not included)",
        "Tour in the Magical Town of Huauchinango",
        "Trip coordinator in Spanish and English throughout the experience",
      ],
      excludes: [
        "Access tickets to waterfalls and activities (estimated $150 MXN)",
        "Tips for local guides and travel coordinators",
        "Additional activities not specified in the itinerary",
      ],
      info: [
        "Access to Cascadas La Morena may be limited during the rainy season for safety",
        "The weather in the area may include rain, fog, cold, mud, and uneven terrain",
        "Minimum age required: 10 years",
        "Not suitable for people with mobility, knee, or joint problems",
        "It is recommended to inform all companions before booking",
      ],
      tips:
        "It is recommended to bring comfortable sportswear, non-slip or hiking footwear, a raincoat or light jacket, a change of clothes, hydration, light snacks, sunscreen, insect repellent, and cash. It is also important to prepare for variable weather conditions and uneven terrain, as part of the tour is carried out in natural areas with mud, humidity, and slopes.",
    },
  },

  "puerto-vallarta-y-sayulita-ballenas-jorobadas": {
    es: {
      summary:
        "Prepárate para vivir una aventura inolvidable en las costas del Pacífico mexicano, donde la naturaleza, el océano y los paisajes tropicales se combinan en una experiencia llena de emoción y descanso.\nEl punto más esperado del recorrido es el avistamiento de ballenas jorobadas en Bahía de Banderas, uno de los espectáculos naturales más impresionantes de la temporada. Cada año, estas majestuosas criaturas migran hacia las cálidas aguas de la Riviera Nayarit y Puerto Vallarta, ofreciendo increíbles escenas de saltos, coletazos y desplazamientos sobre el océano.\nA bordo de una embarcación especializada recorrerás el mar acompañado de personal capacitado, disfrutando de una experiencia única en contacto con la vida marina y los paisajes del Pacífico. La emoción de observar a las ballenas en su hábitat natural convierte este recorrido en un momento verdaderamente memorable.\nLa experiencia continúa en Sayulita, uno de los destinos más encantadores de la Riviera Nayarit. Este Pueblo Mágico destaca por su ambiente relajado, calles coloridas, esencia surfista y hermosas playas rodeadas de vegetación tropical. Aquí podrás caminar por el centro, disfrutar de la gastronomía local y vivir el ambiente bohemio que caracteriza a este destino costero.\nPosteriormente visitarás Puerto Vallarta, uno de los destinos turísticos más emblemáticos de México. Su famoso malecón frente al mar, esculturas, playas y ambiente tradicional crean una combinación perfecta entre cultura, entretenimiento y paisajes tropicales.\nFinalmente, conocerás Punta de Mita, una exclusiva zona costera reconocida por sus playas de arena dorada, aguas cristalinas y vistas espectaculares del océano Pacífico, ideal para relajarse y disfrutar del entorno natural.",
      includes: [
        "Transporte redondo en autobús turístico",
        "02 noches de hospedaje en hotel categoría 3 estrellas",
        "Habitación doble estándar (1 o 2 camas sujetas a disponibilidad)",
        "Desayunos incluidos durante la estancia",
        "Tour en lancha para avistamiento de ballenas jorobadas (aprox. 3 hrs)*",
        "Visita a Sayulita, Pueblo Mágico",
        "Visita a Punta de Mita",
        "Recorrido por Puerto Vallarta",
        "Seguro de viajero a bordo de la unidad durante todo el recorrido",
        "Coordinador de viaje en español e inglés durante la experiencia",
      ],
      excludes: [
        "Impuestos portuarios y de conservación ambiental",
        "Propinas para guías, operadores y coordinadores",
        "Actividades opcionales y tours adicionales en catamarán",
        "Gastos personales y servicios no especificados",
        "Suplemento por habitación sencilla o privada",
      ],
      info: [
        "El avistamiento de ballenas depende de condiciones naturales y climáticas; no se garantiza el comportamiento de las especies",
        "Las actividades marítimas están sujetas a condiciones climáticas y operativas del puerto",
        "Los tours opcionales en catamarán requieren reservación y pago adicional",
        "Para actividades acuáticas opcionales es indispensable saber nadar",
        "El hospedaje puede asignarse en habitaciones con 1 o 2 camas según disponibilidad",
        "El viaje terrestre se realiza durante la noche; se recomienda llevar una maleta pequeña con artículos personales y ropa cómoda",
        "Los impuestos portuarios y ambientales se pagan directamente en destino",
      ],
      tips:
        "Se recomienda llevar ropa ligera, traje de baño, sandalias, bloqueador solar biodegradable, lentes de sol, gorra o sombrero e hidratación constante. También es importante llevar una chamarra ligera para recorridos marítimos, cámara fotográfica, efectivo para impuestos y actividades opcionales, así como bolsa impermeable para proteger pertenencias durante las actividades acuáticas.",
    },
    en: {
      summary:
        "Prepare to live an unforgettable adventure on the coasts of the Mexican Pacific, where nature, the ocean, and tropical landscapes combine in an experience full of emotion and rest.\nThe most anticipated point of the tour is the sighting of humpback whales in Banderas Bay, one of the most impressive natural spectacles of the season. Each year, these majestic creatures migrate to the warm waters of Riviera Nayarit and Puerto Vallarta, offering incredible scenes of jumps, tail slaps, and movements across the ocean.\nOn board a specialized boat you will tour the sea accompanied by trained staff, enjoying a unique experience in contact with marine life and Pacific landscapes. The excitement of observing whales in their natural habitat makes this tour a truly memorable moment.\nThe experience continues in Sayulita, one of the most charming destinations in Riviera Nayarit. This Magical Town stands out for its relaxed atmosphere, colorful streets, surf essence, and beautiful beaches surrounded by tropical vegetation. Here you can walk through the center, enjoy local gastronomy, and live the bohemian atmosphere that characterizes this coastal destination.\nLater you will visit Puerto Vallarta, one of the most emblematic tourist destinations in Mexico. Its famous oceanfront boardwalk, sculptures, beaches, and traditional atmosphere create a perfect combination of culture, entertainment, and tropical landscapes.\nFinally, you will visit Punta de Mita, an exclusive coastal area recognized for its golden sand beaches, crystal clear waters, and spectacular views of the Pacific Ocean, ideal for relaxing and enjoying the natural environment.",
      includes: [
        "Round trip transport in tourist bus",
        "02 nights lodging in 3-star category hotel",
        "Standard double room (1 or 2 beds subject to availability)",
        "Breakfasts included during the stay",
        "Boat tour for humpback whale watching (approx. 3 hrs)*",
        "Visit to Sayulita, Magical Town",
        "Visit to Punta de Mita",
        "Tour through Puerto Vallarta",
        "Traveler insurance aboard the unit throughout the tour",
        "Trip coordinator in Spanish and English during the experience",
      ],
      excludes: [
        "Port and environmental conservation taxes",
        "Tips for guides, operators, and coordinators",
        "Optional activities and additional catamaran tours",
        "Personal expenses and unspecified services",
        "Supplement for single or private room",
      ],
      info: [
        "Whale watching depends on natural and climatic conditions; species behavior is not guaranteed",
        "Maritime activities are subject to weather and port operating conditions",
        "Optional catamaran tours require reservation and additional payment",
        "For optional water activities it is essential to know how to swim",
        "Lodging can be assigned in rooms with 1 or 2 beds depending on availability",
        "Terrestrial travel is done at night; it is recommended to carry a small suitcase with personal items and comfortable clothing",
        "Port and environmental taxes are paid directly at the destination",
      ],
      tips:
        "It is recommended to bring light clothing, swimsuit, sandals, biodegradable sunscreen, sunglasses, cap or hat, and constant hydration. It is also important to bring a light jacket for maritime tours, camera, cash for taxes and optional activities, and a waterproof bag to protect belongings during water activities.",
    },
  },

  "centro-ceremonial-otomi-y-metepec": {
    es: {
      summary:
        "Vive una experiencia que combina naturaleza, tradición y cultura en dos de los destinos más representativos del Estado de México. Este recorrido te llevará a descubrir la majestuosidad del Centro Ceremonial Otomí y el encanto artesanal del Pueblo Mágico de Metepec.\nLa aventura comienza en el impresionante Centro Ceremonial Otomí, un espacio rodeado de bosque y montañas que destaca por su arquitectura monumental inspirada en las antiguas culturas prehispánicas. Ubicado entre paisajes naturales y aire puro, este lugar se ha convertido en uno de los sitios más emblemáticos del turismo cultural y deportivo en el centro del país.\nDurante la visita podrás recorrer sus enormes plazas ceremoniales, admirar las gigantescas estructuras de piedra y disfrutar de vistas panorámicas rodeadas de naturaleza. El sitio también representa un importante símbolo de identidad indígena y tradición ancestral de los pueblos otomíes.\nPosteriormente, el recorrido continúa hacia Metepec, uno de los Pueblos Mágicos más famosos del Estado de México, reconocido por su tradición alfarera, calles coloridas y ambiente cultural.\nAquí disfrutarás de un recorrido en tranvía por sus calles más emblemáticas, donde podrás conocer la historia, arquitectura y esencia artesanal que caracteriza al destino. Metepec es especialmente famoso por sus Árboles de la Vida, piezas artesanales elaboradas en barro que representan una de las expresiones artísticas más importantes del país.\nAdemás, tendrás tiempo libre para caminar por sus plazas, visitar talleres artesanales, disfrutar de la gastronomía local y descubrir la atmósfera bohemia y tradicional que hace único a este Pueblo Mágico.",
      includes: [
        "Transporte redondo en autobús o minibús de turismo",
        "Visita al Centro Ceremonial Otomí",
        "Tiempo libre para recorrer el parque y sus alrededores naturales",
        "Visita a Metepec, Pueblo Mágico",
        "Recorrido panorámico en tranvía por Metepec",
        "Seguro de viajero a bordo de la unidad durante todo el recorrido",
        "Coordinador de viaje en español e inglés durante la experiencia",
      ],
      excludes: [
        "Acceso al Centro Ceremonial Otomí",
        "Propinas para guías locales y coordinadores",
        "Actividades adicionales en destino",
        "Alimentos y gastos personales",
        "Servicios no especificados en el itinerario",
      ],
      info: [
        "En caso de suspensión del recorrido en tranvía por mantenimiento o situaciones operativas, la actividad podrá sustituirse por una experiencia alternativa en Toluca",
        "El Centro Ceremonial Otomí se encuentra en una zona montañosa; se recomienda llevar ropa abrigadora y calzado cómodo",
        "Algúnas áreas requieren caminatas en superficies irregulares y escaleras",
        "La temperatura puede descender considerablemente durante la mañana y tarde",
        "Se recomienda llevar efectivo para accesos, alimentos y compras de artesanías locales",
      ],
      tips:
        "Se recomienda llevar chamarra o sudadera, calzado cómodo para caminatas, gorra o sombrero y protector solar. También es recomendable llevar cámara fotográfica, hidratación, efectivo para entradas y artesanías, así como ropa cómoda para disfrutar plenamente del recorrido entre naturaleza y calles empedradas.",
    },
    en: {
      summary:
        "Live an experience that combines nature, tradition, and culture in two of the most representative destinations of the State of Mexico. This tour will take you to discover the majesty of the Otomi Ceremonial Center and the artisanal charm of the Magical Town of Metepec.\nThe adventure begins at the impressive Otomi Ceremonial Center, a space surrounded by forest and mountains that stands out for its monumental architecture inspired by ancient pre-Hispanic cultures. Located between natural landscapes and pure air, this place has become one of the most emblematic sites for cultural and sports tourism in the center of the country.\nDuring the visit you can walk through its huge ceremonial plazas, admire the gigantic stone structures, and enjoy panoramic views surrounded by nature. The site also represents an important symbol of indigenous identity and ancestral tradition of the Otomi peoples.\nLater, the tour continues to Metepec, one of the most famous Magical Towns of the State of Mexico, recognized for its pottery tradition, colorful streets, and cultural environment.\nHere you will enjoy a tram ride through its most emblematic streets, where you can learn about the history, architecture, and artisanal essence that characterizes the destination. Metepec is especially famous for its Trees of Life, handcrafted pieces made of clay that represent one of the most important artistic expressions in the country.\nIn addition, you will have free time to walk through its squares, visit artisan workshops, enjoy local gastronomy, and discover the bohemian and traditional atmosphere that makes this Magical Town unique.",
      includes: [
        "Round-trip transport in tourist bus or minibus",
        "Visit to the Otomi Ceremonial Center",
        "Free time to explore the park and its natural surroundings",
        "Visit to Metepec, Magical Town",
        "Panoramic tram tour through Metepec",
        "Traveler insurance aboard the unit throughout the tour",
        "Trip coordinator in Spanish and English during the experience",
      ],
      excludes: [
        "Access to the Otomi Ceremonial Center",
        "Tips for local guides and coordinators",
        "Additional activities at destination",
        "Food and personal expenses",
        "Services not specified in the itinerary",
      ],
      info: [
        "In case of suspension of the tram tour due to maintenance or operational situations, the activity may be replaced by an alternative experience in Toluca",
        "The Otomi Ceremonial Center is located in a mountainous area; it is recommended to bring warm clothing and comfortable footwear",
        "Some areas require walks on uneven surfaces and stairs",
        "The temperature can drop considerably during the morning and afternoon",
        "It is recommended to bring cash for access, food, and purchases of local crafts",
      ],
      tips:
        "It is recommended to bring a jacket or sweatshirt, comfortable footwear for walks, cap or hat, and sunscreen. It is also recommended to bring a camera, hydration, cash for tickets and crafts, as well as comfortable clothing to fully enjoy the tour between nature and cobblestone streets.",
    },
  },

  "chignahuapan-aguas-termales-y-pueblo-magico": {
    es: {
      summary:
        "Descubre uno de los destinos más relajantes de la Sierra Norte de Puebla con esta experiencia pensada para reconectar con la tranquilidad, la naturaleza y el bienestar. Chignahuapan es un destino que combina paisajes montañosos, tradiciones vivas y uno de los atractivos naturales más buscados del estado: sus aguas termales.\nLa primera parte del recorrido nos lleva al reconocido complejo de aguas termales de Chignahuapan, un espacio natural donde el agua brota con alta concentración de minerales como sílice, bicarbonato, calcio, magnesio y otros elementos que contribuyen a una sensación de relajación profunda. Este entorno está rodeado por montañas y vegetación, creando un ambiente perfecto para descansar y disfrutar del contacto directo con la naturaleza.\nDurante la visita podrás sumergirte en las pozas termales y vivir una experiencia de relajación total. Se recomienda disfrutar del agua de manera moderada, alternando con descansos y complementando la experiencia con una ducha posterior de agua tibia para equilibrar la temperatura corporal.\nDespués de la experiencia termal, el recorrido continúa hacia el centro de Chignahuapan, un Pueblo Mágico lleno de tradición, historia y cultura. Sus calles, su ambiente pintoresco y su famosa producción artesanal de esferas navideñas lo convierten en un destino único en México. Aquí podrás caminar con calma, explorar sus alrededores y disfrutar del ambiente local.",
      includes: [
        "Visita al balneario de Aguas Termales de Chignahuapan (no incluye ticket de acceso)",
        "Recorrido y tiempo libre en el Pueblo Mágico de Chignahuapan",
        "Coordinador de viaje en español e inglés durante todo el recorrido",
      ],
      excludes: [
        "Ticket de acceso al balneario de aguas termales (costo estimado $150 MXN)",
        "Propinas para guías locales y coordinadores de viaje",
        "Servicios adicionales no especificados dentro del itinerario",
      ],
      tips:
        "• El acceso al balneario no está incluido y se paga directamente en el lugar\n• Se recomienda limitar la permanencia en las aguas termales a un máximo de dos horas continuas\n• El clima en la sierra puede variar, por lo que se sugiere llevar ropa adecuada\n• Puede haber tiempos de espera en accesos debido a la afluencia de visitantes\nSe recomienda llevar traje de baño, sandalias, toalla, ropa cómoda, cambio de ropa seca, protector solar, hidratación, dinero en efectivo y bolsa impermeable para pertenencias personales. También es importante seguir las indicaciones del coordinador para aprovechar al máximo la experiencia termal y el recorrido en el pueblo mágico.",
    },
    en: {
      summary:
        "Discover one of the most relaxing destinations of the Sierra Norte de Puebla with this experience designed to reconnect with tranquility, nature, and well-being. Chignahuapan is a destination that combines mountain landscapes, living traditions, and one of the most sought-after natural attractions of the state: its hot springs.\nThe first part of the tour takes us to the renowned Chignahuapan hot springs complex, a natural space where water springs with a high concentration of minerals such as silica, bicarbonate, calcium, magnesium, and other elements that contribute to a sensation of deep relaxation. This environment is surrounded by mountains and vegetation, creating a perfect environment to rest and enjoy direct contact with nature.\nDuring the visit you can submerge yourself in the thermal pools and live a total relaxation experience. It is recommended to enjoy the water moderately, alternating with breaks and complementing the experience with a subsequent warm water shower to balance body temperature.\nAfter the thermal experience, the tour continues towards the center of Chignahuapan, a Magical Town full of tradition, history, and culture. Its streets, picturesque atmosphere, and famous artisanal production of Christmas spheres make it a unique destination in Mexico. Here you can walk calmly, explore its surroundings, and enjoy the local atmosphere.",
      includes: [
        "Visit to the Chignahuapan Hot Springs spa (access ticket not included)",
        "Tour and free time in the Magical Town of Chignahuapan",
        "Trip coordinator in Spanish and English throughout the tour",
      ],
      excludes: [
        "Access ticket to the hot springs spa (estimated cost $150 MXN)",
        "Tips for local guides and travel coordinators",
        "Additional services not specified within the itinerary",
      ],
      tips:
        "• Access to the spa is not included and is paid directly at the location\n• It is recommended to limit permanence in the hot springs to a maximum of two continuous hours\n• The weather in the mountains can vary, so it is suggested to bring appropriate clothing\n• There may waiting times at accesses due to visitor influx\nIt is recommended to bring a swimsuit, sandals, towel, comfortable clothes, change of dry clothes, sunscreen, hydration, cash, and waterproof bag for personal belongings. It is also important to follow the coordinator's instructions to make the most of the thermal experience and the tour in the magical town.",
    },
  },

  "jardines-de-mexico-y-tepoztlan": {
    es: {
      summary:
        "Descubre uno de los destinos naturales más impresionantes del estado de Morelos con esta experiencia que combina arte, naturaleza y cultura en un solo recorrido.\nLa primera parte del viaje nos lleva a los reconocidos Jardines de México, considerados el jardín floral más grande del mundo. Este espacio está diseñado para sorprender a cada visitante con una amplia diversidad de flores, paisajes cuidadosamente diseñados y ambientes temáticos que transportan a diferentes partes del mundo sin salir de México.\nDurante el recorrido podrás explorar distintos jardines temáticos, cada uno con su propia identidad: el elegante jardín de estilo italiano, el armónico jardín japonés, el vibrante jardín tropical y el imponente jardín de cactáceas, entre otros espacios que llenan el entorno de aromas, colores y texturas naturales. Además, vivirás una experiencia única en el Laberinto de los Sentidos, un espacio interactivo donde el arte contemporáneo se integra con la naturaleza, creando un recorrido sensorial que invita a descubrir cada rincón.\nDespués de esta experiencia natural, continuaremos hacia Tepoztlán, uno de los Pueblos Mágicos más emblemáticos de Morelos. Sus calles empedradas, su ambiente místico y su energía característica lo convierten en un destino ideal para caminar, explorar y disfrutar de su cultura local. Aquí podrás admirar su arquitectura tradicional, su vida artesanal y su ambiente relajado que lo distingue como uno de los mejores destinos de fin de semana en México.",
      includes: [
        "Visita a Jardines de México",
        "Tiempo libre para recorrer 5 jardines temáticos: Jardín Tropical, Laberinto de los Sentidos, Jardín Estilo Italiano, Jardín Estilo Japonés y Jardín de Cactáceas",
        "Visita al Pueblo Mágico de Tepoztlán",
        "Coordinador de viaje en español e inglés durante todo el recorrido",
        "Seguro de viajero",
      ],
      excludes: [
        "Actividades adicionales dentro de los recintos o atracciones",
        "Propinas para guías locales y coordinadores de viaje",
        "Servicios no especificados dentro del itinerario",
        "Acceso a jardines en mantenimiento: Abanico de Flores y Jardín Cuatro Primaveras",
      ],
      tips:
        "• El recorrido puede incluir tiempos de espera en accesos debido a la afluencia de visitantes\n• Algunos jardines se encuentran en mantenimiento temporal, por lo que el acceso puede variar\n• El clima puede influir en la experiencia, por lo que se recomienda revisar pronóstico antes del viaje\n• Es un recorrido de caminata moderada dentro de los jardines y el pueblo mágico\nSe recomienda llevar ropa cómoda, calzado adecuado para caminar, protector solar, sombrero o gorra, cámara fotográfica y dinero en efectivo para gastos personales o consumo en Tepoztlán. También es importante llevar hidratación suficiente para disfrutar plenamente del recorrido.",
    },
    en: {
      summary:
        "Discover one of the most impressive natural destinations in the state of Morelos with this experience that combines art, nature, and culture in a single tour.\nThe first part of the trip takes us to the renowned Jardines de México, considered the largest floral garden in the world. This space is designed to surprise each visitor with a wide diversity of flowers, carefully designed landscapes, and themed environments that transport you to different parts of the world without leaving Mexico.\nDuring the tour you can explore different themed gardens, each with its own identity: the elegant Italian-style garden, the harmonious Japanese garden, the vibrant tropical garden, and the imposing cactus garden, among other spaces that fill the environment with natural aromas, colors, and textures. In addition, you will live a unique experience in the Labyrinth of the Senses, an interactive space where contemporary art integrates with nature, creating a sensory journey that invites you to discover every corner.\nAfter this natural experience, we will continue to Tepoztlán, one of the most emblematic Magical Towns of Morelos. Its cobblestone streets, mystical atmosphere, and characteristic energy make it an ideal destination to walk, explore, and enjoy its local culture. Here you can admire its traditional architecture, its artisanal life, and its relaxed atmosphere that distinguishes it as one of the best weekend destinations in Mexico.",
      includes: [
        "Visit to Jardines de México",
        "Free time to tour 5 themed gardens: Tropical Garden, Labyrinth of the Senses, Italian Style Garden, Japanese Style Garden, and Cactus Garden",
        "Visit to the Magical Town of Tepoztlán",
        "Trip coordinator in Spanish and English throughout the tour",
        "Traveler insurance",
      ],
      excludes: [
        "Additional activities within the enclosures or attractions",
        "Tips for local guides and travel coordinators",
        "Services not specified within the itinerary",
        "Access to gardens under maintenance: Abanico de Flores and Jardín Cuatro Primaveras",
      ],
      tips:
        "• The tour may include waiting times at accesses due to visitor influx\n• Some gardens are under temporary maintenance, so access may vary\n• Weather can influence the experience, so it is recommended to check the forecast before the trip\n• It is a moderate walking tour inside the gardens and the magical town\nIt is recommended to bring comfortable clothes, suitable footwear for walking, sunscreen, hat or cap, camera, and cash for personal expenses or consumption in Tepoztlán. It is also important to bring sufficient hydration to fully enjoy the tour.",
    },
  },

  "grutas-de-cacahuamilpa-y-taxco": {
    es: {
      summary:
        "Descubre una experiencia que combina aventura, naturaleza y tradición colonial en dos de los destinos más impresionantes del estado de Guerrero. Este recorrido te llevará desde las profundidades de una de las cuevas más espectaculares de México hasta las encantadoras calles empedradas de Taxco.\nLa aventura comienza en las impresionantes Grutas de Cacahuamilpa, un gigantesco sistema de cavernas naturales considerado uno de los más importantes del mundo. Al adentrarte en sus enormes salones subterráneos podrás admirar impresionantes formaciones rocosas creadas durante miles de años por la naturaleza.\nDurante el recorrido descubrirás enormes estalactitas, estalagmitas y figuras naturales que parecen esculturas talladas en piedra. La inmensidad de las cavernas, el silencio y la atmósfera natural convierten esta experiencia en un recorrido fascinante por el interior de la tierra.\nPosteriormente, el viaje continúa hacia Taxco, uno de los Pueblos Mágicos más emblemáticos de México y reconocido internacionalmente por su tradición platera y arquitectura colonial.\nSus calles empedradas, casas blancas con techos de teja roja y callejones llenos de historia crean un ambiente único que transporta a otra época. Durante la visita podrás recorrer su centro histórico, disfrutar de vistas panorámicas y conocer talleres artesanales dedicados al trabajo de la plata.\nUno de los principales atractivos de Taxco es la majestuosa Parroquia de Santa Prisca, considerada una joya arquitectónica del barroco mexicano y uno de los templos más representativos del país.",
      includes: [
        "Transporte redondo en autobús o camioneta de turismo",
        "Visita a las Grutas de Cacahuamilpa",
        "Tiempo libre para recorrer el sistema de cavernas",
        "Visita a Taxco, Pueblo Mágico",
        "Recorrido por el centro histórico de Taxco",
        "Seguro de viajero a bordo de la unidad durante todo el recorrido",
        "Coordinador de viaje en español e inglés durante la experiencia",
      ],
      excludes: [
        "Ticket de acceso a las Grutas de Cacahuamilpa",
        "Actividades adicionales en destino",
        "Propinas para guías locales y coordinadores",
        "Gastos personales y compras",
        "Servicios no especificados en el itinerario",
      ],
      info: [
        "Las Grutas de Cacahuamilpa cuentan con superficies húmedas e irregulares; se recomienda utilizar calzado antiderrapante",
        "El recorrido dentro de las grutas implica caminatas prolongadas y algunas pendientes",
        "Taxco cuenta con calles empedradas y desniveles pronunciados",
        "Se recomienda llevar efectivo para entradas, alimentos y compras de artesanías o plata",
        "La temperatura dentro de las grutas puede ser fresca y húmeda; se recomienda llevar chamarra ligera",
      ],
      tips:
        "Se recomienda llevar ropa cómoda, chamarra ligera, calzado antiderrapante y mochila pequeña para el recorrido dentro de las grutas. También es recomendable llevar efectivo para entradas y compras, hidratación, cámara fotográfica y lentes de sol para disfrutar plenamente de los paisajes naturales y coloniales del recorrido.",
    },
    en: {
      summary:
        "Discover an experience that combines adventure, nature, and colonial tradition in two of the most impressive destinations in the state of Guerrero. This tour will take you from the depths of one of the most spectacular caves in Mexico to the charming cobblestone streets of Taxco.\nThe adventure begins in the impressive Grutas de Cacahuamilpa, a gigantic system of natural caverns considered one of the most important in the world. By entering its huge underground halls you can admire impressive rock formations created over thousands of years by nature.\nDuring the tour you will discover huge stalactites, stalagmites, and natural figures that look like sculptures carved in stone. The immensity of the caverns, the silence, and the natural atmosphere turn this experience into a fascinating tour of the interior of the earth.\nLater, the trip continues to Taxco, one of the most emblematic Magical Towns of Mexico and internationally recognized for its silver tradition and colonial architecture.\nIts cobblestone streets, white houses with red tile roofs, and alleys full of history create a unique atmosphere that transports you to another era. During the visit you can tour its historic center, enjoy panoramic views, and visit artisan workshops dedicated to silver work.\nOne of the main attractions of Taxco is the majestic Parish of Santa Prisca, considered an architectural jewel of Mexican baroque and one of the most representative temples in the country.",
      includes: [
        "Round-trip transport in tourist bus or van",
        "Visit to the Grutas de Cacahuamilpa",
        "Free time to tour the cave system",
        "Visit to Taxco, Magical Town",
        "Tour of the historic center of Taxco",
        "Traveler insurance aboard the unit throughout the tour",
        "Trip coordinator in Spanish and English during the experience",
      ],
      excludes: [
        "Access ticket to the Grutas de Cacahuamilpa",
        "Additional activities at destination",
        "Tips for local guides and coordinators",
        "Personal expenses and purchases",
        "Services not specified in the itinerary",
      ],
      info: [
        "The Grutas de Cacahuamilpa have wet and irregular surfaces; non-slip footwear is recommended",
        "The tour inside the caves involves prolonged walks and some slopes",
        "Taxco has cobblestone streets and pronounced unlevels",
        "It is recommended to bring cash for tickets, food, and purchases of crafts or silver",
        "The temperature inside the caves can be cool and humid; it is recommended to bring a light jacket",
      ],
      tips:
        "It is recommended to bring comfortable clothes, light jacket, non-slip footwear, and small backpack for the tour inside the caves. It is also recommended to bring cash for tickets and purchases, hydration, camera, and sunglasses to fully enjoy the natural and colonial landscapes of the tour.",
    },
  },

  "guanajuato-colonial-y-la-gruta-spa": {
    es: {
      summary:
        "Descubre una experiencia llena de historia, arquitectura colonial y relajación en algunos de los destinos más emblemáticos del estado de Guanajuato. Este recorrido combina cultura, tradición y bienestar en una aventura diseñada para disfrutar lo mejor del Bajío mexicano.\nLa primera parada es la ciudad de Guanajuato, reconocida mundialmente por sus callejones, túneles subterráneos y coloridas construcciones coloniales que se extienden entre montañas. Caminar por sus calles es adentrarse en un escenario lleno de historia, plazas, museos y rincones únicos que conservan la esencia cultural de México.\nDurante el recorrido podrás conocer algunos de los sitios más representativos de la ciudad, incluyendo el famoso Museo de las Momias y Boca Mina San Ramón, un espacio histórico ligado al pasado minero que dio gran importancia económica a la región durante la época colonial.\nAl caer la noche, vivirás una tradicional callejoneada guanajuatense, una de las experiencias más emblemáticas de la ciudad. Entre música, leyendas y callejones iluminados, recorrerás el centro histórico acompañado del ambiente festivo y cultural que caracteriza a Guanajuato.\nLa experiencia continúa con un momento de descanso y bienestar en La Gruta Spa, un espacio rodeado de naturaleza donde podrás relajarte en sus famosas aguas termales. Este lugar destaca por su cueva natural de aguas cálidas, creando un ambiente tranquilo ideal para desconectarse y disfrutar de una experiencia revitalizante.\nFinalmente, visitarás San Miguel de Allende, considerado uno de los destinos coloniales más bellos de México. Sus calles adoquinadas, fachadas coloridas, galerías, artesanías y ambiente cultural convierten cada rincón en un escenario lleno de encanto e historia.",
      includes: [
        "Transporte redondo en autobús y/o camioneta de turismo",
        "01 noche de hospedaje en hotel categoría 3 estrellas (ocupación doble)",
        "Visita a Guanajuato, Ciudad Patrimonio de la Humanidad",
        "Visita al Museo de las Momias (ticket no incluido)",
        "Recorrido por Boca Mina San Ramón",
        "Tradicional callejoneada nocturna en Guanajuato",
        "Visita a San Miguel de Allende",
        "Tiempo libre en mercado de artesanías y centro histórico",
        "Acceso a La Gruta Restaurante & Spa (aguas termales)",
        "Seguro de viajero a bordo de la unidad durante todo el recorrido",
        "Coordinador de viaje en español e inglés durante la experiencia",
      ],
      excludes: [
        "Acceso al Museo de las Momias",
        "Propinas para guías locales y coordinadores",
        "Gastos personales y alimentos no especificados",
        "Suplemento por habitación sencilla o privada",
        "Servicios adicionales no incluidos en el itinerario",
      ],
      info: [
        "El viaje terrestre se realiza durante la noche; se recomienda llevar una maleta pequeña con artículos personales y ropa cómoda",
        "Las calles de Guanajuato y San Miguel de Allende son empedradas, por lo que se recomienda calzado cómodo y antiderrapante",
        "Algunas actividades requieren caminatas prolongadas y desplazamientos a pie",
        "El acceso de autobuses turísticos al centro histórico está restringido en algunas zonas",
        "El hospedaje puede asignarse con una o dos camas según disponibilidad",
        "Para reservas individuales puede aplicar suplemento de habitación sencilla",
        "Se recomienda llevar traje de baño, sandalias y cambio de ropa para la visita a aguas termales",
      ],
      tips:
        "Se recomienda llevar ropa cómoda, chamarra ligera para la noche, calzado antiderrapante, traje de baño, sandalias y artículos personales de higiene. También es recomendable llevar efectivo para accesos y consumo local, cámara fotográfica y una mochila pequeña para recorridos a pie por los centros históricos.",
    },
    en: {
      summary:
        "Discover an experience full of history, colonial architecture, and relaxation in some of the most emblematic destinations of the state of Guanajuato. This tour combines culture, tradition, and well-being in an adventure designed to enjoy the best of the Mexican Bajío.\nThe first stop is the city of Guanajuato, recognized worldwide for its alleys, underground tunnels, and colorful colonial buildings that extend between mountains. Walking through its streets is entering a setting full of history, squares, museums, and unique corners that preserve the cultural essence of Mexico.\nDuring the tour you can visit some of the most representative sites of the city, including the famous Mummy Museum and Boca Mina San Ramón, a historical space linked to the mining past that gave great economic importance to the region during the colonial era.\nAt nightfall, you will live a traditional Guanajuato callejoneada, one of the most emblematic experiences of the city. Among music, legends, and illuminated alleys, you will tour the historic center accompanied by the festive and cultural atmosphere that characterizes Guanajuato.\nThe experience continues with a moment of rest and well-being at La Gruta Spa, a space surrounded by nature where you can relax in its famous hot springs. This place stands out for its natural cave of warm waters, creating a quiet environment ideal for disconnecting and enjoying a revitalizing experience.\nFinally, you will visit San Miguel de Allende, considered one of the most beautiful colonial destinations in Mexico. Its cobblestone streets, colorful facades, galleries, crafts, and cultural atmosphere turn every corner into a setting full of charm and history.",
      includes: [
        "Round-trip transport in tourist bus and/or van",
        "01 night lodging in 3-star category hotel (double occupancy)",
        "Visit to Guanajuato, World Heritage City",
        "Visit to the Mummy Museum (ticket not included)",
        "Tour through Boca Mina San Ramón",
        "Traditional nocturnal callejoneada in Guanajuato",
        "Visit to San Miguel de Allende",
        "Free time in handicraft market and historic center",
        "Access to La Gruta Restaurant & Spa (hot springs)",
        "Traveler insurance aboard the unit throughout the tour",
        "Trip coordinator in Spanish and English during the experience",
      ],
      excludes: [
        "Access to the Mummy Museum",
        "Tips for local guides and coordinators",
        "Personal expenses and unspecified food",
        "Supplement for single or private room",
        "Additional services not included in the itinerary",
      ],
      info: [
        "Terrestrial travel is done at night; it is recommended to carry a small suitcase with personal items and comfortable clothing",
        "The streets of Guanajuato and San Miguel de Allende are cobblestone, so comfortable and non-slip footwear is recommended",
        "Some activities require prolonged walks and travel on foot",
        "Tourist bus access to the historic center is restricted in some areas",
        "Lodging can be assigned with one or two beds depending on availability",
        "For individual reservations, a single room supplement may apply",
        "It is recommended to bring a swimsuit, sandals, and a change of clothes for the visit to hot springs",
      ],
      tips:
        "It is recommended to bring comfortable clothes, light jacket for the night, non-slip footwear, swimsuit, sandals, and personal hygiene items. It is also recommended to bring cash for access and local consumption, a camera, and a small backpack for walking tours through the historic centers.",
    },
  },

  "huamantla-la-noche-que-nadie-duerme": {
    es: {
      summary:
        "Descubre una de las celebraciones más emblemáticas y coloridas de México en el corazón de Tlaxcala. Cada año, el Pueblo Mágico de Huamantla se transforma en un enorme lienzo lleno de arte, tradición y devoción durante “La Noche que Nadie Duerme”, una festividad reconocida por sus impresionantes tapetes artesanales elaborados con aserrín, flores y materiales naturales.\nLa experiencia comienza recorriendo las calles del centro histórico, donde habitantes y artistas locales trabajan durante horas para crear auténticas obras de arte efímero que cubren avenidas completas con diseños llenos de color, simbolismo y creatividad.\nMientras cae la noche, Huamantla adquiere un ambiente mágico donde la iluminación, la música, el aroma de las flores y el movimiento de miles de visitantes convierten el recorrido en una experiencia cultural única. Cada calle revela nuevos diseños y detalles que reflejan el talento artesanal y las tradiciones profundamente arraigadas de esta comunidad tlaxcalteca.\nUno de los momentos más especiales ocurre durante la tradicional procesión en honor a la Virgen de la Caridad, cuando los tapetes sirven como escenario para una celebración llena de fe, historia y expresión cultural que permanece viva generación tras generación.\nAdemás de disfrutar de esta festividad, tendrás tiempo libre para recorrer el centro de Huamantla, degustar antojitos típicos de la región y admirar la arquitectura tradicional del Pueblo Mágico.",
      includes: [
        "Transporte redondo en autobús y/o camioneta de turismo",
        "Visita al Pueblo Mágico de Huamantla",
        "Tiempo libre para recorrer y admirar los tradicionales tapetes monumentales",
        "Experiencia nocturna durante la celebración de “La Noche que Nadie Duerme”",
        "Seguro de viajero a bordo de la unidad durante todo el recorrido",
        "Coordinador de viaje en español e inglés durante la experiencia",
      ],
      excludes: [
        "Alimentos, bebidas y consumo personal",
        "Propinas para coordinadores y guías locales",
        "Actividades adicionales en el destino",
        "Servicios no especificados dentro del itinerario",
      ],
      info: [
        "Se recomienda viajar bien abrigado y llevar impermeable debido a las bajas temperaturas y posibles lluvias nocturnas",
        "El evento se desarrolla durante toda la noche; se sugiere descansar previamente antes del viaje",
        "Debido a la alta afluencia de visitantes, algunos accesos y servicios pueden requerir tiempos de espera",
        "El acceso al transporte turístico estará restringido durante la noche hasta el horario de regreso establecido",
        "Se realizarán caminatas prolongadas en calles del centro histórico",
        "El ingreso al transporte será restringido a personas en estado inconveniente",
        "Las actividades culturales, conciertos y programación del evento pueden modificarse por parte de los organizadores oficiales",
      ],
      tips:
        "Se recomienda llevar ropa abrigadora, chamarra, impermeable, calzado cómodo para caminatas largas, batería portátil para celular e hidratación. También es recomendable llevar efectivo para consumo local, snacks ligeros y cámara fotográfica para capturar los impresionantes tapetes y el ambiente nocturno del festival.",
    },
    en: {
      summary:
        "Discover one of the most emblematic and colorful celebrations in Mexico in the heart of Tlaxcala. Every year, the Magical Town of Huamantla transforms into a huge canvas full of art, tradition, and devotion during “La Noche que Nadie Duerme” (The Night Nobody Sleeps), a festivity recognized for its impressive artisanal carpets made with sawdust, flowers, and natural materials.\nThe experience begins by touring the streets of the historic center, where inhabitants and local artists work for hours to create authentic works of ephemeral art that cover entire avenues with designs full of color, symbolism, and creativity.\nAs night falls, Huamantla acquires a magical atmosphere where lighting, music, the aroma of flowers, and the movement of thousands of visitors turn the tour into a unique cultural experience. Each street reveals new designs and details that reflect the artisanal talent and deeply rooted traditions of this Tlaxcalan community.\nOne of the most special moments occurs during the traditional procession in honor of the Virgin of Charity, when the carpets serve as a stage for a celebration full of faith, history, and cultural expression that remains alive generation after generation.\nIn addition to enjoying this festivity, you will have free time to tour the center of Huamantla, taste typical snacks of the region, and admire the traditional architecture of the Magical Town.",
      includes: [
        "Round-trip transport in tourist bus and/or van",
        "Visit to the Magical Town of Huamantla",
        "Free time to tour and admire the traditional monumental carpets",
        "Nighttime experience during the celebration of “La Noche que Nadie Duerme”",
        "Traveler insurance aboard the unit throughout the tour",
        "Trip coordinator in Spanish and English during the experience",
      ],
      excludes: [
        "Food, beverages, and personal consumption",
        "Tips for coordinators and local guides",
        "Additional activities at the destination",
        "Services not specified within the itinerary",
      ],
      info: [
        "It is recommended to travel well bundled and bring a raincoat due to low temperatures and possible nighttime rains",
        "The event takes place throughout the night; it is suggested to rest beforehand before the trip",
        "Due to the high influx of visitors, some accesses and services may require waiting times",
        "Access to tourist transport will be restricted during the night until the established return time",
        "Prolonged walks will be carried out in the streets of the historic center",
        "Entry to transport will be restricted to people in an inconvenient state",
        "Cultural activities, concerts, and event programming may be modified by official organizers",
      ],
      tips:
        "It is recommended to bring warm clothing, jacket, raincoat, comfortable footwear for long walks, portable battery for cell phone, and hydration. It is also recommended to bring cash for local consumption, light snacks, and a camera to capture the impressive carpets and the nocturnal atmosphere of the festival.",
    },
  },

  "huasteca-potosina-3-dias": {
    es: {
      summary:
        "Descubre una de las regiones naturales más impresionantes de México en una aventura de tres días rodeada de cascadas, ríos turquesa, cuevas y paisajes selváticos. La Huasteca Potosina es un destino reconocido por su extraordinaria riqueza natural y por ofrecer escenarios únicos ideales para quienes buscan aventura, ecoturismo y contacto directo con la naturaleza.\nA la experiencia comienza explorando algunos de los paisajes acuáticos más espectaculares de San Luis Potosí. Uno de los momentos más impresionantes del recorrido es la visita a la Cascada de Tamul, considerada una de las más grandes y emblemáticas del país, con una caída rodeada de paredes naturales y aguas color turquesa.\nPara llegar a este impresionante escenario realizarás un paseo en lancha por el Río Tampaón, navegando entre formaciones rocosas, vegetación tropical y aguas cristalinas que caracterizan la región huasteca. Durante el recorrido también conocerás la famosa Cueva del Agua, un espacio natural de aguas transparentes rodeado de naturaleza.\nLa aventura continúa en Media Luna, un parque natural reconocido por sus manantiales de aguas cristalinas y paisajes ideales para relajarse y disfrutar del entorno natural. Posteriormente, visitarás el impresionante Sótano de las Huahuas, una enorme formación natural rodeada de selva y biodiversidad que ofrece vistas espectaculares de la región.\nOtro de los grandes atractivos del viaje es Xilitla y el Jardín Surrealista de Edward James, un lugar donde arquitectura, arte y naturaleza se fusionan en medio de la selva. Escaleras que parecen no tener fin, estructuras surrealistas y vegetación exuberante convierten este espacio en uno de los sitios más fascinantes de México.\nFinalmente, conocerás las Cascadas de Tamasopo, famosas por sus aguas color azul turquesa, caídas naturales y pozas ideales para descansar y disfrutar del clima cálido de la Huasteca.",
      includes: [
        "Transporte en autobús o camioneta de turismo",
        "02 noches de hospedaje en hotel categoría 3 estrellas",
        "Habitación doble o triple según ocupación",
        "Visita a la Cascada de Tamul",
        "Paseo en lancha por el Río Tampaón",
        "Visita a la Cueva del Agua",
        "Visita al Parque Natural Media Luna*",
        "Visita al Sótano de las Huahuas*",
        "Visita al Jardín Surrealista de Edward James en Xilitla*",
        "Recorrido guiado dentro del Jardín Surrealista",
        "Visita a las Cascadas de Tamasopo",
        "Seguro de viajero a bordo de la unidad durante todo el recorrido",
        "Coordinador de viaje en español e inglés durante la experiencia",
      ],
      excludes: [
        "Tickets de acceso a parques y atractivos naturales",
        "Traslados locales en algunos destinos",
        "Actividades opcionales y gastos personales",
        "Propinas para guías locales y coordinadores",
        "Servicios no especificados dentro del itinerario",
        "Suplemento por habitación sencilla o privada",
      ],
      info: [
        "Algunas actividades pueden modificarse o sustituirse debido a condiciones climáticas, seguridad o cierres operativos",
        "La coloración del agua en ríos y cascadas depende de lluvias y fenómenos naturales propios de la región",
        "Se realizarán caminatas prolongadas y recorridos en terrenos naturales irregulares",
        "No se recomienda para menores de 5 años ni personas con movilidad limitada",
        "El viaje terrestre se realiza durante la noche; se recomienda llevar una maleta pequeña con artículos personales",
        "El hospedaje puede asignarse en habitaciones con una o dos camas según disponibilidad",
        "Se recomienda llevar calzado acuático o antiderrapante para actividades en ríos y cascadas",
      ],
      tips:
        "Se recomienda llevar traje de baño, ropa ligera, cambio de ropa, sandalias o zapatos acuáticos, toalla, impermeable y protector solar biodegradable. También es recomendable llevar mochila pequeña, repelente de insectos, hidratación constante, efectivo para accesos y consumo local, así como bolsa impermeable para proteger pertenencias durante las actividades acuáticas.",
    },
    en: {
      summary:
        "Discover one of the most impressive natural regions in Mexico in a three-day adventure surrounded by waterfalls, turquoise rivers, caves, and jungle landscapes. La Huasteca Potosina is a destination recognized for its extraordinary natural wealth and for offering unique scenarios ideal for those seeking adventure, ecotourism, and direct contact with nature.\nThe experience begins exploring some of the most spectacular aquatic landscapes of San Luis Potosí. One of the most impressive moments of the tour is the visit to the Tamul Waterfall, considered one of the largest and most emblematic of the country, with a drop surrounded by natural walls and turquoise waters.\nTo reach this impressive scenery you will take a boat ride along the Tampaón River, navigating between rock formations, tropical vegetation, and crystal clear waters that characterize the Huasteca region. During the tour you will also know the famous Cueva del Agua, a natural space of transparent waters surrounded by nature.\nThe adventure continues in Media Luna, a natural park recognized for its crystal clear water springs and landscapes ideal for relaxing and enjoying the natural environment. Later, you will visit the impressive Sótano de las Huahuas, a huge natural formation surrounded by jungle and biodiversity that offers spectacular views of the region.\nAnother of the great attractions of the trip is Xilitla and the Edward James Surrealist Garden, a place where architecture, art, and nature merge in the middle of the jungle. Stairs that seem to have no end, surreal structures, and exuberant vegetation turn this space into one of the most fascinating sites in Mexico.\nFinally, you will visit the Tamasopo Waterfalls, famous for their turquoise blue waters, natural falls, and pools ideal for resting and enjoying the warm climate of the Huasteca.",
      includes: [
        "Transport in tourist bus or van",
        "02 nights lodging in 3-star hotel category",
        "Double or triple room according to occupancy",
        "Visit to Tamul Waterfall",
        "Boat ride through the Tampaón River",
        "Visit to Cueva del Agua",
        "Visit to Media Luna Natural Park*",
        "Visit to Sótano de las Huahuas*",
        "Visit to Edward James Surrealist Garden in Xilitla*",
        "Guided tour inside the Surrealist Garden",
        "Visit to Tamasopo Waterfalls",
        "Traveler insurance aboard the unit throughout the tour",
        "Trip coordinator in Spanish and English during the experience",
      ],
      excludes: [
        "Access tickets to parks and natural attractions",
        "Local transfers in some destinations",
        "Optional activities and personal expenses",
        "Tips for local guides and coordinators",
        "Services not specified within the itinerary",
        "Supplement for single or private room",
      ],
      info: [
        "Some activities may be modified or replaced due to weather conditions, safety, or operational closures",
        "The coloration of water in rivers and waterfalls depends on rains and natural phenomena inherent to the region",
        "Prolonged walks and tours in irregular natural terrain will be carried out",
        "Not recommended for children under 5 years or people with limited mobility",
        "Terrestrial travel is done at night; it is recommended to carry a small suitcase with personal items",
        "Lodging can be assigned in rooms with one or two beds depending on availability",
        "It is recommended to bring water or non-slip footwear for activities in rivers and waterfalls",
      ],
      tips:
        "It is recommended to bring swimwear, light clothing, change of clothes, sandals or water shoes, towel, raincoat, and biodegradable sunscreen. It is also recommended to bring a small backpack, insect repellent, constant hydration, cash for access and local consumption, as well as a waterproof bag to protect belongings during water activities.",
    },
  },

  "los-tuxtlas-selva-y-acantilados": {
    es: {
      summary:
        "Descubre uno de los paisajes naturales más sorprendentes del estado de Veracruz en una experiencia que combina selva tropical, playas vírgenes, acantilados volcánicos y tradiciones ancestrales en el corazón de la región de Los Tuxtlas.\nEsta aventura te llevará a conocer escenarios únicos donde la naturaleza y la cultura se mezclan entre volcanes, lagunas, selva húmeda y costas impresionantes frente al Golfo de México.\nUno de los momentos más impactantes del recorrido es la visita a Punta Roca Partida, un espectacular enclave natural rodeado de enormes acantilados, prismas basálticos y formaciones volcánicas que crean uno de los paisajes costeros más impresionantes de Veracruz.\nDurante la experiencia realizarás senderismo y un recorrido en lancha para admirar cuevas, formaciones rocosas y playas prácticamente vírgenes que muestran la fuerza natural de esta región protegida.\nLa aventura continúa en San Andrés Tuxtla, una ciudad reconocida por su tradición tabacalera y su ambiente tropical. Aquí conocerás una fábrica de puros donde podrás descubrir el proceso artesanal de elaboración que ha dado fama internacional a esta región veracruzana.\nPosteriormente visitarás Santiago Tuxtla, un destino lleno de historia y cultura donde destacan sus calles coloniales y las famosas cabezas colosales olmecas, consideradas uno de los legados arqueológicos más importantes de Mesoamérica.\nLa experiencia también incluye una visita a la Laguna Encantada, un espacio natural rodeado de vegetación exuberante que ofrece paisajes tranquilos y una atmósfera ideal para conectar con la naturaleza de Los Tuxtlas.",
      includes: [
        "Transporte redondo en camioneta de turismo",
        "01 noche de hospedaje en hotel categoría 3 estrellas",
        "Habitación doble o triple según ocupación",
        "Visita a Playa Costa de Oro",
        "Senderismo y recorrido en lancha en Punta Roca Partida*",
        "Visita a San Andrés Tuxtla",
        "Visita a Santiago Tuxtla",
        "Recorrido en fábrica tradicional de puros",
        "Visita a Laguna Encantada",
        "Seguro de viajero a bordo de la unidad durante todo el recorrido",
        "Coordinador de viaje en español e inglés durante la experiencia",
      ],
      excludes: [
        "Actividades adicionales en destino",
        "Propinas para guías locales y coordinadores",
        "Gastos personales y alimentos no especificados",
        "Servicios adicionales fuera del itinerario",
        "Suplemento por habitación sencilla o privada",
      ],
      info: [
        "Las actividades en lancha y senderismo están sujetas a condiciones climáticas y operativas",
        "En caso de cambios por clima o seguridad, algunas actividades podrán sustituirse por recorridos alternativos en Catemaco",
        "Se recomienda llevar únicamente pertenencias indispensables durante las actividades",
        "El viaje no se recomienda para menores de 10 años",
        "Para actividades de aventura será necesario firmar carta responsiva",
        "El hospedaje puede asignarse en habitaciones con una o dos camas según disponibilidad",
        "El viaje terrestre se realiza durante la noche; se recomienda llevar artículos personales y ropa cómoda",
      ],
      tips:
        "Se recomienda llevar ropa ligera, calzado antiderrapante, traje de baño, gorra o sombrero, impermeable y protector solar biodegradable. También es recomendable llevar repelente de insectos, hidratación constante, mochila pequeña para caminatas, bolsa impermeable para proteger pertenencias y efectivo para gastos adicionales o consumo local.",
    },
    en: {
      summary:
        "Discover one of the most surprising natural landscapes in the state of Veracruz in an experience that combines tropical jungle, virgin beaches, volcanic cliffs, and ancestral traditions in the heart of the Los Tuxtlas region.\nThis adventure will take you to know unique scenarios where nature and culture mix between volcanoes, lagoons, humid jungle, and impressive coasts facing the Gulf of Mexico.\nOne of the most impactful moments of the tour is the visit to Punta Roca Partida, a spectacular natural enclave surrounded by huge cliffs, basaltic prisms, and volcanic formations that create one of the most impressive coastal landscapes of Veracruz.\nDuring the experience you will do hiking and a boat tour to admire caves, rock formations, and practically virgin beaches that show the natural force of this protected region.\nThe adventure continues in San Andrés Tuxtla, a city recognized for its tobacco tradition and tropical atmosphere. Here you will know a cigar factory where you can discover the artisanal manufacturing process that has given international fame to this Veracruz region.\nLater you will visit Santiago Tuxtla, a destination full of history and culture where its colonial streets and famous Olmec colossal heads stand out, considered one of the most important archaeological legacies of Mesoamerica.\nThe experience also includes a visit to the Enchanted Lagoon, a natural space surrounded by exuberant vegetation that offers quiet landscapes and an ideal atmosphere to connect with the nature of Los Tuxtlas.",
      includes: [
        "Round-trip transport in tourist van",
        "01 night lodging in 3-star category hotel",
        "Double or triple room according to occupancy",
        "Visit to Playa Costa de Oro",
        "Hiking and boat tour in Punta Roca Partida*",
        "Visit to San Andrés Tuxtla",
        "Visit to Santiago Tuxtla",
        "Tour in traditional cigar factory",
        "Visit to Enchanted Lagoon",
        "Traveler insurance aboard the unit throughout the tour",
        "Trip coordinator in Spanish and English during the experience",
      ],
      excludes: [
        "Additional activities at destination",
        "Tips for local guides and coordinators",
        "Personal expenses and unspecified food",
        "Additional services outside the itinerary",
        "Supplement for single or private room",
      ],
      info: [
        "Boat and hiking activities are subject to weather and operational conditions",
        "In case of changes due to weather or safety, some activities may be replaced by alternative tours in Catemaco",
        "It is recommended to carry only essential belongings during activities",
        "The trip is not recommended for children under 10 years old",
        "For adventure activities it will be necessary to sign a liability release letter",
        "Lodging can be assigned in rooms with one or two beds depending on availability",
        "Terrestrial travel is done at night; it is recommended to carry personal items and comfortable clothing",
      ],
      tips:
        "It is recommended to bring light clothing, non-slip footwear, swimsuit, cap or hat, raincoat, and biodegradable sunscreen. It is also recommended to bring insect repellent, constant hydration, small backpack for walks, waterproof bag to protect belongings, and cash for additional expenses or local consumption.",
    },
  },

  "tlaxcala-ruta-de-la-miel-y-girasoles": {
    es: {
      summary:
        "Vive una experiencia sensorial en el corazón de Tlaxcala, donde la naturaleza, la cultura y la conciencia se unen en un solo recorrido. Iniciarás con la visita al Santuario de la Abeja, un espacio dedicado al mundo de las abejas, donde podrás observar el funcionamiento de la colmena, participar en una meditación y conocer el proceso de la miel como símbolo de transformación y equilibrio natural.\nPosteriormente, te adentrarás en el Campo de Girasoles, un entorno lleno de color con múltiples espacios fotográficos, actividades creativas, talleres de cultivo, música en vivo y áreas gastronómicas. Es un lugar diseñado para conectar con la naturaleza y disfrutar de un ambiente relajado y visualmente atractivo.\nEl recorrido finaliza en el centro histórico de Tlaxcala, donde podrás conocer su riqueza cultural a través de sitios emblemáticos como el Palacio de Gobierno de Tlaxcala, las Escalinatas de los Héroes y la Basílica de Nuestra Señora de Ocotlán.",
      includes: [
        "Acceso y recorrido en Santuario de la Abeja",
        "Uso de equipo de apicultor para ingreso al santuario",
        "Meditación breve con abejas",
        "Degustación de miel y derivados",
        "Visita a Campo de Girasoles (entrada no incluida)",
        "Recorrido por el centro de Tlaxcala",
        "Coordinador de viaje en español e inglés",
        "Seguro de viajero durante la actividad",
      ],
      excludes: [
        "Acceso al Campo de Girasoles (aprox. $150 adultos / $80 menores de 1.40 m hasta 10 años; llevar efectivo)",
        "Alimentos y bebidas",
        "Actividades y talleres no especificados",
        "Propinas para guías y coordinadores",
        "Servicios adicionales no mencionados",
      ],
      tips:
        "Se recomienda llevar ropa cómoda, calzado adecuado para caminar, protector solar, agua, cámara fotográfica y dinero en efectivo para accesos, alimentos y actividades opcionales.",
    },
    en: {
      summary:
        "Live a sensory experience in the heart of Tlaxcala, where nature, culture, and consciousness unite in a single tour. You will start with a visit to the Bee Sanctuary, a space dedicated to the world of bees, where you can observe the functioning of the hive, participate in a meditation, and learn about the honey process as a symbol of transformation and natural balance.\nLater, you will delve into the Sunflower Field, an environment full of color with multiple photographic spaces, creative activities, cultivation workshops, live music, and gastronomic areas. It is a place designed to connect with nature and enjoy a relaxed and visually attractive environment.\nThe tour ends in the historic center of Tlaxcala, where you can learn about its cultural wealth through emblematic sites such as the Government Palace of Tlaxcala, the Stairs of the Heroes, and the Basilica of Our Lady of Ocotlán.",
      includes: [
        "Access and tour in Bee Sanctuary",
        "Use of beekeeper equipment for sanctuary entry",
        "Brief meditation with bees",
        "Tasting of honey and derivatives",
        "Visit to Sunflower Field (admission not included)",
        "Tour through the center of Tlaxcala",
        "Trip coordinator in Spanish and English",
        "Traveler insurance during the activity",
      ],
      excludes: [
        "Access to Sunflower Field (approx. $150 adults / $80 children under 1.40 m up to 10 years; bring cash)",
        "Food and beverages",
        "Activities and workshops not specified",
        "Tips for guides and coordinators",
        "Additional services not mentioned",
      ],
      tips:
        "It is recommended to bring comfortable clothes, suitable footwear for walking, sunscreen, water, camera, and cash for access, food, and optional activities.",
    },
  },

  "atlixco-y-cholula-villa-iluminada": {
    es: {
      summary:
        "Vive la magia navideña en Atlixco, un destino que cada año se transforma con su tradicional Villa Iluminada. Durante la temporada, sus calles y edificios se llenan de luces, figuras navideñas y decoraciones que crean un ambiente festivo único en México.\nAdemás, podrás recorrer Cholula, famoso por su riqueza histórica, su ambiente cultural y sus impresionantes vistas a la gran pirámide.\nEl recorrido también incluye una experiencia en una cervecería artesanal, donde conocerás el proceso de elaboración de la cerveza y degustarás diferentes estilos, en un ambiente local y tradicional.",
      includes: [
        "Visita a Cholula",
        "Visita a Atlixco",
        "Tiempo libre para disfrutar la Villa Iluminada en el centro de Atlixco",
        "Recorrido y explicación en cervecería artesanal",
        "Degustación de 5 cervezas artesanales (solo mayores de edad)",
        "Opción de snack y bebida para menores de edad",
        "Coordinador de viaje en español e inglés",
        "Seguro de viajero durante la actividad",
      ],
      excludes: [
        "Propinas para guías locales",
        "Acceso a Brilla Fest (evento privado)",
        "Servicios adicionales no especificados",
      ],
      tips:
        "• Es temporada alta, por lo que puede haber tiempos de espera en accesos y traslados\n• El acceso al centro de Atlixco puede realizarse en transporte local con costo adicional ($8 a $10 aprox. o taxi compartido)\n• Villa Iluminada es un evento público, mientras que Brilla Fest es un evento privado con costo extra\nSe recomienda llevar ropa abrigadora, calzado cómodo, dinero en efectivo para transportes locales, cámara fotográfica y disposición para disfrutar de un ambiente concurrido pero festivo.",
    },
    en: {
      summary:
        "Live the Christmas magic in Atlixco, a destination that transforms every year with its traditional Illuminated Village. During the season, its streets and buildings are filled with lights, Christmas figures, and decorations that create a unique festive atmosphere in Mexico.\nIn addition, you can tour Cholula, famous for its historical wealth, its cultural environment, and its impressive views of the great pyramid.\nThe tour also includes an experience in an artisanal brewery, where you will learn about the beer brewing process and taste different styles, in a local and traditional environment.",
      includes: [
        "Visit to Cholula",
        "Visit to Atlixco",
        "Free time to enjoy the Illuminated Village in the center of Atlixco",
        "Tour and explanation in artisanal brewery",
        "Tasting of 5 artisanal beers (adults only)",
        "Option of snack and drink for minors",
        "Trip coordinator in Spanish and English",
        "Traveler insurance during the activity",
      ],
      excludes: [
        "Tips for local guides",
        "Access to Brilla Fest (private event)",
        "Additional services not specified",
      ],
      tips:
        "• It is high season, so there may be waiting times at accesses and transfers\n• Access to the center of Atlixco can be done in local transport with additional cost ($8 to $10 approx. or shared taxi)\n• Illuminated Village is a public event, while Brilla Fest is a private event with extra cost\nIt is recommended to bring warm clothing, comfortable footwear, cash for local transport, camera, and a willingness to enjoy a crowded but festive environment.",
    },
  },

  "tecolutla-y-papantla-playa-y-cultura-totonaca": {
    es: {
      summary:
        "Vive un recorrido único que combina playa, naturaleza y cultura en la hermosa costa del estado de Veracruz. Esta experiencia te lleva a disfrutar de la tranquilidad del mar y la riqueza cultural de uno de los pueblos mágicos más representativos de la región.\nLa primera parada es la Playa de Tecolutla, un destino caracterizado por su ambiente relajado, su vegetación costera y su oleaje suave. Aquí podrás disfrutar del amanecer sobre el mar, caminar por la arena, descansar bajo una palapa o degustar la gastronomía local, como mariscos frescos, tostadas de ceviche, ostiones y bebidas típicas de la región.\nTecolutla es un destino ideal para desconectarse del ritmo de la ciudad y disfrutar de un entorno natural rodeado de paisajes costeros y biodiversidad.\nPosteriormente, el recorrido continúa hacia Papantla, un Pueblo Mágico reconocido por su profunda herencia totonaca y su identidad cultural única. Sus calles, su arquitectura tradicional y su ambiente pintoresco ofrecen una experiencia auténtica del Veracruz ancestral.\nUno de los momentos más representativos de la visita es la posibilidad de conocer la tradición del ritual de los Voladores de Papantla, una ceremonia reconocida a nivel internacional que representa la conexión espiritual con la naturaleza y la cosmovisión totonaca. Además, el pueblo es famoso por su producción de vainilla, conocida como uno de los aromas más emblemáticos de la región.",
      includes: [
        "Visita a la playa de Playa de Tecolutla",
        "Tiempo libre para disfrutar la playa o realizar actividades opcionales",
        "Visita al Pueblo Mágico de Papantla",
        "Seguro de viajero a bordo de la unidad durante todo el recorrido",
        "Coordinador de viaje en español e inglés durante la experiencia",
      ],
      excludes: [
        "Renta de palapas en playa y actividades adicionales en destino",
        "Propinas para guías locales y coordinadores de viaje",
        "Servicios no especificados dentro del itinerario",
      ],
      info: [
        "La playa se encuentra en mar abierto, por lo que se recomienda precaución al ingresar al agua",
        "No hay resguardo de pertenencias en playa o espacios públicos, se sugiere estar al pendiente de objetos personales",
        "La llegada a Tecolutla es aproximadamente a las 06:00 hrs para apreciar el amanecer",
        "Se recomienda llevar alimentos ligeros (lunch), ya que los servicios de restaurante inician alrededor de las 08:00 hrs",
        "El viaje se realiza durante la noche y no incluye hospedaje",
        "Se sugiere llevar una maleta pequeña con ropa de cambio y artículos de aseo personal",
      ],
      tips:
        "Se recomienda llevar traje de baño, ropa ligera, cambio de ropa, sandalias, toalla, protector solar, gorra o sombrero, repelente de insectos, hidratación y dinero en efectivo. También es importante llevar alimentos ligeros para el amanecer en playa y una bolsa impermeable para proteger pertenencias personales.",
    },
    en: {
      summary:
        "Live a unique tour that combines beach, nature, and culture on the beautiful coast of the state of Veracruz. This experience takes you to enjoy the tranquility of the sea and the cultural wealth of one of the most representative magical towns in the region.\nThe first stop is Tecolutla Beach, a destination characterized by its relaxed atmosphere, coastal vegetation, and gentle waves. Here you can enjoy the sunrise over the sea, walk on the sand, rest under a palapa, or taste local gastronomy, such as fresh seafood, ceviche tostadas, oysters, and typical drinks of the region.\nTecolutla is an ideal destination to disconnect from the city rhythm and enjoy a natural environment surrounded by coastal landscapes and biodiversity.\nLater, the tour continues towards Papantla, a Magical Town recognized for its deep Totonac heritage and unique cultural identity. Its streets, traditional architecture, and picturesque atmosphere offer an authentic experience of ancestral Veracruz.\nOne of the most representative moments of the visit is the possibility of knowing the tradition of the Papantla Flyers ritual, an internationally recognized ceremony that represents spiritual connection with nature and the Totonac worldview. In addition, the town is famous for its vanilla production, known as one of the most emblematic aromas of the region.",
      includes: [
        "Visit to Tecolutla Beach",
        "Free time to enjoy the beach or do optional activities",
        "Visit to the Magical Town of Papantla",
        "Traveler insurance aboard the unit throughout the tour",
        "Trip coordinator in Spanish and English during the experience",
      ],
      excludes: [
        "Rental of palapas on the beach and additional activities at destination",
        "Tips for local guides and travel coordinators",
        "Services not specified within the itinerary",
      ],
      info: [
        "The beach is in open sea, so caution is recommended when entering the water",
        "There is no storage for belongings on the beach or public spaces, it is suggested to keep an eye on personal objects",
        "Arrival in Tecolutla is approximately at 06:00 hrs to appreciate the sunrise",
        "It is recommended to bring light food (lunch), as restaurant services start around 08:00 hrs",
        "The trip is made at night and does not include lodging",
        "It is suggested to bring a small suitcase with change of clothes and personal hygiene items",
      ],
      tips:
        "It is recommended to bring swimwear, light clothing, change of clothes, sandals, towel, sunscreen, cap or hat, insect repellent, hydration, and cash. It is also important to bring light food for the sunrise on the beach and a waterproof bag to protect personal belongings.",
    },
  },

  "ruta-maya-8-dias": {
    es: {
      summary:
        "Descubre lo mejor del sureste mexicano en una aventura de ocho días llena de historia, playas paradisíacas, ciudades coloniales y escenarios naturales impresionantes. Este recorrido te llevará a conocer algunos de los destinos más emblemáticos de México mientras exploras el legado de la cultura maya y disfrutas del encanto del Caribe Mexicano.\nLa experiencia inicia en Cancún, puerta de entrada al Caribe, para posteriormente recorrer ciudades históricas, zonas arqueológicas y destinos rodeados de naturaleza tropical. A lo largo del viaje conocerás lugares icónicos como Mérida, Campeche, Bacalar, Chetumal y Playa del Carmen, combinando cultura, tradición y paisajes espectaculares en una sola ruta.\nUno de los momentos más impresionantes del recorrido es la visita a Chichén Itzá, considerada una de las Nuevas Siete Maravillas del Mundo Moderno y una de las zonas arqueológicas más importantes del planeta. Sus templos y estructuras monumentales muestran la grandeza de la civilización maya y su extraordinario conocimiento arquitectónico y astronómico.\nTambién descubrirás Uxmal y Edzná, antiguas ciudades mayas rodeadas de selva y naturaleza, donde las construcciones de piedra y la atmósfera ancestral crean escenarios únicos llenos de historia y misterio.\nLa aventura continúa en Mérida, famosa por su arquitectura colonial, plazas históricas y gastronomía yucateca, así como en Campeche, ciudad amurallada declarada Patrimonio Mundial por la UNESCO gracias a su riqueza histórica y sus coloridas calles frente al Golfo de México.\nMás adelante conocerás Bacalar, hogar de la famosa Laguna de los Siete Colores, un destino reconocido por sus impresionantes tonalidades turquesa y ambiente relajado, ideal para disfrutar del Caribe mexicano desde una perspectiva natural y tranquila.\nFinalmente, el recorrido culmina en Playa del Carmen y Cancún, destinos emblemáticos del Caribe donde podrás disfrutar de playas de arena blanca, mar cristalino y el ambiente tropical característico de Quintana Roo.",
      includes: [
        "Vuelo redondo Ciudad de México – Cancún – Ciudad de México en clase turista",
        "Equipaje de mano y equipaje documentado incluido",
        "Transportación terrestre durante todo el recorrido",
        "07 noches de hospedaje en hoteles categoría turista",
        "Habitación doble o triple según ocupación",
        "01 noche de hospedaje en Cancún",
        "01 noche de hospedaje en Mérida",
        "01 noche de hospedaje en Campeche",
        "01 noche de hospedaje en Xpujil",
        "01 noche de hospedaje en Chetumal",
        "02 noches de hospedaje en Playa del Carmen",
        "06 desayunos incluidos en hotel",
        "Entradas a las zonas arqueológicas de Chichén Itzá, Uxmal, Edzná y Chacchoben",
        "Recorridos panorámicos y visitas de ciudad en Mérida, Campeche, Bacalar y Chetumal",
        "Chofer-guía durante el recorrido terrestre",
        "Impuestos aéreos y gastos de gestión",
      ],
      excludes: [
        "Suplemento de zonas arqueológicas para extranjeros",
        "Asignación de asientos en vuelos",
        "Seguro de viaje opcional",
        "Alimentos y bebidas no especificados",
        "Gastos personales y actividades opcionales",
        "Suplemento por habitación sencilla",
      ],
      info: [
        "Todos los vuelos y tarifas están sujetos a disponibilidad y confirmación al momento de reservar",
        "Una vez confirmada la reservación no aplican cancelaciones, modificaciones ni reembolsos",
        "Durante temporada de lluvias puede haber presencia de sargazo y cambios climáticos propios de la región",
        "Es indispensable viajar con identificación oficial vigente; menores de edad deberán presentar documentación correspondiente",
        "El hospedaje puede asignarse en habitaciones con una o dos camas según disponibilidad",
        "Los horarios de check-in y check-out pueden variar según el hotel asignado",
        "Algunas visitas panorámicas pueden ajustarse dependiendo del tiempo operativo del recorrido",
      ],
      tips:
        "Se recomienda llevar ropa ligera, traje de baño, calzado cómodo, gorra o sombrero, lentes de sol y protector solar biodegradable. También es recomendable llevar repelente de insectos, hidratación constante, efectivo para compras locales y actividades opcionales, así como cámara fotográfica para capturar los paisajes arqueológicos y caribeños del recorrido.",
    },
    en: {
      summary:
        "Discover the best of Mexican southeast in an eight-day adventure full of history, paradise beaches, colonial cities, and impressive natural scenarios. This tour will take you to know some of the most emblematic destinations of Mexico while you explore the legacy of the Mayan culture and enjoy the charm of the Mexican Caribbean.\nThe experience begins in Cancun, gateway to the Caribbean, to later tour historic cities, archaeological zones, and destinations surrounded by tropical nature. Throughout the trip you will know iconic places like Merida, Campeche, Bacalar, Chetumal, and Playa del Carmen, combining culture, tradition, and spectacular landscapes in a single route.\nOne of the most impressive moments of the tour is the visit to Chichen Itza, considered one of the New Seven Wonders of the Modern World and one of the most important archaeological zones on the planet. Its temples and monumental structures show the greatness of the Mayan civilization and its extraordinary architectural and astronomical knowledge.\nYou will also discover Uxmal and Edzná, ancient Mayan cities surrounded by jungle and nature, where stone constructions and ancestral atmosphere create unique scenarios full of history and mystery.\nThe adventure continues in Merida, famous for its colonial architecture, historic squares, and Yucatecan gastronomy, as well as in Campeche, a walled city declared a World Heritage Site by UNESCO thanks to its historical wealth and colorful streets facing the Gulf of Mexico.\nLater you will know Bacalar, home of the famous Seven Colors Lagoon, a destination recognized for its impressive turquoise tones and relaxed atmosphere, ideal to enjoy the Mexican Caribbean from a natural and tranquil perspective.\nFinally, the tour culminates in Playa del Carmen and Cancun, emblematic destinations of the Caribbean where you can enjoy white sand beaches, crystal clear sea, and the typical tropical atmosphere of Quintana Roo.",
      includes: [
        "Round-trip flight Mexico City – Cancun – Mexico City in tourist class",
        "Hand luggage and checked luggage included",
        "Ground transportation throughout the tour",
        "07 nights lodging in tourist category hotels",
        "Double or triple room according to occupancy",
        "01 night lodging in Cancun",
        "01 night lodging in Merida",
        "01 night lodging in Campeche",
        "01 night lodging in Xpujil",
        "01 night lodging in Chetumal",
        "02 nights lodging in Playa del Carmen",
        "06 breakfasts included in hotel",
        "Tickets to the archaeological zones of Chichen Itza, Uxmal, Edzná, and Chacchoben",
        "Panoramic tours and city visits in Merida, Campeche, Bacalar, and Chetumal",
        "Driver-guide during the ground tour",
        "Air taxes and management expenses",
      ],
      excludes: [
        "Archaeological zone supplement for foreigners",
        "Seat assignment on flights",
        "Optional travel insurance",
        "Unspecified food and beverages",
        "Personal expenses and optional activities",
        "Supplement for single room",
      ],
      info: [
        "All flights and rates are subject to availability and confirmation at the time of booking",
        "Once the reservation is confirmed, cancellations, modifications, or refunds do not apply",
        "During the rainy season there may be presence of sargassum and climatic changes typical of the region",
        "It is essential to travel with current official identification; minors must present corresponding documentation",
        "Lodging can be assigned in rooms with one or two beds depending on availability",
        "Check-in and check-out times may vary depending on the assigned hotel",
        "Some panoramic visits may be adjusted depending on the operational time of the tour",
      ],
      tips:
        "It is recommended to bring light clothing, swimsuit, comfortable footwear, cap or hat, sunglasses, and biodegradable sunscreen. It is also recommended to bring insect repellent, constant hydration, cash for local purchases and optional activities, as well as a camera to capture the archaeological and Caribbean landscapes of the tour.",
    },
  },

  "santuario-de-las-luciernagas-y-tlaxcala": {
    es: {
      summary:
        "Vive una experiencia mágica en medio de los bosques de Tlaxcala y descubre uno de los espectáculos naturales más impresionantes de la temporada. Durante esta aventura nocturna podrás admirar el brillo natural de miles de luciérnagas que iluminan el bosque en un fenómeno único que ocurre solamente durante la época de lluvias.\nLa experiencia comienza en el centro de Tlaxcala, donde recorrerás sus calles llenas de historia, arquitectura colonial y tradición. Durante la visita guiada conocerás algunos de los sitios más representativos de la capital tlaxcalteca, como plazas, edificios históricos y espacios culturales que reflejan la esencia de uno de los estados con mayor riqueza histórica de México.\nAl caer la tarde, el recorrido continúa hacia el Santuario de las Luciérnagas, ubicado entre bosques rodeados de naturaleza y aire puro. Aquí iniciarás una caminata guiada en medio del bosque mientras poco a poco comienza a aparecer el espectáculo natural de las luciérnagas iluminando el entorno con destellos verdes y amarillos.\nEste fenómeno ocurre durante el ritual de apareamiento de estos pequeños insectos y solo puede apreciarse durante unas pocas semanas al año, convirtiéndolo en una experiencia verdaderamente especial y difícil de olvidar.\nEl ambiente de oscuridad, silencio y contacto directo con la naturaleza crea una experiencia única que permite desconectarse completamente de la rutina y disfrutar de uno de los eventos naturales más fascinantes de México.",
      includes: [
        "Transporte redondo en autobús o camioneta de turismo",
        "Visita al Centro Histórico de Tlaxcala",
        "Recorrido guiado por los principales atractivos del centro de la ciudad",
        "Visita al Santuario de las Luciérnagas en Tlaxcala",
        "Guía local durante el recorrido en bosque",
        "Seguro de viajero a bordo de la unidad durante todo el recorrido",
        "Coordinador de viaje en español e inglés durante la experiencia",
      ],
      excludes: [
        "Ticket de acceso al Santuario de las Luciérnagas",
        "Alimentos, bebidas o actividades adicionales",
        "Propinas para guías locales y coordinadores",
        "Servicios no especificados dentro del itinerario",
      ],
      info: [
        "Es indispensable llevar impermeable debido a la temporada de lluvias",
        "La experiencia incluye caminatas en bosque y terrenos irregulares; se recomienda buena condición física",
        "No se recomienda para niños menores de 10 años",
        "El avistamiento de luciérnagas depende completamente de factores naturales como lluvia, temperatura, humedad y fases lunares",
        "Durante el recorrido se debe mantener silencio y seguir las indicaciones del guía para proteger el ecosistema",
        "La actividad se realiza en condiciones de poca iluminación dentro del bosque",
        "Se recomienda llevar ropa abrigadora y calzado antiderrapante",
      ],
      tips:
        "Se recomienda llevar ropa abrigadora e impermeable, botas o tenis antiderrapantes, lámpara con luz tenue, hidratación y snacks ligeros. También es recomendable llevar efectivo para accesos y consumo local, evitar el uso de flash durante el recorrido y mantener silencio para disfrutar plenamente de la experiencia natural.",
    },
    en: {
      summary:
        "Live a magical experience in the middle of the forests of Tlaxcala and discover one of the most impressive natural spectacles of the season. During this nocturnal adventure you can admire the natural glow of thousands of fireflies that illuminate the forest in a unique phenomenon that occurs only during the rainy season.\nThe experience begins in the center of Tlaxcala, where you will tour its streets full of history, colonial architecture, and tradition. During the guided visit you will know some of the most representative sites of the Tlaxcalan capital, such as squares, historic buildings, and cultural spaces that reflect the essence of one of the states with the greatest historical wealth in Mexico.\nAs evening falls, the tour continues towards the Firefly Sanctuary, located among forests surrounded by nature and pure air. Here you will start a guided walk in the middle of the forest while little by little the natural spectacle of the fireflies illuminating the environment with green and yellow flashes begins to appear.\nThis phenomenon occurs during the mating ritual of these small insects and can only be appreciated for a few weeks a year, making it a truly special and unforgettable experience.\nThe atmosphere of darkness, silence, and direct contact with nature creates a unique experience that allows you to completely disconnect from the routine and enjoy one of the most fascinating natural events in Mexico.",
      includes: [
        "Round-trip transport in tourist bus or van",
        "Visit to the Historic Center of Tlaxcala",
        "Guided tour of the main attractions of the city center",
        "Visit to the Firefly Sanctuary in Tlaxcala",
        "Local guide during the forest tour",
        "Traveler insurance aboard the unit throughout the tour",
        "Trip coordinator in Spanish and English during the experience",
      ],
      excludes: [
        "Access ticket to the Firefly Sanctuary",
        "Food, beverages, or additional activities",
        "Tips for local guides and coordinators",
        "Services not specified within the itinerary",
      ],
      info: [
        "It is essential to bring a raincoat due to the rainy season",
        "The experience includes walks in forest and irregular terrains; good physical condition is recommended",
        "Not recommended for children under 10 years old",
        "Firefly sightings depend entirely on natural factors such as rain, temperature, humidity, and lunar phases",
        "During the tour, silence must be maintained and guide instructions followed to protect the ecosystem",
        "The activity is carried out in low-light conditions inside the forest",
        "It is recommended to bring warm clothing and non-slip footwear",
      ],
      tips:
        "It is recommended to bring warm and waterproof clothing, non-slip boots or sneakers, a dim-light lamp, hydration, and light snacks. It is also recommended to bring cash for access and local consumption, avoid using flash during the tour, and maintain silence to fully enjoy the natural experience.",
    },
  },

  "santuario-monarca-y-valle-de-bravo": {
    es: {
      summary:
        "Vive una experiencia extraordinaria en contacto con uno de los fenómenos naturales más impresionantes del mundo. Cada año, millones de mariposas monarca recorren miles de kilómetros desde Canadá para refugiarse en los bosques templados del centro de México, creando un espectáculo natural que transforma los árboles y montañas en paisajes llenos de vida y color.\nLa aventura comienza en el Santuario de la Mariposa Monarca, rodeado de bosques de oyamel y aire puro de montaña. Durante el recorrido caminarás por senderos naturales hasta llegar a las zonas de concentración de mariposas, donde podrás observar cómo descansan sobre los árboles o vuelan alrededor del bosque dependiendo de las condiciones climáticas del día.\nAdemás de admirar este fenómeno migratorio único, tendrás la oportunidad de aprender más sobre el ciclo de vida de la mariposa monarca, la importancia de los ecosistemas forestales y los esfuerzos de conservación ambiental que permiten proteger esta especie y su hábitat natural.\nPosteriormente, el recorrido continúa hacia Valle de Bravo, uno de los Pueblos Mágicos más visitados de México. Sus calles empedradas, arquitectura colonial, balcones llenos de flores y el emblemático lago crean un ambiente perfecto para disfrutar de una tarde relajante rodeada de paisajes naturales y tradición mexicana.\nEn Valle de Bravo podrás recorrer el centro histórico, disfrutar de la gastronomía local, admirar el lago y descubrir por qué este destino es considerado uno de los rincones más encantadores del Estado de México.",
      includes: [
        "Transporte redondo en autobús o camioneta de turismo",
        "Visita al Santuario de la Mariposa Monarca",
        "Recorrido por senderos naturales dentro del santuario",
        "Visita al centro de Valle de Bravo, Pueblo Mágico",
        "Seguro de viajero a bordo de la unidad durante todo el recorrido",
        "Coordinador de viaje en español durante la experiencia",
      ],
      excludes: [
        "Ticket de acceso al Santuario de la Mariposa Monarca",
        "Transporte local hacia el embarcadero de Valle de Bravo",
        "Alimentos, bebidas o actividades opcionales",
        "Gastos personales y servicios no especificados",
      ],
      info: [
        "El avistamiento de mariposas depende de factores climáticos y condiciones naturales de la temporada",
        "Los recorridos dentro del santuario incluyen caminatas en senderos de montaña y zonas inclinadas",
        "El tiempo de senderismo puede variar dependiendo del santuario y la ubicación de las mariposas",
        "Se recomienda llevar snacks ligeros e hidratación durante el recorrido",
        "No se recomienda para personas con problemas de movilidad, presión alta o condición física limitada",
        "El terreno puede incluir caminos de terracería, pendientes y superficies irregulares",
        "Las condiciones naturales del fenómeno migratorio no dependen de operadores turísticos ni generan compensaciones por visibilidad limitada",
      ],
      tips:
        "Se recomienda llevar ropa cómoda y abrigadora, calzado antiderrapante o para senderismo, gorra o sombrero, protector solar, hidratación y snacks ligeros para el camino. También es recomendable llevar cámara fotográfica, efectivo para accesos y consumo local, así como una chamarra ligera debido a las bajas temperaturas en zonas montañosas.",
    },
    en: {
      summary:
        "Live an extraordinary experience in contact with one of the most impressive natural phenomena in the world. Every year, millions of monarch butterflies travel thousands of kilometers from Canada to take refuge in the temperate forests of central Mexico, creating a natural spectacle that transforms trees and mountains into landscapes full of life and color.\nThe adventure begins at the Monarch Butterfly Sanctuary, surrounded by oyamel forests and pure mountain air. During the tour you will walk along natural trails until you reach the butterfly concentration areas, where you can observe how they rest on the trees or fly around the forest depending on the weather conditions of the day.\nIn addition to admiring this unique migratory phenomenon, you will have the opportunity to learn more about the life cycle of the monarch butterfly, the importance of forest ecosystems, and environmental conservation efforts that protect this species and its natural habitat.\nLater, the tour continues towards Valle de Bravo, one of the most visited Magical Towns in Mexico. Its cobblestone streets, colonial architecture, balconies full of flowers, and the emblematic lake create a perfect environment to enjoy a relaxing afternoon surrounded by natural landscapes and Mexican tradition.\nIn Valle de Bravo you can tour the historic center, enjoy local gastronomy, admire the lake, and discover why this destination is considered one of the most charming corners of the State of Mexico.",
      includes: [
        "Round-trip transport in tourist bus or van",
        "Visit to the Monarch Butterfly Sanctuary",
        "Tour through natural trails inside the sanctuary",
        "Visit to the center of Valle de Bravo, Magical Town",
        "Traveler insurance aboard the unit throughout the tour",
        "Trip coordinator in Spanish during the experience",
      ],
      excludes: [
        "Access ticket to the Monarch Butterfly Sanctuary",
        "Local transport to the Valle de Bravo pier",
        "Food, beverages, or optional activities",
        "Personal expenses and unspecified services",
      ],
      info: [
        "Butterfly sightings depend on climatic factors and natural conditions of the season",
        "Tours inside the sanctuary include walks on mountain trails and inclined areas",
        "Hiking time may vary depending on the sanctuary and the location of the butterflies",
        "It is recommended to bring light snacks and hydration during the tour",
        "Not recommended for people with mobility issues, high blood pressure, or limited physical condition",
        "Terrain may include dirt roads, slopes, and irregular surfaces",
        "Natural conditions of the migratory phenomenon do not depend on tour operators or generate compensations for limited visibility",
      ],
      tips:
        "It is recommended to bring comfortable and warm clothing, non-slip or hiking footwear, cap or hat, sunscreen, hydration, and light snacks for the road. It is also recommended to bring a camera, cash for access and local consumption, as well as a light jacket due to low temperatures in mountainous areas.",
    },
  },

  "tortugas-marinas-tecolutla-y-papantla": {
    es: {
      summary:
        "Descubre una experiencia inolvidable en la costa veracruzana donde la naturaleza, el mar y la cultura se unen en un solo recorrido. Este viaje está diseñado para quienes buscan conectar con el entorno natural mientras disfrutan de uno de los destinos más representativos del estado de Veracruz.\nLa aventura comienza en Tecolutla al amanecer, cuando el sonido de las olas y la tranquilidad de la playa crean el escenario perfecto para iniciar el día. Posteriormente, visitarás un campamento de conservación donde conocerás más sobre la importancia de proteger a las tortugas marinas y participarás en la liberación de pequeñas tortugas recién nacidas hacia el mar, una actividad llena de emoción y conciencia ambiental.\nDurante esta experiencia, se comparte información sobre los programas de conservación y protección ecológica que realizan organizaciones dedicadas desde hace décadas al cuidado de estas especies y al equilibrio ambiental de la región. La actividad busca fomentar el turismo responsable y generar conciencia sobre la importancia de preservar los ecosistemas marinos.\nDespués de esta actividad, disfrutarás de tiempo libre en la playa de Tecolutla para descansar, caminar junto al mar, degustar la gastronomía típica veracruzana o realizar actividades opcionales como recorridos por manglares y paseos locales.\nMás tarde, el recorrido continúa hacia Papantla, Pueblo Mágico reconocido por su riqueza cultural, su herencia totonaca y su tradición ligada a la vainilla. Sus calles, plazas y arquitectura tradicional ofrecen un ambiente auténtico lleno de historia y cultura veracruzana.",
      includes: [
        "Transporte redondo en autobús o camioneta de turismo",
        "Visita a la playa de Tecolutla",
        "Participación en liberación de una tortuga marina por persona*",
        "Charla de educación ambiental y conservación de especies marinas",
        "Tiempo libre para disfrutar de la playa y actividades opcionales",
        "Visita al Pueblo Mágico de Papantla",
        "Seguro de viajero a bordo de la unidad durante todo el recorrido",
        "Coordinador de viaje en español e inglés durante la experiencia",
      ],
      excludes: [
        "Paseos en lancha, actividades opcionales o consumo personal",
        "Propinas para coordinadores o personal local",
        "Servicios no especificados dentro del itinerario",
      ],
      info: [
        "La actividad de liberación de tortugas está sujeta a temporada de nacimientos y condiciones naturales*",
        "Se realizan caminatas prolongadas durante algunas actividades del recorrido",
        "La playa se encuentra en mar abierto, por lo que se recomienda precaución al ingresar al agua",
        "Los espacios visitados no cuentan con resguardo de pertenencias; se recomienda cuidar objetos personales",
        "La llegada a Tecolutla es aproximadamente a las 06:00 hrs para disfrutar el amanecer",
        "Se recomienda llevar alimentos ligeros (lunch), ya que el tiempo destinado al desayuno es más tarde",
      ],
      tips:
        "Se recomienda llevar ropa cómoda, traje de baño, sandalias, toalla, gorra o sombrero, protector solar biodegradable, repelente de insectos, hidratación y dinero en efectivo. También es recomendable llevar alimentos ligeros para el trayecto de madrugada, una bolsa impermeable para proteger pertenencias personales y cámara fotográfica para capturar la experiencia.",
    },
    en: {
      summary:
        "Discover an unforgettable experience on the Veracruz coast where nature, the sea, and culture unite in a single tour. This trip is designed for those seeking to connect with the natural environment while enjoying one of the most representative destinations in the state of Veracruz.\nThe adventure begins in Tecolutla at dawn, when the sound of the waves and the tranquility of the beach create the perfect setting to start the day. Later, you will visit a conservation camp where you will learn more about the importance of protecting sea turtles and participate in the release of small newborn turtles into the sea, an activity full of emotion and environmental awareness.\nDuring this experience, information is shared about conservation programs and ecological protection carried out by organizations dedicated for decades to the care of these species and the environmental balance of the region. The activity seeks to promote responsible tourism and generate awareness about the importance of preserving marine ecosystems.\nAfter this activity, you will enjoy free time on Tecolutla beach to rest, walk by the sea, taste typical Veracruz gastronomy, or do optional activities such as mangrove tours and local walks.\nLater, the tour continues towards Papantla, a Magical Town recognized for its cultural wealth, Totonac heritage, and tradition linked to vanilla. Its streets, squares, and traditional architecture offer an authentic atmosphere full of history and Veracruz culture.",
      includes: [
        "Round-trip transport in tourist bus or van",
        "Visit to Tecolutla beach",
        "Participation in the release of one sea turtle per person*",
        "Environmental education and marine species conservation talk",
        "Free time to enjoy the beach and optional activities",
        "Visit to the Magical Town of Papantla",
        "Traveler insurance aboard the unit throughout the tour",
        "Trip coordinator in Spanish and English during the experience",
      ],
      excludes: [
        "Boat rides, optional activities, or personal consumption",
        "Tips for coordinators or local staff",
        "Services not specified within the itinerary",
      ],
      info: [
        "The turtle release activity is subject to the hatching season and natural conditions*",
        "Prolonged walks are carried out during some tour activities",
        "The beach is in open sea, so caution is recommended when entering the water",
        "The visited spaces do not have belongings storage; it is recommended to take care of personal objects",
        "Arrival in Tecolutla is approximately at 06:00 hrs to enjoy the sunrise",
        "It is recommended to bring light food (lunch), as the time allotted for breakfast is later",
      ],
      tips:
        "It is recommended to bring comfortable clothes, swimsuit, sandals, towel, cap or hat, biodegradable sunscreen, insect repellent, hydration, and cash. It is also recommended to bring light food for the early morning journey, a waterproof bag to protect personal belongings, and a camera to capture the experience.",
    },
  },

  "teotihuacan-express-piramides-e-historia": {
    es: {
      summary:
        "Descubre una de las ciudades prehispánicas más importantes y enigmáticas de Mesoamérica con este recorrido express a Teotihuacán, un destino que conserva siglos de historia, arquitectura monumental y simbolismo ancestral.\nEl recorrido inicia con transporte cómodo desde la Ciudad de México, seguido de un desayuno buffet para comenzar la experiencia con energía antes de adentrarte en el mundo de una de las civilizaciones más influyentes del México antiguo.\nAl llegar a la zona arqueológica de Teotihuacán, comenzarás un recorrido guiado por sus principales estructuras, incluyendo la emblemática Calzada de los Muertos, eje central de la antigua ciudad que conecta templos, plazas y pirámides. Durante la visita, conocerás la historia, los rituales y el significado cultural de este impresionante sitio.\nUno de los momentos más importantes del recorrido es la visita a la Pirámide del Sol y la Pirámide de la Luna, estructuras monumentales que destacan por su tamaño, precisión arquitectónica y alineación astronómica, elementos que han fascinado a historiadores y visitantes durante décadas.\nAdemás del recorrido arqueológico, la experiencia incluye una visita a un taller de artesanías, donde podrás conocer parte de la tradición cultural local y las técnicas utilizadas por artesanos de la región.",
      includes: [
        "Desayuno buffet incluido antes del inicio del recorrido",
        "Visita y acceso a la Zona Arqueológica de Teotihuacán",
        "Recorrido guiado dentro de la zona arqueológica",
        "Visita a taller de artesanías tradicionales",
        "Guía bilingüe (español / inglés) durante toda la experiencia",
        "Seguro de viajero a bordo de la unidad durante el trayecto",
      ],
      excludes: [
        "Propinas para guías locales y coordinadores",
        "Servicios no especificados dentro del itinerario",
        "Gastos personales",
      ],
      info: [
        "No existe tiempo de tolerancia, por lo que es indispensable llegar puntualmente",
        "El tráfico en la zona metropolitana de CDMX puede afectar los tiempos de traslado, por lo que se recomienda salir con anticipación",
        "Existe la opción de tours privados con fechas, idiomas o servicios personalizados bajo cotización",
      ],
      tips:
        "Se recomienda llevar ropa cómoda, calzado para caminata, sombrero o gorra, bloqueador solar, hidratación y dinero en efectivo para compras o gastos personales dentro del sitio. También se sugiere llegar puntualmente al punto de abordaje para evitar contratiempos y aprovechar al máximo el recorrido arqueológico.",
    },
    en: {
      summary:
        "Discover one of the most important and enigmatic pre-Hispanic cities in Mesoamerica with this express tour to Teotihuacán, a destination that preserves centuries of history, monumental architecture, and ancestral symbolism.\nThe tour begins with comfortable transport from Mexico City, followed by a buffet breakfast to start the experience with energy before delving into the world of one of the most influential civilizations of ancient Mexico.\nUpon arriving at the Teotihuacán archaeological zone, you will begin a guided tour of its main structures, including the emblematic Avenue of the Dead, the central axis of the ancient city that connects temples, plazas, and pyramids. During the visit, you will learn about the history, rituals, and cultural significance of this impressive site.\nOne of the most important moments of the tour is the visit to the Pyramid of the Sun and the Pyramid of the Moon, monumental structures that stand out for their size, architectural precision, and astronomical alignment, elements that have fascinated historians and visitors for decades.\nIn addition to the archaeological tour, the experience includes a visit to an artisan workshop, where you can learn part of the local cultural tradition and the techniques used by artisans in the region.",
      includes: [
        "Buffet breakfast included before the start of the tour",
        "Visit and access to the Teotihuacán Archaeological Zone",
        "Guided tour inside the archaeological zone",
        "Visit to traditional artisan workshop",
        "Bilingual guide (Spanish / English) throughout the experience",
        "Traveler insurance aboard the unit during the journey",
      ],
      excludes: [
        "Tips for local guides and coordinators",
        "Services not specified within the itinerary",
        "Personal expenses",
      ],
      info: [
        "There is no tolerance time, so it is essential to arrive promptly",
        "Traffic in the CDMX metropolitan area can affect transfer times, so it is recommended to leave early",
        "There is the option of private tours with dates, languages, or personalized services under quotation",
      ],
      tips:
        "It is recommended to bring comfortable clothes, walking shoes, hat or cap, sunscreen, hydration, and cash for shopping or personal expenses within the site. It is also suggested to arrive promptly at the boarding point to avoid setbacks and make the most of the archaeological tour.",
    },
  },

  "tlaquepaque-y-navidalia-magia-navidena": {
    es: {
      summary:
        "Sumérgete en el espíritu navideño con una experiencia inolvidable en Navidalia, donde la magia, la música y las tradiciones se combinan para crear un ambiente único. Este parque temático te transporta a distintos mundos llenos de luces, espectáculos y escenarios que evocan la esencia de la Navidad alrededor del mundo.\nAdemás, recorrerás Tlaquepaque, un destino lleno de color y cultura. Sus calles están repletas de galerías, artesanías de cerámica y alfarería, así como tiendas de recuerdos únicos. En el corazón del lugar se encuentra El Parián, donde la música de mariachi, la gastronomía típica y el ambiente festivo crean una experiencia auténtica. También podrás encontrar arte urbano, textiles, dulces tradicionales, nieves de garrafa y bebidas como el tequila.\nEn Navidalia, vivirás un recorrido por diferentes mundos temáticos: desde el ambiente tradicional mexicano con posadas y piñatas, hasta escenarios inspirados en Europa, Oriente y el mundo nórdico. Cada espacio ofrece espectáculos, gastronomía y experiencias inmersivas que hacen de esta visita algo verdaderamente especial.",
      includes: [
        "Visita al Pueblo Mágico de Tlaquepaque",
        "Acceso general a Navidalia",
        "Tiempo libre para disfrutar de atracciones como: Canticorum Magno, Espectáculo de La Gran Posada, Espectáculo del Medio Oriente, Espectáculo del Gran Árbol, Coca-Cola, Travesía del Mundo Nórdico, Mercado Europeo, Plaza Canoil, Fuente de Pelotas, Túnel de Luz Tecnolite, El Nacimiento, Zona Infantil Nanü, Photomoments, música en vivo y personajes caracterizados, entre otras",
        "Coordinador de viaje en español e inglés",
        "Seguro de viajero durante la actividad",
      ],
      excludes: [
        "Propinas para guías locales y coordinadores",
        "Gastos personales",
        "Servicios adicionales no especificados",
        "Atracciones con costo extra dentro del parque (La Gran Resbaladilla, Las Barcazas, Camino de Hielo, El Tren y Comfort Zone; sujetas a cambio sin previo aviso)",
      ],
      tips:
        "Se recomienda llevar ropa cómoda, calzado adecuado para caminar, chamarra o abrigo (por el clima nocturno), cámara fotográfica y dinero extra para compras, alimentos o atracciones adicionales dentro del parque.",
    },
    en: {
      summary:
        "Immerse yourself in the Christmas spirit with an unforgettable experience in Navidalia, where magic, music, and traditions combine to create a unique atmosphere. This theme park transports you to different worlds full of lights, shows, and settings that evoke the essence of Christmas around the world.\nIn addition, you will tour Tlaquepaque, a destination full of color and culture. Its streets are full of galleries, ceramic and pottery crafts, as well as unique souvenir shops. In the heart of the place is El Parián, where mariachi music, typical gastronomy, and festive atmosphere create an authentic experience. You can also find urban art, textiles, traditional sweets, craft ice creams, and drinks like tequila.\nIn Navidalia, you will live a tour through different thematic worlds: from the traditional Mexican atmosphere with posadas and piñatas, to settings inspired by Europe, the East, and the Nordic world. Each space offers shows, gastronomy, and immersive experiences that make this visit truly special.",
      includes: [
        "Visit to the Magical Town of Tlaquepaque",
        "General access to Navidalia",
        "Free time to enjoy attractions such as: Canticorum Magno, La Gran Posada Show, Middle East Show, Great Tree Show, Coca-Cola, Nordic World Journey, European Market, Plaza Canoil, Ball Fountain, Tecnolite Light Tunnel, The Nativity, Nanü Children's Zone, Photomoments, live music and costumed characters, among others",
        "Trip coordinator in Spanish and English",
        "Traveler insurance during the activity",
      ],
      excludes: [
        "Tips for local guides and coordinators",
        "Personal expenses",
        "Additional unspecified services",
        "Attractions with extra cost inside the park (La Gran Resbaladilla, Las Barcazas, Camino de Hielo, El Tren and Comfort Zone; subject to change without notice)",
      ],
      tips:
        "It is recommended to bring comfortable clothes, suitable footwear for walking, jacket or coat (due to nighttime weather), camera, and extra money for shopping, food, or additional attractions inside the park.",
    },
  },

  "ruta-del-tequila-en-tequila": {
    es: {
      summary:
        "Descubre el origen de una de las bebidas más representativas de México en Tequila, un destino rodeado de paisajes de agave azul y tradición. Aquí conocerás el proceso de elaboración del tequila, desde la extracción del agave hasta su destilación, con la oportunidad de degustar distintas variedades.\nTambién recorrerás el centro del pueblo, donde podrás visitar espacios culturales como el Museo Nacional del Tequila y disfrutar del ambiente local.\nEl viaje continúa con una visita a Tlaquepaque, famoso por su ambiente artístico, sus galerías y su oferta gastronómica, además de su tradicional música de mariachi.\nFinalmente, conocerás Chapala, hogar del lago más grande de México, donde podrás pasear por su malecón, disfrutar de su clima agradable y descubrir artesanías, joyería y gastronomía local.",
      includes: [
        "1 noche de hospedaje en hotel 3* (habitación doble o triple)",
        "Visita a Tequila",
        "Recorrido por fábrica de tequila",
        "Degustación de diferentes tipos de tequila",
        "Margarita de limón de cortesía",
        "Visita a Tlaquepaque",
        "Visita a Chapala",
        "Coordinador de viaje en español e inglés",
        "Seguro de viajero durante la actividad",
      ],
      excludes: [
        "Actividades adicionales",
        "Propinas para guías locales y coordinadores",
        "Servicios adicionales no especificados",
      ],
      tips:
        "• Para reservas individuales puede aplicar suplemento de habitación sencilla\n• Habitaciones sujetas a disponibilidad (camas individuales o matrimoniales)\n• El traslado se realiza durante la noche; se recomienda llevar equipaje ligero\n• El hospedaje puede confirmarse en Tequila o Guadalajara según la fecha\nSe recomienda llevar ropa cómoda, calzado adecuado, identificación oficial, cámara fotográfica y dinero extra para compras, alimentos y actividades opcionales.",
    },
    en: {
      summary:
        "Discover the origin of one of Mexico's most representative drinks in Tequila, a destination surrounded by blue agave landscapes and tradition. Here you will learn about the tequila-making process, from agave extraction to distillation, with the opportunity to taste different varieties.\nYou will also tour the center of the town, where you can visit cultural spaces such as the National Tequila Museum and enjoy the local atmosphere.\nThe trip continues with a visit to Tlaquepaque, famous for its artistic environment, galleries, and gastronomic offer, in addition to its traditional mariachi music.\nFinally, you will visit Chapala, home to the largest lake in Mexico, where you can walk along its boardwalk, enjoy its pleasant climate, and discover crafts, jewelry, and local gastronomy.",
      includes: [
        "1 night lodging in 3* hotel (double or triple room)",
        "Visit to Tequila",
        "Tour of tequila factory",
        "Tasting of different types of tequila",
        "Complimentary lemon margarita",
        "Visit to Tlaquepaque",
        "Visit to Chapala",
        "Trip coordinator in Spanish and English",
        "Traveler insurance during the activity",
      ],
      excludes: [
        "Additional activities",
        "Tips for local guides and coordinators",
        "Additional unspecified services",
      ],
      tips:
        "• For individual reservations, a single room supplement may apply\n• Rooms subject to availability (single or double beds)\n• Transfer is made at night; it is recommended to carry light luggage\n• Lodging can be confirmed in Tequila or Guadalajara depending on the date\nIt is recommended to bring comfortable clothes, suitable footwear, official ID, camera, and extra money for shopping, food, and optional activities.",
    },
  },

  "ruta-floral-y-cultural-en-tlaxcala": {
    es: {
      summary:
        "Vive una experiencia que combina naturaleza, historia y cultura en Tlaxcala. Iniciarás visitando un impresionante Santuario de Girasoles, donde miles de flores crean un paisaje vibrante que te permitirá capturar fotografías únicas rodeado de color y vida.\nDespués, recorrerás el centro histórico de Tlaxcala, descubriendo su riqueza cultural y arquitectónica. Conocerás espacios emblemáticos como las Escalinatas de los Héroes, un mirador con numerosos escalones que ofrece vistas panorámicas, y la majestuosa Basílica de Nuestra Señora de Ocotlán, uno de los recintos religiosos más representativos de la región.\nLa experiencia continúa en Val’Quirico, un lugar con arquitectura inspirada en villas europeas, donde sus calles adoquinadas y fachadas coloridas crean un ambiente ideal para pasear, tomar fotografías y disfrutar de una amplia oferta gastronómica.",
      includes: [
        "Visita al Santuario de Girasoles (entrada no incluida)",
        "Recorrido guiado por el centro histórico de Tlaxcala",
        "Visita a Escalinatas de los Héroes",
        "Visita a la Basílica de Nuestra Señora de Ocotlán",
        "Visita a Val’Quirico",
        "Coordinador de viaje en español e inglés",
        "Seguro de viajero durante la actividad",
      ],
      excludes: [
        "Acceso al Santuario de Girasoles (aprox. $150 por persona a partir de 1.40 m y hasta 10 años)",
        "Propinas para guías locales y coordinadores",
        "Actividades dentro de los sitios visitados",
        "Gastos personales",
      ],
      tips:
        "Considera que los recorridos incluyen caminatas al aire libre de más de 30 minutos, por lo que se recomienda llevar ropa cómoda, calzado adecuado, agua para mantenerte hidratado, protector solar, cámara fotográfica y dinero extra para accesos, alimentos y compras personales.",
    },
    en: {
      summary:
        "Live an experience that combines nature, history, and culture in Tlaxcala. You will start by visiting an impressive Sunflower Sanctuary, where thousands of flowers create a vibrant landscape that will allow you to capture unique photographs surrounded by color and life.\nLater, you will tour the historic center of Tlaxcala, discovering its cultural and architectural wealth. You will know emblematic spaces such as the Escalinatas de los Héroes, a viewpoint with numerous steps that offers panoramic views, and the majestic Basilica of Our Lady of Ocotlán, one of the most representative religious sites in the region.\nThe experience continues in Val’Quirico, a place with architecture inspired by European villas, where its cobblestone streets and colorful facades create an ideal environment to walk, take photographs, and enjoy a wide gastronomic offer.",
      includes: [
        "Visit to the Sunflower Sanctuary (admission not included)",
        "Guided tour of the historic center of Tlaxcala",
        "Visit to Escalinatas de los Héroes",
        "Visit to the Basilica of Our Lady of Ocotlán",
        "Visit to Val’Quirico",
        "Trip coordinator in Spanish and English",
        "Traveler insurance during the activity",
      ],
      excludes: [
        "Access to the Sunflower Sanctuary (approx. $150 per person from 1.40 m and up to 10 years)",
        "Tips for local guides and coordinators",
        "Activities within the visited sites",
        "Personal expenses",
      ],
      tips:
        "Consider that the tours include outdoor walks of more than 30 minutes, so it is recommended to bring comfortable clothes, suitable footwear, water to stay hydrated, sunscreen, camera, and extra money for access, food, and personal purchases.",
    },
  },

  "ruta-gastronomica-en-ciudad-de-mexico-burger-tour": {
    es: {
      summary:
        "Descubre una experiencia culinaria única en Ciudad de México con este tour diseñado para los verdaderos amantes de las hamburguesas.\nDurante el recorrido visitarás tres propuestas gastronómicas cuidadosamente seleccionadas, donde podrás degustar diferentes estilos y sabores. Entre los sitios incluidos se encuentran Chicago Bernie’s, Indómita y Smashy’s, cada uno con su propia propuesta culinaria.",
      includes: [
        "Traslados entre hamburgueserías dentro de Ciudad de México",
        "Visita a tres hamburgueserías seleccionadas",
        "Degustación de tres hamburguesas premium, papas fritas y bebidas",
        "Coordinador de grupo",
        "Seguro de viajero durante la actividad",
      ],
      excludes: [
        "Propinas para guías locales y coordinadores",
        "Servicios adicionales no especificados",
      ],
      info: [
        "El tour se realiza únicamente los jueves por la tarde, sujeto a disponibilidad",
        "Se recomienda puntualidad, ya que no hay tiempo de tolerancia",
        "Considera posibles demoras en traslados debido al tráfico en la Ciudad de México",
        "El itinerario puede modificarse por causas ajenas a la operación",
        "Duración aproximada: 3.5 horas",
      ],
      tips:
        "Se sugiere llegar con buen apetito, vestir ropa cómoda, considerar tiempos de traslado y llevar disposición para disfrutar una experiencia gastronómica diferente.",
    },
    en: {
      summary:
        "Discover a unique culinary experience in Mexico City with this tour designed for true burger lovers.\nDuring the tour you will visit three carefully selected gastronomic proposals, where you can taste different styles and flavors. Among the included sites are Chicago Bernie’s, Indómita, and Smashy’s, each with its own culinary proposal.",
      includes: [
        "Transfers between burger joints within Mexico City",
        "Visit to three selected burger joints",
        "Tasting of three premium burgers, french fries, and drinks",
        "Group coordinator",
        "Traveler insurance during the activity",
      ],
      excludes: [
        "Tips for local guides and coordinators",
        "Additional unspecified services",
      ],
      info: [
        "The tour takes place only on Thursday afternoons, subject to availability",
        "Punctuality is recommended, as there is no tolerance time",
        "Consider possible delays in transfers due to traffic in Mexico City",
        "The itinerary may be modified due to causes beyond operation",
        "Approximate duration: 3.5 hours",
      ],
      tips:
        "It is suggested to arrive with a good appetite, wear comfortable clothes, consider transfer times, and bring a willingness to enjoy a different gastronomic experience.",
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
      why: "Este recorrido ofrece una combinación única de estilos arquitectónicos y experiencias culturales. Desde el arte religioso del Santuario de Jesús Nazareno de Atotonilco, pasando por la creatividad surrealista del Rancho Cascabeles, hasta la elegancia colonial de San Miguel de Allende, cada parada ofrece una perspectiva distinta y enriquecedora. Además, San Miguel de Allende ha sido reconocida como Patrimonio Cultural de la Humanidad por la UNESCO, destacando por su belleza, historia y ambiente cultural.",
      special: "Lo que distingue esta experiencia es la diversidad de escenarios en un solo viaje. Podrás admirar desde murales históricos hasta construcciones surrealistas, y recorrer una de las ciudades más bellas de México. El Rancho Cascabeles ofrece una experiencia diferente, con espacios diseñados para sorprender y crear fotografías únicas, mientras que San Miguel de Allende complementa el recorrido con su riqueza cultural, gastronómica y artesanal.",
    },
    en: {
      why: "This tour offers a unique combination of architectural styles and cultural experiences. From the religious art of the Sanctuary of Jesus Nazarene of Atotonilco, passing through the surrealist creativity of Rancho Cascabeles, to the colonial elegance of San Miguel de Allende, each stop offers a different and enriching perspective. In addition, San Miguel de Allende has been recognized as a UNESCO World Heritage Cultural Site, standing out for its beauty, history, and cultural environment.",
      special: "What distinguishes this experience is the diversity of settings in a single trip. You can admire everything from historical murals to surrealist constructions, and tour one of the most beautiful cities in Mexico. Rancho Cascabeles offers a different experience, with spaces designed to surprise and create unique photographs, while San Miguel de Allende complements the tour with its cultural, gastronomic, and artisanal wealth.",
    },
  },
  "teotihuacan-vuelo-en-globo": {
    es: {
      why: "Esta experiencia ofrece una perspectiva única de Teotihuacán, combinando aventura y cultura en un solo recorrido. El vuelo en globo permite apreciar el sitio desde el aire, algo que pocas experiencias pueden ofrecer, mientras que el recorrido guiado complementa la visita con información histórica y cultural. Es una opción ideal para quienes buscan una actividad diferente, ya sea en pareja, con amigos o en familia, disfrutando de uno de los destinos más emblemáticos del país desde una vista privilegiada.",
      special: "Lo que distingue este recorrido es la combinación del vuelo al amanecer con la exploración terrestre. Elevarte mientras el sol ilumina la Calzada de los Muertos crea un momento único y memorable. Además, la experiencia está diseñada para brindar comodidad en todo momento, integrando transporte, alimentos y guías especializados, lo que permite disfrutar del viaje sin preocupaciones logísticas.",
    },
    en: {
      why: "This experience offers a unique perspective of Teotihuacán, combining adventure and culture in a single tour. The balloon flight allows appreciating the site from the air, something few experiences can offer, while the guided tour complements the visit with historical and cultural information. It is an ideal option for those looking for a different activity, whether as a couple, with friends, or with family, enjoying one of the most emblematic destinations in the country from a privileged view.",
      special: "What distinguishes this tour is the combination of the dawn flight with terrestrial exploration. Rising while the sun illuminates the Avenue of the Dead creates a unique and memorable moment. In addition, the experience is designed to provide comfort at all times, integrating transportation, food, and specialized guides, allowing you to enjoy the trip without logistical worries.",
    },
  },
  "taxco-pozas-azules-y-tradicion-colonial": {
    es: {
      why: "Este recorrido combina naturaleza y cultura en un solo día. Las Pozas Azules de Atzala ofrecen una experiencia refrescante en un entorno natural único, mientras que Taxco permite descubrir una de las ciudades coloniales más emblemáticas de México. Es una excelente opción para quienes buscan una escapada económica, cercana a la naturaleza y con un toque cultural auténtico.",
      special: "La combinación de aguas naturales color turquesa con el encanto colonial de Taxco hace de este recorrido una experiencia única. Las Pozas Azules de Atzala ofrecen un ambiente relajado y visualmente impactante, ideal para nadar y desconectarse. A diferencia de otros recorridos, este tour integra naturaleza virgen con historia y arquitectura, permitiendo disfrutar de dos experiencias completamente distintas en un solo viaje.",
    },
    en: {
      why: "This tour combines nature and culture in a single day. The Pozas Azules de Atzala offer a refreshing experience in a unique natural environment, while Taxco allows you to discover one of the most emblematic colonial cities in Mexico. It is an excellent option for those looking for an economical getaway, close to nature and with an authentic cultural touch.",
      special: "The combination of turquoise natural waters with the colonial charm of Taxco makes this tour a unique experience. The Pozas Azules de Atzala offer a relaxed and visually striking atmosphere, ideal for swimming and disconnecting. Unlike other tours, this tour integrates virgin nature with history and architecture, allowing you to enjoy two completely different experiences in a single trip.",
    },
  },
  "villa-del-carbon-presas-bosques-y-tradicion-artesanal": {
    es: {
      why: "A pocas horas de la ciudad, Villa del Carbón ofrece un ambiente tranquilo con paisajes boscosos y presas impresionantes. La Presa del Llano es ideal para caminar y respirar aire puro, mientras que la Presa Taxhimay sorprende con su iglesia sumergida, creando una vista fuera de lo común. Es una excelente opción para parejas y familias que buscan una escapada accesible, con la oportunidad de adquirir artesanías de piel y lana de gran calidad.",
      special: "La propuesta combina naturaleza y tradición artesanal en un solo recorrido. Se visitan espacios clave como la Presa del Llano, un entorno ideal para el ecoturismo, y el centro histórico de Villa del Carbón, reconocido por sus talleres de productos de piel elaborados por artesanos locales. Además, se exploran rincones representativos del pueblo, como sus plazas empedradas y miradores con vistas a la Peña de Francia.",
    },
    en: {
      why: "A few hours from the city, Villa del Carbón offers a tranquil environment with forested landscapes and impressive dams. Presa del Llano is ideal for walking and breathing fresh air, while Presa Taxhimay surprises with its submerged church, creating an out-of-the-ordinary view. It is an excellent option for couples and families looking for an affordable getaway, with the opportunity to acquire high-quality leather and wool crafts.",
      special: "The proposal combines nature and artisanal tradition in a single tour. Key spaces such as Presa del Llano are visited, an ideal environment for ecotourism, and the historic center of Villa del Carbón, recognized for its leather product workshops made by local artisans. In addition, representative corners of the town are explored, such as its cobblestone squares and viewpoints overlooking the Peña de Francia.",
    },
  },
  "huauchinango-cascadas-la-morena": {
    es: {
      why: "Este viaje es ideal para quienes buscan una experiencia diferente, lejos del turismo convencional, combinando senderismo, paisajes naturales y cultura local. Cascadas La Morena ofrecen un entorno natural prácticamente virgen, perfecto para quienes disfrutan del contacto directo con la naturaleza y las caminatas en montaña. A esto se suma la Presa de Tenango de las Flores, que aporta un ambiente tranquilo y escénico ideal para relajarse. Huauchinango complementa el recorrido con su identidad cultural, su gastronomía y su encanto de Pueblo Mágico, haciendo de esta excursión una experiencia completa entre aventura y tradición.",
      special: "Lo que distingue este tour es su enfoque en el ecoturismo de montaña y la exploración de paisajes naturales poco intervenidos. No se trata solo de una visita turística, sino de una experiencia activa de senderismo en un entorno selvático y montañoso. La combinación de cascadas, presa y pueblo mágico permite vivir un día lleno de contrastes: adrenalina en la caminata, tranquilidad en la lancha y cultura en el recorrido urbano. Es una experiencia pensada para quienes buscan reconectar con la naturaleza de forma auténtica.",
    },
    en: {
      why: "This trip is ideal for those looking for a different experience, away from conventional tourism, combining hiking, natural landscapes, and local culture. Cascadas La Morena offer a practically virgin natural environment, perfect for those who enjoy direct contact with nature and mountain walks. Added to this is the Presa de Tenango de las Flores, which provides a calm and scenic environment ideal for relaxing. Huauchinango complements the tour with its cultural identity, gastronomy, and Magical Town charm, making this excursion a complete experience between adventure and tradition.",
      special: "What distinguishes this tour is its focus on mountain ecotourism and the exploration of lightly intervened natural landscapes. It is not just a tourist visit, but an active hiking experience in a jungle and mountainous environment. The combination of waterfalls, dam, and magical town allows you to live a day full of contrasts: adrenaline on the hike, tranquility on the boat, and culture on the urban tour. It is an experience designed for those seeking to reconnect with nature authentically.",
    },
  },
  "puerto-vallarta-y-sayulita-ballenas-jorobadas": {
    es: {
      why: "Este viaje es perfecto para quienes desean combinar aventura marina, descanso frente al mar y recorridos por algunos de los destinos más atractivos del Pacífico mexicano. La posibilidad de observar ballenas jorobadas en libertad convierte esta experiencia en algo verdaderamente especial, mientras que Sayulita, Puerto Vallarta y Punta de Mita ofrecen paisajes, gastronomía y ambientes únicos que complementan perfectamente el recorrido. Es una experiencia ideal para amantes de la naturaleza, el océano, la fotografía y los viajes de playa con actividades memorables.",
      special: "Lo que distingue este recorrido es la combinación entre avistamiento de fauna marina y destinos icónicos de la Riviera Nayarit y Jalisco en un solo viaje. Pocas experiencias permiten disfrutar de un encuentro cercano con ballenas jorobadas y, al mismo tiempo, recorrer playas paradisíacas, pueblos costeros y ciudades llenas de vida junto al mar. Además, la logística del recorrido está diseñada para que los viajeros disfruten cómodamente cada destino, con hospedaje, coordinación y actividades organizadas para aprovechar al máximo la experiencia.",
    },
    en: {
      why: "This trip is perfect for those who want to combine marine adventure, rest by the sea, and tours of some of the most attractive destinations in the Mexican Pacific. The possibility of observing humpback whales in freedom makes this experience truly special, while Sayulita, Puerto Vallarta, and Punta de Mita offer unique landscapes, gastronomy, and atmospheres that perfectly complement the tour. It is an ideal experience for lovers of nature, the ocean, photography, and beach trips with memorable activities.",
      special: "What distinguishes this tour is the combination between marine wildlife sighting and iconic destinations of Riviera Nayarit and Jalisco in a single trip. Few experiences allow enjoying a close encounter with humpback whales and, at the same time, touring paradisiacal beaches, coastal towns, and cities full of life by the sea. In addition, the tour logistics are designed for travelers to comfortably enjoy each destination, with lodging, coordination, and organized activities to make the most of the experience.",
    },
  },
  "centro-ceremonial-otomi-y-metepec": {
    es: {
      why: "Este recorrido es ideal para quienes buscan un viaje cultural y relajante cerca de la ciudad, rodeado de naturaleza, arquitectura y tradiciones mexicanas. El Centro Ceremonial Otomí ofrece paisajes impresionantes y una conexión con las raíces indígenas de México, mientras que Metepec permite descubrir la riqueza artesanal y cultural del Estado de México en un ambiente pintoresco y tradicional. Es una experiencia perfecta para amantes de la fotografía, la cultura mexicana y los destinos con identidad histórica.",
      special: "Lo que distingue este recorrido es la combinación entre naturaleza de montaña, arquitectura monumental y tradición artesanal en un solo día. Pocas experiencias permiten visitar un centro ceremonial rodeado de bosque y posteriormente recorrer un Pueblo Mágico reconocido internacionalmente por su arte popular y ambiente cultural. La ruta está diseñada para disfrutar de escenarios tranquilos, cultura local y espacios llenos de historia sin alejarse demasiado de la ciudad.",
    },
    en: {
      why: "This tour is ideal for those looking for a cultural and relaxing trip near the city, surrounded by nature, architecture, and Mexican traditions. The Otomi Ceremonial Center offers impressive landscapes and a connection with Mexico's indigenous roots, while Metepec allows discovering the artisanal and cultural wealth of the State of Mexico in a picturesque and traditional environment. It is a perfect experience for lovers of photography, Mexican culture, and destinations with historical identity.",
      special: "What distinguishes this tour is the combination of mountain nature, monumental architecture, and artisanal tradition in a single day. Few experiences allow visiting a ceremonial center surrounded by forest and subsequently touring a Magical Town internationally recognized for its popular art and cultural environment. The route is designed to enjoy tranquil settings, local culture, and spaces full of history without straying too far from the city.",
    },
  },
  "chignahuapan-aguas-termales-y-pueblo-magico": {
    es: {
      why: "Este viaje es ideal para quienes buscan una escapada de descanso y bienestar lejos del ritmo de la ciudad. Las aguas termales de Chignahuapan son reconocidas por sus propiedades naturales y por ofrecer una experiencia de relajación profunda en un entorno rodeado de naturaleza. Además, el Pueblo Mágico de Chignahuapan complementa perfectamente el viaje con su identidad cultural, su tradición artesanal y su ambiente tranquilo, convirtiendo esta excursión en una combinación ideal entre descanso físico y conexión cultural.",
      special: "Lo que distingue este recorrido es la combinación de bienestar natural y tradición mexicana en un solo día. Las aguas termales ofrecen un espacio de relajación único en la región, mientras que el pueblo mágico brinda una experiencia cultural auténtica. Es una excursión diseñada para desconectarte del estrés, disfrutar de un entorno natural privilegiado y conocer uno de los destinos más representativos de la Sierra de Puebla sin preocuparte por la logística del viaje.",
    },
    en: {
      why: "This trip is ideal for those looking for a getaway of rest and well-being away from the city rhythm. The hot springs of Chignahuapan are recognized for their natural properties and for offering a deep relaxation experience in an environment surrounded by nature. In addition, the Magical Town of Chignahuapan perfectly complements the trip with its cultural identity, artisanal tradition, and tranquil atmosphere, making this excursion an ideal combination of physical rest and cultural connection.",
      special: "What distinguishes this tour is the combination of natural well-being and Mexican tradition in a single day. The hot springs offer a unique relaxation space in the region, while the magical town provides an authentic cultural experience. It is an excursion designed to disconnect from stress, enjoy a privileged natural environment, and know one of the most representative destinations of the Sierra de Puebla without worrying about trip logistics.",
    },
  },
  "jardines-de-mexico-y-tepoztlan": {
    es: {
      why: "Este viaje es ideal para quienes buscan una escapada llena de naturaleza, cultura y descanso sin alejarse demasiado de la ciudad. Jardines de México ofrece una experiencia visual incomparable, donde cada espacio está diseñado para conectar con los sentidos y disfrutar de la belleza floral en su máxima expresión. Por otro lado, Tepoztlán complementa perfectamente el recorrido con su ambiente espiritual, su historia y su encanto como Pueblo Mágico. Es un destino que combina tradición, paisajes naturales y una vibra única que lo ha convertido en uno de los lugares favoritos para viajeros nacionales e internacionales.",
      special: "Lo que distingue este tour es la combinación de dos mundos en un solo día: por un lado, la perfección artística y natural de Jardines de México, considerado un referente en Latinoamérica por su diseño paisajístico, y por otro, la esencia cultural y mística de Tepoztlán. Es una experiencia pensada para quienes disfrutan de caminar entre jardines temáticos, tomar fotografías espectaculares y cerrar el día en un entorno lleno de historia, tradición y energía natural. Cada parada del recorrido está diseñada para ofrecer momentos memorables y contacto directo con la naturaleza y la cultura mexicana.",
    },
    en: {
      why: "This trip is ideal for those looking for a getaway full of nature, culture, and rest without straying too far from the city. Jardines de México offers an incomparable visual experience, where each space is designed to connect with the senses and enjoy floral beauty in its maximum expression. On the other hand, Tepoztlán perfectly complements the tour with its spiritual atmosphere, history, and charm as a Magical Town. It is a destination that combines tradition, natural landscapes, and a unique vibe that has made it one of the favorite places for national and international travelers.",
      special: "What distinguishes this tour is the combination of two worlds in a single day: on one hand, the artistic and natural perfection of Jardines de México, considered a benchmark in Latin America for its landscape design, and on the other, the cultural and mystical essence of Tepoztlán. It is an experience designed for those who enjoy walking among themed gardens, taking spectacular photographs, and closing the day in an environment full of history, tradition, and natural energy. Each stop on the tour is designed to offer memorable moments and direct contact with nature and Mexican culture.",
    },
  },
  "grutas-de-cacahuamilpa-y-taxco": {
    es: {
      why: "Este recorrido es ideal para quienes desean combinar naturaleza, aventura y cultura en una sola experiencia de viaje. Las Grutas de Cacahuamilpa ofrecen un escenario natural impresionante lleno de historia geológica, mientras que Taxco permite descubrir uno de los destinos coloniales más hermosos y tradicionales de México. Es una experiencia perfecta para amantes de la fotografía, la arquitectura colonial y los paisajes naturales únicos.",
      special: "Lo que distingue este recorrido es la combinación entre una aventura subterránea y el encanto histórico de un Pueblo Mágico en un solo día. Pocas experiencias permiten explorar cavernas monumentales rodeadas de naturaleza y posteriormente caminar por calles coloniales llenas de historia, artesanías y tradición minera. La ruta está diseñada para disfrutar cómodamente de ambos destinos con tiempo suficiente para recorrer, tomar fotografías y vivir la experiencia completa.",
    },
    en: {
      why: "This tour is ideal for those who want to combine nature, adventure, and culture in a single travel experience. The Grutas de Cacahuamilpa offer an impressive natural setting full of geological history, while Taxco allows discovering one of the most beautiful and traditional colonial destinations in Mexico. It is a perfect experience for lovers of photography, colonial architecture, and unique natural landscapes.",
      special: "What distinguishes this tour is the combination of an underground adventure and the historic charm of a Magical Town in a single day. Few experiences allow exploring monumental caverns surrounded by nature and subsequently walking through colonial streets full of history, crafts, and mining tradition. The route is designed to comfortably enjoy both destinations with enough time to tour, take photographs, and live the complete experience.",
    },
  },
  "guanajuato-colonial-y-la-gruta-spa": {
    es: {
      why: "Este viaje es ideal para quienes desean combinar cultura, descanso y experiencias tradicionales en un solo recorrido. Guanajuato ofrece historia, arquitectura y una vida cultural vibrante, mientras que San Miguel de Allende enamora con su elegancia colonial y ambiente artístico. La experiencia se complementa perfectamente con la relajación de las aguas termales de La Gruta Spa, creando un equilibrio perfecto entre aventura y bienestar. Es un recorrido recomendado para amantes de los pueblos históricos, la gastronomía mexicana y las experiencias culturales auténticas.",
      special: "Lo que distingue este recorrido es la combinación entre ciudades coloniales reconocidas internacionalmente y una experiencia de relajación en aguas termales naturales. Pocas rutas permiten recorrer los callejones históricos de Guanajuato, disfrutar una tradicional callejoneada y posteriormente descansar en un spa termal rodeado de naturaleza antes de visitar San Miguel de Allende. La logística del viaje está diseñada para aprovechar al máximo cada destino, ofreciendo una experiencia completa que combina cultura, descanso y tradición mexicana en un solo fin de semana.",
    },
    en: {
      why: "This trip is ideal for those who want to combine culture, rest, and traditional experiences in a single tour. Guanajuato offers history, architecture, and a vibrant cultural life, while San Miguel de Allende enchants with its colonial elegance and artistic environment. The experience is perfectly complemented by the relaxation of the hot springs at La Gruta Spa, creating a perfect balance between adventure and well-being. It is a recommended tour for lovers of historic towns, Mexican gastronomy, and authentic cultural experiences.",
      special: "What distinguishes this tour is the combination of internationally recognized colonial cities and a relaxation experience in natural hot springs. Few routes allow touring the historic alleys of Guanajuato, enjoying a traditional callejoneada, and subsequently resting in a thermal spa surrounded by nature before visiting San Miguel de Allende. The trip logistics are designed to make the most of each destination, offering a complete experience that combines culture, rest, and Mexican tradition in a single weekend.",
    },
  },
  "huamantla-la-noche-que-nadie-duerme": {
    es: {
      why: "Esta experiencia es ideal para quienes buscan vivir una tradición mexicana auténtica y diferente, llena de cultura, arte popular y ambiente festivo. “La Noche que Nadie Duerme” ofrece la oportunidad de admirar una de las expresiones de arte efímero más impresionantes del país, mientras disfrutas de una celebración única que combina tradición religiosa, creatividad artesanal y convivencia cultural. Es un recorrido perfecto para amantes de la fotografía, las tradiciones mexicanas y los eventos culturales nocturnos.",
      special: "Lo que distingue este recorrido es la posibilidad de vivir desde dentro una de las festividades más importantes de Tlaxcala, donde las calles se convierten en verdaderas galerías de arte temporales elaboradas por toda una comunidad. A diferencia de otros eventos culturales, esta experiencia permite presenciar cómo el trabajo artesanal y la tradición transforman completamente el Pueblo Mágico durante una sola noche, creando un ambiente irrepetible lleno de color y emoción. La logística del viaje está diseñada para disfrutar cómodamente del evento, permitiendo recorrer los tapetes, vivir el ambiente nocturno y regresar con seguridad después de una de las noches más representativas de la cultura tlaxcalteca.",
    },
    en: {
      why: "This experience is ideal for those looking to live an authentic and different Mexican tradition, full of culture, popular art, and festive atmosphere. “La Noche que Nadie Duerme” offers the opportunity to admire one of the most impressive expressions of ephemeral art in the country, while enjoying a unique celebration that combines religious tradition, artisanal creativity, and cultural coexistence. It is a perfect tour for lovers of photography, Mexican traditions, and nocturnal cultural events.",
      special: "What distinguishes this tour is the possibility of living from within one of the most important festivities in Tlaxcala, where the streets become true temporary art galleries made by an entire community. Unlike other cultural events, this experience allows witnessing how artisanal work and tradition completely transform the Magical Town during a single night, creating an unrepeatable atmosphere full of color and emotion. The trip logistics are designed to comfortably enjoy the event, allowing you to tour the carpets, live the nocturnal atmosphere, and return safely after one of the most representative nights of Tlaxcalan culture.",
    },
  },
  "huasteca-potosina-3-dias": {
    es: {
      why: "La Huasteca Potosina es uno de los destinos de ecoturismo más completos de México, ideal para quienes desean desconectarse de la rutina y vivir experiencias llenas de naturaleza y aventura. Este recorrido permite conocer algunos de los lugares más icónicos de San Luis Potosí en un solo viaje, combinando ríos, cascadas, cuevas, jardines surrealistas y paisajes tropicales que convierten cada día en una experiencia distinta. Es una experiencia perfecta para amantes de la naturaleza, fotografía, senderismo y actividades acuáticas.",
      special: "Lo que distingue este recorrido es la gran variedad de escenarios naturales y experiencias incluidas en una sola ruta de viaje. Pocas experiencias permiten navegar ríos turquesa, explorar jardines surrealistas en medio de la selva, visitar cascadas monumentales y conocer formaciones naturales impresionantes en tan solo tres días. Además, la logística del recorrido está diseñada para aprovechar al máximo cada destino, ofreciendo hospedaje, coordinación y transporte para disfrutar cómodamente de la aventura sin preocuparse por la organización del viaje.",
    },
    en: {
      why: "La Huasteca Potosina is one of the most complete ecotourism destinations in Mexico, ideal for those who want to disconnect from the routine and live experiences full of nature and adventure. This tour allows you to know some of the most iconic places in San Luis Potosí in a single trip, combining rivers, waterfalls, caves, surrealist gardens, and tropical landscapes that turn each day into a different experience. It is a perfect experience for lovers of nature, photography, hiking, and water activities.",
      special: "What distinguishes this tour is the great variety of natural scenarios and experiences included in a single travel route. Few experiences allow navigating turquoise rivers, exploring surrealist gardens in the middle of the jungle, visiting monumental waterfalls, and knowing impressive natural formations in just three days. In addition, the tour logistics are designed to make the most of each destination, offering lodging, coordination, and transportation to comfortably enjoy the adventure without worrying about trip organization.",
    },
  },
  "los-tuxtlas-selva-y-acantilados": {
    es: {
      why: "Este recorrido es ideal para quienes buscan aventura, paisajes naturales y experiencias diferentes lejos de los destinos turísticos tradicionales. Los Tuxtlas ofrece una combinación única de selva, costa, historia y tradiciones locales, permitiendo disfrutar desde acantilados volcánicos hasta pueblos llenos de identidad cultural. Es una experiencia perfecta para amantes del ecoturismo, la fotografía, la naturaleza y los viajes de aventura.",
      special: "Lo que distingue este viaje es la posibilidad de explorar algunos de los paisajes más impresionantes y menos conocidos de Veracruz en un solo recorrido. Pocas experiencias permiten recorrer acantilados volcánicos frente al mar, navegar entre cuevas naturales, visitar regiones selváticas y conocer tradiciones tabacaleras y cultura olmeca en tan solo dos días. La ruta está diseñada para combinar aventura, naturaleza y cultura con logística organizada y acompañamiento durante toda la experiencia.",
    },
    en: {
      why: "This tour is ideal for those looking for adventure, natural landscapes, and different experiences away from traditional tourist destinations. Los Tuxtlas offers a unique combination of jungle, coast, history, and local traditions, allowing you to enjoy everything from volcanic cliffs to towns full of cultural identity. It is a perfect experience for lovers of ecotourism, photography, nature, and adventure travel.",
      special: "What distinguishes this trip is the possibility of exploring some of the most impressive and least known landscapes of Veracruz in a single tour. Few experiences allow touring volcanic cliffs facing the sea, navigating between natural caves, visiting jungle regions, and knowing tobacco traditions and Olmec culture in just two days. The route is designed to combine adventure, nature, and culture with organized logistics and accompaniment throughout the experience.",
    },
  },
  "tlaxcala-ruta-de-la-miel-y-girasoles": {
    es: {
      why: "Este recorrido ofrece una combinación única de naturaleza, bienestar y cultura. El Santuario de la Abeja permite una experiencia educativa y reflexiva, mientras que el Campo de Girasoles brinda un entorno lleno de vida y color. Además, el recorrido por Tlaxcala complementa la experiencia con su riqueza histórica y arquitectónica, haciendo de este viaje una opción ideal para desconectarse y reconectar con la naturaleza.",
      special: "La combinación de apicultura, paisajes florales y cultura local convierte este tour en una experiencia diferente y significativa. El contacto directo con las abejas en el Santuario de la Abeja ofrece una vivencia educativa y sensorial poco común. A esto se suma la belleza del Campo de Girasoles y el recorrido cultural por Tlaxcala, creando un equilibrio entre naturaleza, aprendizaje y tradición.",
    },
    en: {
      why: "This tour offers a unique combination of nature, well-being, and culture. The Bee Sanctuary allows an educational and reflective experience, while the Sunflower Field provides an environment full of life and color. In addition, the tour through Tlaxcala complements the experience with its historical and architectural wealth, making this trip an ideal option to disconnect and reconnect with nature.",
      special: "The combination of beekeeping, floral landscapes, and local culture turns this tour into a different and meaningful experience. Direct contact with bees in the Bee Sanctuary offers an uncommon educational and sensory experience. To this is added the beauty of the Sunflower Field and the cultural tour of Tlaxcala, creating a balance between nature, learning, and tradition.",
    },
  },
  "atlixco-y-cholula-villa-iluminada": {
    es: {
      why: "Este viaje combina tradición, cultura y temporada navideña en dos de los destinos más representativos del estado de Puebla. Atlixco destaca por su Villa Iluminada, un espectáculo anual que atrae visitantes de todo el país. Por su parte, Cholula ofrece un recorrido cultural con historia prehispánica y colonial, complementando perfectamente la experiencia.",
      special: "Lo que distingue este recorrido es la combinación de un evento navideño masivo con la tradición cultural de dos Pueblos Mágicos. La Villa Iluminada en Atlixco crea un ambiente único lleno de luces y festividad, mientras que la visita a la cervecería artesanal añade un toque gastronómico local. Es una experiencia ideal para vivir la temporada decembrina de una forma diferente, rodeado de cultura, luces y sabores regionales.",
    },
    en: {
      why: "This trip combines tradition, culture, and Christmas season in two of the most representative destinations of the state of Puebla. Atlixco stands out for its Illuminated Village, an annual spectacle that attracts visitors from all over the country. For its part, Cholula offers a cultural tour with pre-Hispanic and colonial history, perfectly complementing the experience.",
      special: "What distinguishes this tour is the combination of a massive Christmas event with the cultural tradition of two Magical Towns. The Illuminated Village in Atlixco creates a unique atmosphere full of lights and festivity, while the visit to the artisanal brewery adds a local gastronomic touch. It is an ideal experience to live the December season in a different way, surrounded by culture, lights, and regional flavors.",
    },
  },
  "tecolutla-y-papantla-playa-y-cultura-totonaca": {
    es: {
      why: "Este viaje es ideal para quienes buscan una combinación perfecta entre descanso en la playa y exploración cultural. Tecolutla ofrece un ambiente natural relajado frente al Golfo de México, mientras que Papantla aporta historia, tradición y una identidad cultural profundamente arraigada. Es una experiencia que permite disfrutar de dos facetas muy distintas de Veracruz en un solo recorrido: la tranquilidad del mar y la riqueza cultural de un Pueblo Mágico.",
      special: "Lo que distingue este tour es la combinación de costa y cultura en un mismo día. Pocas experiencias permiten disfrutar del amanecer en la playa y, posteriormente, adentrarse en una de las tradiciones indígenas más importantes de México. La ruta está diseñada para aprovechar el día al máximo, conectando dos destinos emblemáticos de Veracruz con logística organizada, transporte seguro y acompañamiento durante todo el recorrido.",
    },
    en: {
      why: "This trip is ideal for those looking for a perfect combination of beach rest and cultural exploration. Tecolutla offers a relaxed natural environment facing the Gulf of Mexico, while Papantla provides history, tradition, and a deeply rooted cultural identity. It is an experience that allows enjoying two very different facets of Veracruz in a single tour: the tranquility of the sea and the cultural wealth of a Magical Town.",
      special: "What distinguishes this tour is the combination of coast and culture in the same day. Few experiences allow enjoying the sunrise on the beach and, subsequently, delving into one of the most important indigenous traditions in Mexico. The route is designed to make the most of the day, connecting two emblematic destinations of Veracruz with organized logistics, safe transport, and accompaniment throughout the tour.",
    },
  },
  "ruta-maya-8-dias": {
    es: {
      why: "Este viaje es ideal para quienes desean explorar la riqueza cultural y natural del sureste mexicano en una experiencia completa y organizada. La Ruta Maya combina zonas arqueológicas impresionantes, ciudades coloniales, playas paradisíacas y paisajes tropicales en un mismo recorrido, permitiendo descubrir algunos de los lugares más fascinantes de México sin preocuparse por la logística del viaje. Es una experiencia perfecta para amantes de la historia, la fotografía, la cultura maya y los destinos de playa.",
      special: "Lo que distingue este recorrido es la combinación equilibrada entre cultura, arqueología y Caribe mexicano en una sola experiencia de ocho días. Pocas rutas permiten visitar Chichén Itzá, Uxmal, Bacalar, Campeche, Mérida y Playa del Carmen en un mismo viaje, integrando zonas arqueológicas, ciudades coloniales y playas tropicales con vuelos, hospedaje y traslados incluidos. La logística del circuito está diseñada para aprovechar al máximo cada destino, ofreciendo comodidad, coordinación y recorridos estratégicos para disfrutar del sureste mexicano de forma práctica, segura y enriquecedora.",
    },
    en: {
      why: "This trip is ideal for those who want to explore the cultural and natural wealth of the Mexican southeast in a complete and organized experience. The Maya Route combines impressive archaeological zones, colonial cities, paradise beaches, and tropical landscapes in the same tour, allowing you to discover some of the most fascinating places in Mexico without worrying about trip logistics. It is a perfect experience for lovers of history, photography, Mayan culture, and beach destinations.",
      special: "What distinguishes this tour is the balanced combination of culture, archaeology, and the Mexican Caribbean in a single eight-day experience. Few routes allow visiting Chichen Itza, Uxmal, Bacalar, Campeche, Merida, and Playa del Carmen in the same trip, integrating archaeological zones, colonial cities, and tropical beaches with flights, lodging, and transfers included. The circuit logistics are designed to make the most of each destination, offering comfort, coordination, and strategic tours to enjoy the Mexican southeast in a practical, safe, and enriching way.",
    },
  },
  "santuario-de-las-luciernagas-y-tlaxcala": {
    es: {
      why: "Esta experiencia es ideal para quienes buscan conectar con la naturaleza y vivir un recorrido diferente lleno de tranquilidad, paisajes boscosos y fenómenos naturales únicos. El Santuario de las Luciérnagas ofrece una oportunidad extraordinaria para admirar uno de los espectáculos bioluminiscentes más impresionantes del país, mientras que Tlaxcala complementa el viaje con historia, cultura y gastronomía tradicional. Es un recorrido perfecto para amantes de la fotografía nocturna, el ecoturismo y las experiencias naturales inmersivas.",
      special: "Lo que distingue este recorrido es la combinación entre cultura, naturaleza y uno de los fenómenos naturales más mágicos de México en una misma experiencia. A diferencia de otros recorridos turísticos, esta actividad permite disfrutar del bosque de forma responsable y respetuosa con el ecosistema, siguiendo protocolos diseñados para proteger el hábitat natural de las luciérnagas y preservar su ciclo de vida. La experiencia nocturna en completa oscuridad, rodeada únicamente por el brillo natural de miles de insectos luminosos, crea un ambiente verdaderamente inolvidable que difícilmente puede compararse con otro destino.",
    },
    en: {
      why: "This experience is ideal for those looking to connect with nature and live a different tour full of tranquility, forested landscapes, and unique natural phenomena. The Firefly Sanctuary offers an extraordinary opportunity to admire one of the most impressive bioluminescent spectacles in the country, while Tlaxcala complements the trip with history, culture, and traditional gastronomy. It is a perfect tour for lovers of nocturnal photography, ecotourism, and immersive natural experiences.",
      special: "What distinguishes this tour is the combination of culture, nature, and one of the most magical natural phenomena in Mexico in the same experience. Unlike other tourist tours, this activity allows enjoying the forest responsibly and respectfully with the ecosystem, following protocols designed to protect the natural habitat of fireflies and preserve their life cycle. The nocturnal experience in complete darkness, surrounded only by the natural glow of thousands of luminous insects, creates a truly unforgettable atmosphere that can hardly be compared to another destination.",
    },
  },
  "santuario-monarca-y-valle-de-bravo": {
    es: {
      why: "Esta experiencia combina aventura, naturaleza y cultura en un solo recorrido. El Santuario de la Mariposa Monarca permite presenciar uno de los fenómenos migratorios más importantes del planeta, mientras que Valle de Bravo complementa el viaje con un ambiente tranquilo, paisajes espectaculares y esencia colonial. Es un recorrido ideal para quienes disfrutan del ecoturismo, la fotografía de naturaleza y las experiencias al aire libre, ofreciendo una conexión auténtica con los bosques mexicanos y sus tradiciones.",
      special: "Lo que hace único este viaje es la posibilidad de observar de cerca uno de los eventos naturales más extraordinarios del mundo dentro de un entorno protegido y lleno de biodiversidad. La combinación entre senderismo en los bosques de oyamel y la visita a un Pueblo Mágico junto al lago convierte esta experiencia en un recorrido completo y memorable. Además, la ruta está diseñada para disfrutar de paisajes naturales, aire puro y momentos únicos en contacto directo con la naturaleza.",
    },
    en: {
      why: "This experience combines adventure, nature, and culture in a single tour. The Monarch Butterfly Sanctuary allows witnessing one of the most important migratory phenomena on the planet, while Valle de Bravo complements the trip with a tranquil atmosphere, spectacular landscapes, and colonial essence. It is an ideal tour for those who enjoy ecotourism, nature photography, and outdoor experiences, offering an authentic connection with Mexican forests and their traditions.",
      special: "What makes this trip unique is the possibility of closely observing one of the most extraordinary natural events in the world within a protected environment full of biodiversity. The combination of hiking in the oyamel forests and visiting a Magical Town by the lake turns this experience into a complete and memorable tour. In addition, the route is designed to enjoy natural landscapes, pure air, and unique moments in direct contact with nature.",
    },
  },
  "tortugas-marinas-tecolutla-y-papantla": {
    es: {
      why: "Esta experiencia es ideal para quienes desean disfrutar algo más que una visita convencional a la playa. La combinación entre ecoturismo, contacto con la naturaleza y cultura tradicional convierte este recorrido en una experiencia significativa y diferente. Tecolutla ofrece paisajes naturales, tranquilidad y actividades ecológicas únicas, mientras que Papantla permite conocer una de las regiones culturales más emblemáticas de Veracruz. El viaje logra equilibrar momentos de relajación con actividades educativas y experiencias memorables en contacto directo con el medio ambiente.",
      special: "Lo que distingue este recorrido es la oportunidad de participar activamente en una actividad de conservación ambiental mientras disfrutas de la costa veracruzana y descubres uno de los Pueblos Mágicos más importantes de México. La experiencia de liberar tortugas marinas al amanecer genera una conexión especial con la naturaleza y convierte el viaje en un recuerdo verdaderamente inolvidable. Además, el recorrido está organizado para aprovechar al máximo cada destino, ofreciendo transporte cómodo, coordinación durante toda la experiencia y una logística enfocada en el turismo responsable.",
    },
    en: {
      why: "This experience is ideal for those who want to enjoy something more than a conventional beach visit. The combination of ecotourism, contact with nature, and traditional culture turns this tour into a significant and different experience. Tecolutla offers natural landscapes, tranquility, and unique ecological activities, while Papantla allows knowing one of the most emblematic cultural regions of Veracruz. The trip manages to balance moments of relaxation with educational activities and memorable experiences in direct contact with the environment.",
      special: "What distinguishes this tour is the opportunity to actively participate in an environmental conservation activity while enjoying the Veracruz coast and discovering one of the most important Magical Towns in Mexico. The experience of releasing sea turtles at dawn generates a special connection with nature and turns the trip into a truly unforgettable memory. In addition, the tour is organized to make the most of each destination, offering comfortable transport, coordination throughout the experience, and logistics focused on responsible tourism.",
    },
  },
  "teotihuacan-express-piramides-e-historia": {
    es: {
      why: "Este viaje es ideal para quienes desean conocer uno de los sitios arqueológicos más importantes de México en poco tiempo, sin sacrificar profundidad histórica ni calidad en la experiencia. Teotihuacán representa un punto clave en la historia prehispánica del país, ofreciendo una conexión directa con una civilización que desarrolló avances arquitectónicos, astronómicos y culturales de gran relevancia.",
      special: "Lo que distingue este tour es su formato express, diseñado para optimizar el tiempo sin perder la esencia del recorrido. Permite conocer las Pirámides de Teotihuacán con una explicación detallada y guiada, ideal para quienes tienen agenda limitada pero buscan una experiencia completa. A diferencia de otros recorridos más largos o sin guía especializado, esta experiencia combina transporte eficiente, introducción cultural, recorrido profesional y regreso ágil, todo en un solo día.",
    },
    en: {
      why: "This trip is ideal for those who want to know one of the most important archaeological sites in Mexico in a short time, without sacrificing historical depth or quality in the experience. Teotihuacán represents a key point in the pre-Hispanic history of the country, offering a direct connection with a civilization that developed architectural, astronomical, and cultural advances of great relevance.",
      special: "What distinguishes this tour is its express format, designed to optimize time without losing the essence of the tour. It allows getting to know the Pyramids of Teotihuacán with a detailed and guided explanation, ideal for those with a limited schedule but looking for a complete experience. Unlike other longer tours or without a specialized guide, this experience combines efficient transportation, cultural introduction, professional tour, and agile return, all in a single day.",
    },
  },
  "tlaquepaque-y-navidalia-magia-navidena": {
    es: {
      why: "La ciudad de Guadalajara se transforma durante la temporada navideña con este increíble parque temático. Navidalia destaca por su propuesta visual y cultural, combinando tecnología, iluminación y tradiciones en un solo lugar. A esto se suma la visita a Tlaquepaque, famoso por su ambiente artístico, su música y su gastronomía, convirtiendo esta experiencia en una opción ideal para disfrutar en familia o en pareja durante la temporada navideña.",
      special: "Este recorrido combina lo mejor de dos mundos: la tradición artesanal y cultural de Tlaquepaque con la innovación y espectacularidad de Navidalia. Podrás explorar talleres artesanales, degustar la gastronomía local y disfrutar del ambiente festivo del Parián, para después adentrarte en un parque lleno de luces, escenarios temáticos y espectáculos envolventes. Es una experiencia diseñada para aprovechar al máximo la temporada navideña sin preocuparte por la logística.",
    },
    en: {
      why: "The city of Guadalajara transforms during the Christmas season with this incredible theme park. Navidalia stands out for its visual and cultural proposal, combining technology, lighting, and traditions in a single place. To this is added the visit to Tlaquepaque, famous for its artistic environment, music, and gastronomy, making this experience an ideal option to enjoy as a family or couple during the Christmas season.",
      special: "This tour combines the best of two worlds: the artisanal and cultural tradition of Tlaquepaque with the innovation and spectacularity of Navidalia. You can explore artisan workshops, taste local gastronomy, and enjoy the festive atmosphere of El Parián, to later enter a park full of lights, themed scenarios, and immersive shows. It is an experience designed to make the most of the Christmas season without worrying about logistics.",
    },
  },
  "ruta-del-tequila-en-tequila": {
    es: {
      why: "Este recorrido es ideal para quienes desean conocer a fondo la cultura del tequila en su lugar de origen. Tequila ofrece una combinación de historia, tradición y paisajes únicos, reconocidos como Patrimonio de la Humanidad por sus campos de agave. Además, la experiencia se complementa con visitas a Tlaquepaque y Chapala, brindando un recorrido variado entre cultura, arte y naturaleza.",
      special: "Lo que distingue esta experiencia es la combinación de tradición tequilera con un recorrido completo por algunos de los destinos más representativos de Jalisco. Podrás conocer de cerca el proceso artesanal del tequila y disfrutar de degustaciones en su lugar de origen. Además, los paisajes de agave azul y el ambiente festivo de la región crean una experiencia auténtica y memorable, complementada con la visita a destinos culturales y naturales cercanos.",
    },
    en: {
      why: "This tour is ideal for those who want to get to know the culture of tequila deeply in its place of origin. Tequila offers a combination of history, tradition, and unique landscapes, recognized as World Heritage for their agave fields. In addition, the experience is complemented with visits to Tlaquepaque and Chapala, providing a varied tour between culture, art, and nature.",
      special: "What distinguishes this experience is the combination of tequila tradition with a complete tour of some of the most representative destinations in Jalisco. You can get a close look at the artisanal process of tequila and enjoy tastings in its place of origin. In addition, the blue agave landscapes and the festive atmosphere of the region create an authentic and memorable experience, complemented by visits to nearby cultural and natural destinations.",
    },
  },
  "ruta-floral-y-cultural-en-tlaxcala": {
    es: {
      why: "Este recorrido ofrece una combinación única de paisajes naturales y riqueza cultural. El Santuario de Girasoles es un espectáculo temporal que solo puede disfrutarse durante su breve temporada de floración, lo que lo convierte en una experiencia especial. Además, el recorrido por Tlaxcala permite conocer su historia, tradiciones y gastronomía, mientras que Val’Quirico ofrece un contraste con su estilo europeo, ideal para una escapada diferente en compañía de pareja, amigos o familia.",
      special: "La experiencia destaca por integrar un atractivo natural de temporada con un recorrido cultural completo. Podrás caminar entre campos de girasoles en su máximo esplendor, disfrutando de un entorno único y lleno de energía. A diferencia de otros recorridos, esta propuesta combina la visita al Santuario de Girasoles con los principales puntos turísticos de Tlaxcala y una parada en Val’Quirico, creando una experiencia variada, equilibrada y visualmente inolvidable.",
    },
    en: {
      why: "This tour offers a unique combination of natural landscapes and cultural wealth. The Sunflower Sanctuary is a temporary spectacle that can only be enjoyed during its brief flowering season, making it a special experience. In addition, the tour through Tlaxcala allows you to know its history, traditions, and gastronomy, while Val’Quirico offers a contrast with its European style, ideal for a different getaway in the company of a partner, friends, or family.",
      special: "The experience stands out for integrating a seasonal natural attraction with a complete cultural tour. You can walk among sunflower fields in their maximum splendor, enjoying a unique and energetic environment. Unlike other tours, this proposal combines the visit to the Sunflower Sanctuary with the main tourist spots of Tlaxcala and a stop in Val’Quirico, creating a varied, balanced, and visually unforgettable experience.",
    },
  },
  "ruta-gastronomica-en-ciudad-de-mexico-burger-tour": {
    es: {
      why: "Este tour es ideal para quienes buscan una forma diferente de explorar la ciudad a través de su gastronomía. Ciudad de México es reconocida por su diversidad culinaria, y este recorrido permite descubrir algunas de las mejores hamburguesas en un solo viaje, acompañado por un experto apasionado por el tema.",
      special: "La experiencia destaca por ser un recorrido guiado por un especialista que ha seleccionado personalmente cada parada. Además, la combinación de diferentes estilos —desde recetas clásicas hasta propuestas innovadoras— convierte este tour en una experiencia variada y completa.",
    },
    en: {
      why: "This tour is ideal for those looking for a different way to explore the city through its gastronomy. Mexico City is recognized for its culinary diversity, and this tour allows discovering some of the best burgers in a single trip, accompanied by an expert passionate about the subject.",
      special: "The experience stands out for being a tour guided by a specialist who has personally selected each stop. In addition, the combination of different styles—from classic recipes to innovative proposals—turns this tour into a varied and complete experience.",
    },
  },
};

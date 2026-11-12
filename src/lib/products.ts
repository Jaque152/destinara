import { IMG } from "./images";
import { PRODUCT_DESCRIPTIONS, PRODUCT_EXTRA_DESCRIPTIONS } from "./productDescriptions";

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
  why?: string;
  special?: string;
  includes?: string[];
  excludes?: string[];
  info?: string[];
  tips?: string;
  featured?: boolean;
  en?: {
    title?: string;
    short?: string;
    summary?: string;
    why?: string;
    special?: string;
    includes?: string[];
    excludes?: string[];
    info?: string[];
    tips?: string;
  };
}

const raw: Product[] = [
  {
    slug: "san-miguel-de-allende-timmyland-y-tradicion-colonial",
    code: "DST-001",
    title: "Arquitectura de Ensueño en San Miguel de Allende: Timmyland y Tradición Colonial",
    short: "Arquitectura de Ensueño en San Miguel de Allende",
    category: "Pueblos Mágicos",
    price: 1960,
    region: "Guanajuato",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.sanMiguel,
    featured: true,
    summary: "",
    en: {
      title: "Dream Architecture in San Miguel de Allende: Timmyland & Colonial Tradition",
      short: "Dream Architecture in San Miguel de Allende",
    },
  },
  {
    slug: "teotihuacan-vuelo-en-globo",
    code: "DST-002",
    title: "Aventura Aérea en Teotihuacán: Vuelo en Globo y Experiencia Cultural",
    short: "Vuelo en Globo en Teotihuacán",
    category: "Naturaleza y Aventura",
    price: 4598,
    region: "Estado de México",
    duration: "8 horas",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.teotihuacanBalloons,
    featured: true,
    summary: "",
    en: {
      title: "Aerial Adventure in Teotihuacán: Hot Air Balloon & Cultural Experience",
      short: "Teotihuacán Balloon Flight",
    },
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
    minPeople: 1,
    image: IMG.taxco,
    summary: "",
    en: {
      title: "Natural Adventure in Taxco: Blue Pools & Colonial Tradition",
      short: "Taxco & Blue Pools",
    },
  },
  {
    slug: "villa-del-carbon-presas-bosques-y-tradicion-artesanal",
    code: "DST-004",
    title: "Escapada Natural y Cultural en Villa del Carbón: Presas, Bosques y Tradición Artesanal",
    short: "Escapada en Villa del Carbón",
    category: "Pueblos Mágicos",
    price: 1030,
    region: "Estado de México",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.forestLake,
    summary: "",
    en: {
      title: "Natural & Cultural Getaway in Villa del Carbón: Dams, Forests & Crafts",
      short: "Villa del Carbón Getaway",
    },
  },
  {
    slug: "huauchinango-cascadas-la-morena",
    code: "DST-005",
    title: "Experiencia Aventura en Huauchinango: Senderismo en Cascadas La Morena + Naturaleza y Pueblo Mágico en la Sierra de Puebla",
    short: "Huauchinango y Cascadas La Morena",
    category: "Naturaleza y Aventura",
    price: 999,
    region: "Puebla",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.waterfall,
    summary: "",
    en: {
      title: "Adventure Experience in Huauchinango: Hiking at Cascadas La Morena + Nature & Magical Town",
      short: "Huauchinango & Cascadas La Morena",
    },
  },
  {
    slug: "puerto-vallarta-y-sayulita-ballenas-jorobadas",
    code: "DST-006",
    title: "Experiencia Ballenas Jorobadas, Sayulita y Puerto Vallarta: Mar, Naturaleza y Riviera del Pacífico",
    short: "Ballenas Jorobadas, Sayulita y Puerto Vallarta",
    category: "Playa y Costa",
    price: 6585,
    region: "Jalisco y Nayarit",
    duration: "3 días",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.sanMiguel,
    featured: true,
    summary: "",
    en: {
      title: "Humpback Whales, Sayulita & Puerto Vallarta: Sea, Nature & Pacific Riviera",
      short: "Humpback Whales, Sayulita & Vallarta",
    },
  },
  {
    slug: "centro-ceremonial-otomi-y-metepec",
    code: "DST-007",
    title: "Experiencia Centro Ceremonial Otomí y Metepec: Tradición, Naturaleza y Cultura Mexiquense",
    short: "Centro Ceremonial Otomí y Metepec",
    category: "Pueblos Mágicos",
    price: 1152,
    region: "Estado de México",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.forestLake,
    summary: "",
    en: {
      title: "Otomi Ceremonial Center & Metepec Experience: Tradition, Nature & Culture",
      short: "Otomi Ceremonial Center & Metepec",
    },
  },
  {
    slug: "chignahuapan-aguas-termales-y-pueblo-magico",
    code: "DST-008",
    title: "Experiencia en Aguas Termales de Chignahuapan + Pueblo Mágico: Relajación, Naturaleza y Tradición en la Sierra de Puebla",
    short: "Aguas Termales de Chignahuapan",
    category: "Naturaleza y Aventura",
    price: 970,
    region: "Puebla",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.waterfall,
    summary: "",
    en: {
      title: "Chignahuapan Hot Springs + Magical Town: Relaxation & Nature in Puebla",
      short: "Chignahuapan Hot Springs",
    },
  },
  {
    slug: "jardines-de-mexico-y-tepoztlan",
    code: "DST-009",
    title: "Experiencia en Jardines de México + Tepoztlán: Naturaleza, Colores y Pueblo Mágico en Morelos",
    short: "Jardines de México y Tepoztlán",
    category: "Naturaleza y Aventura",
    price: 1680,
    region: "Morelos",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.forestLake,
    summary: "",
    en: {
      title: "Jardines de México + Tepoztlán Experience: Nature, Colors & Magical Town",
      short: "Jardines de México & Tepoztlán",
    },
  },
  {
    slug: "grutas-de-cacahuamilpa-y-taxco",
    code: "DST-010",
    title: "Experiencia Grutas de Cacahuamilpa y Taxco: Naturaleza Subterránea y Encanto Colonial",
    short: "Grutas de Cacahuamilpa y Taxco",
    category: "Naturaleza y Aventura",
    price: 1256,
    region: "Guerrero",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.taxco,
    summary: "",
    en: {
      title: "Grutas de Cacahuamilpa & Taxco: Underground Nature & Colonial Charm",
      short: "Grutas de Cacahuamilpa & Taxco",
    },
  },
  {
    slug: "guanajuato-colonial-y-la-gruta-spa",
    code: "DST-011",
    title: "Experiencia Guanajuato Colonial y La Gruta Spa: Historia, Callejones y Aguas Termales",
    short: "Guanajuato Colonial y La Gruta Spa",
    category: "Circuitos",
    price: 4429,
    region: "Guanajuato",
    duration: "2 días",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.sanMiguel,
    summary: "",
    en: {
      title: "Colonial Guanajuato & La Gruta Spa: History, Alleys & Hot Springs",
      short: "Guanajuato & La Gruta Spa",
    },
  },
  {
    slug: "huamantla-la-noche-que-nadie-duerme",
    code: "DST-012",
    title: "Experiencia Huamantla y La Noche que Nadie Duerme: Tradición, Color y Arte Efímero en Tlaxcala",
    short: "Huamantla: La Noche que Nadie Duerme",
    category: "Cultura y Tradición",
    price: 1035,
    region: "Tlaxcala",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.sanMiguel,
    summary: "",
    en: {
      title: "Huamantla & The Night Nobody Sleeps: Tradition, Color & Ephemeral Art",
      short: "Huamantla: The Night Nobody Sleeps",
    },
  },
  {
    slug: "huasteca-potosina-3-dias",
    code: "DST-013",
    title: "Experiencia Huasteca Potosina 3 Días: Cascadas, Ríos Turquesa y Naturaleza Surrealista",
    short: "Huasteca Potosina 3 Días",
    category: "Circuitos",
    price: 6470,
    region: "San Luis Potosí",
    duration: "3 días",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.waterfall,
    featured: true,
    summary: "",
    en: {
      title: "Huasteca Potosina 3-Day Experience: Waterfalls, Turquoise Rivers & Surreal Nature",
      short: "Huasteca Potosina 3 Days",
    },
  },
  {
    slug: "los-tuxtlas-selva-y-acantilados",
    code: "DST-014",
    title: "Experiencia Los Tuxtlas y Punta Roca Partida: Selva, Acantilados y Naturaleza Veracruzana",
    short: "Los Tuxtlas y Punta Roca Partida",
    category: "Circuitos",
    price: 4801,
    region: "Veracruz",
    duration: "2 días",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.waterfall,
    summary: "",
    en: {
      title: "Los Tuxtlas & Punta Roca Partida: Jungle, Cliffs & Veracruz Nature",
      short: "Los Tuxtlas & Punta Roca Partida",
    },
  },
  {
    slug: "tlaxcala-ruta-de-la-miel-y-girasoles",
    code: "DST-015",
    title: "Experiencia Natural en Tlaxcala: Ruta de la Miel y Campos de Girasoles",
    short: "Ruta de la Miel y Girasoles en Tlaxcala",
    category: "Naturaleza y Aventura",
    price: 1570,
    region: "Tlaxcala",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.forestLake,
    summary: "",
    en: {
      title: "Natural Experience in Tlaxcala: Honey Route & Sunflower Fields",
      short: "Honey Route & Sunflowers in Tlaxcala",
    },
  },
  {
    slug: "atlixco-y-cholula-villa-iluminada",
    code: "DST-016",
    title: "Experiencia Navideña en Atlixco: Villa Iluminada, Cerveza Artesanal y Cholula",
    short: "Villa Iluminada en Atlixco y Cholula",
    category: "Cultura y Tradición",
    price: 1240,
    region: "Puebla",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.sanMiguel,
    summary: "",
    en: {
      title: "Christmas Experience in Atlixco: Illuminated Village, Craft Beer & Cholula",
      short: "Atlixco Illuminated Village & Cholula",
    },
  },
  {
    slug: "tecolutla-y-papantla-playa-y-cultura-totonaca",
    code: "DST-017",
    title: "Experiencia Playa Tecolutla + Papantla: Mar, Cultura Totonaca y Pueblo Mágico en la Costa Veracruzana",
    short: "Playa Tecolutla y Papantla",
    category: "Playa y Costa",
    price: 958,
    region: "Veracruz",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.waterfall,
    summary: "",
    en: {
      title: "Tecolutla Beach + Papantla: Sea, Totonac Culture & Magical Town",
      short: "Tecolutla Beach & Papantla",
    },
  },
  {
    slug: "ruta-maya-8-dias",
    code: "DST-018",
    title: "Experiencia Ruta Maya 8 Días: Cultura Maya, Caribe Mexicano y Ciudades Coloniales",
    short: "Ruta Maya 8 Días",
    category: "Circuitos",
    price: 38500,
    region: "Sureste Mexicano",
    duration: "8 días",
    departure: "Vuelo desde CDMX",
    minPeople: 1,
    image: IMG.teotihuacanBalloons,
    featured: true,
    summary: "",
    en: {
      title: "Maya Route 8-Day Experience: Mayan Culture, Mexican Caribbean & Colonial Cities",
      short: "Maya Route 8 Days",
    },
  },
  {
    slug: "santuario-de-las-luciernagas-y-tlaxcala",
    code: "DST-019",
    title: "Experiencia Santuario de las Luciérnagas y Tlaxcala: Bosques Encantados y Magia Nocturna",
    short: "Santuario de las Luciérnagas y Tlaxcala",
    category: "Naturaleza y Aventura",
    price: 1281,
    region: "Tlaxcala",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.forestLake,
    summary: "",
    en: {
      title: "Firefly Sanctuary & Tlaxcala: Enchanted Forests & Nocturnal Magic",
      short: "Firefly Sanctuary & Tlaxcala",
    },
  },
  {
    slug: "santuario-monarca-y-valle-de-bravo",
    code: "DST-020",
    title: "Experiencia Santuario Monarca y Valle de Bravo: Naturaleza, Bosques y Pueblo Mágico",
    short: "Santuario Monarca y Valle de Bravo",
    category: "Naturaleza y Aventura",
    price: 977,
    region: "Estado de México y Michoacán",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.forestLake,
    summary: "",
    en: {
      title: "Monarch Sanctuary & Valle de Bravo: Nature, Forests & Magical Town",
      short: "Monarch Sanctuary & Valle de Bravo",
    },
  },
  {
    slug: "tortugas-marinas-tecolutla-y-papantla",
    code: "DST-021",
    title: "Experiencia Tortugas Marinas, Tecolutla y Papantla: Ecoturismo, Playa y Tradición Veracruzana",
    short: "Tortugas Marinas, Tecolutla y Papantla",
    category: "Playa y Costa",
    price: 1892,
    region: "Veracruz",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.waterfall,
    summary: "",
    en: {
      title: "Sea Turtles, Tecolutla & Papantla: Ecotourism, Beach & Tradition",
      short: "Sea Turtles, Tecolutla & Papantla",
    },
  },
  {
    slug: "teotihuacan-express-piramides-e-historia",
    code: "DST-022",
    title: "Experiencia Tour Teotihuacán Express: Pirámides, Historia y Cultura Prehispánica desde CDMX",
    short: "Tour Teotihuacán Express",
    category: "Cultura y Tradición",
    price: 990,
    region: "Estado de México",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.teotihuacanBalloons,
    summary: "",
    en: {
      title: "Teotihuacán Express Tour: Pyramids, History & Pre-Hispanic Culture from CDMX",
      short: "Teotihuacán Express Tour",
    },
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
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.sanMiguel,
    summary: "",
    en: {
      title: "Christmas Magic in Tlaquepaque & Navidalia",
      short: "Tlaquepaque & Navidalia",
    },
  },
  {
    slug: "ruta-del-tequila-en-tequila",
    code: "DST-024",
    title: "Ruta del Tequila en Tequila: Tradición, Cultura y Paisajes de Agave",
    short: "Ruta del Tequila en Tequila",
    category: "Circuitos",
    price: 4875,
    region: "Jalisco",
    duration: "2 días",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.sanMiguel,
    summary: "",
    en: {
      title: "Tequila Route in Tequila: Tradition, Culture & Agave Landscapes",
      short: "Tequila Route in Tequila",
    },
  },
  {
    slug: "ruta-floral-y-cultural-en-tlaxcala",
    code: "DST-025",
    title: "Ruta Floral y Cultural en Tlaxcala: Santuario de Girasoles y Val’Quirico",
    short: "Santuario de Girasoles y Val’Quirico",
    category: "Naturaleza y Aventura",
    price: 2290,
    region: "Tlaxcala",
    duration: "1 día",
    departure: "Salida desde CDMX",
    minPeople: 1,
    image: IMG.forestLake,
    summary: "",
    en: {
      title: "Floral & Cultural Route in Tlaxcala: Sunflower Sanctuary & Val’Quirico",
      short: "Sunflower Sanctuary & Val’Quirico",
    },
  },
  {
    slug: "ruta-gastronomica-en-ciudad-de-mexico-burger-tour",
    code: "DST-026",
    title: "Ruta Gastronómica en Ciudad de México: Burger Tour",
    short: "Burger Tour en Ciudad de México",
    category: "Cultura y Tradición",
    price: 970,
    region: "Ciudad de México",
    duration: "3.5 horas",
    departure: "Punto de encuentro en CDMX",
    minPeople: 1,
    image: IMG.sanMiguel,
    summary: "",
    en: {
      title: "Gastronomic Route in Mexico City: Burger Tour",
      short: "Mexico City Burger Tour",
    },
  },
];

export const PRODUCTS: Product[] = raw.map((product) => {
  const desc = PRODUCT_DESCRIPTIONS[product.slug];
  const extra = PRODUCT_EXTRA_DESCRIPTIONS[product.slug];

  return {
    ...product,
    summary: desc?.es.summary ?? product.summary,
    why: extra?.es.why ?? product.why,
    special: extra?.es.special ?? product.special,
    includes: desc?.es.includes ?? product.includes,
    excludes: desc?.es.excludes ?? product.excludes,
    info: desc?.es.info ?? product.info,
    tips: desc?.es.tips ?? product.tips,
    en: {
      ...product.en,
      summary: desc?.en.summary ?? product.en?.summary,
      why: extra?.en.why ?? product.en?.why,
      special: extra?.en.special ?? product.en?.special,
      includes: desc?.en.includes ?? product.en?.includes,
      excludes: desc?.en.excludes ?? product.en?.excludes,
      info: desc?.en.info ?? product.en?.info,
      tips: desc?.en.tips ?? product.en?.tips,
    },
  };
});

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelated(product: Product, count = 4): Product[] {
  const sameCategory = PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category
  );
  if (sameCategory.length >= count) return sameCategory.slice(0, count);
  const others = PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category !== product.category
  );
  return [...sameCategory, ...others].slice(0, count);
}

export function getLocalizedProduct(product: Product, lang: "es" | "en" | string): Product {
  if (lang !== "en" || !product.en) return product;
  return {
    ...product,
    title: product.en.title || product.title,
    short: product.en.short || product.short,
    summary: product.en.summary || product.summary,
    why: product.en.why || product.why,
    special: product.en.special || product.special,
    includes: product.en.includes || product.includes,
    excludes: product.en.excludes || product.excludes,
    info: product.en.info || product.info,
    tips: product.en.tips || product.tips,
  };
}

export function formatMXN(amount: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(amount);
}

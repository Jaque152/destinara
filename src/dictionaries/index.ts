import { es, Dictionary } from "./es";
import { en } from "./en";

export type Language = "es" | "en";

export const dictionaries: Record<Language, Dictionary> = {
  es,
  en,
};

export function getDictionary(lang: Language): Dictionary {
  return dictionaries[lang] || dictionaries.es;
}
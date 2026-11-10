"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, dictionaries } from "@/dictionaries";
import { Dictionary } from "@/dictionaries/es";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "destinara_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved && (saved === "es" || saved === "en")) {
        setLangState(saved);
      }
    } catch {
      // LocalStorage deshabilitado o no disponible
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang === "es" ? "es-MX" : "en-US";
    } catch {
      // Ignore
    }
  };

  const dict = dictionaries[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe ser utilizado dentro de LanguageProvider");
  }
  return context;
}
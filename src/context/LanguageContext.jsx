import { createContext, useContext, useState } from "react";

/*
  1️⃣ Creamos el contexto
  Aquí solo declaramos el "estado global"
*/
const LanguageContext = createContext();

/*
  2️⃣ Provider
  Envuelve la aplicación y comparte el idioma
*/
export const LanguageProvider = ({ children }) => {

  // Estado global del idioma (español por defecto)
  const [lang, setLang] = useState("es");

  /*
    Función para alternar idioma
    es -> en
    en -> es
  */
  const toggleLanguage = () => {
    setLang(prev => (prev === "es" ? "en" : "es"));
  };

  /*
    Lo que pongas en value estará disponible
    en cualquier componente
  */
  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


export const useLanguage = () => {
  return useContext(LanguageContext);
};





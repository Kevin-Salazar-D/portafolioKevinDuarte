import { useState } from "react";
import "../../style/menu.css";
import "../../style/experience.css";

//  Importamos el hook del contexto
import { useLanguage } from "../../context/LanguageContext.jsx";

//importamos los textos
import { texts } from "../../information/text.js";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 
  const { lang, toggleLanguage } = useLanguage();

  const traslate = texts.menu[lang];

  return (
    <nav className="menu" aria-label="Menú principal">
      <h1 className="logo">
        <a href="#home">Kevin Duarte</a>
      </h1>

      <div className="menu-right">
        <ul className={`menu-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>{traslate.home}</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>{traslate.experience}</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>{traslate.projects}</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>{traslate.about}</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>{traslate.skills}</a></li>
        </ul>

        <button
          className={`lang-switch ${lang === "en" ? "active" : ""}`}
          onClick={toggleLanguage}
          aria-pressed={lang === "en"}
          aria-label="Cambiar idioma"
          type="button"
        >
          <span className="lang-option">
            {lang === "es" ? "ES" : "EN"}
          </span>
        </button>

        <button
          className="hamburger"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Menu;

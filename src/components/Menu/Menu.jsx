import { useState } from "react";
import "../../style/menu.css";
import "../../style/experience.css";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="menu" aria-label="Menú principal">
      <h1 className="logo"><a href="#home">Kevin Duarte</a></h1>

      <div className="menu-right">
        <ul className={`menu-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>Inicio</a>
          </li>
          <li>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experiencia</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>Sobre Mi</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          </li>
        </ul>

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

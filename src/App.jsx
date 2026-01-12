import Menu from "./components/menu/menu";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal.jsx";
import CardInformation from "./components/CardInformation/CardInformation.jsx";
import Footer from "./components/footer/footer.jsx";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import data from "./information/data.js";
import dataTags from "./information/dataTags.js";
import venteks from "./assets/venteks.webp";
import about from "./assets/about.gif";
import "./App.css";
import { useState } from "react";

function App() {
  const [information, setInformation] = useState([]);
  const [open, setOpen] = useState(false);

  const handleProjectClick = (p) => {
    setInformation(p);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setInformation([]);
  };

  return (
    <>
      <header>
        <Menu />
      </header>

      <main>
        <section id="home" className="hero">
          <span className="hero-role">Full Stack Developer</span>
          <h1 className="hero-name">Kevin Duarte</h1>
          <p className="hero-description">
            Desarrollador de software con 1 año de <strong>experiencia</strong>{" "}
            desarrollando aplicaciones web modernas con <strong>React</strong> y{" "}
            <strong>Node.js</strong>. Enfocado en buenas prácticas y código
            limpio.
          </p>

          <a href="/cvKevinDuarte.pdf" download className="btn-cv">
            Descargar CV <FiDownload />
          </a>

          <div className="hero-contact">
            <a
              href="https://github.com/Kevin-Salazar-D"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-salazar-40a523244/"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:kevinyahirsalazar342@gmail.com"
              className="btn primary"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </section>

        {/* SECCIÓN EXPERIENCIA */}
        <section id="experience" className="hero-experience">
          <h2 className="section-title">Experiencia Profesional</h2>

          <article className="experience-item">
            <header className="experience-header">
              <div className="company-info">
                <img
                  src={venteks}
                  alt="Logo de Venteks"
                  className="company-logo"
                />
                <div>
                  <h3 className="job-title">Desarrollador Web Becario</h3>
                  <span className="company-name">Venteks</span>
                </div>
              </div>
              <time className="experience-date">Sept. 2024 — Sept. 2025</time>
            </header>

            <div className="experience-details">
              <ul>
                <li>
                  Desarrollo de interfaces con <strong>React</strong>,{" "}
                  <strong>Redux Toolkit</strong> y Material UI, consumiendo APIs
                  REST.
                </li>
                <li>
                  Optimización y mantenimiento de código para mejorar el
                  rendimiento y escalabilidad.
                </li>
                <li>
                  Desarrollo backend con <strong>Node.js</strong> y Express bajo
                  arquitectura <strong>MVC</strong>.
                </li>
                <li>
                  Gestión de bases de datos <strong>MySQL</strong> y{" "}
                  <strong>Firebase</strong>, con documentación en Swagger.
                </li>
              </ul>
            </div>
          </article>
        </section>
        {/*Seccion de proyeectos */}
        <section id="projects" className="projects-section">
          <h2 className="section-title">Proyectos</h2>

          <div className="bento-grid">
            {data.map((p, i) => (
              <Card
                key={i}
                img={p.img}
                title={p.title}
                description={p.description}
                typeApp={p.typeApp}
                linkRepo={p.linkRepo}
                tags={p.tags}
                gridCols={p.gridCols}
                gridRows={p.gridRows}
                onClick={() => handleProjectClick(p)}
              />
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <h2 className="section-title">Sobre mí</h2>

          <div className="about-container">
            <div className="about-container-img">
              <img
                src={about}
                className="about-gif"
                alt="Desarrollador full stack trabajando en proyectos web con React y Node.js"
              />
            </div>

            <div className="about-container-details">
              <article>
                <p>
                  Soy{" "}
                  <strong>
                    Desarrollador Full Stack con un año de experiencia
                  </strong>{" "}
                  en el desarrollo de aplicaciones web.
                  <strong> Me considero una persona autodidacta</strong> que le
                  gusta aprender sobre tecnología y todo lo relacionado con la
                  programación.
                </p>
                <p>
                  He trabajado principalmente como{" "}
                  <strong>desarrollador web</strong>, pero me gusta usar más
                  lenguajes de programación y no quedarme en un solo rubro, sino
                  experimentar. Además del desarrollo web, he utilizado{" "}
                  <strong>Java</strong>, <strong>C++</strong> y{" "}
                  <strong>Python</strong>.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/*Seccion de herramientas */}

        <section id="skills" className="tech-section">
          <h2 className="section-title">Skills</h2>

          <div className="tech-grid">
            {dataTags.map((tech, index) => (
              <CardInformation
                key={index}
                title={tech.title}
                icons={tech.icons}
                gridCols={tech.gridCols}
                gridRows={tech.gridRows}
              />
            ))}
          </div>
        </section>

        <Modal
          isOpen={open}
          onClose={handleCloseModal}
          img={information.imagenModal}
          title={information.title}
          aboutProject={information.aboutProject}
          technicalChallenge={information.technicalChallenge}
          typeApp={information.typeApp}
          tags={information.tags}
          linkGit={information.linkRepo}
        />
      </main>
      <Footer
        title={
          <>
            ¿Te interesó mi trabajo? <strong>Hablemos.</strong>
          </>
        }
        linkRepo="https://github.com/Kevin-Salazar-D"
        linkLinkedin="https://www.linkedin.com/in/kevin-salazar-40a523244/"
      />
    </>
  );
}

export default App;

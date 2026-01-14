import { useState } from "react";

//componertes
import Menu from "./components/menu/menu";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal.jsx";
import CardInformation from "./components/CardInformation/CardInformation.jsx";
import Footer from "./components/footer/footer.jsx";

import data from "./information/carData.js";
import dataTags from "./information/dataTags.js";
import icons from "./information/icons.js";

//imagenes
import venteks from "./assets/venteks.webp";
import about from "./assets/about.gif";
// CSS
import "./App.css";
//hoks
import { useLanguage } from "./context/LanguageContext.jsx";
import { texts } from "./information/text.js";

import renderText from "./utils/renderText.jsx";

function App() {
  const [information, setInformation] = useState([]);
  const [open, setOpen] = useState(false);

  const { lang } = useLanguage();

  const traslateP = texts.presentation[lang];
  const traslateE = texts.experience[lang];
  const traslateA = texts.aboutMe[lang];
  const tralateF = texts.footer[lang];

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
          <span className="hero-role">{traslateP.role}</span>
          <h1 className="hero-name">{traslateP.name}</h1>
          <p className="hero-description">
            {renderText(traslateP.description)}
          </p>

          <a
            href={`${import.meta.env.BASE_URL}cvKevinDuarte.pdf`}
            download
            className="btn-cv"
          >
            {traslateP.dowloand} <icons.dowloand />
          </a>

          <div className="hero-contact">
            <a
              href="https://github.com/Kevin-Salazar-D"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
              aria-label="GitHub"
            >
              <icons.github />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-salazar-40a523244/"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
              aria-label="LinkedIn"
            >
              <icons.linkedin />
            </a>
            <a
              href="mailto:kevinyahirsalazar342@gmail.com"
              className="btn primary"
              aria-label="Email"
            >
              <icons.envelpo />
            </a>
          </div>
        </section>

        {/* SECCIÓN EXPERIENCIA */}
        <section id="experience" className="hero-experience">
          <h2 className="section-title">{traslateE.title}</h2>

          <article className="experience-item">
            <header className="experience-header">
              <div className="company-info">
                <img
                  src={venteks}
                  alt="Logo de Venteks"
                  className="company-logo"
                />
                <div>
                  <h3 className="job-title">{traslateE.role}</h3>
                  <span className="company-name">{traslateE.company}</span>
                </div>
              </div>
              <time className="experience-date">{traslateE.date}</time>
            </header>

            <div className="experience-details">
              <ul>
                {traslateE.activities.map((activity, i) => {
                  return <li key={i}>{renderText(activity)}</li>;
                })}
              </ul>
            </div>
          </article>
        </section>
        {/*Seccion de proyeectos */}
        <section id="projects" className="projects-section">
          <h2 className="section-title">
            {texts.projects[lang].title}
          </h2>

          <div className="bento-grid">
            {data.map((p, i) => {
              const project = p[lang];
              //creamos un objeto con la informacio a obtener por el modal
              const objectModal = {
                ...project,
                imageModal: p.imageModal,
                tags: p.tags,
                linkRepo: p.linkRepo,
                typeApp: project.typeApp,
              };

              return (
                <Card
                  key={i}
                  img={p.img}
                  title={project.title}
                  description={project.description}
                  typeApp={project.typeApp}
                  tags={p.tags}
                  linkRepo={p.linkRepo}
                  gridCols={p.gridCols}
                  gridRows={p.gridRows}
                  onClick={() => handleProjectClick(objectModal)}
                />
              );
            })}
          </div>
        </section>

        <section id="about" className="about-section">
          <h2 className="section-title">{traslateA.title}</h2>

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
                 {renderText(traslateA.description)}
                </p>
                <p>
                  {renderText(traslateA.description2)}
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
      title={tech[lang].title}
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
          img={information.imageModal}
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
            {tralateF.title}
          </>
        }
        linkRepo="https://github.com/Kevin-Salazar-D"
        linkLinkedin="https://www.linkedin.com/in/kevin-salazar-40a523244/"
      />
    </>
  );
}

export default App;

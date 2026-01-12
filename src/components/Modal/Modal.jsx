import { useEffect } from "react";
import "../../style/modal.css";
import techIcons from "../../information/icons.js";

const Modal = ({
  isOpen,
  onClose,
  img,
  title,
  aboutProject = "",
  typeApp,
  technicalChallenge = "",
  tags = [],
  linkGit = "#",
}) => {
useEffect(() => {
   
    let frozen = isOpen ? "hidden" : "unset";

    document.body.style.overflow = frozen;

    return () => {
      document.body.style.overflow = frozen;
    };
}, [isOpen]);

  if (!isOpen) return null;

  
  const CloseIcon = techIcons.close;
  const CodeIcon = techIcons.code;
  const GithubIcon = techIcons.github;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          {CloseIcon && <CloseIcon size={24} />}
        </button>

        <div className="modal-grid-layout">
          {/* Imagen */}
          <div className="modal-image-side">
            <img src={img} alt={title} />
            <div className="modal-image-gradient" />
          </div>

          {/* Información */}
          <div className="modal-info-side">
            <header className="modal-header-info">
              <span className="type-badge-alt">{typeApp}</span>
              <h2 className="modal-main-title">{title}</h2>

              <div className="modal-tech-stack">
                {tags.map((tag, i) => {
                  const Icon = techIcons[tag];
                  return Icon ? <Icon key={i} size={22} /> : null;
                })}
              </div>
            </header>

            <hr className="modal-divider" />

            <div className="modal-body-content">
              <section className="modal-text-block">
                <div className="block-title">
                  {CodeIcon && <CodeIcon size={18} />}
                  <span>Sobre el proyecto</span>
                </div>
                <p>{aboutProject}</p>
              </section>

              <section className="modal-text-block">
                <div className="block-title">
                  {CodeIcon && <CodeIcon size={18} />}
                  <span>Desafíos técnicos</span>
                </div>
                <p>{technicalChallenge}</p>
              </section>
            </div>

            <footer className="modal-actions-footer">
              <a
                href={linkGit}
                target="_blank"
                rel="noreferrer"
                className="action-link github"
              >
                {GithubIcon && <GithubIcon size={18} />}
                <span>Ver código</span>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

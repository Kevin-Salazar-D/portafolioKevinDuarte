import "../../style/card.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import techIcons from "../../information/icons.js";

const Card = ({
  img,
  title,
  description,
  typeApp,
  tags = [],
  // Recibimos las props de tamaño (por defecto son 1x1)
  gridCols = "span 1", 
  gridRows = "span 1",
  linkDemo = "#",
  linkRepo = "#",
  onClick 
}) => {
  return (
    <div
      className="project-card"
      onClick={onClick}
      style={{
        "--desktop-col": gridCols,
        "--desktop-row": gridRows
      }}
    >
      <div className="card-image-wrapper">
        <img src={img} alt={title} className="card-image" />
        <div className="card-overlay"></div>
      </div>

      <div className="card-content">
        <span className="type-badge">{typeApp}</span>

        <h3 className="card-title">{title}</h3>

        <p className="card-description">{description}</p>

        <div className="card-footer">
          <div className="tags-container">
            {tags.map((tag, i) => {
              const Icon = techIcons[tag];
              return Icon ? <Icon key={i} size={22} /> : null;
            })}
          </div>

          <div className="links-container">
            <a
              href={linkRepo}
              className="icon-link repo-link"
              target="_blank"
              rel="noreferrer"
              // Evitamos que el click abra el modal
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub />
            </a>
            <a
              href={linkDemo}
              className="icon-link demo-link"
              target="_blank"
              rel="noreferrer"
              // Evitamos que el click abra el modal
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
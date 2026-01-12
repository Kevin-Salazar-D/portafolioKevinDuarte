import React from "react";
import techIcons from "../../information/icons.js";
import "../../style/techCard.css";

const CardInformation = ({
  title,
  icons = [],
  gridCols = "span 1",
  gridRows = "span 1",
}) => {
  return (
    <article
      className="tech-card"
      style={{
        "--desktop-col": gridCols,
        "--desktop-row": gridRows,
      }}
    >
      <div className="tech-header">
        <h3 className="tech-title">{title}</h3>
        {/* Una línea decorativa sutil */}
        <div className="tech-line"></div>
      </div>

      <div className="tech-icons-grid">
        {icons.map((item, index) => {
          const Icon = techIcons[item.icon]; 

          return (
            <div key={index} className="tech-item">
              <div className="icon-wrapper">
                {Icon && <Icon size={40} />}
              </div>
              <span className="icon-name">{item.name}</span> 
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default CardInformation;

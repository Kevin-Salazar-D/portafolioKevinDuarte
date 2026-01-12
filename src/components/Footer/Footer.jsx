import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../../style/footer.css";

const Footer = ({ title, linkRepo, linkLinkedin }) => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p className="footer-cta">
          {title}
        </p>

        <div className="footer-links">
          <a href={linkRepo} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href={linkLinkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="mailto:kevinyahirsalazar342@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Kevin Duarte
        </p>

      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="accent-wrapper">
        <div className="nav-hamburger-spacer">
          <p className="page-title">
            <Link to="">Bertha Wang</Link>
          </p>
          <svg
            className="nav-hamburger-icon"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect y="20" width="75" height="10" rx="0.5rem"></rect>
            <rect y="45" width="75" height="10" rx="0.5rem"></rect>
            <rect y="70" width="75" height="10" rx="0.5rem"></rect>
          </svg>
        </div>
        <menu>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="past-experience">Past Experience</Link>
          </li>
          <li>
            <Link to="extracurricular">Extracurricular</Link>
          </li>
          <li>
            <Link to="contact">Contacts</Link>
          </li>
        </menu>
      </div>
    </header>
  );
};

export default Header;

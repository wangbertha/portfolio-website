import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <header className="page-header">
      <nav className="accent-wrapper">
        <div className="nav-hamburger-spacer">
          <p className="page-title">
            <Link to="">Bertha Wang</Link>
          </p>
          <svg
            onClick={() => setMenuToggle(!menuToggle)}
            className="nav-hamburger-icon"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect y="20" width="75" height="8" rx="0.5rem"></rect>
            <rect y="45" width="75" height="8" rx="0.5rem"></rect>
            <rect y="70" width="75" height="8" rx="0.5rem"></rect>
          </svg>
        </div>
        <menu className={menuToggle ? "shown" : "hidden"}>
          <li className={pathname === "/projects" ? "selected" : ""}>
            <Link to="projects">Projects</Link>
          </li>
          <li className={pathname === "/past-experience" ? "selected" : ""}>
            <Link to="past-experience">Past Experience</Link>
          </li>
          <li className={pathname === "/extracurricular" ? "selected" : ""}>
            <Link to="extracurricular">Extracurricular</Link>
          </li>
          <li className={pathname === "/contact" ? "selected" : ""}>
            <Link to="contact">Contact</Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;

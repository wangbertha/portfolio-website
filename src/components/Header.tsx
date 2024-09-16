import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="accent-wrapper">
        <div className="nav-hamburger-spacer">
          <p className="page-title">Bertha Wang</p>
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
          <li>Projects</li>
          <li>Past Experience</li>
          <li>Extracurricular</li>
          <li>Contacts</li>
        </menu>
      </div>
    </header>
  );
};

export default Header;

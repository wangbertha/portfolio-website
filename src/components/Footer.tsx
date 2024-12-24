import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/wangbertha/portfolio-website"
        target="_blank"
        rel="noreferrer noopener"
      >
        Portfolio Repo{" "}
        <img
          src={new URL("../assets/github-mark-white.svg", import.meta.url).href}
          alt=""
          height={10}
        />
      </a>{" "}
      | Designed in Figma | Built with TypeScript & React | Bertha Wang 2024
    </footer>
  );
};

export default Footer;

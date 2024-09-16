import gitHubLogo from "../assets/github-mark.svg";
import linkedInLogo from "../assets/linkedin-logo.png";
import "../components/SocialsList.css";

const SocialsList = () => {
  return (
    <menu className="socials-list">
      <a
        href="https://github.com/wangbertha"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={gitHubLogo} alt="" />
      </a>
      <a
        href="https://www.linkedin.com/in/wangbertha/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={linkedInLogo} alt="" />
      </a>
    </menu>
  );
};

export default SocialsList;

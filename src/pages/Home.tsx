import SkillsList from "../components/SkillsList";
import SocialsList from "../components/SocialsList";
import {
  skillsLanguages,
  skillsLibrariesFrameworks,
  skillsToolsPlatforms,
} from "../data/skills";
import "./Home.css";

const Home = () => {
  return (
    <section className="page home-page">
      <header>
        <h1>
          Software Engineer / <br /> Web Developer
        </h1>
        <h2>
          Curious and passionate about technology, focused on impact, always
          learning and growing
        </h2>
      </header>
      <p>
        Coming from a background in mechanical engineering and business, I bring
        a diverse set of skills and experiences, including the product
        development process, system design, version control, project management,
        mentorship, creativity, and high attention to detail.
      </p>
      <p>
        Over the past year, I dove into my passion for coding and technology. I
        started my journey first through my interests in data analysis and
        visualization, and I taught myself to build full-stack web applications
        to interact with data. I recently sought formal instruction and
        graduated from{" "}
        <a
          href="https://www.fullstackacademy.com/programs/coding-bootcamp"
          target="_blank"
          rel="noreferrer noopener"
        >
          Fullstack Academy's web development immersive program
        </a>
        . My work includes developing web apps, and I've had the opportunity to
        work with nonprofits and contribute to open source projects.
      </p>
      <div className="skills-list-wrapper">
        <h3>Languages:</h3>
        <SkillsList proficiency="high" list={skillsLanguages} />
        <h3>Libraries & Tools:</h3>
        <SkillsList proficiency="medium" list={skillsLibrariesFrameworks} />
        <h3>Tools & Platforms:</h3>
        <SkillsList proficiency="high" list={skillsToolsPlatforms} />
      </div>
      <SocialsList />
    </section>
  );
};

export default Home;

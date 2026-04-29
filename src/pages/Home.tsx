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
          Data Engineer / <br /> Analyst
        </h1>
        <h2>
          Curious and passionate about technology, focused on impact, always
          learning and growing
        </h2>
      </header>
      <p>
        Coming from a background in mechanical engineering and business, I
        always found myself gravitating towards data and digital technology. I
        integrated it constantly into my work and spent my free time teaching
        myself to build full-stack web applications to interact with data.
      </p>
      <p>
        Eventually, I transitioned into data full-time. I enjoy interacting with
        data in different ways, from processing data and ensuring data accuracy
        to analyzing data for insights. I've had the opportunity to work with
        nonprofits and contribute to open source projects as well.
      </p>
      <div className="skills-list-wrapper">
        <h3>Languages:</h3>
        <SkillsList proficiency="high" list={skillsLanguages} />
        <h3>Libraries:</h3>
        <SkillsList proficiency="medium" list={skillsLibrariesFrameworks} />
        <h3>Platforms:</h3>
        <SkillsList proficiency="high" list={skillsToolsPlatforms} />
      </div>
      <SocialsList />
    </section>
  );
};

export default Home;

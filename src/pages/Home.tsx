import SkillsList from "../components/SkillsList";
import SocialsList from "../components/SocialsList";
import { skillsHigh, skillsMedium } from "../data/skills";
import "./Home.css";

const Home = () => {
  return (
    <section className="page home-page">
      <h1>
        Software Engineer / <br /> Web Developer
      </h1>
      <h2>
        Curious and passionate about technology, focused on impact, always
        learning and growing
      </h2>
      <p>
        Coming from a background in mechanical engineering and business, I'm
        experienced in the product development process, system design, version
        control, project management, mentorship, creativity, and high attention
        to detail.
      </p>
      <p>
        Over the past half year, I dove into my passion for coding and
        technology. I started my journey first through self-learning and am
        currently attending{" "}
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
        <SkillsList proficiency="high" list={skillsHigh} />
        <SkillsList proficiency="medium" list={skillsMedium} />
      </div>
      <SocialsList />
    </section>
  );
};

export default Home;

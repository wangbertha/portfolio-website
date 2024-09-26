import SkillsList from "../components/SkillsList";
import pastExperiences from "../data/past-experiences";
import { pastSkills } from "../data/skills";
import "./PastExperience.css";

const PastExperience = () => {
  return (
    <main className="page past-experience-page">
      <h1>Past Experience</h1>
      <p>
        Prior to starting my career in software engineering, I gained diverse
        skills and experience in mechanical engineering and management.
      </p>
      <SkillsList proficiency="high" list={pastSkills} />
      {pastExperiences.map((experience) => (
        <PastExperienceCard key={experience.role} experience={experience} />
      ))}
    </main>
  );
};

interface PastExperienceCardProps {
  experience: {
    role: string;
    company: string;
    dates: string;
    bullets: string[];
  };
}

const PastExperienceCard = ({ experience }: PastExperienceCardProps) => {
  return (
    <section className="experience-card">
      <header className="experience-header">
        <h2>{experience.role}</h2>
        <h3>{experience.company}</h3>
        <p className="experience-dates">{experience.dates}</p>
      </header>
      <ul className="experience-bullets">
        {experience.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </section>
  );
};

export default PastExperience;

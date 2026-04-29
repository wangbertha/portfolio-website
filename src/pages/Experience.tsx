import { relevantExperiences, pastExperiences } from "../data/experiences";
import { pastSkillsCompetencies, pastSkillsTools } from "../data/skills";
import SkillsList from "../components/SkillsList";
import "./Experience.css";

const Experience = () => {
  return (
    <main className="page experience-page">
      <div className="experience-wrapper">
        <h1>Experience</h1>
        {relevantExperiences.map((experience) => (
          <PastExperienceCard key={experience.role} experience={experience} />
        ))}
      </div>
    </main>
  );
};

interface PastExperienceCardProps {
  experience: {
    role: string;
    company: string;
    dates: string;
    bullets: string[];
    tools?: string[];
  };
}

const PastExperienceCard = ({ experience }: PastExperienceCardProps) => {
  return (
    <section className="experience-card">
      <header className="experience-header">
        <h3>{experience.role}</h3>
        <h4>{experience.company}</h4>
        <p className="experience-dates">{experience.dates}</p>
      </header>
      <ul className="experience-bullets">
        {experience.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      {experience.tools && (
        <SkillsList proficiency="high" list={experience.tools} />
      )}
    </section>
  );
};

export default Experience;

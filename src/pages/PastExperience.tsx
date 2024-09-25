import PastExperienceCard from "../components/PastExperienceCard";
import SkillsList from "../components/SkillsList";
import pastExperiences from "../data/past-experiences";
import { pastSkills } from "../data/skills";
import "./PastExperience.css";

const PastExperience = () => {
  return (
    <main className="page past-experience-page">
      <h1>Past Experience</h1>
      <p>
        Prior to starting my career in software engineering, I gained skills and
        experience in mechanical engineering and management.
      </p>
      <SkillsList proficiency="high" list={pastSkills} />
      {pastExperiences.map((experience) => (
        <PastExperienceCard key={experience.role} experience={experience} />
      ))}
    </main>
  );
};

export default PastExperience;

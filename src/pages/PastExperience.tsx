import PastExperienceCard from "../components/PastExperienceCard";
import SkillsList from "../components/SkillsList";
import pastExperiences from "../data/past-experiences";
import "./PastExperience.css";

const PastExperience = () => {
  const pastSkills = [
    "Product Development",
    "System Design",
    "Modular Design",
    "Version Control",
    "Project Management",
    "Mentorship",
    "Creativity",
    "Attention to Detail",
    "SolidWorks",
    "Power BI",
  ];

  return (
    <main className="past-experience-page">
      <h1>Past Experience</h1>
      <p>
        Prior to starting my career in software engineering, I gained skills and
        experience in mechanical engineering and management.
      </p>
      <SkillsList proficiency="high" list={pastSkills} />
      {pastExperiences.map((experience) => (
        <PastExperienceCard experience={experience} />
      ))}
    </main>
  );
};

export default PastExperience;

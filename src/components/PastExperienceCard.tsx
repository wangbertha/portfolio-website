import "./PastExperienceCard.css";

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
      <div className="experience-header">
        <h2>{experience.role}</h2>
        <h3>{experience.company}</h3>
        <p className="experience-dates">{experience.dates}</p>
      </div>
      <ul className="experience-bullets">
        {experience.bullets.map((bullet) => (
          <li>{bullet}</li>
        ))}
      </ul>
    </section>
  );
};

export default PastExperienceCard;

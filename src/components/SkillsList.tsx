import "./SkillsList.css";

interface SkillsListProps {
  proficiency: string;
  list: string[];
}

const SkillsList = ({ proficiency, list }: SkillsListProps) => {
  return (
    <ul className="skills-list">
      {list.map((skill) => (
        <li className={proficiency}>{skill}</li>
      ))}
    </ul>
  );
};

export default SkillsList;

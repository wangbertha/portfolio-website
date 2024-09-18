import React from "react";
import "./SkillsList.css";

interface SkillsListProps {
  proficiency: string;
  list: string[];
}

const SkillsList: React.FC<SkillsListProps> = ({ proficiency, list }) => {
  return (
    <ul className="skills-list">
      {list.map((skill) => (
        <li className={proficiency}>{skill}</li>
      ))}
    </ul>
  );
};

export default SkillsList;

import ExtracurricularCard from "../components/ExtracurricularCard";
import extracurriculars from "../data/extracurriculars";
import "./Extracurricular.css";

const Extracurricular = () => {
  return (
    <main className="page extracurricular-page">
      <h1>Extracurricular</h1>
      {extracurriculars.map((extracurricular) => (
        <ExtracurricularCard extracurricular={extracurricular} />
      ))}
    </main>
  );
};

export default Extracurricular;

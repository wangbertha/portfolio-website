import extracurriculars from "../data/extracurriculars";
import "./Extracurricular.css";

const Extracurricular = () => {
  return (
    <main className="page extracurricular-page">
      <h1>Extracurricular</h1>
      {extracurriculars.map((extracurricular) => (
        <ExtracurricularCard
          key={extracurricular.title}
          extracurricular={extracurricular}
        />
      ))}
    </main>
  );
};

interface ExtracurricularCardProps {
  extracurricular: {
    title: string;
    image: string;
    link?: string;
  };
}

const ExtracurricularCard = ({ extracurricular }: ExtracurricularCardProps) => {
  return (
    <section className="extracurricular-card">
      {extracurricular.link ? (
        <a
          className="extracurricular-link"
          href={extracurricular.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="extracurricular-image"
            src={extracurricular.image}
            alt=""
          />
        </a>
      ) : (
        <img
          className="extracurricular-image"
          src={extracurricular.image}
          alt=""
        />
      )}
      <h2 className="extracurricular-title">{extracurricular.title}</h2>
    </section>
  );
};

export default Extracurricular;

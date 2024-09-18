import React from "react";
import "./ExtracurricularCard.css";

interface ExtracurricularCardProps {
  extracurricular: {
    title: string;
    image: string;
    link?: string;
  };
}

const ExtracurricularCard: React.FC<ExtracurricularCardProps> = ({
  extracurricular,
}) => {
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

export default ExtracurricularCard;

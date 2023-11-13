import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiSass,
} from "react-icons/di";

import "../style/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
  },
  {
    id: "sass",
    name: "SASS",
    icon: <DiSass />,
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJavascript1 />,
  },
  { id: "react", name: "React", icon: <DiReact /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TechnologiesContainer;

import "./Skills.scss";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "React",
    "Git",
    "Responsive Design",
    "API Integration"
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="skills__grid">
        {skills.map((skill, index) => (
          <div key={index} className="skills__item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
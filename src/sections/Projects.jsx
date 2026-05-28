import "./Projects.scss";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Little Lemon Restaurant",
      desc: "Modern responsive restaurant website with clean UI and smooth UX.",
      tech: "React / SCSS",
      live: "https://little-lemon-resturant-five.vercel.app/",
      github: "https://github.com/faeze-danesh/little-lemon-resturant",
    },
    {
      title: "Weather Dashboard",
      desc: "Real-time weather app using API with search functionality.",
      tech: "React / API / SCSS",
      live: "https://weather-dashboard-delta-henna.vercel.app/",
      github: "https://github.com/faeze-danesh/weather-dashboard",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="projects__card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="projects__cardTop">
              <span className="projects__tag">{project.tech}</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="projects__buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
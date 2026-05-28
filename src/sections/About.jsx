import "./About.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">

      <motion.div
        className="about__container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>

        <p>
          I’m a Frontend Developer focused on building modern, responsive web applications.
        </p>

      </motion.div>

    </section>
  );
};

export default About;
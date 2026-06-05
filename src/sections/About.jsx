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
          I am a Junior Full Stack Developer with experience in React.js,
            Next.js, Node.js, and npm. I enjoy building modern, responsive,
            and user-friendly web applications.
        </p>

      </motion.div>

    </section>
  );
};

export default About;
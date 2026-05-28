import "./Hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Hi, I'm Faeze</h1>
        <h2>Frontend Developer</h2>

        <p>
          I build modern and responsive web applications with React and SCSS.
        </p>

        <div className="hero__buttons">
          <button>View Projects</button>
          <button>Contact Me</button>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
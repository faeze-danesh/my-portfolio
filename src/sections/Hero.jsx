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
        <h1>Faeze Danesh</h1>
        <h2>Junior Full Stack Developer</h2>

        <p>
          I am a passionate junior full stack developer with a strong focus on building dynamic and responsive web applications. My expertise lies in front-end technologies like React and TailwindCSS, alongside back-end technologies like Node.js, Express.js, and MongoDB. I am dedicated to crafting user-friendly solutions that combine functionality with modern design to deliver exceptional user experiences.
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
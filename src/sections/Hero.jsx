import "./Hero.scss";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero__container">

        {/* LEFT SIDE */}
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Faeze Danesh</h1>

          <h2>Junior Full Stack Developer</h2>

          <p>
            I am a Junior Full Stack Developer with experience in React.js,
            Next.js, Node.js, and npm. I enjoy building modern, responsive,
            and user-friendly web applications.
          </p>

          <div className="hero__buttons">
            <a href="#projects">View Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero__image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={profileImage} alt="Faeze Danesh" />
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;
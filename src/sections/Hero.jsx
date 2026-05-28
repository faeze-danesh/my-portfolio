import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Hi, I'm Faeze</h1>
        <h2>Frontend Developer</h2>

        <p>
          I build modern and responsive web applications with React.
        </p>

        <div className="hero__buttons">
          <button>View Projects</button>
          <button>Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
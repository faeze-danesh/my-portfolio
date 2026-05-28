import "./Navbar.scss";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__logo">Faeze Danesh</div>

      <ul className="navbar__links">
        <li className={active === "home" ? "active" : ""}>
          <a href="#home">Home</a>
        </li>
        <li className={active === "about" ? "active" : ""}>
          <a href="#about">About</a>
        </li>
        <li className={active === "skills" ? "active" : ""}>
          <a href="#skills">Skills</a>
        </li>
        <li className={active === "projects" ? "active" : ""}>
          <a href="#projects">Projects</a>
        </li>
        <li className={active === "contact" ? "active" : ""}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
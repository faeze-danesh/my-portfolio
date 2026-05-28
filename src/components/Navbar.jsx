import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Faeze</div>

      <ul className="navbar__links">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
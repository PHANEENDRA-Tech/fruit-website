import {NavLink}from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Fruitful</h2>
      <div className="nav-links">
        <NavLink to="/"end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>
        </nav>
  );
};

export default Navbar;
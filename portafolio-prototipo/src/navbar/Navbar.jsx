import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../public/navbar.css";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <h3>DALTEX</h3>
      <nav className={isNavOpen ? "responsive_nav" : "nav__nav"}>
        <a href="/#">Home</a>
        <a href="/#">portafolio</a>
        <a href="/#">skills</a>
        <a href="/#">contacto</a>
        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
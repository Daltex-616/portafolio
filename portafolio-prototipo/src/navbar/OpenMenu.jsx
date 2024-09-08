import React, { useState } from "react";
import "../public/navbar.css";

export const OpenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="header__open-nav-button" onClick={toggleMenu}>
        {isOpen ? "X" : "="}
      </button>
      {isOpen && (
        <nav className="header__mobile-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../components/styles/MenuBurger.css";

const MenuBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Amandine ETCHART</div>
      <div className="navbar-burger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-list ${isMenuOpen ? "show" : ""}`}>
        <li className="navbar-item">
          <NavLink exact to="/" onClick={toggleMenu}>
            Accueil
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/about" onClick={toggleMenu}>
            Qui suis-je ?
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/parcours" onClick={toggleMenu}>
            Mon Parcours
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/projets" onClick={toggleMenu}>
            Mes Projets
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/technologies" onClick={toggleMenu}>
            Mes Compétences
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" onClick={toggleMenu}>
            Me Contacter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBurger;

import React from "react";
import "../components/styles/MenuBurger.css";
import MenuBurger from "../components/MenuBurger";
import Contact from "../components/Contact";
import "../components/styles/Contact.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <MenuBurger />
      </header>
      <main className="main-content">
        {children}
        <Contact />
      </main>
      <footer className="footer">
        <div className="rectangle"></div>
      </footer>
    </div>
  );
};

export default Layout;

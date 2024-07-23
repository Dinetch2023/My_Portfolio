import React from "react";
import "../components/styles/MenuBurger.css";
import MenuBurger from "../components/MenuBurger";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <MenuBurger />
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer">
        <div className="rectangle"></div>
      </footer>
    </div>
  );
};

export default Layout;

import "../pages/styles/About.css";

import image1 from "../assets/image1.jpg";
function About() {
  return (
    <section className="about">
      <div className="title">
        <h2>Bienvenue !</h2>
        <img class="image" />
      </div>
      <div className="container">
        <p>
          Je m'appelle Amandine ETCHART, et je suis ravie de vous présenter mon
          parcours de reconversion professionnelle, passant du métier
          d'éducatrice de jeunes enfants à celui de développeuse web.
        </p>
        <p>
          Ce site a pour but de partager avec vous les raisons de ce changement,
          les compétences que j'ai acquises, ainsi que les projets que j'ai
          réalisés en tant que développeuse web.
        </p>
      </div>
      <div className="container2">
        <img className="image1" src={image1} alt="cubes" />
      </div>
    </section>
  );
}

export default About;

import React from "react";
import "./styles/Parcours.css";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.jpg";

function Parcours() {
  return (
    <section className="parcours">
      <h2>Mon Parcours</h2>
      <div className="container">
        <div className="container-item">
          <h3>Educatrice de Jeunes Enfants</h3>
          <div id="trait"></div>

          <p>
            Pendant plusieurs années, j'ai travaillé en tant qu'éducatrice de
            jeunes enfants. Dans ce rôle, j'ai eu la chance d'accompagner de
            nombreux enfants dans leur développement, en mettant en place des
            activités pédagogiques et en collaborant étroitement avec les
            familles. Cette expérience m'a permis de développer des compétences
            essentielles telles que la communication, la gestion de projet, et
            la pédagogie.
          </p>
          <img className="image2" src={image2} alt="robot" />
        </div>
        <div className="container-item">
          <img className="image3" src={image3} alt="clavier" />
          <h3>Développement Web</h3>
          <div id="trait"></div>

          <p>
            Au fil du temps, j'ai ressenti le besoin de me lancer dans un
            nouveau défi professionnel. Le développement web s'est imposé comme
            une évidence, car il combine créativité, logique et innovation. J'ai
            alors entrepris de suivre diverses formations en ligne et de
            participer à un bootcamp pour apprendre les bases du code et
            approfondir mes connaissances.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Parcours;

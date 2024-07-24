import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../pages/styles/Projets.css";
import image4 from "../assets/projets/Heure.png";
import image5 from "../assets/projets/Hogwarts.png";
import image6 from "../assets/projets/NoMade.png";
import image7 from "../assets/projets/Geocode.png";

function Projets() {
  const repos = {
    heure: "https://github.com/Dinetch2023/DragonFly",
    hogwarts: "https://github.com/Dinetch2023/Duels-of-Hogwarts",
    nomade: "https://github.com/Dinetch2023/no_made",
    geocode: "https://github.com/Dinetch2023/GeoCode",
  };

  return (
    <section className="projets">
      <h2>Mes Projets à la Wild Code School</h2>
      <div className="container-projet1">
        <div className="projet">
          <a
            href={repos.heure}
            target="_blank"
            rel="noopener noreferrer"
            className="projet-link"
          >
            <div className="projet-img-container">
              <img
                src={image4}
                alt="L'Heure aux quatre coins du monde"
                className="projet-img"
              />
              <i className="fab fa-github projet-icon"></i>
            </div>
          </a>
          <p>
            L'Heure aux quatre coins du monde ! est un site permettant d'accéder
            à l'heure facilement de partout ou que l'on soit.
          </p>
        </div>
        <div className="projet">
          <a
            href={repos.hogwarts}
            target="_blank"
            rel="noopener noreferrer"
            className="projet-link"
          >
            <div className="projet-img-container">
              <img
                src={image5}
                alt="Duels in Hogwarts"
                className="projet-img"
              />
              <i className="fab fa-github projet-icon"></i>
            </div>
          </a>
          <p>
            Duels in Hogwarts est un jeu sur le thème de Harry Potter où deux
            sorciers s'affrontent dans un duel épique de sorts et de stratégies
            dans lequel vous défiez votre adversaire dans une bataille magique
            sans précédent.
          </p>
        </div>
      </div>
      <div className="container-projet2">
        <div className="projet">
          <a
            href={repos.nomade}
            target="_blank"
            rel="noopener noreferrer"
            className="projet-link"
          >
            <div className="projet-img-container">
              <img src={image6} alt="No-made" className="projet-img" />
              <i className="fab fa-github projet-icon"></i>
            </div>
          </a>
          <p>
            No-made est une plateforme dédiée aux amoureux de la nature et de la
            randonnée en France afin de découvrir les plus beaux sentiers et la
            flore unique de notre pays.
          </p>
        </div>
        <div className="projet">
          <a
            href={repos.geocode}
            target="_blank"
            rel="noopener noreferrer"
            className="projet-link"
          >
            <div className="projet-img-container">
              <img src={image7} alt="Geocode" className="projet-img" />
              <i className="fab fa-github projet-icon"></i>
            </div>
          </a>
          <p>
            Prototype d'une application web qui met à disposition une carte
            interactive à destination des utilisateurs de véhicules électriques
            pour la réservation de bornes de recharge.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projets;

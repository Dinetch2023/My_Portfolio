import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faProjectDiagram,
  faChalkboardTeacher,
  faThumbsUp,
  faHeadset,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../pages/styles/Atouts.css";
import image4 from "../assets/image4.jpg";

function Atouts() {
  return (
    <section className="atouts">
      <div className="container-atouts">
        <div className="title-atouts">
          <h2>Mes atouts</h2>
        </div>
        <p>
          Les compétences que j'ai développées en tant qu'éducatrice de jeunes
          enfants sont directement transférables au domaine du développement
          web. Par exemple :
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faComments} />
            <strong> Communication :</strong> En tant qu'éducatrice, j'ai appris
            à expliquer des concepts complexes de manière claire et accessible.
            Cette compétence est cruciale en développement web, où il est
            souvent nécessaire de communiquer avec des clients ou des membres de
            l'équipe non techniques.
          </li>
          <li>
            <FontAwesomeIcon icon={faProjectDiagram} />
            <strong> Gestion de projet :</strong> Organiser des activités
            pédagogiques nécessite de planifier, d'exécuter et de suivre des
            projets, des compétences essentielles pour mener à bien des projets
            de développement web.
          </li>
          <li>
            <FontAwesomeIcon icon={faChalkboardTeacher} />
            <strong> Pédagogie :</strong> La capacité d'apprendre et d'enseigner
            de nouvelles compétences est essentielle dans le développement web,
            un domaine en constante évolution où l'apprentissage continu est
            crucial.
          </li>
          <li>
            <FontAwesomeIcon icon={faThumbsUp} />
            <strong> Persévérance :</strong> Travailler avec des enfants demande
            de la patience et de la persévérance, des qualités tout aussi
            importantes lorsqu'il s'agit de résoudre des problèmes complexes de
            programmation.
          </li>
          <li>
            <FontAwesomeIcon icon={faHeadset} />
            <strong> Écoute et Collaboration :</strong> La collaboration avec
            les familles m'a appris l'importance de l'écoute active et de la
            coopération, des compétences indispensables pour travailler
            efficacement au sein d'une équipe de développement.
          </li>
          <li>
            <FontAwesomeIcon icon={faSyncAlt} />
            <strong> Adaptabilité :</strong> En tant qu'éducatrice, j'ai souvent
            dû adapter les activités et les méthodes pédagogiques en fonction
            des besoins individuels des enfants et des situations imprévues.
            Cette adaptabilité est essentielle dans le développement web, où les
            technologies et les exigences des projets évoluent constamment.
          </li>
        </ul>
      </div>
      <div className="image-container">
        <img src={image4} alt="Illustration liée aux compétences" />
      </div>
    </section>
  );
}

export default Atouts;

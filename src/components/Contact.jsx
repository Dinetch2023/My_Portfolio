import "../components/styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CV from "../../public/CV.pdf";

function Contact() {
  return (
    <div className="contact">
      <a
        href="https://www.linkedin.com/in/dinetch/"
        className="icon-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <span>Linkedin</span>
      </a>
      <a
        href="https://github.com/Dinetch2023"
        className="icon-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
        <span>Github</span>
      </a>
      <a
        href={CV}
        className="icon-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFileAlt} />
        <span>CV</span>
      </a>
      <a href="mailto:dinecth2023@gmail.com" className="icon-link">
        <FontAwesomeIcon icon={faEnvelope} />
        <span>Mail</span>
      </a>
    </div>
  );
}

export default Contact;

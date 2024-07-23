import "../pages/styles/Technologies.css";

function Technologies() {
  return (
    <section className="techno">
      <h2>Technologies</h2>
      <div className="container">
        <div className="container-item">
          <h3>Langages & Librairies</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="container-item">
          <h3>Frameworks</h3>
          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Sass</li>
            <li>NextJS</li>
          </ul>
        </div>
        <div className="container-item">
          <h3>Design</h3>
          <ul>
            <li>Figma</li>
            <li>Excalidraw</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Technologies;

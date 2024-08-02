// component that handles the resume page, Displays my current skillset and has a downloadable option for my resume
export default function Skills() {
  return(
    <div>
      <div>
        <h3 className="mainText">I am proficient in the MERN Development stack:</h3>
        <ul className="list-group">
          <li className="list-group-item">MongoDB</li>
          <li className="list-group-item">Express</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">Node</li>
        </ul>
      </div>
      <br></br>
      <div>
        <h3 className="mainText">
          Languages and Software:
        </h3>
        <ul className="list-group">
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">JavaScript</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">Python</li>
          <li className="list-group-item">SQL</li>
        </ul>
      </div>
      <br></br>
      <div>
        <h4 className="mainText">Download my Resume <a href="src\assets\resume\Austin-Marlatt-Resume.pdf" download="Austin-Marlatt-Resume.pdf">Here.</a></h4>
      </div>
    </div>
  );
}
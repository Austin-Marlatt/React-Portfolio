export default function About() {
  return(
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-6 mainText my-3">About Me:</h1>
      <img className="lead my-3" id="headShotPhoto" src="images\Austin-Marlatt-Headshot.png" alt="Headshot" height="210px" width="200px"></img>
      <hr className="my-4 br-light"></hr>
      <p className="mainText my-3">Hello and welcome to my Portfolio Website!</p>
      <p className="mainText my-3">My name is Austin Marlatt-Foss, and I am currently a student at the University of Oregon's Fullstack Web Development Program. During this program I have learned valuable tools at becoming a Web Developer and would love the opportunity to use these skills on your project.</p>
      <p className="mainText my-3">Take a look around my website to see some of the projects I have worked on and feel free to take a look at my resume to see if I am a good fit for your company or project!</p>
      <p className="mainText my-3">If you have any questions about my resume or projects, feel free to send me a message in the <a href="/Contact">contact</a> section.</p>
    </div>
  </div>
  );
}
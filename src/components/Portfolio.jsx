
export default function Portfolio() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">

      <div className="col">
        <div className="card my-4 h-100">
          <img className="card-img-top" src="/images/NDB.png" alt="Card image cap"></img>
            <div className="card-body">
              <h3 className="card-title">N.D.B.</h3>
              <p className="card-text">Multi-Page web application that utilizes NASA's API.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  <a href="https://austin-marlatt.github.io/nasa-data-base/" className="btn">Visit</a>
                  <a href="https://github.com/Austin-Marlatt/nasa-data-base" className="btn gitHub-btn"><img src="/images/github-mark.png" width="45px"></img></a>
                </small>
              </div>
        </div>
      </div>

      <div className="col">
        <div className="card my-4 h-100">
          <img className="card-img-top" src="/images/Session.png" alt="Card image cap"></img>
            <div className="card-body">
              <h3 className="card-title">Session</h3>
              <p className="card-text">Session is a music-based social media platform currently using the Spotify API and music library.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  <a href="https://session-development-34dcb90af5d9.herokuapp.com/login" className="btn">Visit</a>
                  <a href="https://github.com/Austin-Marlatt/session" className="btn gitHub-btn"><img src="/images/github-mark.png" width="45px"></img></a>
                </small>
              </div>
        </div>
      </div>

      <div className="col">
        <div className="card my-4 h-100">
          <img className="card-img-top" src="/images/NoteTaker.png" alt="Card image cap"></img>
            <div className="card-body">
              <h3 className="card-title">Note Taker</h3>
              <p className="card-text">A web application that allows you to create, save, and delete notes.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  <a href="https://note-taker-app-bb8a4b2e140b.herokuapp.com/notes" className="btn">Visit</a>
                  <a href="https://github.com/Austin-Marlatt/Note_Taker" className="btn gitHub-btn"><img src="/images/github-mark.png" width="45px"></img></a>
                </small>
              </div>
        </div> 
      </div>

      <div className="col">
        <div className="card my-4 h-100">
          <img className="card-img-top" src="/images/StudyGuide.png" alt="Card image cap"></img>
            <div className="card-body">
              <h3 className="card-title">Coding Study Guide</h3>
              <p className="card-text"> This web application helps me keep all of my notes on HTML, CSS, Git, and JavaScript in a single place. While also teaching me the basics on these topics that I will use through out the boot camp.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <a href="https://austin-marlatt.github.io/prework-study-guide/" className="btn">Visit</a>
                <a href="https://github.com/Austin-Marlatt/prework-study-guide" className="btn gitHub-btn"><img src="/images/github-mark.png" width="45px"></img></a>
              </small>
            </div>
        </div>
      </div>
      
      <div className="col">
        <div className="card my-4 h-100">
          <img className="card-img-top" src="/images/JavaScriptQuiz.png" alt="Card image cap"></img>
            <div className="card-body">
              <h3 className="card-title">JavaScript Quiz</h3>
              <p className="card-text">A timed multiple choice quiz based on JavaScript with savable highscores.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  <a href="https://austin-marlatt.github.io/JavaScript-Quiz/" className="btn">Visit</a>
                  <a href="https://github.com/Austin-Marlatt/JavaScript-Quiz" className="btn gitHub-btn"><img src="/images/github-mark.png" width="45px"></img></a>
                </small>
              </div>
            </div>
        </div>

      <div className="col">
        <div className="card my-4 h-100">
          <img className="card-img-top" src="/images/DailyPlanner.png" alt="Card image cap"></img>
            <div className="card-body">
              <h3 className="card-title">Daily Planner</h3>
              <p className="card-text">A Web Application designed to work as a daily planner.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  <a href="https://austin-marlatt.github.io/Daily-Planner/" className="btn">Visit</a>
                  <a href="https://github.com/Austin-Marlatt/Daily-Planner" className="btn gitHub-btn"><img src="/images/github-mark.png" width="45px"></img></a>
                </small>
              </div>
            </div>
        </div>

    </div>
  );
}
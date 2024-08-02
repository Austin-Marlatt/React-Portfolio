export default function Projects({ project }) {

  return (
  <div className="col">
    <div className="card my-4 h-100">
      <img className="card-img-top" src={project.img} alt="Card image cap"></img>
        <div className="card-body">
          <h3 className="card-title">{project.name}</h3>
          <p className="card-text">{project.description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            <a href= {project.website} className="btn">Visit</a>
            <a href= {project.repo} className="btn gitHub-btn"><img src="/images/github-mark.png" width="45px"></img></a>
          </small>
        </div>
    </div>
  </div>
  );
}
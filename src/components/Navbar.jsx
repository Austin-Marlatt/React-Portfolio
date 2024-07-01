// Component that contains the navigation links and the title card for the webpage
export default function Navbar({ Links }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <h1 className="navbar-brand display-6" id="title">Austin Marlatt-Foss</h1>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navLinks" aria-controls="navLinks" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navLinks">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0 me-2">
            {Links.map((Link) => Link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
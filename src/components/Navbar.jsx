export default function Navbar({ Links }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="#">Austin Marlatt</a>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {Links.map((Link) => Link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
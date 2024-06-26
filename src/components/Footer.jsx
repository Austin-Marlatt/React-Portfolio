// Component for the footer, contains 3 links to my Github, LinkedIn, and Stack Overflow accounts.
export default function footer() {
  return (
    <div className="footer fixed-bottom text-light">
      <div className="row my-1">
          <div className= "col-sm-4">
            <a href="https://github.com/Austin-Marlatt"><img src="/images/GitHub_Logo.png" width="15%"></img></a>
          </div>

          <div className= "col-sm-4">
            <a href="https://www.linkedin.com/in/austin-marlatt-412937168/"><img src="/images/In-Blue-48.png" width="6%"></img></a>
          </div>

          <div className= "col-sm-4">
            <a href="https://stackoverflow.com/users/25754555/austin-marlatt?tab=profile"><img src="/images/logo-stackoverflow.png" width="25%"></img></a>
          </div>
      </div>
    </div>
  );
}
// Component for the Nav section in the header utilizes bootstrap and custom CSS styling for dynamic sizing and appearence
// Utilizes the link module to render the Navigation links
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Nav() {
  return (
      <Navbar
        Links={[
          <Link key={1} className="nav-link text-light" to='/'>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </Link>,
          <Link key={2} className="nav-link text-light" href="#" to='/Portfolio'>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
          </Link>,
          <Link key={4} className="nav-link text-light" href="#" to='/Skills'>
            <li className="nav-item">
              <a className="nav-link" href="#">Skills</a>
            </li>
          </Link>,
          <Link key={3} className="nav-link text-light" href="#" to='/Contact'>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </Link>,
        ]}
      />
  );
} 
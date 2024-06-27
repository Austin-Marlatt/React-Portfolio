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
          <Link key={3} className="nav-link text-light" href="#" to='/Contact'>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </Link>,
          <Link key={4} className="nav-link text-light" href="#" to='/Resume'>
            <li className="nav-item">
            <a className="nav-link" href="#">Resume</a>
            </li>
          </Link>,
        ]}
      />
  );
} 
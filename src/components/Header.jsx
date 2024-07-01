// Header component which imports its content from the 'Nav' Component
import Nav from './Nav/';

export default function Header() {

  return (
    <div className="header">
      <Nav />
    </div>
  );
}
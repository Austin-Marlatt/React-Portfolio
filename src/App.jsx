// App handles how the page is going to load, using Outlet, we can dynamically load which page the User wants by loading the matching component to the current URL

import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav'
function App() {

  return (
    <>
        <Nav/>
        <Outlet />
        <Footer />
    </>
  )
}

export default App

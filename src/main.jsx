// Main handles how the react application will render, imports relevnant stlying files and components.
// Utilizes the CreateBrowserRouter module to change the url based on what page we want to be on and dynamically load the matching component

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './components/Contact/';
import Skills from './pages/Skills';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <About/>,
      },
      {
        path: 'Portfolio',
        element: <Portfolio/>,
      },
      {
        path: 'Contact',
        element: <Contact/>,
      },
      {
        path: 'Skills',
        element: <Skills/>,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
);

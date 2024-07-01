// Main handles how the react application will render, imports relevnant stlying files and components.
// Utilizes the CreateBrowserRouter module to change the url based on what page we want to be on and dynamically load the matching component

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact/';
import Resume from './components/Resume';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'Portfolio',
        element: <Portfolio />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
);

import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './components/AboutUs';
import ServicePage from './pages/ServicePage';
import Layout from './Layout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      { path: '', element: <HomePage /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'services', element: <ServicePage /> },
     
    ],
  },
]);

export default router;

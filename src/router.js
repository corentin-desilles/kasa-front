import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { rootLoader } from './loaders/rootLoader';
import HomePage from './pages/HomePage/HomePage';
import Profil from './pages/Profil/Profil';
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ApartmentPage = lazy(() => import('./pages/ApartmentPage/ApartmentPage'));
const Error = lazy(() => import('./pages/ErrorPage/Error'));
const Connexion = lazy(() => import('./pages/Connexion/Connexion'));
const Register = lazy(() =>
  import('./pages/Connexion/pages/Register/Register')
);
const Login = lazy(() => import('./pages/Connexion/pages/Login/Login'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/apart/:apartId',
        element: <ApartmentPage />,
      },
      {
        path: '/connexion',
        element: <Connexion />,
        children: [
          {
            path: '/connexion/register',
            element: <Register />,
          },
          {
            path: '/connexion/login',
            element: <Login />,
          },
        ],
      },
      {
        path: '/profil',
        element: <Profil />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

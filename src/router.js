import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { rootLoader } from './loaders/rootLoader';
import HomePage from './pages/HomePage/HomePage';
import Profil from './pages/Profil/Profil';
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ApartmentPage = lazy(() => import('./pages/ApartmentPage/ApartmentPage'));
const Error = lazy(() => import('./pages/ErrorPage/Error'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const Login = lazy(() => import('./pages/Login/Login'));

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
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },

      {
        path: '/profil',
        element: (
          <ProtectedRoute>
            <Profil />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

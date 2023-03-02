import { lazy } from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { rootLoader } from './loaders/rootLoader';
import Admin from './pages/Admin/Admin';
import HomePage from './pages/HomePage/HomePage';
import Profil from './pages/Profil/Profil';
import { getLogement } from './apis';

const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ApartmentPage = lazy(() => import('./pages/ApartmentPage/ApartmentPage'));
const Error = lazy(() => import('./pages/ErrorPage/Error'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const Login = lazy(() => import('./pages/Login/Login'));

const LogementForm = lazy(() =>
  import('./pages/Admin/AdminLogements/LogementForm/LogementForm')
);
const LogementsListe = lazy(() =>
  import('./pages/Admin/AdminLogements/LogementsListe/LogementsListe')
);
const AdminUsers = lazy(() => import('./pages/Admin/AdminUsers/AdminUsers'));
const AdminLogements = lazy(() =>
  import('./pages/Admin/AdminLogements/AdminLogements')
);

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
        path: '/admin',
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
        children: [
          {
            path: '/admin/logements',
            element: <AdminLogements />,
            children: [
              {
                index: true,
                loader: async () => redirect('/admin/logements/liste'),
              },
              {
                path: '/admin/logements/liste',
                element: <LogementsListe />,
              },
              {
                path: '/admin/logements/add',
                element: <LogementForm />,
              },
              {
                path: '/admin/logements/edit/:logementId',
                loader: async ({ params: { logementId } }) =>
                  getLogement(logementId),
                element: <LogementForm />,
              },
            ],
          },
          {
            path: '/admin/users',
            element: <AdminUsers />,
          },
          {
            index: true,
            loader: async () => redirect('/admin/logements'),
          },
        ],
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

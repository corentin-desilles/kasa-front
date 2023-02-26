import { lazy } from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { rootLoader } from './loaders/rootLoader';
import Admin from './pages/Admin/Admin';
import HomePage from './pages/HomePage/HomePage';
import AdminLogements from './pages/Admin/AdminLogements/AdminLogements';
import Profil from './pages/Profil/Profil';
import AdminUsers from './pages/Admin/AdminUsers/AdminUsers';
import LogementsListe from './pages/Admin/AdminLogements/LogementsListe/LogementsListe';
import AddLogement from './pages/Admin/AdminLogements/AddLogement/AddLogement';
import EditLogement from './pages/Admin/AdminLogements/EditLogement/EditLogement';
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
                path: '/admin/logements/liste',
                element: <LogementsListe />,
              },
              {
                path: '/admin/logements/add',
                element: <AddLogement />,
              },
              {
                path: '/admin/logements/edit/:apartId',
                element: <EditLogement />,
              },
              {
                index: true,
                loader: async () => redirect('/admin/logements/liste'),
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

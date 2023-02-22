import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import HomePage from './pages/HomePage/HomePage';
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ApartmentPage = lazy(() => import('./pages/ApartmentPage/ApartmentPage'));
const Error = lazy(() => import('./pages/ErrorPage/Error'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

import style from './Connexion.module.scss';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import HeaderConnexion from './components/HeaderConnexion/HeaderConnexion';

function Connexion() {
  return (
    <div className={`${style.container}`}>
      <HeaderConnexion />
      <div className={`${style.formContainer}`}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default Connexion;

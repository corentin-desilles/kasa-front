import { Suspense } from 'react';
import { Outlet } from 'react-router';
import AdminNav from './components/AdminNav/AdminNav';
import style from './Admin.module.scss';

function Admin() {
  return (
    <div className={`d-flex flex-fill p-20 ${style.adminContainer}`}>
      <AdminNav />
      <div className="d-flex flex-column flex-fill">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default Admin;

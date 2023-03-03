import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';
import AdminLogementNav from './components/AdminLogementNav/AdminLogementNav';

function AdminLogements() {
  const { key } = useLocation();
  return (
    <div className="d-flex flex-column">
      <h4 className="mb-20">Gestion des logements</h4>
      <div className="flex-fill d-flex flex-column">
        <AdminLogementNav />
        <div className="flex-fill d-flex flex-column">
          <Suspense>
            <Outlet key={key} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default AdminLogements;

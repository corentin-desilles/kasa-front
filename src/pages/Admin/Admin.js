import AddLogement from './components/AddLogement';
import LogementList from './components/LogementList';

function Admin() {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-20">
      <div className="card p-20">
        <h1 className="mb-20">Admin</h1>
        <AddLogement />
        <LogementList />
      </div>
    </div>
  );
}

export default Admin;

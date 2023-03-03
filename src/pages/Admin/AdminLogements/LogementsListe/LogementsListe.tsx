import { useFetchLogements } from 'hooks';
import Loading from 'components/Loading/Loading';
import style from './LogementsListe.module.scss';
import { deleteLogement as deleteL } from 'apis';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { logementsState } from 'state';
import { ObjectId } from 'types';

function LogementsListe() {
  const [isLoading] = useFetchLogements();
  const [logements, setLogements] = useRecoilState(logementsState);

  async function deleteLogement(_id: ObjectId) {
    console.log(_id);
    await deleteL(_id);
    setLogements(logements.filter(l => l._id !== _id));
  }

  return (
    <div>
      {isLoading && !logements.length ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className={`${style.list}`}>
          {logements.map(l => (
            <div key={l._id} className={`${style.item}`}>
              <span className="flex-fill">{l.title}</span>
              <NavLink to={`/admin/logements/edit/${l._id}`}>
                <button className="btn btn-primary mr-15"> Editer</button>
              </NavLink>
              <button
                onClick={() => deleteLogement(l._id)}
                className="btn btn-danger"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default LogementsListe;

import { useContext } from 'react';
import { useFetchLogements } from '../../../../hooks';
import Loading from '../../../../components/Loading/Loading';
import { ApiContext } from '../../../../context/ApiContext';
import style from './LogementsListe.module.scss';

function LogementsListe() {
  const BASE_URL_API = useContext(ApiContext);
  const [logements, isLoading] = useFetchLogements(BASE_URL_API);

  return (
    <div>
      {isLoading && !logements.length ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className={`${style.list}`}>
          {logements.map(l => (
            <div className={`${style.item}`}>{l.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}
export default LogementsListe;

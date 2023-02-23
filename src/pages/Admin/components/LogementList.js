import style from './LogementList.module.scss';
import Loading from '../../../components/Loading/Loading';
import ItemLogement from './ItemLogement';
import { useContext } from 'react';
import { ApiContext } from '../../../context/ApiContext';
import { useFetchData } from '../../../hooks';

function LogementList() {
  const BASE_URL_API = useContext(ApiContext);
  const [logements, isLoading] = useFetchData(BASE_URL_API);

  return (
    <>
      <h2>LogementList</h2>
      {isLoading && !logements.length ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className={`${style.listContainer}`}>
          {logements.map(l => (
            <div key={l.id}>
              <ItemLogement logement={l} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default LogementList;

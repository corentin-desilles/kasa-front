import Gallery from './components/Gallery/Gallery';
import NameTag from './components/NameTag/NameTag';
import Title from './components/Title/Title';
import Rate from './components/Rate/Rate';
import Host from './components/Host/Host';
// import Error from '../ErrorPage/Error';
// import Description from './components/Description/Description';
import { ApiContext } from '../../context/ApiContext';
import { useFetchData } from '../../hooks';
import { Navigate, useParams } from 'react-router';
import { useContext, useState } from 'react';
import style from './ApartmentPage.module.scss';
// import Description from './components/Description/Description';
// import Equipements from './components/Equipements/Equipements';
import Loading from '../../components/Loading/Loading';
import Collapse from '../../components/Collapse/Collapse';

function ApartmentPage() {
  const BASE_URL_API = useContext(ApiContext);
  const [logements, isLoading] = useFetchData(BASE_URL_API);
  const { apartId } = useParams();
  // const logementExiste = logements.find(lo => lo._id === apartId._id);

  const [selected, setSelected] = useState(null);

  const toggleD = i => {
    //ferme les autres elem si j'en ouvre un autre
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const toggleE = i => {
    //ferme les autres elem si j'en ouvre un autre
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  let targetedLogement = logements.find(logement => logement._id === apartId);

  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : targetedLogement ? (
        <div
          key={targetedLogement._id}
          className={`${style.container}`}
          handleScrollTop={scrollTop()}
        >
          <div
            className={`${style.carousselContainer} ${style.animate1} mb-30`}
          >
            <Gallery targetedLogement={targetedLogement} />
          </div>
          <div className={`${style.bodyContainer} ${style.animate2}`}>
            <div className={`${style.titleAndTagContainer}`}>
              <div className={`${style.titleContainer} mb-20`}>
                <Title targetedLogement={targetedLogement} />
              </div>
              <div className={`${style.nameTagContainer}`}>
                {targetedLogement.tags.map(tag => (
                  <NameTag key={Math.random()} tag={tag} />
                ))}
              </div>
            </div>
            <div className={`${style.hostAndRateContainer}`}>
              <div className={`${style.hostContainer}`}>
                <Host targetedLogement={targetedLogement} />
              </div>
              <div className={`${style.rateContainer}`}>
                <Rate targetedLogement={targetedLogement} />
              </div>
            </div>
          </div>

          <div className={`${style.descriptionContainer} ${style.animate3}`}>
            <div className={`${style.accordion} ${style.animate3}`}>
              <Collapse
                key={targetedLogement.description}
                text={targetedLogement.description}
                title={'Description'}
                toggle={toggleD}
                selected={selected}
              />
            </div>
            <div className={`${style.accordion} ${style.animate3}`}>
              <Collapse
                key={Math.random()}
                text={targetedLogement.equipments}
                title={'Equipements'}
                toggle={toggleE}
                selected={selected}
              />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
}

export default ApartmentPage;

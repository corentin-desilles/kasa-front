import Gallery from './components/Gallery/Gallery';
import NameTag from './components/NameTag/NameTag';
import Title from './components/Title/Title';
import Rate from './components/Rate/Rate';
import Host from './components/Host/Host';
import { useFetchLogements } from 'hooks';
import { Navigate, useParams } from 'react-router';
import style from './ApartmentPage.module.scss';
import Loading from 'components/Loading/Loading';
import Collapse from 'components/Collapse/Collapse';
import { useRecoilState } from 'recoil';
import { logementsState } from 'state';

function ApartmentPage() {
  const [isLoading] = useFetchLogements();
  const [logements] = useRecoilState(logementsState);

  const { apartId } = useParams();

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  let targetedLogement = logements.find(logement => logement._id === apartId);
  console.log(apartId);

  return (
    <>
      {isLoading && !logements.length ? (
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
              />
            </div>
            <div className={`${style.accordion} ${style.animate3}`}>
              <Collapse
                key={Math.random()}
                text={targetedLogement.equipment}
                title={'Equipements'}
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

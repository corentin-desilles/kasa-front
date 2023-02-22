import Banner from '../../components/Banner/Banner';
import ApartmentCard from './components/ApartmentCard/ApartmentCard';
import style from './HomePage.module.scss';
import { useContext, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import { ApiContext } from '../../context/ApiContext';
import { useFetchData } from '../../hooks';
import bannerImage from '../../assets/images/banniereAccueil.png';

function HomePage() {
  const [page, setPage] = useState(1);
  const BASE_URL_API = useContext(ApiContext);
  const [logements, isLoading] = useFetchData(BASE_URL_API, page);

  return (
    <>
      <div
        className={` ${style.bannerContainer} ${style.animate} ${style.animateTime1}`}
      >
        <Banner banner={bannerImage} displayBannerText={true} />
      </div>

      <section
        className={`${style.apartmentsLayout} ${style.animate} ${style.animateTime2}`}
      >
        {isLoading && !logements.length ? (
          <div>
            <Loading />
          </div>
        ) : (
          <>
            <div className={` ${style.grid}`}>
              {logements.map(l => (
                <div
                  className={`${style.animate} ${style.animateTime3}`}
                  key={l._id}
                >
                  <ApartmentCard logement={l} />
                </div>
              ))}
            </div>
            <div
              className={` ${style.animate}  d-flex flex-row justify-content-center align-items-center mb-2`}
            >
              <button
                onClick={() => setPage(page + 1)}
                className={`btn btn-reverse-primary m-50 ${style.buttonStyle} `}
              >
                Charger plus de logements
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default HomePage;

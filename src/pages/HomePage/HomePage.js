import Banner from 'components/Banner/Banner';
import ApartmentCard from './components/ApartmentCard/ApartmentCard';
import style from './HomePage.module.scss';
import { useState } from 'react';
import Loading from 'components/Loading/Loading';
import { useFetchLogements } from 'hooks';
import bannerImage from 'assets/images/banniereAccueil.png';
import { useRecoilValue } from 'recoil';
import { selectFilteredLogements } from 'state';

function HomePage() {
  const [filter, setFilter] = useState('');

  const [page, setPage] = useState(1);
  const [isLoading] = useFetchLogements();
  const logements = useRecoilValue(selectFilteredLogements(filter));

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <>
      <div
        className={` ${style.bannerContainer} ${style.animate} ${style.animateTime1}`}
      >
        <Banner banner={bannerImage} displayBannerText={true} />
      </div>

      <section
        className={`${style.apartmentsLayout} ${style.animate} ${style.animateTime2} br`}
      >
        {isLoading && !logements.length ? (
          <div>
            <Loading />
          </div>
        ) : (
          <>
            <div
              className={`d-flex flex-row justify-content-center align-items-center ${style.searchBarContainer}`}
            >
              <i className="fa-solid fa-magnifying-glass mr-5"></i>
              <input
                onInput={handleInput}
                type="text"
                placeholder="Localisation"
                className="flex-fill"
              />
            </div>

            <div className={` ${style.grid}`}>
              {logements
                .filter(l => l.location.toLowerCase().startsWith(filter))
                .map(l => (
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

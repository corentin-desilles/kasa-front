// import { useState } from 'react';
// import Picture from './components/Picture';
// import style from './Pictures.module.scss';
// import { data } from '../../../../data/logements';
import style from './Gallery.module.scss';
import { useState } from 'react';

function Gallery({ targetedLogement: { pictures } }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  function handleClickPreviousPhoto() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setAnimate(true);
  }
  function handleClickNextPhoto() {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setAnimate(true);
    console.log(pictures.length);
  }

  return pictures.length === 1 ? (
    <div className={`${style.sliderStyle}`}>
      <img
        src={pictures[currentIndex]}
        key={Math.random()}
        className={`${style.slideStyle}`}
        alt="interieur de l'appartement"
      />
    </div>
  ) : (
    <div className={`${style.sliderStyle}`}>
      <i
        onClick={handleClickPreviousPhoto}
        className={`fa-solid fa-angle-up ${style.arrowLeft}`}
      ></i>
      <i
        onClick={handleClickNextPhoto}
        className={`fa-solid fa-angle-up ${style.arrowRight} `}
      ></i>

      {animate === true ? (
        <img
          src={pictures[currentIndex]}
          key={Math.random()}
          className={`${style.slideStyle} ${style.animate}`}
          alt="interieur de l'appartement"
        />
      ) : (
        <img
          src={pictures[currentIndex]}
          key={Math.random()}
          className={`${style.slideStyle}`}
          alt="interieur de l'appartement"
        />
      )}

      <div className={`${style.counterPosition}`}>
        <p>
          {currentIndex + 1}/{pictures.length}
        </p>
      </div>
    </div>
  );
}

export default Gallery;

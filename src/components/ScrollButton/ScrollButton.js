import { useEffect, useState } from 'react';
import style from './ScrollButton.module.scss';

function ScrollButton() {
  const [showBtn, setShowbtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowbtn(true);
      } else {
        setShowbtn(false);
      }
    });
  }, []);

  function handleClickScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className={`${style.scrollBtnContainer}`}>
      {showBtn && (
        <i
          onClick={handleClickScrollTop}
          className={`fa-solid fa-angle-up ${style.scrollBtn}`}
        ></i>
      )}
    </div>
  );
}

export default ScrollButton;

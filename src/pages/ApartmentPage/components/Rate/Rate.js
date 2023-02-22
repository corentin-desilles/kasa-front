// import { useState } from "react";
import style from './Rate.module.scss';

function Rate({ targetedLogement: { rating } }) {
  // const [Normalstars, setNormalStars] = useState(0);
  const totalStars = 5;
  const activeStars = rating;

  return (
    <div className={`${style.container}`}>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? (
          <i
            className={` fa-sharp fa-solid fa-star fa-2xl  ${style.starToggled} `}
            key={Math.random()}
          ></i>
        ) : (
          <i
            className={` fa-sharp fa-solid fa-star fa-2xl  ${style.starBasic} `}
            key={Math.random()}
          ></i>
        );
      })}
    </div>
  );
}

export default Rate;

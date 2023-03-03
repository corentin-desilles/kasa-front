import style from './ApartmentCard.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ObjectId } from 'types';

function AppartmentCard({
  logement: { _id, title, cover },
}: {
  logement: { _id: ObjectId; title: string; cover: string };
}) {
  const [liked, setLiked] = useState(false);

  function handleClickLike() {
    setLiked(!liked);
  }
  return (
    <>
      <div className={`${style.apartementCard}`}>
        <Link to={`/apart/${_id}`}>
          <div className={`${style.imageContainer}`}>
            <img src={cover} alt="appartement" />
          </div>
        </Link>
        <div className={`${style.cardTitleContainer}`}>
          <p className={`${style.cardTitle}`}>{title}</p>
          <i
            onClick={handleClickLike}
            className={`fa-solid fa-heart ${
              liked ? style.heartActive : style.heartInactive
            } `}
          ></i>
        </div>
      </div>
    </>
  );
}

export default AppartmentCard;

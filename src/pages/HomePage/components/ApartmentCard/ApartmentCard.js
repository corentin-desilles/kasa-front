import style from './ApartmentCard.module.scss';
import { Link } from 'react-router-dom';

function AppartmentCard({ logement: { _id, title, cover } }) {
  return (
    <Link to={`/apart/${_id}`}>
      <div className={`${style.apartementCard}`}>
        <div className={`${style.imageContainer}`}>
          <img src={cover} alt="appartement" />
        </div>
        <p className={`${style.cardTitle}`}>{title}</p>
      </div>
    </Link>
  );
}

export default AppartmentCard;

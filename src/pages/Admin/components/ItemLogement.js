import style from './ItemLogement.module.scss';

function ItemLogement({ logement: { cover, title } }) {
  return (
    <div className={`${style.itemContainer}`}>
      <span className={`${style.hiddentxt}`}>
        <a href={cover}>
          <div className={`${style.title}`}>{title}</div>
        </a>
      </span>
      <span className={`${style.hiddenimg}`}>
        <img src={cover} alt="apart" />
      </span>
      <button className="btn btn-primary">Edit</button>
    </div>
  );
}

export default ItemLogement;

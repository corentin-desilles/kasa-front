import style from "./Host.module.scss";

function Host({
  targetedLogement: {
    host: { name, picture },
  },
}) {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.nameContainer}`}>{name}</div>
      <div className={`${style.pictureContainer}`}>
        <img className={`${style.imgStyle} `} src={picture} alt={`${name}`} />
      </div>
    </div>
  );
}

export default Host;

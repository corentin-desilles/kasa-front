import style from "./Title.module.scss";

function Title({ targetedLogement: { title, location } }) {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.apartmentPageTitle}`}>{title}</div>
      <div className={`${style.apartmentPageLocation}`}> {location} </div>
    </div>
  );
}
export default Title;

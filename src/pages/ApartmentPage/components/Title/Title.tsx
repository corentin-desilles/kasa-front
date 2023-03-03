import style from './Title.module.scss';

function Title({
  targetedLogement: { title, location },
}: {
  targetedLogement: { title: string; location: string };
}) {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.apartmentPageTitle}`}>{title}</div>
      <div className={`${style.apartmentPageLocation}`}> {location} </div>
    </div>
  );
}
export default Title;

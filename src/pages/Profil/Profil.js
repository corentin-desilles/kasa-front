import style from './Profil.module.scss';

function Profil() {
  return (
    <div className={`${style.profilContainer}`}>
      <div>Username :</div>
      <div>Email :</div>
      <div>Password :</div>
    </div>
  );
}

export default Profil;

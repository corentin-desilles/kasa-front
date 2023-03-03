import style from "./Error.module.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className={`${style.errorContainer}`}>
      <div className={`${style.errorStyle}`}>404</div>
      <div className={`${style.msgErrorStyle}`}>
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link className={`${style.linkStyle}`} to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;

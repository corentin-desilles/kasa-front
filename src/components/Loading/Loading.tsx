import style from "./Loading.module.scss";

function Loading() {
  return (
    <div
      className={`d-flex align-items-center justify-content-center flex-fill ${style.loaderContainer} `}
    >
      <i className={`fa-solid fa-spinner ${style.loader} `}></i>
    </div>
  );
}

export default Loading;

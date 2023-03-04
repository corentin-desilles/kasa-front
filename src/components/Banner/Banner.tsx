import style from './Banner.module.scss';

function Banner({
  banner,
  displayBannerText,
}: {
  banner: string;
  displayBannerText: boolean;
}) {
  return (
    <section className={`${style.bannerLayout}`}>
      {displayBannerText ? (
        <p className={`${style.bannerText}`}>Chez vous, partout et ailleurs</p>
      ) : (
        ''
      )}
      <img
        src={banner}
        className={`${style.bannerImageLayout}`}
        alt="paysage montagneux au bord de la mer"
      />
    </section>
  );
}

export default Banner;

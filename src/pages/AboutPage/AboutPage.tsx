import Banner from 'components/Banner/Banner';
import { about } from 'data/about.js';
import bannerAbout from 'assets/images/bannerAbout.png';
import style from './AboutPage.module.scss';
import Collapse from 'components/Collapse/Collapse';

function AboutPage() {
  return (
    <>
      <div className={`${style.aboutPageContainer}`}>
        <div className={`${style.bannerContainer}`}>
          <Banner banner={bannerAbout} displayBannerText={false} />
        </div>

        <div className={`${style.wrapper}`}>
          <div className={`${style.accordion}`}>
            {about.map(about => (
              <Collapse
                key={about.title}
                text={about.text}
                title={about.title}
              />
            ))}
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default AboutPage;

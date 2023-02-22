import Banner from '../../components/Banner/Banner.js';
import AboutPageBtn from './components/AboutPageBtn/AboutPageBtn';
import { about } from '../../data/about.js';
import bannerAbout from '../../assets/images/bannerAbout.png';
// import Footer from '../../components/Footer/Footer';
import style from './AboutPage.module.scss';
import { useState } from 'react';

function AboutPage() {
  const [selected, setSelected] = useState(null);

  const toggle = i => {
    //ferme les autres elem si j'en ouvre un autre
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <div className={`${style.aboutPageContainer}`}>
        <div className={`${style.bannerContainer}`}>
          <Banner banner={bannerAbout} />
        </div>

        <div className={`${style.wrapper}`}>
          <div className={`${style.accordion}`}>
            {about.map((about, i) => (
              <AboutPageBtn
                key={about.title}
                text={about.text}
                title={about.title}
                i={i}
                toggle={toggle}
                selected={selected}
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

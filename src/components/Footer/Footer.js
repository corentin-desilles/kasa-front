import style from './Footer.module.scss';
import footerLogo from '../../assets/images/footerLogo.png';

function Footer() {
  return (
    <footer className={`${style.footerLayout}`}>
      <div className={`${style.footerLogo}`}>
        <img src={footerLogo} alt="logo Kasa" />
      </div>
      <p className={`${style.footerText}`}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

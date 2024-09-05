import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { t, i18n } = useTranslation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeLanguage = (lng) => {
    closeMobileMenu();
    i18n.changeLanguage(lng);
    window.scrollTo(0, 0);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='langbar'>
        <div className='langbar-container'>
          <Link to='#' className='lang-links' onClick={() => changeLanguage('ar')}>
                عربية
          </Link>
          <Link to='#' className='lang-links' onClick={() => changeLanguage('he')}>
                עברית
          </Link>
          <Link to='#' className='lang-links' onClick={() => changeLanguage('en')}>
                English
          </Link>
        </div>
      </nav>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='./images/LogoWhite.png' height='115' width='115' alt='Masaha' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                {t('home')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                {t('about')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
                {t('contactus')}
              </Link>
            </li>

            <li>
              <Link to='/services' className='nav-links-mobile' onClick={closeMobileMenu}>
                {t('services')}
              </Link>
            </li>
          </ul>
          {button && <Button toPage='/services' buttonStyle='btn--outline'>{t('services')}</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  
  return (
    <div className='footer-container'>
     {/*} <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact Us
        </p>
        <div className='input-areas'>
          <form>
          <input className='footer-input' name='name' type='text' placeholder='Your Name' />
            <input className='footer-input' name='email' type='email' placeholder='Your Email' />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section> */}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>{t('navigation')}</h2>
            <Link to='/'>{t('home')}</Link>
            <Link to='/about'>{t('about')}</Link>
            <Link to='/'>{t('careers')}</Link>
            <Link to='/services'>{t('ourservices')}</Link>
            <Link to='/contactus'>{t('contactus')}</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>{t('socials')}</h2>
            <Link to='#'>Instagram</Link>
            <Link to='#'>Facebook</Link>
            <Link to='#'>LinkedIn</Link>
          </div>
          <div className='footer-link-items'>
            <h2>{t('details')}</h2>
            <Link to='#'>{t('peter')}: 052-8951060</Link>
            <Link to='#'>{t('etienne')}: 052-2982290</Link>
            <Link to='#'>{t('email')}: office@masaha.co.il</Link>
            <Link to='#'>{t('address')}: {t('theaddress')}</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src='./images/LogoWhite.png' height='150' width='150' alt='Masaha' />
            </Link>
          </div>
          <h5 className='website-rights'>{t('rights')}</h5>
          <div className='social-icons'>
            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>
            <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </Link>
            <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'>
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

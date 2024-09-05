import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';

function HeroSection() {
    const { t } = useTranslation();

    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>{t('masaha')}</h1>
            <p>{t('briefing')}</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' toPage='/contactus'>
                    {t('contactus')}
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' toPage='/services'>
                    {t('services')} <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
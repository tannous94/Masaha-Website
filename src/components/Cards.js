import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { useTranslation } from 'react-i18next';

function Cards() {
  const { t } = useTranslation();

  return (
    <div className='cards'>
      <h1>{t('checkout')}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.png'
              text={t('card1')}
              label={t('about')}
              path='/about'
            />
            <CardItem
              src='images/img-2.jpg'
              text={t('card2')}
              label={t('careers')}
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.png'
              text={t('card3')}
              label={t('ourservices')}
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text={t('card4')}
              label={t('contactus')}
              path='/contactus'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
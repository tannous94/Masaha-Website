import React from 'react';
import '../../App.css';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
        <h1 className='services'>{t('services')}</h1>
    </>
  );
}
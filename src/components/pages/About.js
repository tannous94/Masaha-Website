import React from 'react';
import '../../App.css';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
        <h1 className='about'>{t('about')}</h1>
    </>
  );
}
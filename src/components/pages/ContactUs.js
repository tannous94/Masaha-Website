import React from 'react';
import '../../App.css';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <>
        <h1 className='contactus'>{t('contactus')}</h1>
    </>
  );
}
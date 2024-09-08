import React from 'react';
import '../../App.css';
import './ContactUs.css';
import ContactForm from './ContactForm';
import Map from './Map';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <>
      <div className="app-container">
        <div className="map-section">
          <Map />
        </div>
        <div className="form-section">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
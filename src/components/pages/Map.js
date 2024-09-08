import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745, // Example latitude
  lng: -38.523 // Example longitude
};

const Map = () => (
  <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      <Marker position={center} />
    </GoogleMap>
  </LoadScript>
);

export default Map;

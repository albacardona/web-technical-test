import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import mapStyle from './mapStyle';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 41.397669,
  lng: 2.176236,
};

const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true
}

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`
  });

  return isLoaded? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      options={options}
    />
  ) : <>Loading map...</>
};

export default Map;
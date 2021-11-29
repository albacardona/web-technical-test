import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import mapStyle from './mapStyle';
import VehiclesList from '../VehiclesList/VehiclesList';

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

  const vehicles = useSelector(state => state.allVehicles.vehicles)
  
  return isLoaded? (
    <Fragment>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={options}
      >
      {vehicles.map(vehicle => (
          <Marker key={vehicle.id} 
            position={{lat: vehicle.lat, lng: vehicle.lng}}
            icon={{ url: require('../../images/icon_scooter_green.png') }}
          />
      ))}
      </GoogleMap>
      <VehiclesList />
    </Fragment>
  ) : <>Loading map...</>
};

export default Map;
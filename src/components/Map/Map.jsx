import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import mapStyle from './mapStyle';
import { Routes, Route, Link, useParams } from 'react-router-dom';

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

  const vehicles = useSelector(state => state.vehicles.vehicles)
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`
  });

  const { id } = useParams()

  const selectedVehicle = () => {
    console.log(id)
  }

  const renderMarkers = vehicles.map((vehicle, index) => (
    <Link key={index} to={'/' + vehicle.id} onClick={selectedVehicle}>
      <Marker 
        position={{lat: vehicle.lat, lng: vehicle.lng}}
        icon={{ url: require('../../images/icon_scooter_orange.png') }}
      />
    </Link>
  ))

  return isLoaded? (
    <Fragment>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={options}
      >
        <Routes>
          <Route path="/:id" exact element={renderMarkers} />
        </Routes>
      </GoogleMap>

    </Fragment>
  ) : <div className='loading'>Loading map...</div>
};

export default Map;
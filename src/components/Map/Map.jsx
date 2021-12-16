// REACT IMPORTS
import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
// GOOGLE MAPS IMPORTS & CONFIG
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { containerStyle, center, options } from './mapConfig';
// COMPONENTS
import VehicleMarkers from '../VehicleMarkers/VehicleMarkers';
import Spinner from '../Spinner/Spinner';

const Map = () => {
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`
  });

  return isLoaded? (
    <Fragment>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={options}
      >
        <Routes>
          <Route path="/:id" exact element={<VehicleMarkers />} />
        </Routes>
      </GoogleMap>
    </Fragment>
  ) : <div className='loading'>
        <Spinner />
        <p>Loading map...</p>
      </div>
};

export default Map;
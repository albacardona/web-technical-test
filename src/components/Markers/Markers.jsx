// REACT IMPORTS
import React, { Fragment } from 'react';
// GOOGLE MAPS IMPORT
import { Marker } from '@react-google-maps/api';
// REDUX IMPORTS
import { useSelector } from 'react-redux';
import { getSelectedVehicle } from '../../redux/actions/vehicleActions';
import { store } from '../../redux/store';

const Markers = () => {
  
  const vehicles = useSelector(state => state.vehicles.vehicles)
  
  const onClickHandler = (vehicleID) => {
    const selectedVehicle = vehicles.find(vehicle => vehicle.id === vehicleID)
    store.dispatch(getSelectedVehicle(selectedVehicle))
  }

  const vehicleMarker = vehicles.map((vehicle, index) => {
    const { id, lat, lng } = vehicle
    return (
        <Marker 
          key={index}
          to={'/' + id}
          position={{lat: lat, lng: lng}}
          icon={{ url: require('../../images/icon_scooter_orange.png') }}
          onClick={()=>onClickHandler(id)}
        />
    )
  })

  return (
    <Fragment>{vehicleMarker}</Fragment> 
  );
};

export default Markers;
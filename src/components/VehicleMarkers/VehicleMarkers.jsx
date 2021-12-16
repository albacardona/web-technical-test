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
  const selectedVehicle = useSelector(state => state.vehicles.selectedVehicle)
  
  const onClickHandler = (vehicleID) => {
    store.dispatch(getSelectedVehicle(vehicles.find(vehicle => vehicle.id === vehicleID)))
  }; 
  
  const vehicleMarker = vehicles.map((vehicle, index) => {
    const { id, lat, lng, status } = vehicle
    
    let color = 'orange'
    if (vehicle === selectedVehicle) {
      color = 'green'
    } else if (status === 1) {
      color = 'black'
    } else if (status === 0) {
      color = 'orange'
    } else {
      color = 'red'
    }

    return (
      <Marker 
        key={index}
        to={'/' + id}
        position={{lat: lat, lng: lng}}
        icon={{ url: require('../../images/icon_scooter_' + color + '.png') }}
        onClick={()=>onClickHandler(id)}
      />
    )
  })

  return (
    <Fragment>{vehicleMarker}</Fragment> 
  );
};

export default Markers;
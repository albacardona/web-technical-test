// REACT IMPORTS
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// GOOGLE MAPS IMPORT
import { Marker } from '@react-google-maps/api';
// REDUX IMPORTS
import { useSelector } from 'react-redux';
import { getSelectedVehicle } from '../../redux/actions/vehicleActions';
import { store } from '../../redux/store';

const Markers = () => {
  
  const vehicles = useSelector(state => state.vehicles.vehicles)
  const selectedVehicle = useSelector(state => state.vehicles.selectedVehicle)
  // store.dispatch(getSelectedVehicle(vehicles.find(vehicle => vehicle.id === vehicles[0].id)))
  
  const onClickHandler = (vehicleID) => {
    store.dispatch(getSelectedVehicle(vehicles.find(vehicle => vehicle.id === vehicleID)))
  }; 
  
  const vehicleMarker = vehicles.map((vehicle, index) => {
    const { id, lat, lng, status } = vehicle
    
    let color = 'orange'
    let scale = [33, 46]
    if (vehicle === selectedVehicle) {
      color = 'green'
      scale = [43,59]
    } else if (status === 1) {
      color = 'black'
    } else if (status === 0) {
      color = 'orange'
    } else {
      color = 'red'
    }

    return (
      <Link key={index} to={'/' + id}>
        <Marker
          
          
          position={{lat: lat, lng: lng}}
          icon={{ 
            url: require('../../images/icon_scooter_' + color + '.png'),
            scaledSize: new window.google.maps.Size(scale[0], scale[1])
          }}
          onClick={()=>onClickHandler(id)}
        />
      </Link>
    )
  })

  return (
    <Fragment>{vehicleMarker}</Fragment> 
  );
};

export default Markers;
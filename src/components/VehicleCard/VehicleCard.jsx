// REACT IMPORTS
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// REDUX IMPORTS
import { useSelector } from 'react-redux';
import { getSelectedVehicle } from '../../redux/actions/vehicleActions';
import { store } from '../../redux/store';
// CSS IMPORTS
import './VehicleCard.css';

const VehicleCard = () => {
  
  const vehicles = useSelector(state => state.vehicles.vehicles)
  const selectedVehicle = useSelector(state => state.vehicles.selectedVehicle)
  
  const onClickHandler = (vehicleID) => {
    store.dispatch(getSelectedVehicle(vehicles.find(vehicle => vehicle.id === vehicleID)))
  }

  const vehicleCard = vehicles.map((vehicle, index) => {
    const { id, name, battery, status } = vehicle
    let color = '#FAB400'
    if (vehicle === selectedVehicle) {
      color = '#31B498'
    } else if (status === 1) {
      color = '#29323C'
    } else if (status === 0) {
      color = '#FAB400'
    } else {
      color = '#E92216'
    }
    return (
      <Link key={index} to={'/' + id} onClick={()=>onClickHandler(id)}>
        <div className="vehicle-card">
          <div className="status-color" style={{background: color}}></div>
          <div className="vehicle-details">
            <p className="vehicle-name">{name}</p>
            <p>Battery level: {battery}%</p>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <Fragment>{vehicleCard}</Fragment> 
  );
};

export default VehicleCard;
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
  const sortedVehicles = vehicles.sort((a, b) => (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0))
  
  const onClickHandler = (scooter) => {
    const selectedVehicle = sortedVehicles.find(vehicle => vehicle.id === scooter)
    store.dispatch(getSelectedVehicle(selectedVehicle))
  }

  const vehicleCard = sortedVehicles.map((vehicle, index) => {
    const { id, name, battery } = vehicle
    return (
      <Link key={index} to={'/' + id} onClick={()=>onClickHandler(id)}>
        <div className="vehicle-card">
          <div className="status-color" style={{background: '#FAB400'}}></div>
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
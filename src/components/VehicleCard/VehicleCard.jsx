import React from 'react';
import { useSelector } from 'react-redux';
import './VehicleCard.css';

const VehicleCard = () => {

  const vehicles = useSelector(state => state.allVehicles.vehicles)

  const vehicleCard = vehicles.map((vehicle => {
    const { id, name, battery } = vehicle
    return (
      <div className="vehicle-card" key={id}>
        <div className="status-color"></div>
        <div className="vehicle-details">
          <p className="vehicle-name">{name}</p>
          <p>Battery level: {battery}%</p>
          <p>Distance: m</p>
        </div>
      </div>
    )
  }))

  return (
    vehicleCard
  );
};

export default VehicleCard;
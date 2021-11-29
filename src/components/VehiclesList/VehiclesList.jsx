import React from 'react';
// import { useSelector } from 'react-redux';
import VehicleCard from '../VehicleCard/VehicleCard';
import './VehiclesList.css';

const VehiclesList = () => {
  return (
    <div className="vehicles-list">
      <VehicleCard />
    </div>
  )
};

export default VehiclesList;
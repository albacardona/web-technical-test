// REACT IMPORTS
import React from 'react';
//COMPONENTS
import Toolbar from '../Toolbar/Toolbar';
import VehicleCard from '../VehicleCard/VehicleCard';
// CSS IMPORTS
import './VehiclesList.css';

const VehiclesList = () => {

  return (
    <div className='vehicles-list-container'>
      <Toolbar />
      <div className="vehicles-list">
        <VehicleCard />
      </div>
    </div>
  )
};

export default VehiclesList;
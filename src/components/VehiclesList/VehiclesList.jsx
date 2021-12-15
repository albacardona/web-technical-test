import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VehicleCard from '../VehicleCard/VehicleCard';

import './VehiclesList.css';

const VehiclesList = () => {

  return (
    <div className="vehicles-list">
      <select name='status'>
      </select>
      <button><span role='img' aria-label='emoji'>🔼</span></button>
      <button><span role='img' aria-label='emoji'>🔽</span></button>
      <Routes>
        <Route path="/:id" exact element={<VehicleCard />} />
      </Routes>
    </div>
  )
};

export default VehiclesList;
// REACT IMPORTS
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// REDUX IMPORTS
import { fetchVehicles } from './redux/actions/vehicleActions';
// COMPONENTS
import Map from './Components/Map/Map'
import VehiclesList from './Components/VehiclesList/VehiclesList';
// CSS IMPORTS
import './App.css';

const App = ({fetchVehicles}) => {

  useEffect(() => {
    fetchVehicles()
  }, [fetchVehicles]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          YEGO - Technical Test
        </p>
      </header>
      <div className="App-body">
        <Map />
        <VehiclesList />
      </div>
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicles
  }
};

export default connect(mapStateToProps, {fetchVehicles})(App);

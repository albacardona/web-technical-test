import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { fetchVehicles } from '../../redux/actions/vehicleActions';
import './VehicleCard.css';

const VehicleCard = ({ vehiclesData, fetchVehicles}) => {

  console.log(vehiclesData)

  const vehicles = useSelector(state => state.allVehicles.vehicles)
  const sortedVehicles = vehicles.sort((a, b) => (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0))

  useEffect(() => {
    fetchVehicles()
  }, [fetchVehicles])

  const vehicleCard = sortedVehicles.map((vehicle => {
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

const mapStateToProps = (state) => {
  return {
    vehiclesData: state.allVehicles
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    fetchVehicles: () => dispatch(fetchVehicles())
  }
}

export default connect(mapStateToProps, mapDispatchProps)(VehicleCard);
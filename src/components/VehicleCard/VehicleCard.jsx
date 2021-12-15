import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { getSelectedVehicle } from '../../redux/actions/vehicleActions';
import './VehicleCard.css';


const VehicleCard = ({getSelectedVehicle}) => {
  
  const vehicles = useSelector(state => state.vehicles.vehicles)
  const sortedVehicles = vehicles.sort((a, b) => (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0))
  const { id } = useParams()
  const selectedVehicle = sortedVehicles.find(vehicle => vehicle.id == id)
  
  const onClickScooter = () => {
    getSelectedVehicle(selectedVehicle)
  }

  const vehicleCard = sortedVehicles.map((vehicle, index) => {
    const { id, name, battery } = vehicle
    return (
      <Link key={index} to={'/' + id} onClick={onClickScooter}>
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

const mapStateToProps = (state) => {
  return {
    selectedVehicle: state.vehicles.selectedVehicle
  }
};

const mapDispatchProps = (dispatch) => {
  return {
    getSelectedVehicle: () => dispatch(getSelectedVehicle())
  }
};

export default connect(mapStateToProps, mapDispatchProps)(VehicleCard);
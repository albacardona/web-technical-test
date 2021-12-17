// REACT IMPORT
import React from "react";
// REDUX IMPORTS
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import { filterVehicles } from '../../redux/actions/vehicleActions';
// CSS & MATERIAL-UI IMPORT
import './Toolbar.css'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const Toolbar = () => {

  const vehicles = useSelector(state => state.vehicles.vehicles)

  const handleVehicleStatus = (status) => {
    store.dispatch(filterVehicles(vehicles, status))
  }

  return (
    <div className='toolbar'>
      <button><ArrowUpwardOutlinedIcon /></button>
      <select  onChange={(e) => handleVehicleStatus(e.target.value)}>
        <option value='' >All vehicles</option>
        <option value='0'>Available</option>
        <option value='1'>Booked</option>
        <option value='2'>Others</option>
      </select>
      <button><ArrowDownwardOutlinedIcon /></button>
    </div>
  )
};

export default Toolbar;
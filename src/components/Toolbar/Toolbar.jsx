// REACT IMPORT
import React from "react";
// REDUX IMPORTS
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import { getAvailableVehicles } from "../../redux/actions/vehicleActions";
// CSS & MATERIAL-UI IMPORT
import './Toolbar.css'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const Toolbar = () => {

  const vehicles = useSelector(state => state.vehicles.vehicles)
  console.log(vehicles)
  const handleAvailableVehicles = () => {
    store.dispatch(getAvailableVehicles(vehicles))
  }

  return (
    <div className='toolbar'>
      <button><ArrowUpwardOutlinedIcon /></button>
      <select name='status'>
        <option value='all-vehicles'>All vehicles</option>
        <option value='available' onClick={()=>handleAvailableVehicles()}>Available</option>
        <option value='booked'>Booked</option>
        <option value='others'>Others</option>
      </select>
      <button><ArrowDownwardOutlinedIcon /></button>
    </div>
  )
};

export default Toolbar;
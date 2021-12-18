// REACT IMPORT
import React, { useEffect, useState } from "react";
// REDUX IMPORTS
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import { filterVehicles, getSelectedVehicle } from '../../redux/actions/vehicleActions';
// CSS & MATERIAL-UI IMPORT
import './Toolbar.css'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const Toolbar = () => {

  const allVehicles = useSelector(state => state.vehicles.vehicles)
  const vehicles  = useSelector(state => state.vehicles.filteredVehicles)
  const selectedVehicle = useSelector(state => state.vehicles.selectedVehicle)

  const [previousDisabled, setPreviousDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const handleVehicleStatus = (status) => {
    store.dispatch(filterVehicles(allVehicles, status))
  }

  const changeSelectedVehicle = (sum) => {
    store.dispatch(getSelectedVehicle(vehicles[vehicles.indexOf(selectedVehicle) + sum]))
  }

  useEffect(() => {
    const currentIndex = vehicles.indexOf(selectedVehicle)
    const lastIndex = vehicles.indexOf(vehicles.at(-1))
    if (currentIndex === 0) {
      setPreviousDisabled(true)
      setNextDisabled(false)
    } else if (currentIndex > 0 && currentIndex < lastIndex) {
      setPreviousDisabled(false)
      setNextDisabled(false)
    } else if (currentIndex === lastIndex) {
      setPreviousDisabled(false)
      setNextDisabled(true)
    } 
  }, [vehicles, selectedVehicle])

  return (
    <div className='toolbar'>
      <button onClick={() => changeSelectedVehicle(-1)} disabled={previousDisabled}>
        <ArrowUpwardOutlinedIcon className='click-up-effect'/>
      </button>
      <select onChange={(e) => handleVehicleStatus(e.target.value)}>
        <option value=''>All vehicles</option>
        <option value='0'>Available</option>
        <option value='1'>Booked</option>
        <option value='2'>Others</option>
      </select>
      <button onClick={() => changeSelectedVehicle(+1)} disabled={nextDisabled}>
        <ArrowDownwardOutlinedIcon className='click-down-effect'/>
      </button>
    </div>
  )
};

export default Toolbar;
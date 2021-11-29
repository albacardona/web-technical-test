import { ActionTypes } from "../constants/action-types"

export const setVehicles = (vehicles) => {
  return {
    type: ActionTypes.SET_VEHICLES,
    payload: vehicles
  }
};

export const selectedVehicle = (vehicle) => {
  return {
    type: ActionTypes.SELECTED_VEHICLE,
    payload: vehicle
  }
};
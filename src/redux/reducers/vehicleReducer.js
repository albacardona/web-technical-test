import { ActionTypes } from "../constants/action-types";
import vehicles from '../../vehicles.json'

const initialState = {
  vehicles: vehicles
};

export const vehicleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_VEHICLES:
      return state
    default:
      return state
  }
};
import { ActionTypes } from "../constants/action-types";

const initialState = {
  vehicles: [],
  selectedVehicle: []
};

export const vehicleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_VEHICLES:
      return {...state, vehicles: payload, selectedVehicle: payload[0]};
    case ActionTypes.SELECTED_VEHICLE:
      return {...state, selectedVehicle: payload};
    case ActionTypes.GET_AVAILABLE_VEHICLES:
      return {...state, vehicles: payload, selectedVehicle: payload[0]};
    default:
      return state;
  }
};
import { ActionTypes } from "../constants/action-types";

const initialState = {
  vehicles: [],
  selectedVehicle: [{
    "id": 277,
    "name": "Abbey",
    "lat": 41.384092,
    "lng": 2.182217,
    "battery": 6,
    "status": 2
  }]
};

export const vehicleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_VEHICLES:
      return {...state, vehicles: payload};
    case ActionTypes.SELECTED_VEHICLE:
      return {...state, selectedVehicle: payload};
    default:
      return state;
  }
};
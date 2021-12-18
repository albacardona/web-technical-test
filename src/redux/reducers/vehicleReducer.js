import { ActionTypes } from "../constants/action-types";

const initialState = {
  vehicles: [],
  selectedVehicle: [],
  filteredVehicles: [],
  status: ''
};

export const vehicleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_VEHICLES:
      return {
        ...state,
        vehicles: payload,
        filteredVehicles: payload,
        selectedVehicle: payload[0]
      };

    case ActionTypes.SELECTED_VEHICLE:
      return {
        ...state,
        selectedVehicle: payload
      };

    case ActionTypes.FILTER_VEHICLES:
      return {
        ...state,
        filteredVehicles: payload.vehicles,
        status: payload.status,
        selectedVehicle: payload.vehicles[0]
      };

      default:
        return state;
  }
};
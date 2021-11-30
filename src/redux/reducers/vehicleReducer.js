import { ActionTypes } from "../constants/action-types";

const initialState = {
  vehicles: [],
  loading: false,
  error: null
};

export const vehicleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_VEHICLES_REQUEST:
      return {...state, loading: true};
    case ActionTypes.GET_VEHICLES_SUCCESS:
      return {...state, loading: false, vehicles: payload};
    case ActionTypes.GET_VEHICLES_FAILURE:
      return {...state, loading: false, error: payload};
    default:
      return state;
  }
};
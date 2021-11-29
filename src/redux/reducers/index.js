import { combineReducers } from "redux";
import { vehicleReducer } from "./vehicleReducer";

export const reducers = combineReducers({
  allVehicles: vehicleReducer
});
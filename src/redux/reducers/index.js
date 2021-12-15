import { combineReducers } from "redux";
import { vehicleReducer } from "./vehicleReducer";
import { statusReducer } from "./statusReducer";

export const reducers = combineReducers({
  vehicles: vehicleReducer,
  status: statusReducer
});
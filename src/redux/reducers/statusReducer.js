import { VehicleStatus } from "../constants/action-types";

const initialState = {
  status: {
    AVAILABLE: 0,
    BOOKED: 1,
    ALERT_BATTERY: 2,
    ALERT_GPS: 3,
    MAINTENANCE: 4,
    DISABLED: 5,
    TOW: 6,
  }
};

export const statusReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VehicleStatus:
      return state;
    default:
      return state;
  }
};
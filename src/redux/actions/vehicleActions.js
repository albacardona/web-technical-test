// FETCH DATA FROM API
const getVehicles = (vehicles) => {
  return {
    type: 'GET_VEHICLES',
    payload: vehicles
  }
};

export const fetchVehicles = () => {
  return (dispatch) => {
    fetch('/technical-test', {
      method: 'GET',
      headers: {
        'x-api-key': 'qxECK0jBFkLEk4glKDHx3Z88mC11mUfxq7NMR2EY'
      }
    })
      .then(response => response.json())
      .then(data => {
        const vehicles = data
        dispatch(getVehicles(vehicles))
      })
      .catch(err => err)
  }
};

// GET SELECTED VEHICLE
export const getSelectedVehicle = (vehicle) => {
  return {
    type: 'SELECTED_VEHICLE',
    payload: vehicle
  }
};
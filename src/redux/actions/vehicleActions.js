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
        const vehicles = data.sort((a, b) => (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0))
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

// FILTER VEHICLES BY STATUS: AVAILABLE
export const getAvailableVehicles = (vehicles) => {
  const availableVehicles = vehicles.filter((vehicle) => (
    vehicle.status === 0
  ))

  return {
    type: 'GET_AVAILABLE_VEHICLES',
    payload: availableVehicles
  }
}
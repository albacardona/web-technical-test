const getVehicles = () => {
  return {
    type: 'GET_VEHICLES'
  }
};

const getVehiclesSuccess = (vehicles) => {
  return {
    type: 'GET_VEHICLES_SUCCESS',
    payload: vehicles
  }
};

const getVehiclesFailure = (error) => {
  return {
    type: 'GET_VEHICLES_FAILURE',
    payload: error
  }
};

const apiUrl = '/technical-test'

export const fetchVehicles = () => {
  return (dispatch) => {
    dispatch(getVehicles())
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-api-key': 'qxECK0jBFkLEk4glKDHx3Z88mC11mUfxq7NMR2EY'
      }
    })
      .then(response => response.json())
      .then(data => {
        const vehicles = data
        dispatch(getVehiclesSuccess(vehicles))
      })
      .catch(err => {
        const error = err.message
        dispatch(getVehiclesFailure(error))
      })
  }
}
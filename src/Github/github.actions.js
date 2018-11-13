
import axios from 'axios';

export const get = (username) => {
  return dispatch => {
    axios.get(`https://api.github.com/users/${username}`)
    .then(results => {
      console.warn(results);
      dispatch({
        type: 'GITHUB_GET',
        payload: results.data
      })
    })
    .catch(error => {
      dispatch({
        type: 'GITHUB_ERROR'
      })
    })
  }
}
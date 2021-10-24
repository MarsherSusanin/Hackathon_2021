import {
  LOAD_AVAILABLE_POINTS_SUCCESS,
  LOAD_AVAILABLE_POINTS_FAILURE,
  LOAD_AVAILABLE_POINTS_STARTED,
} from './types/points';

import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const loadAvailablePoints = () => {
  return dispatch => {
    dispatch(loadAvailablePointsStarted());

    axios
      .get(`${API_URL}/points`)
      .then(res => {
        dispatch(loadAvailablePointsSuccess(res.data));
      })
      .catch(err => {
        dispatch(loadAvailablePointsFailure(err.message));
      });
  };
};

const loadAvailablePointsSuccess = points => ({
  type: LOAD_AVAILABLE_POINTS_SUCCESS,
  payload: [...points]
});

const loadAvailablePointsStarted = () => ({
  type: LOAD_AVAILABLE_POINTS_STARTED
});

const loadAvailablePointsFailure = error => ({
  type: LOAD_AVAILABLE_POINTS_FAILURE,
  payload: {
    error
  }
});
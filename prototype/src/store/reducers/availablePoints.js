import { 
  LOAD_AVAILABLE_POINTS_SUCCESS,
  LOAD_AVAILABLE_POINTS_FAILURE,
  LOAD_AVAILABLE_POINTS_STARTED,
} from '../actions/types/points';
import initialState from '../initialState';

export default function availablePoints(state = initialState, action) {
  switch (action.type) {
    case LOAD_AVAILABLE_POINTS_STARTED:
      return {
        ...state,
        loading: true
      };
    case LOAD_AVAILABLE_POINTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        availablePoints: action.payload
      };
    case LOAD_AVAILABLE_POINTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
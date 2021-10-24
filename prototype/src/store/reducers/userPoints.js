import { 
  CHECK_POINT
} from '../actions/types/points';
import initialState from '../initialState';

export default function userPoints(state = initialState, action) {
  switch (action.type) {
    case CHECK_POINT:
      return {
        ...state,
        checkedPoints: [...state.checkedPoints, action.payload]
      };
    default:
      return state;
  }
}
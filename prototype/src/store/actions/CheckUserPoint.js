import {
  CHECK_POINT
} from './types/points';

export const CheckUserPoint = points => ({
  type: CHECK_POINT,
  payload: [...points]
});



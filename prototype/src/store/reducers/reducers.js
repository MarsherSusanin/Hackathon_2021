import { combineReducers } from 'redux';
import availablePoints from './availablePoints';
import userPoints from './userPoints';


export default combineReducers({
    availablePoints,
    userPoints
});

import {combineReducers} from 'redux';
import userReducer from './user_reducer';

const entitiesReducer = combineReducers({user: userReducer});

export default entitiesReducer
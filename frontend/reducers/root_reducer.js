import {combineReducers} from 'redux';
import sessionReducer from '../reducers/session_reducer';
import sessionErrorsReducer from '../reducers/session_errors_reducer';

const rootReducer = combineReducers({session: sessionReducer}, {errors: sessionErrorsReducer})

export default rootReducer;

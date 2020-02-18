import {combineReducers} from 'redux';
import sessionReducer from '../reducers/session_reducer';
import sessionErrorsReducer from '../reducers/session_errors_reducer';
import entitiesReducer from '../reducers/entities_reducer';

const rootReducer = combineReducers({entities: entitiesReducer, session: sessionReducer, errors: sessionErrorsReducer})

export default rootReducer;

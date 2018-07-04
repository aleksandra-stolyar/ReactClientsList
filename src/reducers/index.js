import {combineReducers} from 'redux';
import ClientsReducer from './clients';
import ActiveItemReducer from './active-item'

const rootReducer = combineReducers({
    clients: ClientsReducer,
    activeClient: ActiveItemReducer
});

export default rootReducer;
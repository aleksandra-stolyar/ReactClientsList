import {combineReducers} from 'redux';
import ActiveItemReducer from './activeItem';
import SearchClientsReducer from './searchClients'

const rootReducer = combineReducers({
    activeClient: ActiveItemReducer,
    searchResults: SearchClientsReducer
});

export default rootReducer;
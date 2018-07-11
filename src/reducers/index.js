import {combineReducers} from 'redux';
import ClientsReducer from './clients';
import ActiveItemReducer from './activeItem';
import SearchClientsReducer from './searchClients'

const rootReducer = combineReducers({
    clients: ClientsReducer,
    activeClient: ActiveItemReducer,
    searchResults: SearchClientsReducer
});

export default rootReducer;
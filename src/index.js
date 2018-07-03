import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import ClientsPage from './ClientsList';
import './index.css';
import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(<ClientsPage />, document.getElementById('root'));
registerServiceWorker();

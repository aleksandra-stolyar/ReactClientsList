import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClientsPage from './ClientsList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ClientsPage />, document.getElementById('root'));
registerServiceWorker();

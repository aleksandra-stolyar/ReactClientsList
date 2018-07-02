import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClientsList from './ClientsList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ClientsList />, document.getElementById('root'));
registerServiceWorker();

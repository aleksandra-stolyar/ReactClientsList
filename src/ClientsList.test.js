import React from 'react';
import ReactDOM from 'react-dom';
import ClientsList from './ClientsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClientsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

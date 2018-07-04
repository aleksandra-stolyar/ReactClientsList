import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import ClientsList from '../containers/ClientsList';
import ClientDetails from '../containers/ClientDetails';

import '../index.css';

const App = () => (
    <Grid columns={2} divided>
        <Grid.Column width={4} className='items-list'>
            <ClientsList/>
        </Grid.Column>
        <Grid.Column width={12} className='item-details'>
            <ClientDetails/>
        </Grid.Column>
    </Grid>
);

export default App; 
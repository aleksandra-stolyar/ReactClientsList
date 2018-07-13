import React from 'react';
import { Grid } from 'semantic-ui-react';
import ClientsList from '../containers/ClientsList';
import ClientDetails from '../containers/ClientDetails';
import ClientsSearch  from '../containers/ClientsSearch'

import './App.css';

const App = () => (
    <Grid columns={2}>
        <Grid.Column width={4}>
            <ClientsSearch/>
            <ClientsList/>
        </Grid.Column>
        <Grid.Column width={12}>
            <ClientDetails />
        </Grid.Column>
    </Grid>
);

export default App;
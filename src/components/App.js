import React from 'react';
import { Grid } from 'semantic-ui-react';
import ClientsList from '../containers/ClientsList';
import ClientDetails from '../containers/ClientDetails';

import './App.css';

const App = () => (
    <Grid columns={2}>
        <Grid.Column width={4}>
            <ClientsList/>
        </Grid.Column>
        <Grid.Column width={12}>
            <ClientDetails />
        </Grid.Column>
    </Grid>
);

export default App;
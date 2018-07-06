import React from 'react';
import { Grid, Segment, Sticky } from 'semantic-ui-react';
import ClientsList from '../containers/ClientsList';
import ClientDetails from '../containers/ClientDetails';

import './App.css';

const App = () => (
    <Grid columns={2}>
        <Grid.Column width={4}>
            <Segment>
                <ClientsList/>
            </Segment>
        </Grid.Column>
        <Grid.Column width={12}>
            <Sticky>
                <ClientDetails/>
            </Sticky>
        </Grid.Column>
    </Grid>
);

export default App; 
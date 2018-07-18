import React from 'react';
import {Header, Icon} from 'semantic-ui-react';

const DefaultContent = () =>  (
    <div id='default-details-content'>
        <Header as='h1'>
            <Icon disabled name='hand point left'/>
            Select profile for more details...
        </Header>
    </div>
)

export default DefaultContent;
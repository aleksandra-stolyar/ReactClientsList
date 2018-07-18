import React from 'react';
import {Header, List, Icon, Divider, Item} from 'semantic-ui-react';

const DetailsContent = ({client}) =>  (
    <Item id='client-details'>
        <Item.Image src={client.general.avatar}/>
        <Item.Content>
            <Header as='h1'>
                {client.general.firstName} {client.general.lastName}
                <Header.Subheader>{client.job.title} - {client.job.company}</Header.Subheader>
            </Header>
            <Divider section/>
            <List id='details-item'>
                <List.Item>
                    <Icon name='map marker alternate' />
                    <div className='content'>
                        {client.address.street} <br/>
                        {client.address.city} <br/>
                        {client.address.zipCode} <br/>
                        {client.address.country}
                    </div>
                </List.Item>
                <List.Item
                    icon='mail'
                    content={<a href={'mailto:' + client.contact.email}>{client.contact.email}</a>}
                />
                <List.Item icon='phone' content={client.contact.phone} />
            </List>
        </Item.Content>
    </Item>
)

export default DetailsContent;

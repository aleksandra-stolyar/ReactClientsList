import React, { Component } from 'react';
import {Header, List, Icon, Divider, Item} from 'semantic-ui-react';
import { connect } from 'react-redux';

class ClientDetails extends Component {

    defaultContent = () => {
        return (
            <div id='default-details-content'>
                <Header as='h1'>
                    <Icon disabled name='hand point left' />
                    Select profile for more details...
                </Header>
            </div>
        );
    }

    detailsContent = () => {
        return (
            <Item id='client-details'>
                <Item.Image src={this.props.client.general.avatar}/>
                <Item.Content>
                    <Header as='h1'>
                        {this.props.client.general.firstName} {this.props.client.general.lastName}
                        <Header.Subheader>{this.props.client.job.title} - {this.props.client.job.company}</Header.Subheader>
                    </Header>
                    <Divider section/>
                    <List id='details-item'>
                        <List.Item>
                            <Icon name='map marker alternate' />
                            <div className='content'>
                                {this.props.client.address.street} <br/>
                                {this.props.client.address.city} <br/>
                                {this.props.client.address.zipCode} <br/>
                                {this.props.client.address.country}
                            </div>
                        </List.Item>
                        <List.Item
                            icon='mail'
                            content={<a href={'mailto:' + this.props.client.contact.email}>{this.props.client.contact.email}</a>}
                        />
                        <List.Item icon='phone' content={this.props.client.contact.phone} />
                    </List>
                </Item.Content>
            </Item>
        );
    }

    render() {
        if (!this.props.client) {
            return this.defaultContent();
        } else {
            return this.detailsContent();
        }
    }
}

const mapStateToProps = state => ({
    client: state.activeClient
})

export default connect(
    mapStateToProps
)(ClientDetails)
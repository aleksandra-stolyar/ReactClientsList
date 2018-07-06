import React, { Component } from 'react';
import {Grid, Header, List, Image, Icon} from 'semantic-ui-react';
import { connect } from 'react-redux';

class ClientDetails extends Component {

    render() {
        if (!this.props.client) {
            return (
                <div>
                    <Header as='h1'>
                        <Icon disabled name='hand point left' />
                        Select profile for more details...
                    </Header>
                </div>
            )
        }
        return (
            <Grid columns={2}>
                <Grid.Column width={4}>
                    <Image centered size='small' src={this.props.client.general.avatar} />
                </Grid.Column>
                <Grid.Column width={12}>
                    <Header as='h1'>
                        {this.props.client.general.firstName} {this.props.client.general.lastName}
                        <Header.Subheader>{this.props.client.job.title} - {this.props.client.job.company}</Header.Subheader>
                    </Header>
                    <List>
                        <List.Item icon='map marker alternate'>
                            {this.props.client.address.street} <br/>
                            {this.props.client.address.city} <br/>
                            {this.props.client.address.zipCode} <br/>
                            {this.props.client.address.country}
                        </List.Item>
                        <List.Item
                            icon='mail'
                            content={<a href={'mailto:' + this.props.client.contact.email}>{this.props.client.contact.email}</a>}
                        />
                        <List.Item icon='phone' content={this.props.client.contact.phone} />
                    </List>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    client: state.activeClient
})

export default connect(
    mapStateToProps
)(ClientDetails)
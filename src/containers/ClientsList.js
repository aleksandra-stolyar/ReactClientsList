import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react';

class ClientsList extends Component {

    createListItems() {
        return this.props.clients.map((client, i) => {
            return (
                <Item>
                    <Item.Image
                        src={client.general.avatar}
                        verticalAlign='top'
                        size='tiny'
                        className='avatar-thumb'
                    />
                    <Item.Content>
                        <Item.Header as='a'>{client.general.firstName} {client.general.lastName}</Item.Header>
                        <Item.Meta>
                        <span className='job-title'>{client.job.title}</span>
                        </Item.Meta>
                    </Item.Content>
                </Item>
            )
        });
    }

    render() {
      return (
        <Item.Group divided>
            {this.createListItems()}
        </Item.Group>
      );
    }
}

const mapStateToProps = state => ({
    clients: state.clients
})

export default connect(
    mapStateToProps
)(ClientsList)
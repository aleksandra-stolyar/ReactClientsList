import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react';
import ClientsListItem from './ClientsListItem'

class ClientsList extends Component {

    createListItems() {
        return this.props.clients.map((client, i) => {
            return (
                <ClientsListItem key={i} client={client}/>
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
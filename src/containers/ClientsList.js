import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react';
import ClientsListItem from './ClientsListItem'
import {selectClient} from '../actions/index';

class ClientsList extends Component {

    createListItems() {
        return this.props.clients.map((client, i) => {
            return (
                <ClientsListItem
                    key={i}
                    client={client}
                    onClick={() => this.props.selectClient(client)}
                />
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

const mapDispatchToProps = dispatch =>(
    bindActionCreators({selectClient: selectClient}, dispatch)
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientsList)
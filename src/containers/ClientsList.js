import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import ClientsListItem from './ClientsListItem'
import {selectClient} from '../actions/index';

class ClientsList extends Component {

    handleActive = (client) => {
        if (this.props.activeItem && client === this.props.activeItem) {
            // console.log("I'm active")
            return 'active';
        }
    }
    createListItems() {
        return this.props.clients.map((client, i) => {
            return (
                <ClientsListItem
                    key={i}
                    client={client}
                    onClick={() => this.props.selectClient(client)}
                    className={this.handleActive(client)}
                />
            )
        });
    }

    render() {
      return (
        <List divided verticalAlign='middle' id='clients-list'>
            {this.createListItems()}
        </List>
      );
    }
}

const mapStateToProps = state => ({
    clients: state.clients,
    activeItem: state.activeClient
})

const mapDispatchToProps = dispatch =>(
    bindActionCreators({selectClient: selectClient}, dispatch)
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientsList)
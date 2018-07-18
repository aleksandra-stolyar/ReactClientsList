import React, { Component } from 'react';
import DefaultContent from '../components/client_details/DefaultContent'
import DetailsContent from '../components/client_details/DetailsContent'
import { connect } from 'react-redux';

class ClientDetails extends Component {
    render() {
        if (!this.props.client) {
            return <DefaultContent/>
        } else {
            return <DetailsContent client={this.props.client}/>
        }
    }
}

const mapStateToProps = state => ({
    client: state.activeClient
})

export default connect(
    mapStateToProps
)(ClientDetails)
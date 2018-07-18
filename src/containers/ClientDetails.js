import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

ClientDetails.propTypes = {
    client: PropTypes.object
}

const mapStateToProps = state => ({
    client: state.activeClient
})

export default connect(
    mapStateToProps
)(ClientDetails)
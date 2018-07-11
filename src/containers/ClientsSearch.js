import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {searchClients} from '../actions/index';

class ClientsSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
        searchQuery: ''
    }
  }

  handleChange(event) {
    this.setState({
      searchQuery: event.target.value
    });
    this.props.searchClients(event.target.value)
  }

  render() {
    const {searchQuery} = this.state;
    return (
      <Input
        fluid
        icon='search'
        iconPosition='right'
        placeholder='Search users...'
        id='client-search'
        value={searchQuery}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>(
    bindActionCreators({searchClients: searchClients}, dispatch)
)

export default connect(
    null,
    mapDispatchToProps
)(ClientsSearch)

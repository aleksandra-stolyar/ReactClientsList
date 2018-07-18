import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {searchClients} from '../actions/index';

class ClientsSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
        searchQuery: '',
        isLoading: false
    }
  }

  handleChange = (event) => {
    this.setState({
        searchQuery: event.target.value,
        isLoading: true
    });
    var value = event.target.value;
    setTimeout(() => {
        this.props.searchClients(value)
        this.setState({
            isLoading: false
        });
    }, 300)
  }

  render() {
    const {searchQuery, isLoading} = this.state;
    return (
      <div id='client-search'>
        <Input
          fluid
          icon='search'
          loading={isLoading}
          placeholder='Search users...'
          value={searchQuery}
          onChange={this.handleChange.bind(this)}
        />
      </div>
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

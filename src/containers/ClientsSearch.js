import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class ClientsSearch extends Component {
    render() {
      return (
        <Input
          fluid
          icon='search'
          iconPosition='right'
          placeholder='Search users...'
        />
      );
    }
  }

  export default ClientsSearch;
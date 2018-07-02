import React, { Component } from 'react';
import { Input, Label, Menu } from 'semantic-ui-react';
import './App.css';

class ClientsList extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Menu vertical>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
          Client1
        </Menu.Item>

        <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
          Client2
        </Menu.Item>

        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
          Client3
        </Menu.Item>
      </Menu>
    );
  }
}

export default ClientsList;

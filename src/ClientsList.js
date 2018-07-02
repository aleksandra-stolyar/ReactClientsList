import React, { Component } from 'react';
import { Image as ImageComponent, Item, Label } from 'semantic-ui-react';
import './App.css';

class Search extends Component {
}

class ClientsListItem extends Component {
  render() {
    const paragraph = <ImageComponent src='/images/wireframe/short-paragraph.png' />
    return (
      <Item>
        {/* <Item.Image src='/images/wireframe/image.png' /> */}
        <Item.Content>
          <Item.Header as='a'>12 Years a Slave</Item.Header>
          <Item.Meta>
            <span className='cinema'>Union Square 14</span>
          </Item.Meta>
          <Item.Description>{paragraph}</Item.Description>
          <Item.Extra>
            <Label>IMAX</Label>
            <Label icon='globe' content='Additional Languages' />
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

class ClientsList extends Component {
  render() {
    return (
      <Item.Group divided>
        <ClientsListItem />
      </Item.Group>
    );
  }
}

class ClientDetails extends Component {
}
export default ClientsList;

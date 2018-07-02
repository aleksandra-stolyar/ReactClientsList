import React, { Component } from 'react';
import { Grid, List, Image as ImageComponent, Item } from 'semantic-ui-react';
import './App.css';
import data from './clients.json';

class Search extends Component {
}

class ClientsListItem extends Component {
}

class ClientsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clients: data,
    };
  }

  render() {
    return (
      <Item.Group divided>
        {this.state.clients.map(function(client, i){
          return(
            <Item>
              <Item.Image src={client.general.avatar} className='avatar' />
              <Item.Content>
                <Item.Header as='a'>{client.general.firstName} {client.general.lastName}</Item.Header>
                <Item.Meta>
                  <span className='job-title'>{client.job.title}</span>
                </Item.Meta>
              </Item.Content>
            </Item>
          )
        })}
      </Item.Group>
    );
  }
}

class ClientDetails extends Component {
  render() {
    return (
      <List>
        <List.Item icon='users' content='Semantic UI' />
        <List.Item icon='marker' content='New York, NY' />
        <List.Item
          icon='mail'
          content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}
        />
        <List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
      </List>
    );
  }
}

class ClientsPage extends Component {
  render () {
    return (
      <Grid columns={2} divided>
        <Grid.Column>
          <ClientsList/>
        </Grid.Column>
        <Grid.Column>
          <ClientDetails/>
        </Grid.Column>
      </Grid>
    );
  }
}
export default ClientsPage;

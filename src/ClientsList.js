import React, { Component } from 'react';
import { Grid, List, Image as ImageComponent, Item } from 'semantic-ui-react';
import './App.css';
import data from './clients.json';

class Search extends Component {

}

class ClientsListItem extends React.Component  {
  render() {
    return(
      <Item>
        <Item.Image src={this.props.client.general.avatar} className='avatar' />
        <Item.Content>
          <Item.Header as='a'>{this.props.client.general.firstName} {this.props.client.general.lastName}</Item.Header>
          <Item.Meta>
            <span className='job-title'>{this.props.client.job.title}</span>
          </Item.Meta>
        </Item.Content>
      </Item>
    )
  }
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
            <ClientsListItem client={client}/>
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
        <Grid.Column width={4}>
          <ClientsList/>
        </Grid.Column>
        <Grid.Column width={12}>
          <ClientDetails/>
        </Grid.Column>
      </Grid>
    );
  }
}
export default ClientsPage;

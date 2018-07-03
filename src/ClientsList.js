import React, { Component } from 'react';
import {
  Grid,
  Header,
  List,
  Image, Image as ImageComponent,
  Item,
  Input,
} from 'semantic-ui-react';
import './App.css';
import data from './clients.json';

class ClientsSearch extends Component {
  render() {
    return (
      <Input
        fluid
        icon='search'
        iconPosition='right'
        placeholder='Search users...'
        className='clients-search'
      />
    );
  }
}

class ClientsListItem extends React.Component  {
  render() {
    return(
      <Item>
        <Item.Image
          src={this.props.client.general.avatar}
          verticalAlign='top'
          size='tiny'
          className='avatar-thumb'
        />
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
      <Grid columns={2}>
        <Grid.Column width={4}>
          <Image centered size='small' src="https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg" />
        </Grid.Column>
        <Grid.Column width={12}>
          <Header as='h1'>
            Liana Crooks
            <Header.Subheader>Investor Functionality Coordinator - Ledner, Johnson and Predovic</Header.Subheader>
          </Header>
          <List>
            <List.Item
              icon='map marker alternate'
              content='1520 Zemlak Cove | New Devon | 42586-7898 | Guinea-Bissau'
            />
            <List.Item
              icon='mail'
              content={<a href='mailto:Gerry_Hackett77@gmail.com'>Gerry_Hackett77@gmail.com</a>}
            />
            <List.Item icon='phone' content="(895) 984-0132" />
          </List>
        </Grid.Column>
      </Grid>
    );
  }
}

class ClientsPage extends Component {
  render () {
    return (
      <Grid columns={2} divided>
        <Grid.Column width={4} className='items-list'>
          <ClientsSearch/>
          <ClientsList/>
        </Grid.Column>
        <Grid.Column width={12} className='item-details'>
          <ClientDetails/>
        </Grid.Column>
      </Grid>
    );
  }
}
export default ClientsPage;

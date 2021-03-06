import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import classNames from 'classnames/bind';

class ClientsListItem extends Component  {

    render() {
        return(
            <Item onClick={this.props.onClick} className={classNames('clients-list-item', this.props.className)}>
                <Item.Image
                    src={this.props.client.general.avatar}
                    verticalAlign='top'
                    size='tiny'
                />
                <Item.Content>
                    <Item.Header as='a'>{this.props.client.general.firstName} {this.props.client.general.lastName}</Item.Header>
                    <Item.Meta>
                        <span>{this.props.client.job.title}</span>
                    </Item.Meta>
                </Item.Content>
            </Item>
        )
    }
}

export default ClientsListItem;
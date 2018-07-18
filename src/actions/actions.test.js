import * as actions from './index';

const client = {
  "general": {
    "firstName": "Liana",
    "lastName": "Crooks",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
  },
  "job": {
    "company": "Ledner, Johnson and Predovic",
    "title": "Investor Functionality Coordinator"
  },
  "contact": {
    "email": "Gerry_Hackett77@gmail.com",
    "phone": "(895) 984-0132"
  },
  "address": {
    "street": "1520 Zemlak Cove",
    "city": "New Devon",
    "zipCode": "42586-7898",
    "country": "Guinea-Bissau"
  }
};

const searchInput = 'Lia';

describe('actions', () => {
  it('should create an action to select client', () => {
    const expectedAction = {
      type: 'CLIENT_SELECTED',
      payload: client
    }
    expect(actions.selectClient(client)).toEqual(expectedAction)
  })
  it('should create an action to search for clients', () => {
    const expectedAction = {
      type: 'SEARCH_CLIENTS',
      payload: searchInput
    }
    expect(actions.searchClients(searchInput)).toEqual(expectedAction)
  })
})
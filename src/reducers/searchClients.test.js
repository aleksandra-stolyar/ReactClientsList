import reducer from './searchClients';
import * as actions from '../actions/index';
import data from '../clients.json';

describe('clients search reducer', () => {
    it('should provide the initial state', () => {
        expect(reducer(undefined, {})).toEqual(data)
    })

    it('should handle SEARCH_CLIENTS', () => {
        expect(
          reducer(data, {
            type: 'SEARCH_CLIENTS',
            payload: 'liana'
          })
        ).toEqual([
          data[0]
        ])
    })

})
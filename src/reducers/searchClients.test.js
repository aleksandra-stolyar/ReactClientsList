import reducer from './searchClients';
import data from '../clients.json';

describe('clients search reducer', () => {
    it('should provide the initial state', () => {
        expect(reducer(undefined, {})).toEqual(data)
    })


    it('should handle SEARCH_CLIENTS', () => {
      expect(
        reducer(data, {
          type: 'SEARCH_CLIENTS',
          payload: 'lia'
        })
      ).toEqual([
        data[0],
        data[8],
        data[10]
      ])
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
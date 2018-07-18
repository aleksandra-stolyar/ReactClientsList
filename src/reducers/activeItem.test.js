import reducer from './activeItem';

describe('clients search reducer', () => {
    const client = {
        "data": "Just test data"
    }

    it('should provide the initial state', () => {
        expect(reducer(undefined, {})).toEqual(null)
    })

    it('should handle SEARCH_CLIENTS', () => {
        expect(
          reducer(null, {
            type: 'CLIENT_SELECTED',
            payload: client
          })
        ).toEqual(
            client
        )
    })
})
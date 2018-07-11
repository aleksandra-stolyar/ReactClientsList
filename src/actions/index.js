export const selectClient = (client) => ({
    type: 'CLIENT_SELECTED',
    payload: client
});


export const searchClients = (search_query) => ({
    type: 'SEARCH_CLIENTS',
    payload: search_query
});
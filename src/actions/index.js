export const selectClient = (client) => {
    console.log("Hey! It's ", client.general.firstName);
    return {
        type: 'CLIENT_SELECTED',
        payload: client
    }
};
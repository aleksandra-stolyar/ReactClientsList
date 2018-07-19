import data from '../clients.json';
const initialState = data;

export default function (state = initialState, action) {
    switch(action.type) {
        case 'SEARCH_CLIENTS':
            return (
                initialState.filter((client) => {
                    var clientClone = Object.assign({}, client);
                    var categoryDetailsArray = [];
                    for (var category in clientClone) {
                        var categoryDetails =  Object.assign({}, clientClone[category]);
                        for (var key in categoryDetails) {
                            if (key === 'avatar') {
                                delete categoryDetails[key];
                            } else {
                                categoryDetailsArray.push(categoryDetails[key].toLowerCase());
                            }
                        }
                    }
                    var clientDetails = [].concat.apply([], categoryDetailsArray).join(' ');
                    return clientDetails.includes(action.payload.toLowerCase());

                })
            )
        default:
            return state;
    }
}

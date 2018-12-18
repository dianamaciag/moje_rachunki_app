const initState = {
    bills: []
}

const billReducer = (state = initState, action) => {

    switch (action.type) {
        case 'ADD_BILL':
            console.log('created bill', action.bill);
            return state;
        case 'ADD_BILL_ERROR':
            console.log('created project error', action.err);
            return state
        default:
            return state;
    }
}

export default billReducer
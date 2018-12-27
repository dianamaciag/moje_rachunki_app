const initState = {
    bills: []
}

const billReducer = (state = initState, action) => {

    switch (action.type) {
        case 'ADD_BILL':
            console.log('created bill', action.bill);
            return state;
        case 'ADD_BILL_ERROR':
            console.log('created bill error', action.err);
            return state;
        case 'DELETE_BILL':
            console.log('deleted', action.bill);
            return state;
        case 'DELETE_BILL_ERROR':
            console.log('delete error', action.err);
            return state;
        case 'SET_ACTIVITY_FALSE':
            console.log('Changed activity', action.bill);
            return state;
        case 'SET_ACTIVITY_TRUE':
            console.log('Changed activity', action.bill);
            return state;
        case 'SET_ACTIVITY_ERROR':
            console.log('Change activity error', action.err);
            return state;
        default:
            return state;
    }
}

export default billReducer
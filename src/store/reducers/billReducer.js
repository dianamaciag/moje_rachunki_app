const initState = {
    bills: [
        { id: '1', name: 'Przedszkole', cost: '135,20', date: '20.12.2018' },
        { id: '2', name: 'Prąd', cost: '35,20', date: '23.12.2018' },
        { id: '3', name: 'Telewizja', cost: '65,60', date: '18.12.2018' }
    ]
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
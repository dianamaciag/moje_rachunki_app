const initState = {
    summary: []
}

const summaryReducer = (state = initState, action) => {

    switch (action.type) {
        case 'UPDATE_SUMMARY_PAID':
            console.log('updated summary paid');
            return state;
        case 'UPDATE_SUMMARY_PAID_ERROR':
            console.log('updated summary paid error');
            return state;
        case 'UPDATE_SUMMARY_TO_PAY':
            console.log('updated summary to pay');
            return state;
        case 'UPDATE_SUMMARY_TO_PAY_ERROR':
            console.log('updated summary to pay error');
            return state;
        default:
            return state;
    }
}

export default summaryReducer
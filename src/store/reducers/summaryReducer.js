const initState = {
    summary: []
}

const summaryReducer = (state = initState, action) => {

    switch (action.type) {
        case 'UPDATE_SUMMARY':
            console.log('updated summary', action.summary);
            return state;
        case 'UPDATE_SUMMARY_ERROR':
            console.log('updated summary error', action.err);
            return state;
        default:
            return state;
    }
}

export default summaryReducer
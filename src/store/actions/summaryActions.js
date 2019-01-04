export const updateSummary = (summary, amount) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();

        firestore.collection('summary').doc('sFnacbO5Z6L6qlD9O5fm').update({
            paid: summary.paid += amount,
            toPay: summary.toPay += amount
        }).then(() => {
            dispatch({
                type: 'UPDATE_SUMMARY',
            })
        }).catch((err) => {
            dispatch({
                type: 'UPDATE_SUMMARY_ERROR',
                err: err
            })
        })
    }
}
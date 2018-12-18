export const createNew = (bill) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('bills').add({
            ...bill
        }).then(() => {
            dispatch({
                type: 'ADD_BILL',
                bill: bill
            })
        }).catch((err) => {
            dispatch({
                type: 'ADD_BILL_ERROR',
                err: err
            })
        })
    }
}
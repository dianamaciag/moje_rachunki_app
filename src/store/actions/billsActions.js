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


export const deleteBill = (id) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();

        firestore.collection('bills').doc(id).delete().then(() => {
            dispatch({
                type: 'DELETE_BILL',
            })
        }).catch((err) => {
            dispatch({
                type: 'DELETE_BILL_ERROR',
                err: err
            })
        })
    }

}

export const setBillInactive = (id) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();

        firestore.collection('bills').doc(id).update({
            active: false
        }).then(() => {
            dispatch({
                type: 'SET_ACTIVITY_FALSE'
            })
        }).catch((err) => {
            dispatch({
                type: 'SET_ACTIVITY_ERROR',
                err: err
            })
        })
    }

}

export const setBillActive = (id) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();

        firestore.collection('bills').doc(id).update({
            active: true
        }).then(() => {
            dispatch({
                type: 'SET_ACTIVITY_TRUE'
            })
        }).catch((err) => {
            dispatch({
                type: 'SET_ACTIVITY_ERROR',
                err: err
            })
        })
    }

}



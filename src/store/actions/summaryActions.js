export const updateToPay = (amount) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();

        firestore.collection('summary').doc('14866BBNRSsBsKt2D0Qm').update({
            toPay: amount
        }).then(() => {
            dispatch({
                type: 'UPDATE_SUMMARY_TO_PAY',
            })
        }).catch((err) => {
            dispatch({
                type: 'UPDATE_SUMMARY_TO_PAY_ERROR',
                err: err
            })
        })
    }
}


export const updatePaid = (amount) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();

        firestore.collection('summary').doc('14866BBNRSsBsKt2D0Qm').update({
            paid: amount
        }).then(() => {
            dispatch({
                type: 'UPDATE_SUMMARY_PAID',
            })
        }).catch((err) => {
            dispatch({
                type: 'UPDATE_SUMMARY_PAID_ERROR',
                err: err
            })
        })
    }
}




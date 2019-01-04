import authorizationReducer from './authorizationReducer'
import billReducer from './billReducer'
import summaryReducer from './summaryReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    authorization: authorizationReducer,
    bill: billReducer,
    summary: summaryReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer
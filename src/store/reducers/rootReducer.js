import authorizationReducer from './authorizationReducer'
import billReducer from './billReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    authorization: authorizationReducer,
    bill: billReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer
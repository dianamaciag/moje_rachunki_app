import authorizationReducer from './authorizationReducer'
import billReducer from './billReducer'
import { combineReducers } from 'redux'
// import { firestoreReducer } from 'redux-firestore'


const rootReducer = combineReducers({
    authorization: authorizationReducer,
    bill: billReducer,
    // firestore: firestoreReducer
})

export default rootReducer
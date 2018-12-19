const initState = {
    authorizationError: null
}

const authorizationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('poprawne logowanie')
            return {
                ...state,
                authorizationError: null
            }
        case 'LOGIN_ERROR':
            console.log('błąd logowania')
            return {
                ...state,
                authorizationError: 'Niepoprawny login lub hasło'
            }
        case 'SIGNOUT_SUCCESS':
            console.log('wylogowano')
            return state
        default:
            return state
    }
}

export default authorizationReducer
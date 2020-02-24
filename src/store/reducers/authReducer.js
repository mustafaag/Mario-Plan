const initState= {
    authError: null
}

const authReducer = (state= initState, action) =>{
    switch(action.type){
        case 'AUTH_FAILED': 
            return {
                ...state,
                authError: action.error
            }
        case 'LOGIN_SUCCESS': 
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCCESS': 
            return state;
        case 'SIGNUP_SUCCESS': 
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_FAILED': 
            return {
                ...state,
                authError: action.error
            };
        
        default: 
        return state;
    }
}

export default authReducer;
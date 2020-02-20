const initState= {
    authError: null
}

const authReducer = (state= initState, action) =>{
    switch(action.type){
        case 'AUTH_FAILED': 
            console.log(action.error);
            return {
                ...state,
                authError: action.error
            }
        case 'LOGIN_SUCCESS': 
            console.log('success')
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCCESS': 
            console.log('signout');
            return state;
        case 'SIGNUP_SUCCESS': 
            console.log('singup success');
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_FAILED': 
            console.log('singup error', action.error);
            return {
                ...state,
                authError: action.error
            };
        
        default: 
        return state;
    }
}

export default authReducer;
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
        }
        
        default: 
        return state;
    }
}

export default authReducer;
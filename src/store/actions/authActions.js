export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase =getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then (() =>{
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) =>{
            dispatch({ type: 'AUTH_FAILED', error: err.message})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() =>{
            dispatch( {type: 'SIGNOUT_SUCCESS' });
        });
    }
}
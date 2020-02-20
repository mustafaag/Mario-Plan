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

export const singUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) =>{
            return firestore.collection('users').doc(resp.user.uid).set({
                fname: newUser.fname,
                lname: newUser.lname,
                initials: newUser.fname[0] + newUser.lname[0]
            }).then(() => {
                dispatch({ type: 'SIGNUP_SUCCESS'})    
            })
        }).catch((err) =>{
            dispatch({ type: 'SIGNUP_FAILED', error: err.message})
        })
    } 
}
export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) =>{
        //make async call to DB
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFname: profile.fname,
            authorLname: profile.lname,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=> {
            dispatch({type: 'CREATE_PR', project});    
        }).catch((error) =>{
            dispatch({type: 'CREATE_PR_ERROR', error});    
        })
        
    }
}
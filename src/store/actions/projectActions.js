export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) =>{
        //make async call to DB
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFname: 'maga',
            authorLname: 'aga',
            authorId: 124545,
            createdAt: new Date()
        }).then(()=> {
            dispatch({type: 'CREATE_PR', project});    
        }).catch((error) =>{
            dispatch({type: 'CREATE_PR_ERROR', error});    
        })
        
    }
}
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { getFirestore, reduxFirestore, createFirestoreInstance } from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
import firebase from 'firebase/app';
import fbConfig from '../configs/fbConfig';
import { Provider, useSelector } from 'react-redux';
import React from 'react';
import App from '../App'

const store = createStore(rootReducer , 
    compose( 
        applyMiddleware( thunk.withExtraArgument({ getFirestore , getFirebase })),
        reduxFirestore( firebase , fbConfig )
    )
);
const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
    attachAuthIsReady: true
  };

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}
function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>Loading Screen...</div>;
        return children
}

const RdxStore = () => {
    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <AuthIsLoaded>
                    <App /> 
                </AuthIsLoaded>                
            </ReactReduxFirebaseProvider> 
        </Provider>
    )
}

export default RdxStore;
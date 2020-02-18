import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { getFirestore, reduxFirestore, createFirestoreInstance } from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from 'firebase/app';
import fbConfig from '../configs/fbConfig';
import { Provider } from 'react-redux';
import React from 'react';
import App from '../App'

const store = createStore(rootReducer , 
    compose( 
        applyMiddleware( thunk.withExtraArgument({ getFirestore , getFirebase })),
        reduxFirestore( firebase , fbConfig )
    )
);

const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

const RdxStore = () => {
    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App /> 
            </ReactReduxFirebaseProvider> 
        </Provider>
    )
}

export default RdxStore;
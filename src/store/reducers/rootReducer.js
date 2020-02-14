import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';


const rootReducer = combineReducers(
    {
        auth: authReducer,
        projct: projectReducer
    }
)

export default rootReducer;
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import React from 'react';
import PrivateRoute from '../../helpers/PrivateRoute';
import Dashboard from '../dashboard/Dashboard';
import ProjectDetails from '../projects/ProjectDetails';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import CreateProject from '../projects/CreateProject';

const Navigation = () =>{
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <PrivateRoute exact path='/' component={Dashboard}  />
                    <PrivateRoute path='/project/:id' component={ ProjectDetails } />
                    <Route path='/signin' component={ SignIn } />
                    <Route path='/signup' component={ SignUp } />
                    <PrivateRoute path='/create' component={ CreateProject } />
                </Switch> 
            </div>
        </BrowserRouter>
    )
}

export default Navigation;
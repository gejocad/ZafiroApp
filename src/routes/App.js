import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Main from '@containers/main/Main';
import Login from '@containers/login/Login';
import Register from '@containers/register/Register';
import ForgetPassword from '@containers/forgot-password/ForgotPassword';
import RecoverPassword from '@containers/recover-password/RecoverPassword';
import PrivacyPolicy from '@containers/privacy-policy/PrivacyPolicy';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import './App.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login">
                    <Login />
                </PublicRoute>
                <PublicRoute exact path="/register">
                    <Register />
                </PublicRoute>
                <PublicRoute exact path="/forgot-password">
                    <ForgetPassword />
                </PublicRoute>
                <PublicRoute exact path="/recover-password">
                    <RecoverPassword />
                </PublicRoute>
                <PublicRoute exact path="/privacy-policy">
                    <PrivacyPolicy />
                </PublicRoute>
                <PublicRoute exact path="/callback">
                    <h1>Callback</h1>
                </PublicRoute>
                <PrivateRoute path="/">
                    <Main />
                </PrivateRoute>
            </Switch>
        </Router>
    );
};

export default App;

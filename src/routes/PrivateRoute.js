import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    
    return [
        <Route {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to='/login' />)
            )}
        />
    ]
        
};

export default PrivateRoute;

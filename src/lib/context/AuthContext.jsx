import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
    const { authenticated, handleLogin, handleLogout } = useAuth();

    return (
        <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
            {children }
        </Context.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
};

export { Context, AuthProvider };

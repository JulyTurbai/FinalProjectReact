import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginContext = createContext(null);

const LoginProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const navigate = useNavigate();
    
    const singIn = (user, callback) => {
        setUser(user);
        callback();
    }

    const singOut = (callback) => {
        setUser(null);
        typeof callback === 'function'? callback() : navigate('/');
    }
    const value = { user, singIn, singOut }
    return (
        <LoginContext.Provider value={ value }>
            { children }
        </LoginContext.Provider>
    );
};

export default LoginProvider;
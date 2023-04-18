import React, { useContext } from 'react';
import { UserContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(UserContext)
    if(loading){
        return <progress className="progress w-56"></progress>;
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivetRoutes;
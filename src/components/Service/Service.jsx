import React, { useContext } from 'react';
import { UserContext } from '../../provider/AuthProvider';

const Service = () => {
    const {user} = useContext(UserContext)
    return (
        <div>
            <h2>Name: {user && <label>{user.displayName}</label>}</h2>
        </div>
    );
};

export default Service;
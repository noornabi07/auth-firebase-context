import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase.config';
 export const UserContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    // const [user, setUser] = useState(null)
    const user = {displayName: 'amir hossain'}

    const createUserInfo = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        createUserInfo,
        signIn
    }

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase.config';
 export const UserContext = createContext(null)

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // const user = {displayName: 'amir hossain'}

    const createUserInfo = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    // obserbe auth state change
    useEffect( () =>{
       const unsubscribes = onAuthStateChanged(auth, currentUser =>{
            console.log('current state change', currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unsubscribes();
        }
    }, [])

    const userInfo = {
        user,
        signInWithGoogle,
        loading,
        createUserInfo,
        signIn,
        logOut
    }

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Config/firebaseConfig";


export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    // create user with email & password
    const createUseWithEmail = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login with email & password
    const signIn=(email,password)=>{
        setIsLoading(true)
      return  signInWithEmailAndPassword(auth,email,password)
    }

    // signIn width google
    const googleProvider = new GoogleAuthProvider()
    const signIngWithGoogle=()=>{
        setIsLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // signIn width github
    const githubProvider =new GithubAuthProvider()
    const signInWithGithub = ()=>{
        setIsLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    // signOut
    const signout = ()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            setIsLoading(false)
        })
        return () => unSubscribe();
    }, [])
    const authInfo = {
        user,
        isLoading,
        createUseWithEmail,
        signIn,
        signIngWithGoogle,
        signInWithGithub,
        signout
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
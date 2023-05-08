import { createContext, useContext, useEffect, useState } from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth"
import { auth } from "../firebase"

const userAuthContext = createContext(); 

export function UserAuthContextProvider( {children} ) {
    const [user, setUser] = useState("");

    function signUp(email, password) {
        return  createUserWithEmailAndPassword(auth, email, password); 
    }   

    function logIn(email, password) {   
        return  signInWithEmailAndPassword(auth, email, password)
        .then((res) => console.log(res)); 
    }


    function logOut () {
        return signOut(auth); 
    }

    function profileName (name) {
        console.log(name); 
        return updateProfile(auth.currentUser, {displayName: name})
        .then((res) => console.log(res))
        .catch ((error) => {
            console.log(error)
        }); 
    } 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); 
        })
        return () => {
            unsubscribe(); 
        }
    }, [])

    return (
        <userAuthContext.Provider value={{user, signUp, logIn, logOut, profileName}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext); 
}


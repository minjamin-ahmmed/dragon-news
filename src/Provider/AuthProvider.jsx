import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Utilities/firebase.init";




export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState(null)
    console.log(user);


    const createNewUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signOutUser = () => {
        setLoader(true)
        return signOut(auth)
    }


    const sinInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("current user", currentUser)
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = {
        user,
        setUser,
        createNewUser,
        signOutUser,
        sinInUser,
        loader


    }





    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;
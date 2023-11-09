import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../config/firebase.config";
import useAxios from "../hooks/useAxios";

// auth context 
export const AuthContext = createContext(null)

// create instance 
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const axiosSecure = useAxios();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create use 
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password)
    }

    // sign in user 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign in with google 
    const googleSign = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // log out user 
    const  logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // observer 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            
            const userEmail = currentUser?.email || user?.email;
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
            if(currentUser){
                axiosSecure.post("/user/access-token", {email: userEmail})
                .then(res=>{
                    console.log(res.data);
                }).catch(err=>{
                    console.error(err);
                })
            }else{
                axiosSecure.post("/user/delete-token", {email: userEmail})
                .then((res) => {
                    console.log(res.data);
                }).catch((err) => {
                    console.error(err)
                });
            }
        })
        return ()=>{
            return unSubscribe();
        }
    },[axiosSecure,user?.email])


    const authData = {
        user,
        createUser,
        signIn,
        googleSign,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;
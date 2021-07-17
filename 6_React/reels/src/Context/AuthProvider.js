import React,{useState,useContext,useEffect} from 'react'
import {auth} from '../firebase'
export const AuthContext =React.createContext();
function AuthProvider({children})
{
    const[currentUser,setCurrentUser]=useState();
    const [loading,setLoad]=useState(true);
    function signup(email,pass)
    {
        return auth.createUserWithEmailAndPassword(email,pass);
    }
    function login(email,pass)
    {
        return auth.signInWithEmailAndPassword(email,pass);
    }
    function signout() {
        return auth.signOut();
    }
    useEffect(() => {
        const unsubscribe =auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
            setLoad(false);
        })
        return ()=>{
            unsubscribe();
        }
    }, [])
    const value={
        currentUser,
        login,
        signup,
        signout
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading&&children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
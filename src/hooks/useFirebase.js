import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const auth = getAuth();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const signInWithGoogle = () =>{
        return(
            signInWithPopup(auth, googleProvider)
        )
       
        }
        const logOut = () =>{
            setLoading(true);
            signOut(auth)
                .then(() => {
    
                }).finally(() => setLoading(false))
        }
        
        useEffect(() =>{
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                }
                else {
                    setUser({});
                }
                setLoading(false);
            })
        },[])

        return {
            signInWithGoogle,
            logOut,
            user,
            loading
            // error
        }
}
export default useFirebase;
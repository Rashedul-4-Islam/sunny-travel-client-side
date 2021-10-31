import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const auth = getAuth();
const useFirebase = () => {
    const [user,setUser] = useState({});
    // const [error,setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () =>{
        return(
            signInWithPopup(auth, googleProvider)
            // .then((result) => {
            //     setUser(result.user)
            //     console.log(result.user);
            // })
            // .catch(error =>{
            //     setError(error.message)
            // })
        )
       
        }
        const logOut = () =>{
            signOut(auth)
            .then(() => {
                setUser({})
            })
        }
        
        useEffect(() =>{
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
                  }
            });
        },[])

        return {
            signInWithGoogle,
            logOut,
            user
            // error
        }
}
export default useFirebase;
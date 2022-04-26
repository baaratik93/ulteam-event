import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut } from "firebase/auth";
import {app} from '../utils/firebase'
app;

const auth = getAuth();

const FireBaseAuth = {
    Login: async(user) => {
    try {
       const userCredential = await signInWithEmailAndPassword(auth, user.login, user.password)
       return {
                user: userCredential
            }
    } catch (error) {
        return {
             error: error.message
        }
                
    }
	},
    Singnup: async (user) => {
        try {
            const UserLoad = await createUserWithEmailAndPassword(auth, user.login, user.password)
            return {
                user: UserLoad
            }
        } catch (error) {
            return {
                error: error.message
           }
        }
          
    },
    Logout: async () => {
       await signOut(auth)
        .then(() => alert("Utilisateur déconnecté"))
        .catch((error) => {
            // An error happened.
          });
    }
    
}

export default FireBaseAuth

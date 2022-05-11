import { getAuth, sendEmailVerification, onAuthStateChanged} from 'firebase/auth'
import { createContext, useContext, useState } from 'react'
import FireBaseAuth from '../services/FireBaseAuth'

const auth = getAuth()
const authContext = createContext()

export default function useAuth() {
    return useContext(authContext)
}

export function AuthProvider(props) {
    const [user, setUser] = useState(null)
    const [error, setError] = useState("" )


    const loginWithUserAndPassword = async (userTaped) => {
        const {error, user  } = await FireBaseAuth.Login(userTaped)
        setUser(user ?? null)
        setError(error ?? "")
        // return user ? user : error
    }

    const signWithUserAndPassword = async (userTaped) => {
        const {error, user  } = await FireBaseAuth.Singnup((userTaped))
        sendEmailVerification(auth.currentUser)
            .then(()=>alert('Email de validation envoyé'))
            .catch(e => alert(e.message))
        setUser(user ?? null)
        setError(error ?? "")
    }

    const logout = async () => {
        await FireBaseAuth.Logout();
        setUser(null)
    }

    const value = { user, error, setError,  setUser, loginWithUserAndPassword, signWithUserAndPassword, logout}

    return <authContext.Provider value={value} { ...props }/>
}


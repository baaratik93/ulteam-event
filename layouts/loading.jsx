import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import useAuth from "../hook/AuthContext";

function Loader ({children}) {
    const { setUser } = useAuth()
    const [loading, setLoding] = useState(true);
    const auth = getAuth()
    
    
    useEffect(() =>{
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoding(false)
        })
    },[]);

    if (loading) {
        return <h1>Loading...</h1>
    }
    return children
}

export default Loader;
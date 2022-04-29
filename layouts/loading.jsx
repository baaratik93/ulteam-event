import { useEffect, useState } from "react";
import useAuth from "../hook/AuthContext";

function Loader ({Component}) {
    const { user } = useAuth()
    const [loading, setLoding] = useState(true);
    useEffect(() =>{
        user && setLoding(false)
    },[]);
    if (!user) {
        return <h1>Loading...</h1>
    }
    return Component
}

export default Loader;
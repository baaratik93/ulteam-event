import { doc, getDoc} from "firebase/firestore"; 
import {db} from "../../../utils/firebase"; 
import { useState, useEffect } from "react"
export async function getServerSideProps (context) {
    return {
        props: {
            id: context.params.id
        }
    }
}
function SingleEvent ({ id }){
const [single, setSingle] = useState();
async function getSingleEvent(){
    const ref = doc(db, "events", id);
const docSnap = await getDoc(ref);
if (docSnap.exists()) {
  // Convert to City object
  setSingle(docSnap.data())
  console.log(docSnap.data());
} else {
  console.log("No such document!");
}
}

useEffect(()=>{
    getSingleEvent()
}, [])

    return <>
                <h1> { id } </h1>
                {/* {
                    single.map(s=>{
                        return s;
                    })
                } */}
           </> 
}

export default SingleEvent
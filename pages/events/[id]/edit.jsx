import { doc, getDoc} from "firebase/firestore"; 
import {db} from "../../../utils/firebase"; 
import { useState, useEffect } from "react"
import EventForm from "../../../components/events/EventForm";
export async function getServerSideProps (context) {
    const ref = await doc(db, "events", context.params.id);
        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
          // Convert to City object

        } else {
          console.log("No such document!");
        }

        return {
        props: {
            event: {
                    uid: context.params.id,
                    ...docSnap.data()
            }
        }
    }
}
function Edit ({ event }){
  return <EventForm isEdit="true" event={event}/>
}

export default Edit;

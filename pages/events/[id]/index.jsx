import { Link } from "@chakra-ui/react"
import NextLink from "next/link"
import { doc, getDoc} from "firebase/firestore"; 
import {db} from "../../../utils/firebase"; 
import { useState, useEffect } from "react"
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
function Index ({ event }){

    return  <NextLink href={'/events/'+ event.uid +'/edit'}>
                <Link> { event.title } </Link>
            </NextLink>
}

export default Index;

import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'
import {useState} from 'react'
export default async function SerializeEvents() {
    const [events, setEvents]=useState([])
    const querySnapshot = await getDocs(collection(db, "events"));
    const e = []
    try {
        querySnapshot.forEach((doc) => {
            e.push({
              id: doc.id,
              ...doc.data()
            })
          });
    } catch (error) {
        console.log(error);
    }
    return e
  }

import Head from 'next/head'
import Image from 'next/image'
import {useEffect,useState} from 'react'
import styles from '../styles/Home.module.css'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/firebase'
import Link from 'next/link'



export default function Home() {
  const [events, setEvents] = useState([]);
  async function SerializeEvents() {
    const querySnapshot = await getDocs(collection(db, "events"));
    const e = []
    querySnapshot.forEach((doc) => {
      e.push({
        id: doc.id,
        ...doc.data()
      })
    });
    setEvents(e);
  }
  useEffect(() => {
    SerializeEvents()
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>ULTeam | A la une</title>
        <meta name="description" content="L'une des meilleurs canaux de la publicité" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenue sur <a href="/">ULTeam events</a>
        </h1>
            {
                events.map(event => {
                  // Sans le return le contenue du ul ne sera pas visible
                 return (<ul key={event.title}>
                    <li className={styles.title}><Link href={`http://localhost:3000/events/`+ event.id}> {event.title}</Link></li>
                    <li>{event.description}</li>
                    <li>{event.location}</li>
                    <li>{event.moment}</li>
                  </ul>) 
                })
              }
      </main>
      
    </div>
  )
}

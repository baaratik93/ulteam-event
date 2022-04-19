import Head from 'next/head'
import {useEffect,useState} from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export const getServerSideProps = async () => {
  
   const responses = await fetch('http://localhost:3000/api/events/events').then(data => {
     return data.json()
   }).catch(error => {
     throw error
   })
   return {
    props: {
      events: responses
    }
  }

   
}

export default function Home({events}) {

  // const [events, setEvents] = useState([]);
  // async function SerializeEvents() {
  //   const querySnapshot = await getDocs(collection(db, "events"));
  //   const e = []
  //   querySnapshot.forEach((doc) => {
  //     e.push({
  //       id: doc.id,
  //       ...doc.data()
  //     })
  //   });
  //   setEvents(e);
  // }
  useEffect(() => {
    console.log(events);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>ULTeam | A la une</title>
        <meta name="description" content="L'une des meilleurs canaux de la publicité" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className={styles.title}>
          Bienvenue sur <a href="/">ULTeam events</a>
        </h1>
            {
                events.map(event => {
                  // Sans le return le contenue du ul ne sera pas visible
                 return (<Link href={`http://localhost:3000/events/`+ event.id}>
                                <ul key={event.id}>
                                              <li className={styles.title}> {event.title}</li>
                                              <li>{event.description}</li>
                                              <li>{event.location}</li>
                                              <li>{event.moment}</li>
                                </ul>
                                </Link>) 
                })
              }
      
    </div>
  )
}

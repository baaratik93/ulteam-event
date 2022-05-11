import Head from 'next/head'
import fakeEvents from '../utils/fakeEvents';
import {Container, SimpleGrid, Heading, VStack} from '@chakra-ui/react'
import SingleEvent from '../components/events/SingleEvent'
import ev from '../utils/fakeEvents'
import useAuth from '../hook/AuthContext'
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
 const {user} = useAuth()
  return <VStack>
      <Head>
        <title>ULTeam | A la une</title>
        <meta name="description" content="L'une des meilleurs canaux de la publicité" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Heading m="1rem" textAlign='center' color="green">
          A la une des événements sur ULTEAMEVENTS
        </Heading>
      <SimpleGrid gap={3} gridTemplateColumns={
        ['1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr']
      }>
            {
                events.map(event => {
                  // Sans le return le contenue du ul ne sera pas visible
                 return <SingleEvent key={event.id} event={event}/>
                  
                })
              }
      </SimpleGrid>
      
      </VStack>
}

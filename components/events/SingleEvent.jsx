import NextLink from 'next/link'
import { Flex,
	 VStack,
	 HStack, 
	 useColorMode,
	 Box, 
	 Link,
	 Image,
	 Text } from '@chakra-ui/react'


function SingleEvent({event}){
	const { colorMode } = useColorMode()
	const cardBackground = {
		dark: 'teal.500',
		light: 'teal.300'
		}
   return  <Flex
              p={3}
              as={VStack}
              gap={1}
              borderRadius='lg'
              boxShadow='xl'
              >
                <Image w='65%' src={event.image}/>
    
		<NextLink
                  href={`http://localhost:3000/events/`+ event.id}
                 > 
                    <Link
                        color='green.500'
                        borderBottom='1px solid teal'
                        //p={1}
                        textAlign='center'
                        fontWeight='bold'
                        fontSize={
                            [
                            '15px',
                            '16px',
                            '18px'
                            ]
                        }
                        >
                        {event.title}
                    </Link>
                </NextLink>

                <Text
                p={3}
                borderRadius={10} 
                maxH='3xl'
  		background={ cardBackground[colorMode] }              
                textAlign='center'
		fontSize={['10px','12px','14px']}
		>
                    {event.description}
                </Text>

                <HStack>
                    <Box bg="green.300" textAlign='center' p={1} borderRadius={6}>
                        {event.moment}
                    </Box>
                    <Box bg="green.300" p={1} borderRadius={6}>
                        {event.location}
                    </Box>
                    <NextLink href={`http://localhost:3000/events/`+ event.id + '/reserve'}>
                         <Link bg='green' textAlign='center' borderRadius={6} p={1.5}>Réserver</Link>
                    </NextLink>
                </HStack>

            </Flex>
                        
                   
                        
}

export default SingleEvent;

import { useToast, Box } from '@chakra-ui/react';
import { useEffect } from 'react'
import useAuth from '../../hook/AuthContext.js'
function Verification () {
const toast = useToast()
const { user } = useAuth()
	useEffect(()=>{
	   toast({
		title: 'Confirmation',
		description: "Nous vous avons envoyé un lien de confirmationpar mail sur l'adresse" + user.email +". Cliquez sur le lien en question pour activez votre compte et connectez-vous!!!",
		status: 'success',
		duration: 9000,
		isClosable: true,
	   })
	},[]);

   return <>
		<Box>
		   Verification du compte
		</Box>
	  </>

}

export default Verification;

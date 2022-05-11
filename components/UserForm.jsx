import Head from 'next/head';
import { useRef } from 'react'
import { useRouter } from 'next/router';
import {FormControl, Box, Button, Heading, VStack, FormLabel, Input} from '@chakra-ui/react'
import CustFormControl from './customized/CustFormcontrol'
function UserForm({onSubmitUser, isRegister}) {
	const login = useRef()
	const password = useRef()
	const cpassword = useRef()
	const authHandler = (e) => {
		// e.preventDefault();
        onSubmitUser({
		login: login.current.value,
		password: password.current.value,
        cpassword: isRegister ? cpassword.current.value : null
	})
	}
    return 	<>
		<Head>
        		<title>ULTEAMEVENTS | LOGIN </title>
        		<meta name="connexion" content="Se connecter sur la plateforme dulteamevents" />

		</Head>
		<Heading>Login</Heading>
		
		<form onSubmit={authHandler}>
		<CustFormControl>
			<FormLabel>E-mail</FormLabel>
			<Input ref={login} type="email" id="email" />
		</CustFormControl>
		
		<CustFormControl>
		  	<FormLabel>Mot de passe</FormLabel>
			<Input ref={password} type="password" id="password"/>
		</CustFormControl>
		
        {
            isRegister && <CustFormControl>
            <FormLabel>Confirmer le mot de passe</FormLabel>
          <Input ref={cpassword} type="password" id="password"/>
      </CustFormControl>
        }
		
		<Button bg="whatsapp.500"  w="100px" type="submit">
         {  !isRegister ? "Connexion" : "Inscription"}
        </Button>
		
	   	</form>
		</>
}

export default UserForm

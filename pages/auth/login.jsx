// Next JS related
import Head from 'next/head';
import {useRef} from 'react'
import { useRouter } from 'next/router';
import {FormControl, Button, Heading, VStack, FormLabel, Input} from '@chakra-ui/react'
import CustFormControl from '../../components/customized/CustFormcontrol.jsx'
function Login() {
	const login = useRef()
	const password = useRef()
	const authHandler = (e) => {
		e.preventDefault();
	console.log({
		login: login.current.value,
		password: password.current.value
	})
	}
    return <>
		<Head>
        		<title>ULTEAMEVENTS | LOGIN </title>
        		<meta name="connexion" content="Se connecter sur la plateforme dulteamevents" />
		</Head>
		<Heading>Login</Heading>
		
		<form onSubmit={authHandler}>
		<CustFormControl>
			<FormLabel>E-mail</FormLabel>
			<Input ref={login} type="text" id="email" />
		</CustFormControl>
		
		<CustFormControl>
		  	<FormLabel>Mot de passe</FormLabel>
			<Input ref={password} type="password" id="password"/>
		</CustFormControl>
		
		<Button m="em auto" type="submit">Connexion</Button>
	   	</form>
		</>
}

export default Login

import {Button, Link} from '@chakra-ui/react'
import useAuth from '../hook/AuthContext';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

function Logout () {
const { logout } = useAuth()
const router = useRouter()
async function LogOutUser() {
  await logout()
  router.push('/')
}
    return <Button
		rightIcon={ <FontAwesomeIcon icon={faSignOut} style={{marginTop: "5px"}} />}		
		bg='red.400'
		maxW="250px"
		fontSize={14}
		onClick={LogOutUser}>
		Déconnexion
	   </Button>
} 

export default Logout;

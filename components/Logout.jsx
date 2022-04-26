import {Button, Link} from '@chakra-ui/react'
import useAuth from '../hook/AuthContext';
import { useRouter } from 'next/router'


function Logout () {
const { logout } = useAuth()
const router = useRouter()
async function LogOutUser() {
  await logout()
  router.push('/')
}
    return <Button w='120px' onClick={LogOutUser}>Se déconnecter</Button>
} 

export default Logout;

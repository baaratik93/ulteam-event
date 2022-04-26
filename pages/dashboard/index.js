import {Box} from '@chakra-ui/react'
import useAuth from '../../hook/AuthContext'

function Dashboard () {
const {user} = useAuth()
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
console.log(user);
return <>
    <Box>
        { user.nom }
        <h2>{ user.email }</h2>
        <h2>{ user.photo }</h2>
        <h2>{ user.verified }</h2>
        <h2>{ user.uid }</h2>
    </Box>
</>
  
}
}

export default Dashboard;
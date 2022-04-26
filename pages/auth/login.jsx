import UserForm from '../../components/UserForm'
// import FirebaseAuth from '../../services/FireBaseAuth'
import useAuth from '../../hook/AuthContext'
import {useRouter} from 'next/router'

function Login() {
  const { user,loginWithUserAndPassword  } = useAuth()
  const router = useRouter()
async	function LogInUser(userTaped) {
    await loginWithUserAndPassword(userTaped)
    router.push('/dashbord')
  }
	return <UserForm onSubmitUser={LogInUser}/>
}

export default Login
import UserForm from '../../components/UserForm'
// import FirebaseAuth from "../../services/FireBaseAuth"
import useAuth from '../../hook/AuthContext'


function Login() {
  const  {user, signWithUserAndPassword} = useAuth()
  console.log(user);
	async function singUpUser(userTaped) {
    const resp = await signWithUserAndPassword(userTaped);
    console.log(resp);
	}

	return <>
        {user?.uid}
        <UserForm onSubmitUser={singUpUser} isRegister="true"/>
  </>
}

export default Login
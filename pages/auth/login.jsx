import UserForm from "../../components/UserForm";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import useAuth from "../../hook/AuthContext";
import { useRouter } from "next/router";
import { useState } from "react";

function Login() {
  // const UserActiveError = "Vous n'avez pas encore validé votre compte. Rendez-vous dans votre mail puis cliquez sur le lien de validation"
  // const UserUnknownError="Mail ou mot de passe incorrect"
  const { user, loginWithUserAndPassword, error, setError } = useAuth();
  const router = useRouter();
  const [active, setActive] = useState(false);

  async function LogInUser(userTaped) {
     try {
      await loginWithUserAndPassword(userTaped);
      router.push("/dashboard")
     } catch (error) {
       setError(error)
     }
	

	error && setActive(true);
  }
  return (
    <>
      {active && (
        <Alert status={error ? "error" : "success"}>
          <AlertIcon />
          <Box>
            <AlertTitle>{error}</AlertTitle>
            <AlertDescription>
              {error ? error : "Connecté avec succès"}
            </AlertDescription>
          </Box>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={() => {
              setActive(false);
            }}
          />
        </Alert>
      )}
      <UserForm onSubmitUser={LogInUser} />
    </>
  );
}

export default Login;

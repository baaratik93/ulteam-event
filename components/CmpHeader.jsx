import NextLink from 'next/link';
import DarkMode from './DarkModeSwitch';
import { PhoneIcon } from '@chakra-ui/icons'
import {
	Button,
	Box,
	HStack,
	Spacer,
	Heading,
	Link,
	useColorMode
  } from '@chakra-ui/react'
import HamburgerMenu from './HamburgerMenu'
import ListMenu from './ListMenu'
import styled from '@emotion/styled'
import useAuth from '../hook/AuthContext';
import Logout from './Logout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const styleHeader = styled.div(`
  position: sticky;
  top:0;
  z-index:100;
`)
 
function CmpHeader() {
	const { user } = useAuth()
	const {colorMode} = useColorMode()
	const headerBg = {
		dark: 'teal.700',
		light: 'teal.200'
	}
	const LogoBG = {
		dark: 'orange.500',
		light: 'orange.300'
	}
	return <HStack as={styleHeader} p={4} bg={headerBg[colorMode]}>
				<NextLink href="/">
					<Link><Heading color={LogoBG[colorMode]}>ULTEAMEVENTS</Heading>					       </Link>
				</NextLink>
				<Spacer/>
				<ListMenu/>
				<Spacer/>
				<DarkMode/>
				{ user && user.emailVerified ? "" :
				<Button
				   rightIcon={<FontAwesomeIcon icon={faPowerOff} style={{ color: "teal.800" }} />}
				   bg={LogoBG[colorMode]}>
				   <NextLink href="/auth/login">
				       Login
				    </NextLink>
				 </Button>
		
				}
				<HamburgerMenu/>
			</HStack>
}

export default CmpHeader

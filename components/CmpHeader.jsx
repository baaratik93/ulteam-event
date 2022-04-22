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

const styleHeader = styled.div(`
  position: sticky;
  top:0;
  z-index:100;
`)
 
function CmpHeader() {
	const {colorMode} = useColorMode()
	const headerBg = {
		dark: 'teal.700',
		light: 'teal.300'
	}
	const LogoBG = {
		dark: 'orange.300',
		light: 'orange'
	}
	return <HStack as={styleHeader} p={4} bg={headerBg[colorMode]}>
				<NextLink href="/">
					<Link><Heading color={LogoBG[colorMode]}>ULTEAMEVENTS</Heading>					       </Link>
				</NextLink>
				<Spacer/>
				<ListMenu/>
				<Spacer/>
				<DarkMode/>
				<Button rightIcon={<PhoneIcon/>} bg={LogoBG[colorMode]}><NextLink href="/auth/login">Login</NextLink></Button>
				<HamburgerMenu/>
			</HStack>
}

export default CmpHeader

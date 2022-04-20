import NextLink from 'next/link';
import DarkMode from './DarkModeSwitch';
import { PhoneIcon } from '@chakra-ui/icons'
import {
	Button,
	Box,
	HStack,
	Spacer,
	Heading,
	Link
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
	return <HStack as={styleHeader} p={4} bg='orange.900'>
				<NextLink href="/">
					<Link><Heading color='orange'>ULTEAMEVENTS</Heading></Link>
				</NextLink>
				<Spacer/>
				<ListMenu/>
				<Spacer/>
				<DarkMode/>
				<Button rightIcon={<PhoneIcon/>} bg='orange'>Login</Button>
				<HamburgerMenu/>
			</HStack>
}

export default CmpHeader

import Header from './CmpHeader'
import Footer from './CmpFooter'
import {Container, Box, LinkBox} from '@chakra-ui/react'
function Layout(props) {
	return <>
				<Header/>
				<Box zIndex="-10">
					{props.children}
				</Box>
					
				<Footer/>
			</>
				
}

export default Layout
import Layout from '../components/Layout'
import theme from '../theme.js'
import {ChakraProvider, ColorModeProvider, useColorMode,} from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  return   <ChakraProvider theme={theme} resetCSS>
		<Layout>
		<ColorModeProvider options={
			{
			    initialColorMode: 'light',
			    useSystemColorMode: true
			}
		}>
		     
			<Component {...pageProps} />
		     
		</ColorModeProvider>
		</Layout>
	    </ChakraProvider>
}

export default MyApp

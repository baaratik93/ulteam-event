import {
  Box,
  useColorMode
} from '@chakra-ui/react'
import styled from '@emotion/styled'
const CustomFooter = styled.div(`
  padding: 1rem;
  position: fixed;
  bottom: 0%;
  right: 0;
  left: 0;
`)
function CmpFooter() {
  const {colorMode} = useColorMode()
  const FooterBG = {
    dark: 'teal.600',
    light: 'secondary'
  }
	return <>
    <Box as={CustomFooter} bg={FooterBG[colorMode]} h={100} m='10px 0'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dicta ab soluta eos facilis. Corporis reiciendis asperiores pariatur veniam repellat aliquid cumque dolor voluptate officiis dicta ut, harum recusandae porro?
    </Box>
  </>
}


export default CmpFooter

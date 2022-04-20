import {
  Box
} from '@chakra-ui/react'
import styled from '@emotion/styled'
const CustomFooter = styled.div(`
  background: orange;
  padding: 1rem;
  position: sticky;
  bottom: 0%;
`)
function CmpFooter() {
	return <>
    <Box as={CustomFooter} h={100} m='10px 0'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dicta ab soluta eos facilis. Corporis reiciendis asperiores pariatur veniam repellat aliquid cumque dolor voluptate officiis dicta ut, harum recusandae porro?
    </Box>
  </>
}


export default CmpFooter
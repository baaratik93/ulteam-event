import {FormControl} from '@chakra-ui/react'

const CustFormControl = ({ children }) => {
    return <FormControl
    m="5px auto" w={
        ['80%', '60%','40%']
    }
    >{children}</FormControl>
}
export default CustFormControl;
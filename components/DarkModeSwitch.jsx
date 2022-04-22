import {useColorMode, IconButton} from '@chakra-ui/react'
import {SunIcon, MoonIcon} from '@chakra-ui/icons'

function DarkModeSwitch() {
    const {colorMode, toggleColorMode} = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'white'
    }

    return (
        <IconButton
            rounded={50}
            bg='transparent'
            aria-label='Mode nuit'
            icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
            onClick={toggleColorMode}
            color={iconColor[colorMode]}
        />
    )
}

export default DarkModeSwitch

import
{Menu,
MenuButton,
MenuList,
MenuItem,
// MenuItemOption,
// MenuGroup,
// MenuOptionGroup,
// MenuDivider,
// Button,
Link,
IconButton
}
from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import NextLink from 'next/link'
import menus from '../utils/menus'
function HamburgerMenu () {
    return (<Menu>
        <MenuButton as={IconButton} display={['block','block', 'none','none']} icon={<HamburgerIcon/>}>
            Menu
        </MenuButton>
       
        <MenuList>
            {
                menus.map(menu => {
                    return (<MenuItem key={menu.id}>
                                <NextLink href={menu.link}>
                                    <Link letterSpacing={3}>{menu.title}</Link>
                                </NextLink>
                            </MenuItem>)
                })
            }
        </MenuList>
    </Menu>)
}

export default HamburgerMenu;

import menus from '../utils/menus'
import NextLink from 'next/link'
import {
    List,
    UnorderedList,
    ListIcon,
    Link,
    ListItem
} from '@chakra-ui/react'
function ListMenu() {
    return (
        <List as={UnorderedList} gap={8} display={['none','none', 'flex','flex']} p='10px 30px' borderRadius='3xl'>
        {
                menus.map(menu => {
                    return (<ListItem key={menu.id}>
                                <NextLink href={menu.link}>
                                    <Link color='whatsapp.500' fontSize='xl' letterSpacing='tighter'>{menu.title}</Link>
                                </NextLink>
                            </ListItem>)
                })
            }
        </List>
    )
}

export default ListMenu;
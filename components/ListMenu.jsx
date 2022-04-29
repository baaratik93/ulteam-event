import menus from '../utils/menus'
import NextLink from 'next/link'
import Logout from './Logout.jsx'
import useAuth from '../hook/AuthContext.js'
import {
    List,
    UnorderedList,
    ListIcon,
    Link,
    ListItem
} from '@chakra-ui/react'
function ListMenu() {
	const { user } = useAuth()
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
	    {
		    user && user.emailVerified ? <ListItem>
			<Logout/>
	    	    </ListItem> : ""
	    }
        </List>
    )
}

export default ListMenu;

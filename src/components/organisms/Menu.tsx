import { FC, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Menu: FC = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const openToggle = () => {
        setOpen(prev => !prev)
    }
    return (
        <>
            <IconButton onClick={openToggle}>
                <MenuIcon fontSize='large'/>
            </IconButton>
            <Drawer anchor='left' open={open} onClose={openToggle}>
                <Box p='16px' component='nav'>

                <IconButton onClick={openToggle} sx={{display: 'flex' ,m: 'auto 0 auto auto'}}>
                    <ArrowBackIosNewIcon fontSize='large'/>
                </IconButton>
                <List disablePadding>
                    <ListItem>
                        <Link href='/'>
                                <ListItemButton component='a'>
                                    <ListItemText primary='トップ'/>
                                </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/#coffe'>
                                <ListItemButton component='a'>
                                    <ListItemText primary='コーヒー'/>
                                </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/#espresso'>
                                <ListItemButton component='a'>
                                    <ListItemText primary='エスプレッソ'/>
                                </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/#frappucino'>
                                <ListItemButton component='a'>
                                    <ListItemText primary='フラペチーノ'/>
                                </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/#tea'>
                                <ListItemButton component='a'>
                                    <ListItemText primary='ティー'/>
                                </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/#others'>
                                <ListItemButton component='a'>
                                    <ListItemText primary='その他'/>
                                </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
                <Button
                    variant='outlined'
                    sx={{m: 'auto', display: 'flex'}}
                    onClick={() => {router.push('/contact')}}
                >お問い合わせ</Button>
                </Box>
            </Drawer>
        </>
    );
};

export default Menu
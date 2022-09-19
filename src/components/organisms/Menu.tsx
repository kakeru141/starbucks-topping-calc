import { FC, memo, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from 'next/router';

const Menu: FC = memo(() => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={onOpen}>
        <MenuIcon fontSize='medium' />
      </IconButton>
      <Drawer anchor='left' open={open} onClose={onClose}>
        <Box p='16px' component='nav'>
          <IconButton
            onClick={onClose}
            sx={{ display: 'flex', m: 'auto 0 auto auto' }}>
            <ArrowBackIosNewIcon fontSize='medium' />
          </IconButton>
          <List disablePadding>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  onClose();
                  router.push('/');
                }}>
                <ListItemText primary='トップ' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  onClose();
                  router.push('/#coffe');
                }}>
                <ListItemText primary='コーヒー' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  onClose();
                  router.push('/#espresso');
                }}>
                <ListItemText primary='エスプレッソ' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  onClose();
                  router.push('/#frappuccino');
                }}>
                <ListItemText primary='フラペチーノ' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  onClose();
                  router.push('/#tea');
                }}>
                <ListItemText primary='ティー' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  onClose();
                  router.push('/#others');
                }}>
                <ListItemText primary='その他' />
              </ListItemButton>
            </ListItem>
          </List>
          <Button
            variant='outlined'
            sx={{ m: 'auto', display: 'flex' }}
            onClick={() => {
              router.push('/contact');
            }}>
            お問い合わせ
          </Button>
        </Box>
      </Drawer>
    </>
  );
});

export default Menu;

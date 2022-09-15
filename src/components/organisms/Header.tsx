import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Menu from './Menu';

const Header: FC = () => {
  const router = useRouter();
  return (
    <Box
      component='header'
      sx={{
        borderBottom: '1px solid #E0E0E0',
        display: 'flex',
        justifyContent: 'space-between',
        mb: 2,
        p: '16px',
      }}>
      {router.pathname === '/' ? (
        <>
          <Menu />
          <Typography variant='h6' component='h1' m='auto'>
            スタバのトッピング計算
          </Typography>
        </>
      ) : (
        <Link href='/'>
          <Typography
            variant='body1'
            component='a'
            m='auto'
            sx={{
              cursor: 'pointer',
            }}>
            スタバのトッピング計算
          </Typography>
        </Link>
      )}
    </Box>
  );
};

export default Header;

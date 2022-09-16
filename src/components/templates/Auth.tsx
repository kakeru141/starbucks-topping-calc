import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { ChangeEvent, FC, FormEvent, memo, ReactNode, useState } from 'react';
import { useRecoilState } from 'recoil';
import { LoginAtom } from '../../recoil/atom/LoginAtom';

type P = {
  children: ReactNode;
};

const Auth: FC<P> = memo(({ children }) => {
  //value
  const [values, setValues] = useState({
    id: '',
    password: '',
  });
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const [isLogin, setIsLogin] = useRecoilState(LoginAtom);

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      values.id === process.env.NEXT_PUBLIC_ID &&
      values.password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      setIsLogin(true);
    }
  };


  if (isLogin) {
    return <>{children}</>;
  } else {
    return (
      <Container component='main' maxWidth='xs'>
        <form onSubmit={signIn}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 6,
            }}>
            <Typography component='h1' variant='h5' sx={{ mb: 2 }}>
              Sign In
            </Typography>

            <TextField
              id='id'
              name='id'
              label='ID'
              variant='outlined'
              margin='normal'
              required
              onChange={changeValue}
            />
            <TextField
              id='password'
              name='password'
              label='PASSWORD'
              variant='outlined'
              type='password'
              margin='normal'
              required
              onChange={changeValue}
            />
            <Button type='submit' variant='contained' sx={{ mt: 2 }}>
              sign in
            </Button>
          </Box>
        </form>
      </Container>
    );
  }
});

export default Auth;

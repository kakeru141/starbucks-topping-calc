import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FC } from 'react';

const ContactSended: FC = () => {
  const router = useRouter();
  return (
    <>
      <Typography variant='body1'>
        お問い合わせありがとうございます。
        <br />
        回答を受け付けました。
      </Typography>
      <Button
        variant='outlined'
        type='button'
        sx={{ m: '16px auto auto' }}
        onClick={() => {
          router.push('/');
        }}>
        トップへ
      </Button>
    </>
  );
};

export default ContactSended;

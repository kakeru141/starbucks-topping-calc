import { Box, Button, Container, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, FormEvent } from 'react';

type P = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const ContactForm: FC<P> = ({ onChange, onSubmit }) => {
  const router = useRouter();
  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          onChange={onChange}
          margin='dense'
          required
          label='お名前'
          name='name'
        />
        <TextField
          onChange={onChange}
          margin='dense'
          required
          label='メールアドレス'
          name='email'
          type='email'
        />
        <TextField
          onChange={onChange}
          margin='dense'
          required
          label='内容'
          name='msg'
          multiline
          rows={8}
        />
        <Button variant='contained' type='submit' sx={{ mt: 1 }}>
          送信
        </Button>
        <Button
          variant='outlined'
          type='button'
          sx={{ mt: 1 }}
          onClick={() => {
            router.push('/');
          }}>
          トップへ
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;

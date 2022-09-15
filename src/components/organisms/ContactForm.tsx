import { Button, Container, TextField } from '@mui/material';
import { FC } from 'react';
import Header from './Header';

const ContactForm: FC = () => {
  return (
    <Container>
      <Header />
      <TextField label='お名前' name='name' />
      <Button>送信</Button>
    </Container>
  );
};

export default ContactForm;

import { Container } from '@mui/material';
import axios from 'axios';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { ChangeEvent, FormEvent, useState } from 'react';
import ContactMsg from '../src/components/molcules/ContactMsg';
import ContactForm from '../src/components/organisms/ContactForm';
import HeadContainer from '../src/components/organisms/HeadContainer';
import Header from '../src/components/organisms/Header';
const ContactSended = dynamic(
  () => import('../src/components/molcules/ContactSended')
);

const Contact: NextPage = () => {
  const [isSend, setIsSend] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    msg: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    {
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    await e.preventDefault();
    await axios.post('/api/contact', {
      name: values.name,
      email: values.email,
      msg: values.msg,
    });
    setIsSend(true);
  };

  return (
    <>
      <HeadContainer>
        <meta name='robots' content='noindex' />
      </HeadContainer>
      <Header />
      <Container maxWidth='sm'>
        {isSend ? (
          <ContactSended />
        ) : (
          <>
            <ContactMsg />
            <ContactForm onChange={onChange} onSubmit={onSubmit} />
          </>
        )}
      </Container>
    </>
  );
};

export default Contact;

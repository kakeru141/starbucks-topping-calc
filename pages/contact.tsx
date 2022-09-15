import { Container } from '@mui/material';
import { NextPage } from 'next';
import { ChangeEvent, FormEvent, useState } from 'react';
import ContactMsg from '../src/components/molcules/ContactMsg';
import ContactSended from '../src/components/molcules/ContactSended';
import ContactForm from '../src/components/organisms/ContactForm';
import HeadContainer from '../src/components/organisms/HeadContainer';
import Header from '../src/components/organisms/Header';

const Contact: NextPage = () => {

  const [isSend, setIsSend] = useState(false)
  const [values, setValues] = useState({
    name: '',
    email: '',
    msg: '',
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {{
    setValues(prev => ({...prev, [e.target.name]: e.target.value}))
  }} 
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsSend(true)
  }

  return (
    <>
      <HeadContainer>
        <meta name='robots' content='noindex' />
      </HeadContainer>
      <Header/>
      <Container maxWidth='sm' >
        {/* {isSend ?
        <ContactSended/>
        :
        <>
        <ContactMsg/>
        <ContactForm onChange={onChange} onSubmit={onSubmit} />
        </>
      } */}
      </Container>
    </>
  );
};

export default Contact;

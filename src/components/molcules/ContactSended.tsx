import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { FC } from 'react';

const ContactSended: FC = () => {

    const router = useRouter()
    return (
        <>
            <Button variant='outlined' type='button' sx={{mt: 1}} onClick={() => {
                router.push('/')
            }} >トップへ</Button>
        </>
    )
};

export default ContactSended
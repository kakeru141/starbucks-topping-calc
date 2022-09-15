import { Box, Typography } from '@mui/material';
import { FC } from 'react';

const ContactMsg: FC = () => {
  return (
    <Box m='24px 0'>
      <Typography>
        スタバのトッピング計算をご利用いただき、ありがとうございます。
      </Typography>
      <Typography>
        ご意見、ご要望、その他不具合の報告などございましたら、こちらからご連絡ください。
      </Typography>
    </Box>
  );
};

export default ContactMsg;

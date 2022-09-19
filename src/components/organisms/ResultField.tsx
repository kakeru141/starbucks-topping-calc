import {
  Box,
  Button,
  FormControlLabel,
  Paper,
  Switch,
  Typography,
} from '@mui/material';
import {
  ChangeEvent,
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useState,
} from 'react';
import { Product } from '../../types/productType';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import dynamic from 'next/dynamic';
const Drawer = dynamic(() => import('@mui/material/Drawer'));
const IconButton = dynamic(() => import('@mui/material/IconButton'));
const Detail = dynamic(() => import('./Detail'));
const CloseIcon = dynamic(() => import('@mui/icons-material/Close'));

type P = {
  resultPrice: number;
  isShop: boolean;
  setIsShop: Dispatch<SetStateAction<boolean>>;
  data: Product;
};

const ResultField: FC<P> = memo(({ resultPrice, isShop, setIsShop, data }) => {
  const [open, setOpen] = useState(false);
  const changeIsShop = (e: ChangeEvent<HTMLInputElement>) => {
    setIsShop(e.target.checked);
  };
  const openToggle = () => {
    setOpen((prev) => !prev);
  };
  const [isTop, setIsTop] = useState(false);
  const upDownToggle = () => {
    setIsTop((prev) => !prev);
  };

  return (
    <>
      <Paper
        elevation={8}
        sx={
          isTop
            ? {
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                p: '8px 16px 24px 16px',
                position: 'fixed',
                right: 16,
                transition: '.3s',
                top: 80,
              }
            : {
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                p: '8px 16px 24px 16px',
                position: 'fixed',
                right: 16,
                transition: '.3s',
                bottom: 16,
              }
        }>
        <Box
          width='100%'
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
          }}>
          <IconButton onClick={upDownToggle} disabled={isTop}>
            <KeyboardDoubleArrowUpIcon />
          </IconButton>
          <IconButton onClick={upDownToggle} disabled={!isTop}>
            <KeyboardDoubleArrowDownIcon />
          </IconButton>
        </Box>
        <FormControlLabel
          control={<Switch checked={isShop} onChange={changeIsShop} />}
          label='店内価格'
        />
        <Typography component='p' variant='h6' sx={{ m: 'auto' }}>
          {`${resultPrice} 円`}
        </Typography>
        <Button variant='contained' onClick={openToggle}>
          詳細
        </Button>
      </Paper>
      <Drawer anchor='bottom' open={open} onClose={openToggle}>
        <IconButton
          onClick={openToggle}
          sx={{
            m: '16px 16px 0 auto',
          }}>
          <CloseIcon fontSize='large' />
        </IconButton>
        <Detail
          data={data}
          isShop={isShop}
          changeIsShop={changeIsShop}
          resultPrice={resultPrice}
        />
      </Drawer>
    </>
  );
});

export default ResultField;

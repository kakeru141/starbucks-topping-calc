import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
// import {
//   Box,
//   Button,
//   Drawer,
//   FormControlLabel,
//   IconButton,
//   Paper,
//   Switch,
//   Typography,
// } from '@mui/material';
import {
  ChangeEvent,
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useState,
} from 'react';
import Detail from './Detail';
import { Product } from '../../types/productType';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

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
        elevation={6}
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
        <Typography variant='h6' sx={{ m: 'auto' }}>
          {`${resultPrice} 円`}
        </Typography>
        <Button variant='contained' onClick={openToggle}>
          詳細
        </Button>
      </Paper>
      <Drawer anchor='bottom' open={open} onClose={openToggle}>
        <Button
          onClick={openToggle}
          variant='outlined'
          sx={{
            m: '16px 16px 0 auto',
          }}>
          <CloseIcon fontSize='medium' />
        </Button>
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

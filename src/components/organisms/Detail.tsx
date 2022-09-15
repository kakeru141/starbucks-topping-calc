import { Box, Container, FormControlLabel, Switch, Typography } from '@mui/material';
import { ChangeEvent, FC, memo } from 'react';
import { useRecoilValue } from 'recoil';
import { totalPriceAtom } from '../../recoil/atom/totalPriceAtom';
import { Product } from '../../types/productType';

type P = {
  data: Product;
  isShop: boolean;
  changeIsShop: (e: ChangeEvent<HTMLInputElement>) => void;
  resultPrice: number;
};

const Detail: FC<P> = memo(({ data, isShop, changeIsShop, resultPrice }) => {
  const totalData = useRecoilValue(totalPriceAtom);

  if (isShop) {
    return (
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          m: 'auto',
          pb: 3,
        }}>
        <FormControlLabel
          control={<Switch checked={isShop} onChange={changeIsShop} />}
          label='店内価格'
        />
        <Typography
          variant='h6'
          m='16px auto'
          fontWeight='bold'>{`合計${resultPrice}円`}</Typography>
        <Typography variant='subtitle1'>{`商品 - ${data.productName}`}</Typography>
        <Typography
          variant='subtitle1'
          sx={{
            borderBottom: '1px solid #9e9e9e',
            pb: 2,
            mb: 2,
          }}>{`${totalData.shop.current.size} - ${totalData.shop.price.size}円`}</Typography>
        {Object.entries(totalData.shop.current).map(([key, value], index) => {
          if (key !== 'size') {
            if (value) {
              return (
                <Typography variant='subtitle1' key={index}>
                  {`${Object.values(totalData.name)[index]} - ${
                    Object.values(totalData.shop.price)[index]
                  }円`}
                </Typography>
              );
            }
          }
        })}
      </Container>
    );
  } else {
    return (
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          m: 'auto',
          pb: 3,
        }}>
        <FormControlLabel
          control={<Switch checked={isShop} onChange={changeIsShop} />}
          label='店内価格'
        />
        <Typography
          variant='h6'
          m='16px auto'
          fontWeight='bold'>{`合計${resultPrice}円`}</Typography>
        <Typography variant='subtitle1'>{`商品 - ${data.productName}`}</Typography>
        <Typography
          variant='subtitle1'
          sx={{
            borderBottom: '1px solid #9e9e9e',
            pb: 2,
            mb: 2,
          }}>{`${totalData.takeout.current.size} - ${totalData.takeout.price.size}円`}</Typography>
        {Object.entries(totalData.takeout.current).map(
          ([key, value], index) => {
            if (key !== 'size') {
              if (value) {
                return (
                  <Typography variant='subtitle1' key={index}>
                    {`${Object.values(totalData.name)[index]} - ${
                      Object.values(totalData.takeout.price)[index]
                    }円`}
                  </Typography>
                );
              }
            }
          }
        )}
      </Container>
    );
  }
});

export default Detail;

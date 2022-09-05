import { Box, FormControlLabel, Switch, Typography } from '@mui/material'
import { ChangeEvent, FC } from 'react'
import { useRecoilValue } from 'recoil'
import { totalPriceAtom } from '../../recoil/atom/totalPriceAtom'
import { Product } from '../../types/productType'

type P = {
  data: Product
  isShop: boolean
  changeIsShop: (e: ChangeEvent<HTMLInputElement>) => void
  resultPrice: number
}

const Detail: FC<P> = ({ data, isShop, changeIsShop, resultPrice }) => {
  const totalData = useRecoilValue(totalPriceAtom)

  if (isShop) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          m: 'auto',
          pb: 3
        }}
      >
        <FormControlLabel
          control={<Switch checked={isShop} onChange={changeIsShop} />}
          label="店内価格"
        />
        <Typography
          variant="h5"
          m="16px auto"
          fontWeight='bold'
        >{`合計${resultPrice}円`}</Typography>
        <Typography variant="h6">{`商品 - ${data.productName}`}</Typography>
        <Typography
          variant="h6"
          sx={{
            borderBottom: '1px solid #9e9e9e',
            pb: 2,
            mb: 2,
          }}
        >{`${totalData.shop.current.size} - ${totalData.shop.price.size}円`}</Typography>
        {Object.entries(totalData.shop.current).map(([key, value], index) => {
          if (key !== 'size') {
            if (value) {
              return (
                <Typography variant="h6" key={index}>
                  {`${Object.values(totalData.name)[index]} - ${
                    Object.values(totalData.shop.price)[index]
                  }円`}
                </Typography>
              )
            }
          }
        })}
      </Box>
    )
  } else {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          m: 'auto',
          pb: 3
        }}
      >
        <FormControlLabel
          control={<Switch checked={isShop} onChange={changeIsShop} />}
          label="店内価格"
        />
        <Typography
          variant="h5"
          m="16px auto"
        >{`合計${resultPrice}円`}</Typography>
        <Typography variant="h6">{`商品 - ${data.productName}`}</Typography>
        <Typography
          variant="h6"
          sx={{
            borderBottom: '1px solid #9e9e9e',
            pb: 2,
            mb: 2,
          }}
        >{`${totalData.takeout.current.size} - ${totalData.takeout.price.size}円`}</Typography>
        {Object.entries(totalData.takeout.current).map(
          ([key, value], index) => {
            if (key !== 'size') {
              if (value) {
                return (
                  <Typography variant="h6" key={index}>
                    {`${Object.values(totalData.name)[index]} - ${
                      Object.values(totalData.takeout.price)[index]
                    }円`}
                  </Typography>
                )
              }
            }
          },
        )}
      </Box>
    )
  }
}

export default Detail

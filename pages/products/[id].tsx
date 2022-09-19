import { Box, Button, Container, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import ProductFormGroup from '../../src/components/molcules/ProductFormGroup';
import ProductFormSize from '../../src/components/molcules/ProductFormSize';
import ProductFormSolo from '../../src/components/molcules/ProductFormSolo';
import HeadContainer from '../../src/components/organisms/HeadContainer';
import Header from '../../src/components/organisms/Header';
import ResultField from '../../src/components/organisms/ResultField';
import { totalPriceAtom } from '../../src/recoil/atom/totalPriceAtom';
import { Product } from '../../src/types/productType';
import fetch from 'node-fetch';

type P = {
  data: Product;
};

export const ProductItem: NextPage<P> = ({ data }) => {
  const router = useRouter();
  const totalPrice = useRecoilValue(totalPriceAtom);
  const [fetchData, setFetchData] = useState(data);
  const [resultPrice, setResultPrice] = useState(0);
  const [isShop, setIsShop] = useState(true);

  useEffect(() => {
    const calclation = () => {
      if (isShop) {
        setResultPrice(
          Object.values(totalPrice.shop.price).reduce(
            (prev, current) => prev + current
          )
        );
      } else {
        setResultPrice(
          Object.values(totalPrice.takeout.price).reduce(
            (prev, current) => prev + current
          )
        );
      }
    };
    calclation();
  }, [totalPrice, isShop, resultPrice]);

  return (
    <>
      <HeadContainer>
        <meta
          name='description'
          content={`${data.productName}トッピングを選択するだけで、合計価格を計算します。注文時にもたつきたくない、1000円チケットをギリギリまで使いたい方は是非活用してください`}
        />
        <meta
          name='keywords'
          content={`スタバ, トッピング, 計算, 価格, ${data.productName}`}
        />
        <link
          rel='canonical'
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/${data._id}`}
        />
        <meta
          property='og:url'
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/${data._id}`}
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content={`${data.productName}のトッピング計算`}
        />
        <meta
          property='og:description'
          content={`${data.productName}のトッピング価格を計算します`}
        />
        <meta
          property='og:site_name'
          content={`${data.productName}のトッピング計算`}
        />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/public/favicons/favicon-32x32.png`}
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@kakeru_FIRE' />
      </HeadContainer>
      <Header />
      <Container maxWidth='sm' component='section'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Typography
            variant='subtitle1'
            component='h1'
            sx={{
              fontWeight: 'bold',
              mt: 1,
              p: '8px 24px',
              borderLeft: '8px solid #42a5f5',
              bgcolor: '#f5f5f5',
            }}>
            {fetchData.productName}
          </Typography>
        </Box>
        <form>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Typography
              component='h2'
              sx={{
                position: 'relative',
                p: 2,
                mt: 4,
                fontWeight: 'bold',
                '&::before, &::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  width: 30,
                  height: '1px',
                  bgcolor: '#bdbdbd',
                },
                '&::before': {
                  left: -20,
                },
                '&::after': {
                  right: -20,
                },
              }}>
              サイズ
            </Typography>
          </Box>
          <ProductFormSize
            data={fetchData.size}
            setData={setFetchData}
            isShop={isShop}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Typography
              component='h2'
              sx={{
                position: 'relative',
                p: 2,
                fontWeight: 'bold',
                '&::before, &::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  width: 30,
                  height: '1px',
                  bgcolor: '#bdbdbd',
                },
                '&::before': {
                  left: -20,
                },
                '&::after': {
                  right: -20,
                },
              }}>
              トッピング
            </Typography>
          </Box>
          <ProductFormSolo
            data={fetchData.topping.rawChocolateWhip}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.coffeeCream}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.allMilk}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.wristletShot}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.changeEspresso}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.honeyPlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.chocoSaucePlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.caramelSaucePlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.cocoa}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.cinnamon}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.vanillaPlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.caramelPlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.classicPlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.mochaPlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.whiteMochaPlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.chaiPlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.valenciaPlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.gingerPlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.whipPlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.steamMilkPlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.foamMilkPlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.chocolateChipPlus}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.decaf}
            setData={setFetchData}
            isCoffeeRoast={
              !fetchData.topping.coffeeRoastPlusGroup.content
                .noneCoffeeRoastPlusGroup.select
            }
          />
          <ProductFormSolo
            data={fetchData.topping.mousseFoam}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.teaLeafChange}
            setData={setFetchData}
          />
          <ProductFormSolo
            data={fetchData.topping.teaLeafPlus}
            setData={setFetchData}
          />
          <ProductFormGroup
            data={fetchData.topping.whipGroup}
            setData={setFetchData}
            isShop={isShop}
          />
          <ProductFormGroup
            data={fetchData.topping.milkGroup}
            setData={setFetchData}
            isShop={isShop}
          />
          <ProductFormGroup
            data={fetchData.topping.changeMilkGroup}
            setData={setFetchData}
            isShop={isShop}
          />
          <ProductFormGroup
            data={fetchData.topping.powderGroup}
            setData={setFetchData}
            isShop={isShop}
          />
          <ProductFormGroup
            data={fetchData.topping.sauceGroup}
            setData={setFetchData}
            isShop={isShop}
          />
          <ProductFormGroup
            data={fetchData.topping.syrupGroup}
            setData={setFetchData}
            isShop={isShop}
          />
          <ProductFormGroup
            data={fetchData.topping.changeSyrupGroup}
            setData={setFetchData}
            isShop={isShop}
          />
          <ProductFormGroup
            data={fetchData.topping.chipGroup}
            setData={setFetchData}
            isShop={isShop}
          />
          <ProductFormGroup
            data={fetchData.topping.iceGroup}
            setData={setFetchData}
            isShop={isShop}
          />
          <ProductFormGroup
            data={fetchData.topping.hotGroup}
            setData={setFetchData}
            isShop={isShop}
          />
          <ProductFormGroup
            data={fetchData.topping.shotPlusGroup}
            setData={setFetchData}
            isShop={isShop}
          />
          <ProductFormGroup
            data={fetchData.topping.coffeeRoastPlusGroup}
            setData={setFetchData}
            isShop={isShop}
            isDecaf={!fetchData.topping.decaf.select}
          />
          <ProductFormGroup
            data={fetchData.topping.citrusPulpPlusGroup}
            setData={setFetchData}
            isShop={isShop}
          />
          <ProductFormGroup
            data={fetchData.topping.teaLeafAddGroup}
            setData={setFetchData}
            isShop={isShop}
          />
        </form>
      </Container>
      <Button
        onClick={() => {
          router.push('/');
        }}
        variant='outlined'
        sx={{ display: 'flex', m: '24px auto' }}>
        トップに戻る
      </Button>
      <ResultField
        resultPrice={resultPrice}
        isShop={isShop}
        setIsShop={setIsShop}
        data={data}
      />
    </>
  );
};

export default ProductItem;

export async function getStaticPaths() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/v1`);
    const datas = (await res.json()) as Product[];
    const paths = await datas.map((data: Product) => ({
      params: {
        id: data._id,
      },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
    return {
      paths: [],
      fallback: false,
    };
  }
}
export async function getStaticProps({ params }: { params: { id: string } }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/v1`);
    const datas = (await res.json()) as Product[];
    const data = await datas.find((item) => item._id === params.id);
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
    return {};
  }
}

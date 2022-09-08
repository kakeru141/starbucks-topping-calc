import type { NextPage } from 'next'
import Link from 'next/link'
import { Product } from '../src/types/productType'
import {Container} from '@mui/material'
import { useState } from 'react'
import Header from '../src/components/organisms/Header'
import Search from '../src/components/molcules/Search'
import HeadContainer from '../src/components/organisms/HeadContainer'
import ProductCategory from '../src/components/organisms/ProductCategory'

type P = {
  datas: Product[]
}

const Home: NextPage<P> = ({ datas }) => {
  const [searchDatas, setSearchDatas] = useState(datas)

  return (
    <>
    <HeadContainer>
      <meta name="description" content="スタバのトッピングを選択するだけで、合計価格を計算します。注文時にもたつきたくない、1000円チケットをギリギリまで使いたい方は是非活用してください" />
      <meta name='keywords' content='スタバ, トッピング, 計算, 価格'/>
      <link rel='canonical' href='https://starbucks-topping-calc.vercel.app'/>
      <meta property="og:url" content='https://starbucks-topping-calc.vercel.app' />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="スタバのトッピング計算" />
      <meta property="og:description" content="スタバのトッピング価格を計算します" />
      <meta property="og:site_name" content="スタバのトッピング計算" />
      <meta property="og:image" content="https://starbucks-topping-calc.vercel.app/public/favicons/favicon-32x32.png" />
      <meta name='twitter:card' content='summary'/>
      <meta name="twitter:site" content='@kakeru_FIRE'/>
    </HeadContainer>
      <Header />
      <Link href="/control">go to edit</Link>
      <Container
        component="main"
        maxWidth="sm"
        sx={{ m: 'auto', p: 2, textAlign: 'center' }}
      >
          <Search setSearchDatas={setSearchDatas} beforeDatas={datas} />
            <ProductCategory
              searchDatas={searchDatas}
              text='コーヒー'
              name='coffe'
            />
            <ProductCategory
              searchDatas={searchDatas}
              text='エスプレッソ'
              name='espresso'
            />
            <ProductCategory
              searchDatas={searchDatas}
              text='フラペチーノ'
              name='frappucino'
            />
            <ProductCategory
              searchDatas={searchDatas}
              text='ティー'
              name='tea'
            />
            <ProductCategory
              searchDatas={searchDatas}
              text='その他'
              name='others'
            />
      </Container>
    </>
  )
}

export default Home

export async function getStaticProps() {
  try {
    const res = await fetch('https://starbucks-topping-calc.vercel.app/api/get')
    const datas = await res.json()

    return {
      props: {
        datas,
      },
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        datas: [],
      },
    }
  }
}

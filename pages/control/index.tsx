import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import Auth from '../../src/components/templates/Auth'
import { Product } from '../../src/types/productType'
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import Search from '../../src/components/molcules/Search'
import HeadContainer from '../../src/components/organisms/HeadContainer'

type P = {
  datas: Product[]
}

const EditHome: NextPage<P> = ({ datas }) => {
  const router = useRouter()
  const [searchDatas, setSearchDatas] = useState(datas)

  const deleteProduct = async (id: string) => {
    try{
      axios.delete(`${process.env.NEXT_PUBLIC_SITE_URL}/api/v1`, { data: { id } })
      router.reload()
    }catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <HeadContainer>
        <meta name="robots" content="noindex"/>
      </HeadContainer>
      {/* <Auth> */}
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'space-around', m: 4 }}>
          <Link href={'/control/add'}>
            <a>
              <Button variant="contained">新規追加</Button>
            </a>
          </Link>
          <Link href={'/'}>
            <a>
              <Button variant="outlined">トップ</Button>
            </a>
          </Link>
        </Box>
        <Search setSearchDatas={setSearchDatas} beforeDatas={datas} />
        <List>
          {searchDatas.map((data, index) => (
            <ListItem key={index}>
              <ListItemText primary={data.productName} />
              {/* <Link href={`/control/edit/${data._id}`}>
                <a>
                  <Button variant='contained'>編集</Button>
                </a>
              </Link>   */}
              <Button
                onClick={() => {
                  deleteProduct(data._id)
                }}
                variant="outlined"
              >
                削除
              </Button>
            </ListItem>
          ))}
        </List>
        <Link href={'/'}>
          <a>
            <Button variant="outlined">トップ</Button>
          </a>
        </Link>
      </Container>
      {/* </Auth> */}
    </>
  )
}

export default EditHome

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/v1`)
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

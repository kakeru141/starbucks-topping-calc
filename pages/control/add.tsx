import { FormEvent } from 'react'
import axios from 'axios'
import EditAddFromFunctions from '../../src/components/molcules/EditAddFromFunctions'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { addProductAtom } from '../../src/recoil/atom/addProductAtom'
import HeadContainer from '../../src/components/organisms/HeadContainer'
import { NextPage } from 'next'

const Add: NextPage = () => {
  const router = useRouter()

  const [addProduct, setAddProduct] = useRecoilState(addProductAtom)
  const addData = async (e: FormEvent<HTMLFormElement>) => {
    await e.preventDefault()

    try {
      await axios.post('/api/v1', addProduct)
      router.push('/control')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <HeadContainer>
        <meta name="robots" content="noindex"/>
      </HeadContainer>
      {/* <Auth> */}
      <EditAddFromFunctions onSubmit={addData} setProductData={setAddProduct} />
      {/* </Auth> */}
    </>
  )
}

export default Add

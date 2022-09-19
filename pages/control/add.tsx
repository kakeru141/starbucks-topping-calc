import { FormEvent } from 'react';
import axios from 'axios';
import { RecoilRoot, useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { addProductAtom } from '../../src/recoil/atom/addProductAtom';
import HeadContainer from '../../src/components/organisms/HeadContainer';
import { NextPage } from 'next';
import Auth from '../../src/components/templates/Auth';
import dynamic from 'next/dynamic';
const EditAddFromFunctions = dynamic(
  () => import('../../src/components/molcules/EditAddFromFunctions')
);

const Add: NextPage = () => {
  const router = useRouter();

  const [addProduct, setAddProduct] = useRecoilState(addProductAtom);
  const addData = async (e: FormEvent<HTMLFormElement>) => {
    await e.preventDefault();

    try {
      await axios.post('/api/v1', addProduct);
      router.push('/control');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <RecoilRoot>
      <HeadContainer>
        <meta name='robots' content='noindex' />
      </HeadContainer>
      <Auth>
        <EditAddFromFunctions
          onSubmit={addData}
          setProductData={setAddProduct}
        />
      </Auth>
    </RecoilRoot>
  );
};

export default Add;

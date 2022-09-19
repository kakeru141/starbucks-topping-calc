import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import HeadContainer from '../../../src/components/organisms/HeadContainer';
import Auth from '../../../src/components/templates/Auth';
import { addProductAtom } from '../../../src/recoil/atom/addProductAtom';
import { Product } from '../../../src/types/productType';
import fetch from 'node-fetch';
import dynamic from 'next/dynamic';
const EditAddFromFunctions = dynamic(
  () => import('../../../src/components/molcules/EditAddFromFunctions')
);

type P = {
  data: Product;
};

const EditPage: NextPage<P> = ({ data }) => {
  const router = useRouter();
  const [editProduct, setEditProduct] = useRecoilState(addProductAtom);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    await e.preventDefault();

    try {
      await axios.put('/api/v1', {
        id: data._id,
        data: editProduct,
      });
      router.push('/control');
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setEditProduct(data);
  }, [data, setEditProduct]);

  return (
    <>
      <HeadContainer>
        <meta name='robots' content='noindex' />
      </HeadContainer>
      <Auth>
        <EditAddFromFunctions
          onSubmit={onSubmit}
          setProductData={setEditProduct}
        />
      </Auth>
    </>
  );
};

export default EditPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const id = params?.id;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/v1`);
    const datas = (await res.json()) as Product[];
    const data = await datas.find((item) => item._id === id);
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};

import Head from 'next/head';
import { FC, ReactNode } from 'react';

type P = {
  children: ReactNode;
};

const HeadContainer: FC<P> = ({ children }) => {
  return (
    <Head>
      <title>スタバのトッピング計算</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='format-detection' content='telephone=no' />
      {/* <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicons/apple-touch-icon.png'
      /> */}
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicons/favicon-32x32.png'
      />
      {/* <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicons/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicons/safari-pinned-tab.svg'
        color='#5bbad5'
      /> */}
      <meta name='msapplication-TileColor' content='#da532c' />
      {children}
    </Head>
  );
};

export default HeadContainer;

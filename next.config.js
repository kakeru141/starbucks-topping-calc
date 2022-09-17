/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 120,
};

// const  withPlugins  =  require ( 'next-compose-plugins' ) 
// const  withBundleAnalyzer  =  require ( '@next/bundle-analyzer' ) ( { 
//   enabled : process.env.ANALYZE  ===  'true' , 
// } ) 

// module . exports  =  withPlugins ( [ 
//   [ withBundleAnalyzer ] , 
//   // ここに他のプラグイン
// ] )

module.exports = nextConfig;

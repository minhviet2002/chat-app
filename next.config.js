/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // HOST
    API_ADMIN_SERVICE: process.env.API_ADMIN_SERVICE,
    // MAPBOX
    MAPBOX_API: "",
    // FIREBASE
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    // AWS COGNITO
    AWS_COGNITO_USER_POOL_ID: "",
    AWS_COGNITO_CLIENT_ID: "",
    // AUTH0
    AUTH0_DOMAIN: "",
    AUTH0_CLIENT_ID: "",
  },
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: process.env.PATH_AFTER_LOGIN,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

// /* eslint-disable @typescript-eslint/no-var-requires */
// const withTM = require('next-transpile-modules')(

//   );

//   module.exports = withTM({
//     swcMinify: true,
//     trailingSlash: true,
//     publicRuntimeConfig: {
//       apiUrlAdmin: process.env.API_ADMIN_SERVICE,
//     },
//     env: {
//       // HOST
//       HOST_API_KEY: 'https://api-dev-minimal-v4.vercel.app',
//       // MAPBOX
//       MAPBOX_API: '',
//       // FIREBASE
//       FIREBASE_API_KEY: '',
//       FIREBASE_AUTH_DOMAIN: '',
//       FIREBASE_PROJECT_ID: '',
//       FIREBASE_STORAGE_BUCKET: '',
//       FIREBASE_MESSAGING_SENDER_ID: '',
//       FIREBASE_APPID: '',
//       FIREBASE_MEASUREMENT_ID: '',
//       // AWS COGNITO
//       AWS_COGNITO_USER_POOL_ID: '',
//       AWS_COGNITO_CLIENT_ID: '',
//       // AUTH0
//       AUTH0_DOMAIN: '',
//       AUTH0_CLIENT_ID: '',
//     },

//   });

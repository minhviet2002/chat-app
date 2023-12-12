import Axios from "axios";

// import getConfig from 'next/config'

// const {
//   publicRuntimeConfig: { apiUrlAdmin }
// } = getConfig()

Axios.defaults.withCredentials = true;

const axios = Axios.create({
  baseURL: process.env.API_ADMIN_SERVICE,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    platform: "web",
  },
});

export default axios;

import axios from 'axios';

export const BASE_URL = 'https://skygarden.search.windows.net/indexes/dev-productsv3/docs/search?api-version=2017-11-11';
const urlPath = axios.create({
  baseURL: BASE_URL,
  headers : {
    "api-key": "4F2408C83BBB69BB31AE97737ED6EE2F"
    },
});

export default urlPath;
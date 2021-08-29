import Axios from "axios";

const SHOPAPI_URL = process.env.NEXT_PUBLIC_SHOP_URL;

const getProducts = (value: string) =>
  Axios.get(`${SHOPAPI_URL}search?q=:${value}&limit=4`).then((response) => {
    if (response.status !== 200) {
      return Promise.reject(response.data);
    }
    return response.data.results;
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProducts,
};

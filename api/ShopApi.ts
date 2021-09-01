import Axios from "axios";

const SHOPAPI_URL = process.env.NEXT_PUBLIC_SHOP_URL;

const getProducts = (value: string) =>
  Axios.get(`${SHOPAPI_URL}sites/MLA/search?q=:${value}&limit=4`).then((response) => {
    if (response.status !== 200) {
      return Promise.reject(response.data);
    }
    return response.data.results;
  });

const getItem = (value: string) =>
  Axios.get(`${SHOPAPI_URL}items/${value}`).then((response) => {
    if (response.status !== 200) {
      return Promise.reject(response.data);
    }
    return response.data;
  });

const getItemDescription = (value: string) =>
  Axios.get(`${SHOPAPI_URL}items/${value}/description`).then((response) => {
    if (response.status !== 200) {
      return Promise.reject(response.data);
    }
    return response.data.plain_text;
  });

const getCurrency = (value: string) =>
  Axios.get(`${SHOPAPI_URL}currencies/${value}`).then((response) => {
    if (response.status !== 200) {
      return Promise.reject(response.data);
    }
    return response.data;
  });

const getCategories = (value: string) =>
  Axios.get(`${SHOPAPI_URL}categories/${value}`).then((response) => {
    if (response.status !== 200) {
      return Promise.reject(response.data);
    }
    return response.data;
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProducts,
  getItem,
  getItemDescription,
  getCurrency,
  getCategories,
};

import { useState, useEffect } from "react";
import "../styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

const Shop = ({ Component, pageProps }: AppProps) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (Object.keys(pageProps).length < 1) {
      setDescription("La comunidad de compra y venta online más grande de América Latina.");
    }
  }, [pageProps]);

  useEffect(() => {
    if (pageProps.search) {
      setDescription(
        `Encontrá ${pageProps.search.charAt(0).toUpperCase() + pageProps.search.slice(1)} 
        en MercadoLibre.com.ar! Entrá y conocé nuestras increíbles ofertas y promociones. 
        Descubrí la mejor forma de comprar online.`
      );
    }
  }, [pageProps.search]);

  useEffect(() => {
    if (pageProps.formatedResponse?.item) {
      setDescription(
        `Compralo en Mercado Libre a ${pageProps.formatedResponse.item.price.currency} ${pageProps.formatedResponse.item.price.amount} - 
        Pagá en cuotas - Envío a todo el país. 
        Encontrá más productos de${pageProps.categoryList.map((cat:{name: string,}) => (` ${cat.name}`))}.`
      );
    }
  }, [pageProps.formatedResponse, pageProps.categoryList]);

  return (
    <>
      <Head>
        <title>
          {pageProps.search
            ? `${pageProps.search.charAt(0).toUpperCase() + pageProps.search.slice(1)} | MercadoLibre.com.ar`
            : pageProps.formatedResponse
            ? `${pageProps.formatedResponse.item.title} | MercadoLibre.com.ar`
            : "MercadoLibre.com.ar"}
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={description} data-head-react='true' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
export default Shop;

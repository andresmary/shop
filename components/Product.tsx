import styles from "../styles/Product.module.scss";
import Breadcrumb from "./Breadcrumb";
import Image from "next/image";

export type ProductType = {
  response: {
    item: {
      id: string,
      title: string,
      price: {
        currency: string,
        amount: number,
        decimals: number,
      },
      picture: string,
      condition: string,
      free_shipping: boolean,
      sold_quantity: number,
      description: string,
    }
  },
  category: Array<{
    id: string,
    name: string,
  }>
};

const Product = ({ response, category }: ProductType) => {
  return (
    <main>
      <div className='container-xxl d-flex flex-column align-items-center'>
        <div className='col-10'>
          <Breadcrumb categories={category} />
        </div>
        <div className={`col-10 bg-white rounded mb-4 ${styles.product}`}>
          <div className='d-flex justify-content-between'>
            <div className={`${styles.container}`}>
              <Image src={response.item.picture} alt='' layout='fill' className={styles.image} />
            </div>
            <div className='flex-column col-3'>
              <h3 className={styles.condition}>
                {response.item.condition === 'new' ? 'Nuevo' : 'Usado'} -{" "}
                {response.item.sold_quantity > 1 ? `${response.item.sold_quantity} vendidos` : `${response.item.sold_quantity} vendido`}
              </h3>
              <h2 className={styles.title}>{response.item.title}</h2>
              <h1 className={`${styles.price} d-flex align-items-start`}>
                {response.item.price.currency} {response.item.price.amount}
                <span>{response.item.price.decimals}</span>
              </h1>
              <button className={styles.buy} type='button'>Comprar</button>
            </div>
          </div>
          <div className={`${styles.description} col-9`}>
            <h2 className={styles.title}>Descripción del producto</h2>
            <p className="mb-0">{response.item.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;

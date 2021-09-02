import styles from '../styles/ResultItem.module.scss'
import Image from 'next/image'

export type ResultItemType = {
  id: string,
  img: string,
  price: number,
  location: string,
  description: string,
  shipping: boolean,
};

const ResultItem = ({ id, img, price, location, description, shipping }: ResultItemType) => {
  return (
    <div className={styles.item}>
      <a href={`/items/:${id}`} target="_self" className="d-flex">
        <div className={`${styles.container} pe-3`}>
          <Image src={img} alt="" layout="fill" className={styles.image} />
        </div>
        <div className="flex-grow-1">
          <div className={`${styles.header} d-flex justify-content-between flex-column flex-lg-row-reverse`}>
            <span className={`${styles.location} col-12 col-lg-2`}>{location}</span>
            <h2 className={styles.price}>$ {price} {shipping && <Image src="/images/ic_shipping.png" alt="" width={18} height={18} />}</h2>
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      </a>
    </div>
  )
}

export default ResultItem;

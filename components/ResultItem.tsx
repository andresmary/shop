import styles from '../styles/ResultItem.module.scss'
import Image from 'next/image'

export type ResultItemType = {
  img: string,
  price: number,
  location: string,
  description: string
};

const ResultItem = ({ img, price, location, description }: ResultItemType) => {
  return (
    <div className={styles.item}>
      <a href="#2" className="d-flex">
        <div className={`${styles.container} col-3 pe-3`}>
          <Image src={img} alt="" layout="fill" className={styles.image} />
        </div>
        <div className="col-9">
          <div className={`${styles.header} d-flex justify-content-between`}>
            <h2 className={styles.price}>$ {price}</h2>
            <span className={`${styles.location} col-2`}>{location}</span>
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      </a>
    </div>
  )
}

export default ResultItem;

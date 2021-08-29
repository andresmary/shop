import styles from '../styles/ResultItem.module.scss'
import Image from 'next/image'

export type ResultItemType = {
  img: string,
  price: number,
  location: string,
  description: string,
  link: string,
  shipping: boolean,
};

const ResultItem = ({ img, price, location, description, link, shipping }: ResultItemType) => {
  return (
    <div className={styles.item}>
      <a href={link} target="_blank" className="d-flex">
        <div className={`${styles.container} pe-3`}>
          <Image src={img} alt="" layout="fill" className={styles.image} />
        </div>
        <div className="flex-grow-1">
          <div className={`${styles.header} d-flex justify-content-between`}>
            <h2 className={styles.price}>$ {price} {shipping && 'ಠ_ಠ'}</h2>
            <span className={`${styles.location} col-2`}>{location}</span>
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      </a>
    </div>
  )
}

export default ResultItem;

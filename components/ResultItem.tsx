import styles from '../styles/ResultItem.module.scss'
import Image from 'next/image'

const ResultItem = ({ img, price, location, description }) => {
  return (
    <div className="d-flex">
      <div className="col-3">
        <Image src={img} alt="" width={50} height={50} />
      </div>
      <div className="col-9">
        <div className={`${styles.header} d-flex justify-content-between`}>
          <h2 className={styles.price}>$ {price}</h2>
          <span className={styles.location}>{location}</span>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  )
}

export default ResultItem;

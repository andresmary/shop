import styles from '../styles/Banner.module.scss';
import Image from 'next/image';

export type BannerType = {
  img: string,
  title: string,
  deal: string,
  info: string,
  link: string,
};

const Banner = ({ img, title, deal, info, link }: BannerType) => {
  return (
    <div className={`col-6 col-md-3 col-lg-2 ${styles.banner}`}>
      <a href={link}>
        <div className={`${styles.box} border bg-white rounded p-2 m-2`}>
          <Image src={img} alt="" width={120} height={120} />
          <h3 className={styles.title}>{title}</h3>
          <h2 className={styles.deal}>{deal}</h2>
          <span className={styles.info}>{info}</span>
          <span className={styles.link}>Ver ofertas</span>
        </div>
      </a>
    </div>
  )
}

export default Banner;

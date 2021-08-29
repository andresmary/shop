import styles from '../styles/Breadcrumb.module.scss'

export type BreadcrumbType = {
  categories: Array<string>,
};

const Breadcrumb = ({ categories }: BreadcrumbType) => {
  return (
    <div className={styles.breadcrumb}>
      {categories.map((prod: any) => (
        <>
          <a key={`${prod}_a`} href="#1">{prod}</a>{' > '}
        </>
      ))}
    </div>
  )
}

export default Breadcrumb;

import styles from '../styles/Breadcrumb.module.scss'

export type BreadcrumbType = {
  categories: Array<{
    id: string,
    name: string,
  }>,
};

const Breadcrumb = ({ categories }: BreadcrumbType) => {
  return (
    <div className={styles.breadcrumb}>
      {categories.map((cat) => (
        <>
          <a key={cat.id} href={`https://api.mercadolibre.com/categories/${cat.id}`}>{cat.name}</a>{' > '}
        </>
      ))}
    </div>
  )
}

export default Breadcrumb;

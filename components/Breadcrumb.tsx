import styles from '../styles/Breadcrumb.module.scss'

const Breadcrumb = () => {
  return (
    <div className={styles.breadcrumb}>
      <a href="#1">Cat 1</a> {'>'} <a href="#2">Cat 2</a> {'>'} <a href="#2">Cat 2</a>
    </div>
  )
}

export default Breadcrumb;

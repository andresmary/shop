import styles from '../styles/Home.module.scss'
import SearchBox from '../components/SearchBox';
import SearchResults from '../components/SearchResults';

const HomeShop = () => {
  return (
    <div className="container">
      <SearchBox />
      <SearchResults />
    </div>
  )
}

export default HomeShop

import Breadcrum from './Breadcrum';
import ResultItem from './ResultItem';
import rawData from '../mockData.json';

const SearchResults = () => {

  const newData = {
    author: {},
    categories: [],
    items: [{}],
  };
  newData.author = {
    name: 'Andrés',
    lastname: 'Mary',
  }
  newData.items = rawData.results.slice(0, 4);

  return (
    <main>
      <div className="container d-flex flex-column align-items-center">
        <div className="col-10">
          <Breadcrum />
        </div>
        <div className="col-10">
          {newData.items.map((prod: any) => (
            <ResultItem
              key={prod.id}
              img={prod.thumbnail}
              price={prod.price}
              location={prod.address.city_name}
              description={prod.title}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default SearchResults;

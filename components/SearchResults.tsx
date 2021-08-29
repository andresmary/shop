import Breadcrumb from './Breadcrumb';
import ResultItem from './ResultItem';

export type SearchResultsType = {
  response: {
    categories: Array<string>,
    items: Array<string>,
  }
};

const SearchResults = ({ response }: SearchResultsType) => {
  return (
    <main>
      <div className="container d-flex flex-column align-items-center">
        <div className="col-10">
          <Breadcrumb categories={response.categories} />
        </div>
        <div className="col-10 bg-white rounded px-3 mb-4">
          {response.items.map((prod: any) => (
            <ResultItem
              key={prod.id}
              img={prod.thumbnail}
              price={prod.price}
              location={prod.address.city_name}
              description={prod.title}
              link={prod.permalink}
              shipping={prod.shipping.free_shipping}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default SearchResults;

import { useEffect, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import ResultItem from './ResultItem';
import { findRepeatedCategory } from '../utilities/functions';
import ShopApi from '../api/ShopApi';

export type SearchResultsType = {
  response: {
    categories: Array<string>,
    items: Array<string>,
  }
};

const SearchResults = ({ response }: SearchResultsType) => {
  const [category, setCategory] = useState('');
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const findRepeated = findRepeatedCategory(response.categories);
    setCategory(findRepeated);
  }, [response.categories]);

  useEffect(() => {
    if (category !== '') {
      findCategories();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  
  const findCategories = async () => {
    const categoryResponse = await ShopApi.getCategories(category);
    setCategoryData(categoryResponse.path_from_root);
  }

  return (
    <div className="container-xxl d-flex flex-column align-items-center">
      <div className="col-12 col-lg-10">
        <Breadcrumb categories={categoryData} />
      </div>
      <div className="col-12 col-lg-10 bg-white rounded px-3 mb-4">
        {response.items.map((prod: any) => (
          <ResultItem
            key={prod.id}
            id={prod.id}
            img={prod.thumbnail}
            price={prod.price}
            location={prod.address.city_name}
            description={prod.title}
            shipping={prod.shipping.free_shipping}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchResults;

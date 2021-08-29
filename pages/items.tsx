import SearchBox from '../components/SearchBox';
import SearchResults from '../components/SearchResults';
import ShopApi from '../api/ShopApi';

export type DatosType = {
  formatedResponse: {
    categories: Array<string>,
    items: Array<string>,
  }
};

const Items = ({ formatedResponse }: DatosType) => {
  return (
    <div>
      <SearchBox />
      <SearchResults response={formatedResponse} />
    </div>
  )
}

export async function getServerSideProps(context:any) {
  const search = context.query.search;
  const response = await ShopApi.getProducts(search);
  console.log(response[0].category_id);

  const formatedResponse = {
    author: {
      name: 'Andrés',
      lastname: 'Mary',
    },
    categories: [],
    items: [{}],
  };
  formatedResponse.categories = response.map((cat:any) => cat.category_id);
  formatedResponse.items = response;

  return { props: { formatedResponse } };
}

export default Items

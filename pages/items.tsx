import SearchResults from '../components/SearchResults';
import ShopApi from '../api/ShopApi';

export type DatosType = {
  formatedResponse: {
    categories: Array<string>,
    items: Array<string>,
  },
  search: string,
};

const Items = ({ formatedResponse, search }: DatosType) => {
  return (
    <SearchResults response={formatedResponse} />
  )
}

export async function getServerSideProps(context:any) {
  const search = context.query.search;
  const response = await ShopApi.getProducts(search);

  const formatedResponse = {
    author: {
      name: 'Andrés',
      lastname: 'Mary',
    },
    categories: [],
    items: [{}],
  };
  formatedResponse.categories = response.map((cat:any) => cat.category_id);
  formatedResponse.items = response.map((item:any) => {
    return {
      ...item,
      price: new Intl.NumberFormat('es-AR').format(Math.floor(item.price))
    }
  }); 
  
  return { props: { formatedResponse, search } };
}

export default Items

import SearchBox from '../../components/SearchBox';
import Product from '../../components/Product';
import ShopApi from '../../api/ShopApi';

export type ItemsType = {
  formatedResponse: {
    item: {
      id: string,
      title: string,
      price: {
        currency: string,
        amount: number,
        decimals: number,
      },
      picture: string,
      condition: string,
      free_shipping: boolean,
      sold_quantity: number,
      description: string,
    }
  }
};

const Items = ({ formatedResponse }: ItemsType) => {
  return (
    <div>
      <SearchBox />
      <Product response={formatedResponse} />
    </div>
  )
}

export async function getServerSideProps(context:any) {
  const search = context.query.id.slice(1);
  const response = await ShopApi.getItem(search);
  const responseDescription = await ShopApi.getItemDescription(search);

  const formatedResponse = {
    author: {
      name: 'Andrés',
      lastname: 'Mary',
    },
    item: {}
  };
  formatedResponse.item = {
    id: response.id,
    title: response.title,
    price: {
      currency: response.currency_id,
      amount: new Intl.NumberFormat('es-AR').format(Math.floor(response.price)),
      decimals: (response.price - Math.floor(response.price)).toFixed(2).slice(2),
    },
    picture: response.pictures[0].url,
    condition: response.condition,
    free_shipping: response.shipping.free_shipping,
    sold_quantity: response.sold_quantity,
    description: responseDescription,
  };

  return { props: { formatedResponse } };
}

export default Items

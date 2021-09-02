import Banner from '../components/Banner';
import bannersData from '../bannersData.json'

const HomeShop = () => {
  return (
    <div className="container-xxl">
      <div className="row d-flex flex-column align-items-center">
        <div className="col-12 col-lg-10 d-flex g-0 flex-wrap">
        {bannersData.bannersHome.map((banner: any) => (
          <Banner
            key={banner.id}
            img={banner.img}
            title={banner.title}
            deal={banner.deal}
            info={banner.info}
            link={banner.link}
          />
        ))}
        </div>
      </div>
    </div>
  )
}

export default HomeShop

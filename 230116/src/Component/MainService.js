import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

import 'swiper/css';
import 'swiper/css/pagination';

import './mainService.scss';

import { Pagination, Autoplay } from 'swiper';

function MainService() {
  const [data, setData] = useState([]);
  const swiperRef = useRef(null);
  //map으로 돌릴 거라 유즈스테이트
  //외부에서 갖고 오면 유즈 이펙트
  useEffect(() => {
    const getData = async () => {
      const items = await axios.get('https://pixabay.com/api/?key=32644657-2f80f23700ca7fae9f453a47a&q=penguin&image_type=photo');
      // console.log(items.data.hits);
      setData(items.data.hits);
    };
    getData();
    swiperRef.current.classList.add('active');
  }, [data]);

  return (
    <article className="mainService">
      <h2 className="title">Our Service</h2>

      <div className="mainServiceInner">
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          centeredSlides={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          ref={swiperRef}
        >
          {data.map(img => (
            <SwiperSlide key={img.id} className="serviceImg">
              <img src={img.largeImageURL} alt={img.tags} />
              <h3>{img.tags.split(',', 1)}</h3>
              <p>{img.tags}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
}

export default MainService;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import './mainBanner.scss';
import bg3 from '../asset/images/bg3.png';

function MainBanner() {
  return (
    <article>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
        }}
        loop
        navigation
        className="mySwiper mainSwiper"
      >
        <SwiperSlide className="bg">
          {/* PUBLIC 폴더 */}
          <img src={process.env.PUBLIC_URL + './images/img1.png'} alt="cat" />
        </SwiperSlide>
        {/* src 폴더 bg */}
        <SwiperSlide className="bg bg2">Slide 2</SwiperSlide>
        <SwiperSlide className="bg">
          {/* src 폴더 <img> */}
          <img src={bg3} alt="star" />
        </SwiperSlide>
        <SwiperSlide className="bg bg4">Slide 4</SwiperSlide>
      </Swiper>
    </article>
  );
}

export default MainBanner;

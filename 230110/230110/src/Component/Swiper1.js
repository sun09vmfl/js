import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

// style
import './styles.module.css';
// import "./styles.scss";
// import styled from "styled-components";

import { Pagination, Autoplay, Navigation } from 'swiper';

const dataList = [
  { id: 1, URL: '/images/img1.png', alt: 'cat' },
  { id: 2, URL: '/images/img2.png', alt: 'ices' },
  { id: 3, URL: '/images/img3.png', alt: 'stars' },
  { id: 4, URL: '/images/img4.png', alt: 'night' },
];

function Swiper1() {
  const path = process.env.PUBLIC_URL;
  const [data, setData] = useState(dataList);

  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={1}
        breakpoints={{
          761: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 2000,
        }}
        navigation
        loop={true}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src={path + "/images/img1.png"} alt="cat" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={path + "/images/img2.png"} alt="stars2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={path + "/images/img3.png"} alt="stars3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={path + "/images/img4.png"} alt="stars4" />
        </SwiperSlide> */}

        {data.map(img => (
          <SwiperSlide key={img.id}>
            <img src={path + img.URL} alt={img.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Swiper1;

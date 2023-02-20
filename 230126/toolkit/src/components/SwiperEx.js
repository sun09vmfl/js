import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './mainService.scss';

import { Pagination, Autoplay } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { fectchPixabay } from '../store/pixabaySlice';

function SwiperEx() {
  const pics = useSelector(store => store.pixabay.data);
  const dispatch = useDispatch();

  const [data, setData] = useState(pics);
  const swiperRef = useRef(null);

  useEffect(() => {
    dispatch(fectchPixabay());
    swiperRef.current.classList.add('active');
  }, [data]);

  return (
    <article className="mainService">
      <div className="mainServiceInner">
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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

export default SwiperEx;

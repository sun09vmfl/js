import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import './pixabayBanner.scss';
import axios from 'axios';

function PixabayBanner() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const KEY = `32644657-2f80f23700ca7fae9f453a47a`;
    const URL = `https://pixabay.com/api/?key=${KEY}&q=penguin&image_type=photo`;

    axios.get(URL).then(json => {
      setData(json.data.hits.slice(0, 4));
    });
    // const getData = async () => {
    //   const imgs = await axios.get(URL);
    //   setData(imgs.data.hits);
    // };
    // getData();
  }, []);

  return (
    <article>
      {/* swiper */}
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        navigation
        className="mySwiper pixabaySwiper"
      >
        {data.map(img => (
          <SwiperSlide className="bg" key={img.id}>
            <img src={img.largeImageURL} alt={img.tags} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}

export default PixabayBanner;

import React from 'react';
import MainSwiper from '../Component/MainSwiper';
import MainGuide from '../Component/MainGuide';
import MainGallery from '../Component/MainGallery';
import MainBusiness from '../Component/MainBusiness';
import MainYoutube from '../Component/MainYoutube';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MainService from '../Component/MainService';
import KakaoMap from '../Component/KakaoMap';

function Main() {
  const [gallery, setGallery] = useState([]);
  const [business, setBusiness] = useState([]);
  useEffect(() => {
    // axios.get('./DB/imgData.json').then(response => {
    //   console.log(response.data.galleryData);
    // });
    const getData = async () => {
      const imgDataList = await axios.get('./DB/imgData.json');
      console.log(imgDataList.data.galleryData);
      setGallery(imgDataList.data.galleryData);
      setBusiness(imgDataList.data.businessData);
    };
    getData();
  }, []);

  return (
    <main>
      <MainSwiper />
      <MainGuide />
      <MainGallery gallery={gallery} />
      <MainBusiness business={business} />
      <MainYoutube />
      <MainService />
      <KakaoMap />
    </main>
  );
}

export default Main;

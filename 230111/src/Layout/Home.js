import React from 'react';
import MainBanner from '../Component/MainBanner';
import MainIntro from '../Component/MainIntro';
import PixabayBanner from '../Component/PixabayBanner';

function Home() {
  return (
    <>
      {/* 메인 슬라이드 */}
      <PixabayBanner />
      <MainBanner />
      {/* 회사 소개 */}
      <MainIntro />
      {/* 상품소개 */}
    </>
  );
}

export default Home;

const mainSwiper = new Swiper(`#mainSwiper`, {
  parallox: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: `.swiper-pagination`, //페이지네이샨 역할의 요소와 연결
    type: `fraction`, // 숫자
  },
  autoplay: {
    delay: 2000,
  },
});

const menuA = document.querySelectorAll(`#gnb a`);
menuA.forEach((menu, idx) => {
  menu.addEventListener(`click`, e => {
    e.preventDefault();
    mySwiper.slideToLood(idx);
    my;
  });
});

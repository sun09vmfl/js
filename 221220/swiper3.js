const main = document.querySelector(`mySwiper`);
const footer = document.querySelector(`footer`);
console.log(footer.offsetHeight);

const mySwiper = new Swiper(`#mySwiper`, {
  scrollbar: {
    //스크롤바
    el: '.swiper-scrollbar',
  },
  loop: true,
  breakpoints: {
    415: {
      //스크린의 화면 사이즈가 415보다 크거나 같으면 실행
      slidesPerView: 2, //화면당 보여지는 이미지 개수
    },
    1200: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 2000,
  },
});

const menuA = document.querySelectorAll(`#gnb a`);
menuA.forEach((menu, idx) => {
  menu.addEventListener(`click`, e => {
    e.preventDefault();
    mySwiper.slideToLoop(idx);
  });
});

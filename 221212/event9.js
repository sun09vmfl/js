const slideItems = document.querySelectorAll(`#slideWrapper .slideItem`);
const prevBtn = document.querySelector(`#prevBtn`);
const nextBtn = document.querySelector(`#nextBtn`);

// (function () {}) (); 즉시 실행 함수 값
(function autoSlide() {
  let i = 0;
  prevBtn.addEventListener(`click`, () => {
    slideItems[i].classList.remove(`active`);
    i--;
    i < 0 ? (i = slideItems.length - 1) : false;
    slideItems[i].classList.add(`active`);
  });

  nextBtn.addEventListener(`click`, () => {
    slideItems[i].classList.remove(`active`);
    i++;
    if (i >= slideItems.length) {
      i = 0;
    }
    slideItems[i].classList.add(`active`);
  });
})(); // 즉시 실행 함수

// autoSlide();
// setInterval(콜백함수, 시간);
setInterval(function () {
  nextBtn.click();
}, 3000); // 3초에 한 번씩 얘를 클릭해라 라는 이미지/ 자동으로 버튼을 눌러줘라.....

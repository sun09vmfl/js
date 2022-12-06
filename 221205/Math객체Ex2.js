// document.querySelector("#btn").click(function(){});
// document.querySelector("#btn").onfullscreenchange(`click`, function(){});

const btn = document.querySelector(`#btn`);
// btn.addEventListener(`click`, function(), {}); 변수 안에 함수가 들어간 콜백 함수 형식.

// function bgColor() {} 선언함수
const bgColor = () => {
  // 랜덤 컬러 (명도, 채도의 %는 그대로 두고, 색상의 값을 랜덤)
  // 0~ 359까지의 임의의 수
  const ran = Math.trunc(Math.random() * 360);
  console.log(ran);
  let ranColor1 = `hsl(${ran}, 83%, 12%)`;
  let ranColor2 = `hsl(${ran + 30}, 86%, 50%)`;

  // .setProperty(`속성`,`값`); css 속성 제어
  document.body.style.setProperty(`--bg1`, ranColor1);
  document.body.style.setProperty(`--bg2`, ranColor2);
};

btn.addEventListener(`click`, bgColor);

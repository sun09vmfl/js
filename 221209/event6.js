const dts = document.querySelectorAll("dt");
dts.forEach((dt) => {
  dt.style.fontWeight = "bold";
  dt.style.color = "tomato";
  dt.style.cursor = "pointer";
});
const ol = document.querySelector("#event1");

const event1 = document.querySelector(`li:nth-child(1)`);
const event2 = document.querySelector(`li:nth-child(2)`);
const event3 = document.querySelector(`li:nth-child(3)`);
const event4 = document.querySelector(`li:nth-child(4)`);
const event5 = document.querySelector(`li:nth-child(5)`);
const event6 = document.querySelector(`li:nth-child(6)`);
const event7 = document.querySelector(`li:nth-child(7)`);
const event8 = document.querySelector(`li:nth-child(8)`);
const event9 = document.querySelector(`li:nth-child(9)`);

event1.addEventListener(`click`, () => alert(`클릭했습니다.`));
event2.addEventListener(`dblclick`, () => alert(`더블클릭했습니다`));
event3.addEventListener(`mousemove`, () =>
  console.log(`마우스가 움직였습니다.`)
);
event4.addEventListener(`mousedown`, () => alert(`눌렀습니다`));
event5.addEventListener(`mouseup`, () => alert(`뗐습니다.`));

event6.addEventListener(
  `mouseover`,
  () => (event6.style.background = `orange`)
);
event7.addEventListener(`mouseout`, () => (event7.style.background = `coral`));

event8.addEventListener(
  `mouseenter`,
  () => (event8.style.border = `1px solid #000`)
);
event9.addEventListener(
  `mouseleave`,
  () => (event9.style.border = `1px solid #000`)
);

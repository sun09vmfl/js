(function turnMenu() {
  const menuOpen = document.querySelector('header .menu_open');
  const menuPage = document.querySelector('.menu_page');
  const menuClose = document.querySelector('.menu_page .menu_close');
  menuOpen.addEventListener('click', () => {
    menuPage.classList.add('active');
    menuPage.classList.remove('none');
  });
  menuClose.addEventListener('click', () => {
    menuPage.classList.remove('active');
    menuPage.classList.add('none');
  });
})();

//스크롤내려서 화면이 전환되면 페이지카운팅 + 화면확대
(function () {
  const currentIdx = document.querySelector('.page_count .current_count');

  addEventListener('scroll', () => {
    let artObserver = new IntersectionObserver(entries => {
      entries.forEach((e, idx) => {
        if (e.intersectionRatio > 0) {
          currentIdx.textContent = `0${idx + 1}`;
          e.target.classList.add('active');
        }
        // else if(e.intersectionRatio = 0.5){ e.target.classList.remove('active');}
        //        else if(e.intersectionRatio > 1.0){e.target.classList.remove('active');}
      });
    });
    const art = document.querySelectorAll('article');
    art.forEach(el => {
      artObserver.observe(el);
    });

    let observer = new IntersectionObserver(e => {
      e.forEach(page => {
        if (page.intersectionRatio > 0.5) {
          currentIdx.textContent = `back to Top`;
        }
      });
    });
    const address = document.querySelector('address');
    observer.observe(address);
  });
})();

//

// 마우스 커서(반전 원/근데 한 페이지에서만 보임.. 왜?ㅠㅠ)

const circle = document.querySelector('.circle');
let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;
let speed = 0.4;
const animate = () => {
  let distX = mouseX - circleX;
  let distY = mouseY - circleY;
  let translatedValue = `translate3d(${circleX}px, ${circleY}px, 0 )`;

  circleX = circleX + distX * speed;
  circleY = circleY + distY * speed;
  circle.style.transform = translatedValue;

  requestAnimationFrame(animate);
};
animate();
window.addEventListener('mousemove', e => {
  mouseX = e.clientX - circle.offsetWidth / 4;
  mouseY = e.clientY - circle.offsetHeight / 4;
});

// 마우스커서 안 보이게 (수정해야 함...)
// window.document.body.style.cursor = 'none';

//가로스크롤
(function () {
  const container = document.querySelector('.container');
  const stickyBox = document.querySelector('.sticky_box');
  const horizontal = document.querySelector('.horizontal');

  function calcHt(ht) {
    return ht.scrollWidth - document.documentElement.clientWidth + document.documentElement.clientHeight + 36;
  }

  container.style.height = `${calcHt(horizontal)}px`;

  addEventListener('scroll', scrolled);

  function scrolled() {
    horizontal.style.transform = `translate(-${stickyBox.offsetTop}px)`;
  }
})();

//검정색 도전!
window.addEventListener('scroll', function () {
  if (bottom) {
    this.alert(`얜뜨는데..외않되냐고`);
    footer.style.color = `black`;
  }
});

const scrolledHeight = window.scrollY;
const windowHeight = window.innerHeight;
const documentHeight = document.body.offsetHeight;
const bottom = windowHeight + scrolledHeight === documentHeight;
const footer = document.querySelector(`footer > .txt > a`);
const footerFamily = document.querySelectorAll(`footer > .family_site > li > a`);

// if (bottom) {
//   footer.style.color = `black`;
// }

// addEventListener('scroll', () => {
//   if (bottom) {
//     // this.alert(`얜뜨는데..외않되냐고`);
//     footerFamily.forEach(el => {
//       el.style.color = 'black';
//     });
//   }
// });

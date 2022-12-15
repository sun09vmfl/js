const toggleBtn = document.querySelector('#toggle_btn');
const nav = document.querySelector('nav');

toggleBtn.addEventListener('click', e => {
  e.preventDefault();
  nav.classList.toggle('on');
});

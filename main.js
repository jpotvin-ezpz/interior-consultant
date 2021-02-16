const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-links');
const lines = document.querySelectorAll('.line')

burger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  lines.forEach(line => line.classList.toggle('open'))
})
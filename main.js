const hamburger = document.querySelector('.bars');
const mainMenu = document.querySelector('.main-menu');
const overlay = document.querySelector('.overlay');
const cancel = document.querySelector('.cancel');
const links = document.querySelectorAll('.menu-item');

hamburger.addEventListener('click', () => {
  mainMenu.style.display = 'flex';
  overlay.style.display = 'block';
});

cancel.addEventListener('click', () =>{
    overlay.style.display = "none";
});

for(let i = 0; i < links.length; i++){
  links[i].addEventListener('click', () => {
    overlay.style.display = "none";
  })};

const menu = document.querySelector('.menuDiv');
const list = document.querySelectorAll('li');
let isMenuVisible = false;
const socialsButton = document.querySelector('.socialsButton');

menu.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('active');
  isMenuVisible = !isMenuVisible; 

  if (isMenuVisible) {
    list.forEach(li => li.style.display = 'block');
  } else {
    list.forEach(li => li.style.display = 'none');
  }
}

socialsButton.addEventListener('click', socialsDisplay);

function socialsDisplay() {
  const apps = document.querySelectorAll('.apps');
  apps.forEach(img => img.style.display = 'flex');
}

const menu = document.querySelector('.menuDiv');
const list = document.querySelectorAll('li');
let isMenuVisible = false;

menu.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('active');
  isMenuVisible = !isMenuVisible; // Toggle the visibility flag

  if (isMenuVisible) {
    list.forEach(li => li.style.display = 'block');
  } else {
    list.forEach(li => li.style.display = 'none');
  }
}
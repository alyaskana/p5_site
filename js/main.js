const menuBtn = document.querySelector('.js-menu-btn')
const menuContent = document.querySelector('.js-menu-content')


menuBtn.addEventListener('click', () => {
  menuContent.classList.toggle('show')
})

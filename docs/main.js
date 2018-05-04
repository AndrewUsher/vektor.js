const mobileNav = document.getElementById('mobile-nav')
const navMenu = document.querySelector('nav')

const toggleNav = () => {
  navMenu.classList.toggle('open')
}

mobileNav.addEventListener('click', toggleNav)

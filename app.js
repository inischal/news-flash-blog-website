//grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector)
  if (element) return element
  throw new Error(
    `something went wrong, make sure that ${selector} exists or is typed correctly.`
  )
}
// Nav styles on scroll

const scrollHeader = () => {
  const headerElement = selectElement('#header')
  if (this.scrollY >= 15) {
    headerElement.classList.add('activated')
  } else {
    headerElement.classList.remove('activated')
  }
}
window.addEventListener('scroll', scrollHeader)
//open menu and search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon')
const toggleMenu = () => {
  const mobileMenu = selectElement('#menu')
  mobileMenu.classList.toggle('activated')
  menuToggleIcon.classList.toggle('activated')
}

menuToggleIcon.addEventListener('click', toggleMenu)

//open close search form popup
const formOpenBtn = selectElement('#search-icon')
const formCloseBtn = selectElement('#form-close-btn')
const searchFormcontainer = selectElement('#search-form-container')

formOpenBtn.addEventListener('click', () =>
  searchFormcontainer.classList.add('activated')
)
formCloseBtn.addEventListener('click', () =>
  searchFormcontainer.classList.remove('activated')
)
//close the pop up from keybord by pressing ESC key
window.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') searchFormcontainer.classList.remove('activated')
})

//switch theme/add to local storage
const bodyElement = document.body
const themeTogglebtn = selectElement('#theme-toggle-btn')
const currentTheme = localStorage.getItem('currentTheme')

if (currentTheme) {
  bodyElement.classList.add('light-theme')
}
themeTogglebtn.addEventListener('click', () => {
  bodyElement.classList.toggle('light-theme')

  if (bodyElement.classList.contains('light-theme')) {
    localStorage.setItem('currentTheme', 'themeActive')
  } else {
    localStorage.removeItem('currentTheme')
  }
})
// swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
})

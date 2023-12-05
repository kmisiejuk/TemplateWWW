const burgerBtn = document.querySelector('.burger-btn')
const btnBar = document.querySelector('.burger-btn__bars')
const nav = document.querySelector('.nav')
const showNav = document.querySelector('.nav__items')
const navItem = document.querySelectorAll('.nav__item')
const msgStatus = document.querySelector('.msg-status')
const slides = document.getElementsByClassName('carousel-item')

addActive = function (slide) {
  slide.classList.add('active')
}

removeActive = function (slide) {
  slide.classList.remove('active')
}

addActive(slides[0])

setInterval(function () {
  for (let i = 0; i < slides.length; i++) {
    if (i + 1 == slides.length) {
      addActive(slides[0])
      slides[0].style.zIndex = 100
      setTimeout(removeActive, 350, slides[i]) //Doesn't be worked in IE-9
      break
    }
    if (slides[i].classList.contains('active')) {
      slides[i].removeAttribute('style')
      setTimeout(removeActive, 350, slides[i]) //Doesn't be worked in IE-9
      addActive(slides[i + 1])
      break
    }
  }
}, 4000)

if (document.location.search === '?mail_status=sent') {
  msgStatus.classList.add('success')
  msgStatus.textContent = 'Sent your message!'

  setTimeout(() => {
    msgStatus.classList.remove('success')
  }, 3000)
}
if (document.location.search === '?mail_status=error') {
  msgStatus.classList.add('error')
  msgStatus.textContent = 'Error'

  setTimeout(() => {
    msgStatus.classList.remove('error')
  }, 3000)
}

const handleNavItems = () => {
  let delayTime = 0
  navItem.forEach(item => {
    item.classList.toggle('nav-animation')
    item.style.animationDelay = '.' + delayTime + 's'
    delayTime++
  })
}
const closeByItem = () => {
  navItem.forEach(item => {
    item.addEventListener('click', () => {
      showNav.classList.toggle('nav__items--active')
      btnBar.classList.toggle('open')
    })
  })
}

const handleNavWidth = params => {
  if (item.classList.contains('nav-animation')) {
    nav.style.width = '100vw'
  } else if(!item.classList.contains('nav-animation'))
  {
    nav.style.width = '0vw'
  }
}

let menuOpen = false

burgerBtn.addEventListener('click', () => {
  if (!menuOpen) {
    btnBar.classList.add('open')
    menuOpen = true
    showNav.classList.add('nav__items--active')
  } else {
    btnBar.classList.remove('open')
    menuOpen = false
    showNav.classList.remove('nav__items--active')
  }
  closeByItem()
  handleNavItems()
  handleNavWidth()
})

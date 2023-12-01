const burgerBtn = document.querySelector('.burger-btn')
const btnBar = document.querySelector('.burger-btn__bars')
const showNav = document.querySelector('.nav__items')
const navItem = document.querySelectorAll('.nav__item')
const msgStatus = document.querySelector('.msg-status')

console.log(document.location.search)

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
})

console.log('I am from JS')

let mainBar = document.querySelector('.main-nav')
let logoBtn = document.getElementById('logo-id')

function handleClick(e) {
  //1 . Finding particular section you want to move
  //2. After finding section get the Y axis position
  //3. Get window scrollY position
  //4 Add scrollY position to section Y position
  //5. Use window.scroll to new Y Position

  e.preventDefault()
  const sectionRef = document.querySelector(this.getAttribute('href'))
  const secYaxis = sectionRef.getBoundingClientRect().y
  const scrollY = window.scrollY + secYaxis
  const finalPosition = scrollY - 200
  window.scroll(0, finalPosition)

  logoBtn.style.color = '#8892b0'
}

document.querySelectorAll('.right-nav-links a').forEach((ele) => {
  ele.addEventListener('click', handleClick)
})

logoBtn.addEventListener('click', () => {
  console.log('You clicked me')

  // mainBar.style.padding = ''

  mainBar.style.transition = '0.7s'
  logoBtn.style.color = '#64ffda'
})
// Hamburger Button code

let icon = document.getElementById('icon')
let icon1 = document.getElementById('a')
let icon2 = document.getElementById('b')
let icon3 = document.getElementById('c')
let nav = document.querySelector('.mob-nav')
let blue = document.getElementById('blue')

icon.addEventListener('click', function () {
  icon1.classList.toggle('a')
  icon2.classList.toggle('c')
  icon3.classList.toggle('b')
  nav.classList.toggle('show')
  blue.classList.toggle('slide')
})

/*Mobile functionality*/
let brgBtn = document.querySelector('.hamburger-icon')
let mobNavShow = document.querySelector('.mob-nav', '.show')
function handleMobClick(e) {
  // e.preventDefault();
  console.log('I am clicked')
  // mobNavShow.style.position=' absolute'
  nav.classList.toggle('show')
  icon1.classList.toggle('a')
  icon2.classList.toggle('c')
  icon3.classList.toggle('b')
  const sectionRefM = document.querySelector(this.getAttribute('href'))
  const secYaxisM = sectionRefM.getBoundingClientRect().y
  const scrollY = window.scrollY + secYaxisM
  const finalPositionM = scrollY - 250
  window.scroll(0, finalPositionM)
}

document.querySelectorAll('.mob-links a').forEach((ele) => {
  ele.addEventListener('click', handleMobClick)
})

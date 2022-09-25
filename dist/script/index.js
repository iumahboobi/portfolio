console.log('I am from JS')

let mainBar = document.querySelector('.main-nav')
let logoBtn = document.getElementById('logo-id')
let navBar = document.querySelector('.navigation-bar')
let htmBody= document.querySelector('body')


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
  const finalPosition = scrollY - 110
  window.scroll(0, finalPosition)

  logoBtn.style.color = '#8892b0'
  // body.style.overflow = 'none'

}

document.querySelectorAll('.right-nav-links a').forEach((ele) => {
  ele.addEventListener('click', handleClick)
})


// Prevent scrolling on safari

/*End*/ 



logoBtn.addEventListener('click', () => {
  console.log('You clicked me')
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

icon.addEventListener('click', function (e) {
  
  e.stopPropagation()

  console.log('burger menu')
  icon1.classList.toggle('a')
  icon2.classList.toggle('c')
  icon3.classList.toggle('b')
  nav.classList.toggle('show')
  blue.classList.toggle('slide')
  navBar.classList.toggle('show')
 htmBody.classList.toggle('over-flow-hidden')
 
  
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
  // body.style.overflow='scroll'
  htmBody.classList.toggle('over-flow-hidden')
  
}

document.querySelectorAll('.mob-links a').forEach((ele) => {
  ele.addEventListener('click', handleMobClick)
})
/** Hidding nav bar on scroll */

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
    document.getElementById("navbar").style.transition = "1s";
      
  }
  prevScrollpos = currentScrollPos;
}

/*Visitor counter*/ 
// Indiividual User
let counterContainer = document.querySelector('.website-counter')
let visitCount = localStorage.getItem('page_view')

if(visitCount) {

visitCount = Number(visitCount) +1;
localStorage.setItem('page_view', visitCount);

}
else {

  visitCount =1;
  localStorage.setItem('page_view',1)

}
counterContainer.innerHTML =visitCount;

// Total Users


function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}



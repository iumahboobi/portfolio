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

 // some Styling 


  mainBar.style.padding = '1rem 0'
  mainBar.style.transition = '0.7s'
  logoBtn.style.color = '#8892b0'
}

document.querySelectorAll('.right-nav-links a').forEach((ele) => {
  ele.addEventListener('click', handleClick)
})


logoBtn.addEventListener('click', () => {
  console.log('You clicked me')

  mainBar.style.padding = '2rem'

  mainBar.style.transition = '0.7s'
  logoBtn.style.color = '#64ffda'

})
// Hamburger Button code

function myFunction() {
  var x = document.getElementById("myLinks");
  // if (x.style.display === "block") {
  //   x.style.display = "none";
  // } else {
  //   x.style.display = "block";
  // }
  // logoBtn.style.display = "none"; 

}
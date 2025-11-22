// ---- data ----
let siteData = {};

// Run after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  loadData(); // will init title, build nav, then attach listeners
});

async function loadData() {
  try {
    const response = await fetch("./dist/data.json");
    siteData = await response.json();

    initPage();
    buildNavigationBar();   // create the <h3 id="logo-id">
    heroSection()
    aboutMe ()  // About me function
    attachEventHandlers();  // now it's safe to query #logo-id

  } catch (error) {
    console.log("Error loading page", error);
  }
}

function initPage() {
  document.title = siteData.title ?? document.title;

}

// ---- DOM refs (queried later in attachEventHandlers to avoid nulls) ----
function buildNavigationBar() {
  const navigationBarContainer = document.querySelector(".navigation-bar");

  // create <h3 class="logo" id="logo-id">
  const logoHeader = document.createElement("h3");
  logoHeader.classList.add("logo");
  logoHeader.id = "logo-id";

  // create <a>
  const logoLink = document.createElement("a");
  logoLink.href = "#";
  // safer than innerHTML if you only need text
  logoLink.textContent = siteData.logo ?? "Logo";

  // assemble
  logoHeader.appendChild(logoLink);
  navigationBarContainer.appendChild(logoHeader);

  let navList = document.createElement("ul")
  navList.classList.add("right-nav-links")
  navList.id = "myLinks"

  for (let i = 0; i < siteData.navigationBar.length; i++) {
    let list = document.createElement("li")
    let listAnchor = document.createElement("a")
    listAnchor.href = siteData.navigationBar[i].href
    listAnchor.innerHTML = siteData.navigationBar[i].label
    list.appendChild(listAnchor)
    navList.appendChild(list)
  }
  navigationBarContainer.appendChild(navList)


  /**  Hamburger Icon function */

  let hamburgerSection = document.createElement("section")
  hamburgerSection.classList.add("hamburger-icon")
  hamburgerSection.id = siteData.hamburgerIcon.id

  let hamburgerChildArray = siteData.hamburgerIcon.children

  for (let i = 0; i < hamburgerChildArray.length; i++) {

    let iconDiv = document.createElement("div")
    iconDiv.classList.add(hamburgerChildArray[i].class)
    iconDiv.id = hamburgerChildArray[i].id
    hamburgerSection.appendChild(iconDiv)
  }
  navigationBarContainer.appendChild(hamburgerSection)

  let darkBlue = document.createElement("div")
  darkBlue.classList.add("dark-blue")
  darkBlue.id = "blue"
  navigationBarContainer.appendChild(darkBlue)


  /** Mobile navigation */

  let mobNavContainer = document.createElement("div")
  mobNavContainer.id = "mobNav"
  mobNavContainer.classList.add("mob-nav")

  let mobList = document.createElement("ul")
  mobList.classList.add("mob-links")
  mobList.id = ""

  let mobListChildren = siteData.mobNavigation.mobList.links

  for (let i = 0; i < mobListChildren.length; i++) {

    let mobListItem = document.createElement("li")

    let mobListItemLink = document.createElement("a")
    mobListItemLink.href = mobListChildren[i].href
    mobListItemLink.setAttribute("aria-label", mobListChildren[i].aria)
    mobListItemLink.innerHTML = `${mobListChildren[i].number} ${mobListChildren[i].label}`
    mobListItem.appendChild(mobListItemLink)
    mobList.appendChild(mobListItem)
  }
  mobNavContainer.appendChild(mobList)
  navigationBarContainer.appendChild(mobNavContainer)

}
/**  Hero Section */
function heroSection() {

  let mainContainer = document.querySelector(".hero-after")
  let heroMobDiv = document.createElement("div")
  heroMobDiv.classList.add(siteData.heroMobAfter.class)

  //Array of heroAfterMobChild
  let heroAfterMobChild = siteData.heroMobAfter.heroMobChild

  for (let i = 0; i < heroAfterMobChild.length; i++) {

    let item = heroAfterMobChild[i]
    let tag = document.createElement(item.tag)

    tag.className = item.class || ""
    tag.textContent = item.label || ""

    if (item.children) {
      item.children.forEach(child => {
        if (typeof child === "string") {
          tag.appendChild(document.createTextNode(child))

        } else {
          let childEl = document.createElement(child.tag)

          childEl.className = child.class || ""
          childEl.textContent = child.label || ""

          if (child.href) {
            childEl.href = child.href

          }
          if (child.target) {
            childEl.target = child.target
          }
          tag.appendChild(childEl)

        }

      })

    }
    else {
      tag.textContent = item.label || ""

    }
    heroMobDiv.appendChild(tag)

    
  }
  mainContainer.appendChild(heroMobDiv)

}


/** About Me section */


function aboutMe () {


   let aboutMeContainer = document.querySelector(siteData.aboutMe.class)
  let aboutMeArr = siteData.aboutMe.children



  for(let i=0 ; i<aboutMeArr.length; i++) {

    let item = aboutMeArr[i]
    let el = document.createElement(item.tag)

    console.log(el)
    
    if(item.children) {
      item.children.forEach(child=> {


      })

    }

  }




  let aboutMeHeader = document.createElement("h4")
  



   console.log('I am about Me section')
}












function attachEventHandlers() {
  // query AFTER buildNavigationBar()
  const mainBar = document.querySelector(".main-nav");
  const logoBtn = document.getElementById("logo-id");
  const navBar = document.querySelector(".navigation-bar");
  const htmBody = document.body;

  // Smooth scroll links (desktop)
  document.querySelectorAll(".right-nav-links a").forEach((a) => {
    a.addEventListener("click", function handleClick(e) {
      e.preventDefault();
      const sectionRef = document.querySelector(this.getAttribute("href"));
      if (!sectionRef) return;

      const secYaxis = sectionRef.getBoundingClientRect().y;
      const scrollY = window.scrollY + secYaxis;
      const finalPos = scrollY - 110;
      window.scroll(0, finalPos);

      // optional chaining guards in case logo is missing
      logoBtn && (logoBtn.style.color = "#8892b0");
    });
  });

  // Logo click
  if (logoBtn) {
    logoBtn.addEventListener("click", () => {
      console.log("You clicked me");
      if (mainBar) mainBar.style.transition = "0.7s";
      logoBtn.style.color = "#64ffda";
    });
  }

  // Hamburger Button code
  const icon = document.getElementById("icon");
  const icon1 = document.getElementById("a");
  const icon2 = document.getElementById("b");
  const icon3 = document.getElementById("c");
  const nav = document.getElementById("mobNav");
  const blue = document.getElementById("blue");

  if (icon) {
    icon.addEventListener("click", function (e) {
      e.stopPropagation();
      console.log("burger menu");
      icon1?.classList.toggle("a");
      icon2?.classList.toggle("c");
      icon3?.classList.toggle("b");
      nav?.classList.toggle("show");
      blue?.classList.toggle("slide");
      navBar?.classList.toggle("show");
      htmBody.classList.toggle("over-flow-hidden"); // keep your class name as-is
    });
  }

  // Mobile links close menu
  document.querySelectorAll(".mob-links a").forEach((a) => {
    a.addEventListener("click", () => {
      console.log("I am clicked");
      nav?.classList.toggle("show");
      icon1?.classList.toggle("a");
      icon2?.classList.toggle("c");
      icon3?.classList.toggle("b");
      htmBody.classList.toggle("over-flow-hidden");
    });
  });

  // Hide/show navbar on scroll
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const navbarEl = document.getElementById("navbar");
    const currentScrollPos = window.pageYOffset;
    if (navbarEl) {
      if (prevScrollpos > currentScrollPos) {
        navbarEl.style.top = "0";
      } else {
        navbarEl.style.top = "-150px";
        navbarEl.style.transition = "1s";
      }
    }
    prevScrollpos = currentScrollPos;
  };

  // Visitor counter (individual)
  const counterContainer = document.querySelector(".website-counter");
  let visitCount = Number(localStorage.getItem("page_view") || 0) + 1;
  localStorage.setItem("page_view", String(visitCount));
  if (counterContainer) counterContainer.textContent = String(visitCount);
}

// Global callback used by your total visits script (if any)

function websiteVisits(response) {
  const el = document.querySelector("#visits");
  if (el) el.textContent = response?.value ?? 0;
}
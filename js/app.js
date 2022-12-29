/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let sectionNum = document.querySelectorAll("section").length; // define section numbers
let sections = document.querySelectorAll("section"); // define all sections

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

for (i = 0; i < sectionNum; i++) {
  // loop throught section numbers
  let listItem = document.createElement("li"); // create list item
  let link = document.createElement("a"); // create link
  link.classList.add("menu__link"); // add class to link
  link.href = "#section" + (i + 1); // dynamically add href attribute to link
  link.textContent = "Section " + (i + 1); // dynamically name the link
  document.getElementById("navbar__list").appendChild(listItem); // add list item to list
  listItem.appendChild(link); // add  link to list item
}

// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", (e) => {
  // listen to window scroll

  sections.forEach((section) => {
    // loop through each section
    const topDistance = section.getBoundingClientRect().top;
    // get distance from top

    if (topDistance > 0 && topDistance < 150) {
      // if the distance from top is between 0-150px
      section.classList.add("your-active-class"); // add active class to section
    } else {
      section.classList.remove("your-active-class"); // else remove the class
    }
  });
});

// Scroll to anchor ID using scrollTO event
let anchorlinks = document.querySelectorAll('a[href^="#"]'); // get all links with href attribute

for (let item of anchorlinks) {
  // loop through links

  item.addEventListener("click", (e) => {
    // wait for click
    let hashval = item.getAttribute("href"); // get id from href value
    let target = document.querySelector(hashval); // put id in target
    target.scrollIntoView({
      // scroll to target with smooth effect to the upper edge of element
      behavior: "smooth",
      block: "center",
    });
    history.pushState(null, null, hashval);
    e.preventDefault();
  });
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// add active class to links in navbar with click
const links = document.querySelectorAll(".menu__link"); // get all links in navbaar

if (links.length) {
  // only work if links > 0
  links.forEach((link) => {
    // loop through links
    link.addEventListener("click", (e) => {
      // wait for click
      links.forEach((link) => {
        // loop through links
        link.classList.remove("link_active"); // remove active class from sibilings
      });
      e.preventDefault(); // prevent adding active class for all links
      link.classList.add("link_active"); // add active class to clicked link
    });
  });
}

// scroll to top

// Get the button:
let scroll = document.getElementById("scrolltop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrolltop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

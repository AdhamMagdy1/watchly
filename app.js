const sections = document.querySelectorAll('section');
const navBarList = document.getElementById('navbar__list'); //
const up = document.querySelector('.fa-circle-arrow-up');
const footer = document.querySelector('footer');
// build the nav
function buildNavItems() {
  // loop the sections
  sections.forEach((section) => {
    const listItem = document.createElement('li'); // create a list item
    const sectionLinks = document.createElement('a'); // create an anchor
    sectionLinks.innerHTML = section.getAttribute('id'); // add the section name to the anchor
    sectionLinks.classList.add('menu__link'); // add the syle cass for menu links
    sectionLinks.setAttribute('herf', section.getAttribute('id')); // put the secton   ID  as the links 'herf'
    listItem.appendChild(sectionLinks); // append the link (anchor) to the list item
    navBarList.appendChild(listItem); // append each list item to the navbar
  });
}
buildNavItems();
// Add class 'active' to section when near top of viewport
function addActiveClass() {
  // loop the sections
  sections.forEach((section) => {
    // listen for scroll event
    window.addEventListener('scroll', () => {
      let sectionPosetion = section.getBoundingClientRect(); // get the location of the secton
      if (sectionPosetion.top <= 300 && sectionPosetion.top >= -300) {
        section.classList.add('active'); // adding the active class if the section hit certin location (top of the page)
        let anchors = document.querySelectorAll('a'); // calling each anchor After they are created
        // loop through anchors using for loop
        for (let i = 0; i < anchors.length; i++) {
          anchors[i].classList.remove('active'); // removing the active class form each anchor
        }
        anchors.forEach((anchor) => {
          if (anchor.getAttribute('herf') == section.getAttribute('id')) {
            anchor.classList.add('active'); // adding active class to each anchor that matches the section ID
          }
        });
      } else {
        section.classList.remove('active'); // if the section ID dont match , remove the active class
      }
    });
  });
}

addActiveClass();
// Scroll to anchor ID using scrollTO event
function scrollToSection() {
  let anchors = document.querySelectorAll('a');
  anchors.forEach((anchor) => {
    // add event listener to each anchor and listen for 'click' event
    anchor.addEventListener('click', (e) => {
      e.preventDefault(); // preventign the defult for anchor
      var x = document.querySelector('.mobileMenu');

      x.style.display = 'none';

      let sellectedItem = document.getElementById(anchor.getAttribute('herf')); // get the selected section using anchor link'herf'
      const topPosetion =
        sellectedItem.getBoundingClientRect().top + window.scrollY; // the top postion of the page
      window.scrollTo({
        top: topPosetion, // make the window scroll to the top posetion and "minus 80px for adjusting"
        behavior: 'smooth', // set the behavior style to smooth to make the page scroll by a smooth way.
      });
    });
  });
}
scrollToSection();
function scrollBtn() {
  // listen for a scroll events
  window.addEventListener('scroll', () => {
    // if the body hit certain postion the button will be hidden/
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      up.style.transform = 'translateY(0px)';
    }
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      footer.style.transform = 'translateY(200px)';
    }
    // else the scroll to top button will be showen
    else {
      up.style.transform = 'translateY(300px)';
      footer.style.transform = 'translateY(0px)';
    }
  });
}
scrollBtn();

// add evenet listener to the scroll to top button and listien for a 'clock'
up.addEventListener('click', () => {
  // if the button is clicked the window scroll to the top by a smooth behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

//slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('img-holder');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
//menu
function openMenu() {
  var x = document.querySelector('.mobileMenu');

  x.style.display = 'flex';
}

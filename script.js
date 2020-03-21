// navigation toggle
const NAVIGATION = document.getElementById('navigation');
NAVIGATION.addEventListener('click', navigationToggle);

const HEADER = document.getElementById('header');
let headerHeight = document.getElementById("header").clientHeight;
const HEADER_HEIGHT_OFFSET = headerHeight;

const removeActiveClass = () => {
  NAVIGATION.querySelectorAll('.nav__link').forEach(item => {
    item.classList.remove('active');
  });
};

function navigationToggle(event) {
  const navigationItem = event.target;
  if (navigationItem.classList.contains('nav__link')) {
    removeActiveClass();
    navigationItem.classList.add('active');
  }
}

function ChangeHeader() {
  window.pageYOffset >= HEADER_HEIGHT_OFFSET
    ? HEADER.classList.add("header__small")
    : HEADER.classList.remove("header__small")
}

window.addEventListener("scroll", onChangeScroll);

function onChangeScroll() {
  ChangeHeader();

  const servicesPosition = document.getElementById("services").offsetTop - headerHeight;
  const portfolioPosition = document.getElementById("portfolio").offsetTop - headerHeight;
  const aboutPosition = document.getElementById("about").offsetTop - headerHeight;
  const contactPosition = document.getElementById("contact").offsetTop - headerHeight;

  const currentPosition = window.pageYOffset;
  if (currentPosition < servicesPosition) changeActiveClass(0);
  else if (currentPosition >= servicesPosition && currentPosition < portfolioPosition) changeActiveClass(1);
  else if (currentPosition >= portfolioPosition && currentPosition < aboutPosition) changeActiveClass(2);
  else if (currentPosition >= aboutPosition && currentPosition < contactPosition && !(window.pageYOffset >= document.documentElement.offsetHeight - window.innerHeight)) changeActiveClass(3);
  if (window.pageYOffset >= document.documentElement.offsetHeight - window.innerHeight || currentPosition >= contactPosition) changeActiveClass(4);
}

function changeActiveClass(item) {
  removeActiveClass();
  const navigationItems = NAVIGATION.querySelectorAll(".nav__link");
  navigationItems[item].classList.add("active");
}

// show/hide background
const phones = document.querySelectorAll(".phone");
for (let phone of phones) phone.addEventListener("click", togglePhoneDisplay);

function togglePhoneDisplay(event) {
  const phone = event.target;
  console.log(phone.classList);
  if (phone.classList.contains("phone")) {
    phone.classList.toggle("hide");
  } else if (phone.parentElement.classList.contains("phone"))
    phone.parentElement.classList.toggle("hide")
}

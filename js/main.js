// A.O.S
AOS.init();

// Swiper.js
// 1- First Slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 2- Second Slider
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Nav Bar

// Get Elements
const navBar = document.querySelector(".toogle-bar");

const navMenue = document.querySelector(".menue");

const navCloseMenue = document.querySelector(".toogle-close");

const navSection = document.querySelectorAll("nav .menue li");
const searchBtn = document.querySelector(".toogle-search");
const searchBar = document.querySelector("header nav #search");
const searchBarSubmit = document.querySelector("header nav #search-btn");
navBar.addEventListener("click", () => {
  navBar.classList.toggle("active");
  navMenue.classList.toggle("active");
  navCloseMenue.classList.toggle("active");
  document.body.classList.toggle("active");
});
navCloseMenue.addEventListener("click", () => {
  navBar.classList.toggle("active");
  navMenue.classList.toggle("active");
  navCloseMenue.classList.toggle("active");
  document.body.classList.toggle("active");
});
searchBtn.onclick = (event) => {
  searchBar.classList.toggle("active");
  searchBarSubmit.classList.toggle("active");
};
navSection.forEach((li) => {
  li.addEventListener("click", function (event) {
    navBar.classList.toggle("active");
    navMenue.classList.toggle("active");
    navCloseMenue.classList.toggle("active");
    document.body.classList.toggle("active");
  });
});

// Change Progress Bar at scroll
// Get Elements
const skillsTestimonials = document.querySelector(".skills-testimonials");
const spans = document.querySelectorAll(
  ".skills-testimonials .container .skills-bar span"
);
window.onscroll = function (event) {
  if (window.scrollY >= skillsTestimonials.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.getAttribute("data-width");
      span.children[0].textContent = span.getAttribute("data-width");
    });
  } else if (window.scrollY >= skillsTestimonials.offsetTop - 500) {
    spans.forEach((span) => {
      span.style.width = "0";
      span.children[0].textContent = "";
    });
  }
};

// Up scroll Button
// Get Elements

const upBtn = document.querySelector(".up-btn");

window.addEventListener("scroll", up);
function up() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upBtn.classList.add("active");
  } else {
    upBtn.classList.remove("active");
  }
}
upBtn.onclick = function () {
  document.documentElement.scrollTop = 0;
};

// Gallary Filter
//Get Elements
const menueBtn = document.querySelectorAll(".portfolio .menue li");

const menueImages = document.querySelectorAll(".portfolio .gallary .img");
menueBtn.forEach((btn) => {
  btn.addEventListener("click", removeActiveFromMenueImgs);
  if (btn.classList.contains("all")) {
    btn.addEventListener("click", addActiveToMenueImgs);
  } else {
    btn.addEventListener("click", addActiveTospecificImgs);
  }
});

function removeActiveFromMenueImgs() {
  menueImages.forEach((img) => {
    img.classList.remove("active");
  });
}
function addActiveToMenueImgs() {
  menueImages.forEach((img) => {
    img.classList.add("active");
  });
  menueBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
  this.classList.add("active");
}
function addActiveTospecificImgs() {
  menueImages.forEach((img) => {
    if (img.getAttribute("data-categ") == this.getAttribute("data-categ")) {
      img.classList.add("active");
    }
    menueBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    this.classList.add("active");
  });
}

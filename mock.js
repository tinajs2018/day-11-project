const bodyEl = document.querySelector("body");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const navLinksContainer = document.getElementById("nav-links");

/* *****functions***** */
function displayMobileNav() {
  // show mobile navigation
  mobileNav.classList.remove("hidden");
  // show button to close mobile navigation
  mobileNavToggle.className = "fal fa-times mobile-nav-toggle";
  // disable scroll on body
  bodyEl.classList.add("scroll");
}
function hideMobileNav() {
  // hide mobile navigation
  mobileNav.classList.add("hidden");
  // show button to open mobile navigation
  mobileNavToggle.className = "fal fa-bars mobile-nav-toggle";
  // disable scroll on body
  bodyEl.classList.remove("scroll");
}

/* *****event listeners***** */
// mobile navigation toggle
mobileNavToggle.addEventListener("click", () => {
  if (mobileNavToggle.classList.contains("fa-bars")) {
    displayMobileNav();
  } else {
    hideMobileNav();
  }
});

// navigation links fake functionality
navLinksContainer.addEventListener("click", (e) => {
  if (e.target.className === "nav-link-anchor") {
    hideMobileNav();
  }
});
const navIcon = document.querySelector("#check");
const mobileNavbar = document.querySelector("#mobile-navbar");
const webLogo = document.querySelector("#weblogo");
const navbarOverlay = document.querySelector("#navbar-overlay");

// Scroll Links
const scrollDefinition = document.querySelectorAll("#scroll-definition");
const scrollArticles = document.querySelectorAll("#scroll-articles");
const scrollExamples = document.querySelectorAll("#scroll-examples");
const scrollInfographics = document.querySelectorAll("#scroll-infographics");
const scrollConclusion = document.querySelectorAll("#scroll-conclusion");

// Scroll Sections
const scrollHeroSection = document.querySelector("#hero-section");
const scrollDefinitionSection = document.querySelector("#definition-section");
const scrollArticleSection = document.querySelector("#article-section");
const scrollExamplesSection = document.querySelector("#examples-section");
const scrollInfographicsSection = document.querySelector(
  "#infographics-section"
);
const scrollConclusionSection = document.querySelector("#conclusion-section");

// Toggle Navbar
const toggleNavbar = () => {
  mobileNavbar.classList.toggle("navbar-active");
  navbarOverlay.classList.toggle("navbar-overlay-active");

  if (!mobileNavbar.classList.contains("navbar-active")) {
    document.getElementsByTagName("body")[0].style.overflow = "unset";

    navIcon.checked = false;
  } else {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";

    // Web Logo
    webLogo.addEventListener("click", () => {
      document.getElementsByTagName("body")[0].style.overflow = "unset";

      mobileNavbar.classList.remove("navbar-active");
      navbarOverlay.classList.remove("navbar-overlay-active");

      navIcon.checked = false;
    });
  }
};

navIcon.addEventListener("click", toggleNavbar);

// Navbar Links
for (const child of mobileNavbar.children) {
  child.addEventListener("click", toggleNavbar);
}

// Navbar Overlay
navbarOverlay.addEventListener("click", toggleNavbar);

// Scroll to the Topmost Section
webLogo.addEventListener("click", () => {
  scrollHeroSection.scrollIntoView({
    behavior: "smooth",
  });
});

// Scroll to Definition Section
scrollDefinition.forEach((sectionLinks) => {
  sectionLinks.addEventListener("click", () => {
    scrollDefinitionSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to Articles Section
scrollArticles.forEach((sectionLinks) => {
  sectionLinks.addEventListener("click", () => {
    scrollArticleSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to Examples Section
scrollExamples.forEach((sectionLinks) => {
  sectionLinks.addEventListener("click", () => {
    scrollExamplesSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to Infographics Section
scrollInfographics.forEach((sectionLinks) => {
  sectionLinks.addEventListener("click", () => {
    scrollInfographicsSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to Conclusion Section
scrollConclusion.forEach((sectionLinks) => {
  sectionLinks.addEventListener("click", () => {
    scrollConclusionSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

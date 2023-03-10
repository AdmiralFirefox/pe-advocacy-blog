const navIcon = document.querySelector("#check");
const mobileNavbar = document.querySelector("#mobile-navbar");
const webLogo = document.querySelector("#weblogo");
const navbarOverlay = document.querySelector("#navbar-overlay");
const scrollToTopButton = document.querySelector("#scroll-to-up");
const fadeUpAnimate = document.querySelectorAll("#fade-up-animation");
const fadeUpAnimateLowDelay = document.querySelectorAll(
  "#fade-up-animation-low-delay"
);

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

// Scroll to Top
const buttonVisibility = () => {
  if (window.scrollY > 100) {
    scrollToTopButton.classList.add("scroll-active");
  } else {
    scrollToTopButton.classList.remove("scroll-active");
  }
};

const scrollToUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Scroll to Hero Section
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

// functions of all event listners
const allEventListners = () => {
  window.addEventListener("scroll", buttonVisibility);
  window.addEventListener("load", buttonVisibility);
};

// load all event listners
allEventListners();

// Fade Up Animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      entry.target.classList.toggle("fade-up-animate", intersecting);

      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.8,
  }
);

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      entry.target.classList.toggle("fade-up-animate-low-delay", intersecting);

      if (entry.isIntersecting) {
        observer2.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.17,
  }
);

fadeUpAnimate.forEach((element) => {
  observer.observe(element);
});

fadeUpAnimateLowDelay.forEach((element) => {
  observer2.observe(element);
});

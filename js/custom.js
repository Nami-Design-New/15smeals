$(document).ready(function () {
  // favicon based on color scheme
  function setFavicon() {
    const darkFavicon = $("#browser-dark-theme-favicon");
    const lightFavicon = $("#browser-light-theme-favicon");

    if (darkFavicon.length > 0 && lightFavicon.length > 0) {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (isDarkMode) {
        lightFavicon.removeAttr("href");
        // lightFavicon.attr("disabled", "disabled");
      } else {
        darkFavicon.removeAttr("href");
        // darkFavicon.attr("disabled", "disabled");
      }
    }
  }
  setFavicon();
  // listen for changes in the color scheme and update the favicon
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      setFavicon();
    });

  // nav menu
  $(".sideBtn").click(function () {
    $("header .navbar").toggleClass("active");
  });
});

// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".preloader").delay(1000).fadeOut(300);
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true,
  });
  // lozad
  const observer = lozad(".lazy", {
    loaded: function (el) {
      el.parentNode.classList.add("loaded");
    },
  });
  observer.observe();
  // parallax
  var parallaxImage = document.getElementsByClassName("parallax");
  new simpleParallax(parallaxImage, {
    delay: 1,
    transition: "cubic-bezier(0,0,0,1)",
  });
  // tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  // counter up
  const counterUp = window.counterUp.default;
  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 3000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };
  const IO = new IntersectionObserver(callback, { threshold: 1 });
  const elements = document.querySelectorAll(".counterUp");
  elements.forEach((el) => IO.observe(el));
});

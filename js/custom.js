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
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if (appScroll >= 64) {
      $("header nav").addClass("headerAnimate");
      $("header .topHeader").addClass("addHeight");
    } else {
      $("header nav").removeClass("headerAnimate");
      $("header .topHeader").removeClass("addHeight");
    }
  });
  //mainSlider
  function calculateAutoplayDelay(video, minimumDelay) {
    if (video) {
      const videoDuration = video.duration * 1000;
      return Math.max(videoDuration, minimumDelay);
    }
    return minimumDelay;
  }
  // Initialize mainSlider
  const mainSlider = new Swiper(".mainSliderContainer", {
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    speed: 500,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainSliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainSliderNext",
      prevEl: ".mainSliderPrev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
    on: {
      init: function () {
        setAutoplayDelay(this);
      },
      slideChange: function () {
        pauseAllVideos();
        const activeSlide = this.slides[this.activeIndex];
        const activeVideo = activeSlide.querySelector(
          ".mainSliderContainer video"
        );
        if (activeVideo) {
          activeVideo.play();
          setAutoplayDelay(this);
        }
      },
    },
  });
  function setAutoplayDelay(slider) {
    const activeSlide = slider.slides[slider.activeIndex];
    const activeVideo = activeSlide.querySelector(".mainSliderContainer video");
    const autoplayDelay = calculateAutoplayDelay(activeVideo, 8000);
    slider.params.autoplay.delay = autoplayDelay;
    slider.autoplay.start();
    console.log("Swiper Autoplay Delay:", autoplayDelay);
  }
  // Function to pause all videos
  function pauseAllVideos() {
    const allVideos = document.querySelectorAll(".mainSliderContainer video");
    allVideos.forEach(function (video) {
      video.pause();
    });
  }
  //latestSlider Slider
  var latestSlider = new Swiper(".latestSlider", {
    // centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    speed: 1000,
    pagination: {
      el: ".latestPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".latestSliderNext",
      prevEl: ".latestSliderPrev",
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      468: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  });
  $(".latestSlider .dishes").hover(function () {
    $(".latestSlider .dishes")
      .not($(this).find(".dishes"))
      .removeClass("haverd");
    $(this).addClass("haverd");
  });
  //blogSlider Slider
  var blogSlider = new Swiper(".blogSlider", {
    pagination: {
      el: ".blogPagination",
      clickable: true,
    },

    // centeredSlides: true,
    // loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });
  // blog
  $(".Moreblogs .blog .description , .singleBlog .description").each(function () {
    var text = $(this).text();
    if (text.length > 130) {
      var truncatedText =
        $.trim(text).substring(0, 130).split(" ").slice(0, -1).join(" ") +
        "...";
      $(this).text(truncatedText);
    }
  });
  $(".Moreblogs .blog .title ,.singleBlog .title ").each(function () {
    var text = $(this).text();
    if (text.length > 45) {
      var truncatedText =
        $.trim(text).substring(0, 45).split(" ").slice(0, -1).join(" ") + "...";
      $(this).text(truncatedText);
    }
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

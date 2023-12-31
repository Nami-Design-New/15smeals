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
    x;
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
  $(".Moreblogs .blog .description , .singleBlog .description").each(
    function () {
      var text = $(this).text();
      if (text.length > 130) {
        var truncatedText =
          $.trim(text).substring(0, 130).split(" ").slice(0, -1).join(" ") +
          "...";
        $(this).text(truncatedText);
      }
    }
  );
  $(".Moreblogs .blog .title ,.singleBlog .title ").each(function () {
    var text = $(this).text();
    if (text.length > 45) {
      var truncatedText =
        $.trim(text).substring(0, 45).split(" ").slice(0, -1).join(" ") + "...";
      $(this).text(truncatedText);
    }
  });
  $(
    " .latest .latestSlider .dishes .info .details , .mainCategories .recipes .recipe .info .details "
  ).each(function () {
    var text = $(this).text();
    if (text.length > 80) {
      var truncatedText =
        $.trim(text).substring(0, 80).split(" ").slice(0, -1).join(" ") + "...";
      $(this).text(truncatedText);
    }
  });
  // recipe-details
  var recipeThumbs = new Swiper(".recipeThumbs", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var recipeSlider = new Swiper(".recipeSlider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".recipeSliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".recipeSliderNext",
      prevEl: ".recipeSliderPrev",
    },
    thumbs: {
      swiper: recipeThumbs,
    },
  });
  // search

    $(".searchIcon").click(function (e) {
      e.stopPropagation(); 
      $(".search").toggleClass("showSearch");
        $(document).on("click", function (event) {
        if (!$(event.target).closest(".searchContect").length) {
          $(".search").removeClass("showSearch");
        }
      });
    });
      $(".searchContect").click(function (e) {
      e.stopPropagation();
    });

  

  const data = [
    "بيتزا ايطالي",
    "بيتزا ببروني",
    "بيتزا بالمشروم",
    "بيتزا بالزيتون",
    "بيتزا بالفلفل",
    "بيتزا بالجبنة",
    "بيتزا بالخضار",
    "ساندويتش تونة",
    "معكرونة بالصوص الأبيض",
    "شوربة خضار",
    "سلطة الكينوا",
    "لحم بقر مشوي",
    "كباب تركي",
    "بيض مسلوق",
    "أرز بالخضار",
    "شوكولاتة سوداء",
    "سلمون مشوي",
    "موز",
    "تفاح",
    "زبادي بالفواكه",
    "سمك مشوي",
    "كاري دجاج",
    "بيتزا بالفطر",
    "همبرجر",
    "بيتزا بالباذنجان",
    "برغر دجاج",
    "عصير تفاح",
    "عصير برتقال",
    "فاهيتا دجاج",
    "شاورما لحم",
    "كفتة",
    "فطور إنجليزي",
    "شراب فراولة",
    "سلطة الفاصوليا",
    "ساندويتش دجاج",
    "فطائر السبانخ",
    "كبسة",
    "معكرونة بالصلصة الحمراء",
    "عصير جوافة",
    "ميلك شيك",
    "كريب بالشوكولاتة",
    "بسبوسة",
    "كيك الجزر",
    "مشروب الليمون",
    "ساندويتش سمك",
    "بسكويت الزبدة",
    "فلافل",
    "ترتور تركي",
    "بيتزا بالفاصوليا",
    "فتوش",
    "كسكس",
    "فلافل",
    "ملفوف محشي",
    "كفتة بالصلصة الحارة",
    "بيتزا بالبقدونس",
    "سمبوسة باللحم",
  ];
  const searchInput = $("#search-input");
  const searchResults = $("#search-results");
  searchInput.on("input", function () {
    const searchTerm = searchInput.val().trim().toLowerCase();
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    updateResults(filteredData);
  });
  function updateResults(results) {
    searchResults.empty(); // Clear previous results
    if (results.length === 0) {
      searchResults.append("<p> لا يوجد نتائج.</p>");
    } else {
      $.each(results, function (index, result) {
        const listItem = $("<li></li>");
        const link = $("<a></a>")
          .attr("href", "recipe-details.html")
          .text(result);
        listItem.append(link);
        searchResults.append(listItem);
      });
    }
  }
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
//contact higlight inputs
function highlight(el) {
  el.previousElementSibling.classList.add("h");
}
function dehighlight(el) {
  if (el.value === "") {
    el.previousElementSibling.classList.remove("h");
  }
}
// Add a click event handler to all elements with class "check"
$(document).ready(function () {
  $(".makeIt .check").on("click", function () {
    $(this).closest("li").toggleClass("done");
  });
});

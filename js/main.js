document.addEventListener("DOMContentLoaded", function () {
  //----sliders-----
  const swiper_rare = new Swiper(".token_swiper-rare", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  const swiper_regular = new Swiper(".token_swiper-regular", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  const swiper_veryrare = new Swiper(".token_swiper-veryrare", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  const swiper_cards = new Swiper(".token_swiper-cards", {
    direction: "horizontal",
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
  });
  const swiper_art = new Swiper(".art_swiper", {
    direction: "horizontal",
    autoplay: {
      delay: 4000,
    },
    slidesPerView: "auto",
    spaceBetween: 10,
    keyboard: {
      enabled: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
  });

  //----const----

  const header = document.querySelector(".header");
  const burger = document.querySelector(".header_burger");
  const navbar = document.querySelector(".header_navbar");
  const headerSocial = document.querySelector(".header_navbar-social");

  const cardRegular = document.querySelector(".token_card-regular");
  const cardRare = document.querySelector(".token_card-rare");
  const cardVeryrare = document.querySelector(".token_card-veryrare");

  const sliderRegular = document.querySelector(".token_slider-regular");
  const sliderRare = document.querySelector(".token_slider-rare");
  const sliderVeryrare = document.querySelector(".token_slider-veryrare");

  const main = document.querySelector(".main");
  const token = document.querySelector(".token");
  const project = document.querySelector(".project");
  const roadmap = document.querySelector(".roadmap");
  const art = document.querySelector(".art");

  const sections = [main, token, project, roadmap, art];

  cardRegular.addEventListener("click", (e) => {
    e.currentTarget.classList.add("token_card-regular_active");
    cardRare.classList.remove("token_card-rare_active");
    cardVeryrare.classList.remove("token_card-veryrare_active");
    sliderRegular.classList.add("token_slider-active");
    sliderRare.classList.remove("token_slider-active");
    sliderVeryrare.classList.remove("token_slider-active");
  });
  cardRare.addEventListener("click", (e) => {
    e.currentTarget.classList.add("token_card-rare_active");
    cardRegular.classList.remove("token_card-regular_active");
    cardVeryrare.classList.remove("token_card-veryrare_active");
    sliderRegular.classList.remove("token_slider-active");
    sliderRare.classList.add("token_slider-active");
    sliderVeryrare.classList.remove("token_slider-active");
  });
  cardVeryrare.addEventListener("click", (e) => {
    e.currentTarget.classList.add("token_card-veryrare_active");
    cardRare.classList.remove("token_card-rare_active");
    cardRegular.classList.remove("token_card-regular_active");
    sliderRegular.classList.remove("token_slider-active");
    sliderRare.classList.remove("token_slider-active");
    sliderVeryrare.classList.add("token_slider-active");
  });

  window.onscroll = () => {
    const scroll = window.scrollY;

    sections.forEach((elem) => {
      const a = document.querySelector(`li[name="${elem.classList[0]}"] a`);
      if (
        scroll > offset(elem).top - 150 &&
        scroll < offset(elem).top + elem.offsetHeight
      ) {
        a.setAttribute("style", "opacity: 1;");
      } else {
        a.removeAttribute("style");
      }
    });

    if (scroll < 100) {
      header.classList.remove("header_fixed");
      header.classList.remove("header_hidden");
      headerSocial.setAttribute("style", "visibility: visible;");
    } else if (window.innerHeight + scroll + 300 > document.body.clientHeight) {
      header.classList.add("header_hidden");
      header.classList.remove("header_fixed");
    } else {
      headerSocial.setAttribute("style", "visibility: hidden;");
      header.classList.remove("header_hidden");
      header.classList.add("header_fixed");
    }
  };

  swiper_cards.on("slideChange", function () {
    if (this.activeIndex === 0) {
      sliderRegular.classList.add("token_slider-active");
      sliderRare.classList.remove("token_slider-active");
      sliderVeryrare.classList.remove("token_slider-active");
    }
    if (this.activeIndex === 1) {
      sliderRegular.classList.remove("token_slider-active");
      sliderRare.classList.add("token_slider-active");
      sliderVeryrare.classList.remove("token_slider-active");
    }
    if (this.activeIndex === 2) {
      sliderRegular.classList.remove("token_slider-active");
      sliderRare.classList.remove("token_slider-active");
      sliderVeryrare.classList.add("token_slider-active");
    }
  });

  const smoothLinks = document.querySelectorAll("a[href^='#'");
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      navbar.classList.remove("header_navbar-active");
      document.body.classList.remove("body-hidden");
      document.documentElement.classList.remove("body-hidden");
    });
  }

  burger.addEventListener("click", () => {
    navbar.classList.toggle("header_navbar-active");
    document.documentElement.classList.toggle("body-hidden");
    document.body.classList.toggle("body-hidden");
  });

  function offset(el) {
    let rect = el.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop };
  }
});

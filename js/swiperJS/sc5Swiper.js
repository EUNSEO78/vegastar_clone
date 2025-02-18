export const sc5Swiper = new Swiper(".tours_swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 2.8,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".navigation_container .swiper-button-next",
    prevEl: ".navigation_container .swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".scrollbar_container .swiper-scrollbar",
  },
});

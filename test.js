var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
  autoplay: {
    delay: 3000, // 3초마다 자동 전환
    disableOnInteraction: false,
  },
});

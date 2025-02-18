gsap.registerPlugin(ScrollTrigger);
//
const places_gsap = gsap.timeline({
  scrollTrigger: {
    trigger: ".places_swiper2",
    start: "top top",
    end: "bottom top",
  },
});

export const placesGsap = places_gsap.fromTo(
  ".places_swiper > .swiper-wrapper ",
  { opacity: 0, duration: 0.1 },
  {
    opacity: 1,
    duration: 0.1,
  }
);

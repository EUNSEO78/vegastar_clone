gsap.registerPlugin(ScrollTrigger);

export const tours_gsap = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc5-tours",
    start: "top top",
    end: "bottom top",
    pin: true,
  },
});

tours_gsap
  .fromTo(
    ".tours > p",
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.5 }
  )
  .fromTo(".benefit_btn", { x: -20, opacity: 0 }, { x: 0, opacity: 1 }, "<")
  .fromTo(".swiper", { opacity: 0 }, { opacity: 1, duration: 0.5 });

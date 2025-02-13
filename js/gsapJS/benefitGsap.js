gsap.registerPlugin(ScrollTrigger);

const benefit_gsap = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc4-benefit",
    start: "top top",
    end: "bottom top",
    pin: true,
  },
});

export const benefitGsap = benefit_gsap
  .fromTo(
    ".benefit",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 }
  )
  .fromTo(
    ".benefitInfo",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 }
  )
  .fromTo(
    ".benefitCards > article",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.3, duration: 0.5 }
  );

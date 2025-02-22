gsap.registerPlugin(ScrollTrigger);

const vipclub_gsap = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc2-vipclub",
    start: "top top",
    end: "bottom top",
    pin: true,
  },
});

export const vipclubGsap = vipclub_gsap
  .fromTo(
    ".sc2-vipclub::after",
    { filter: "brightness(100%)" },
    { filter: "brightness(50%)", duration: 1 }
  )
  .fromTo(
    ".vipclub_title",
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7 }
  )
  .fromTo(
    ".vipclub_contents > div",
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, stagger: 0.2 }
  )

  .fromTo(
    ".vipclub_btn",
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7 }
  );

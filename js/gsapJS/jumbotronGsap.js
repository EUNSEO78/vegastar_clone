const start_show = gsap.timeline();
export const jumbotronGsap = start_show
  .fromTo(
    ".start_txt > p",
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 2, stagger: 0.5 }
  )
  .fromTo(".start_text__wrap", { opacity: 1 }, { opacity: 0, duration: 1 })
  .to(".start_txt > p", { opacity: 0, duration: 2 });

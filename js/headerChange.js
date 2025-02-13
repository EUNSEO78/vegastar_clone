// 윈도우 스크롤 값이 .sc4-benefit의 top 스크롤 값과 같거나 top 스크롤 값보다 크고
// .sc4-benefit의 bottom 스크롤 값보다 작거나 bottom 스크롤 값과 같을
// 윈도우 스크롤 값 >= top 스크롤 값 && 윈도우 스크롤 값 <= bottom 스크롤 값
// 때만 header -> color: "black"     아니면 color: "white"

export const headerChange = window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const topbarTop = document.querySelector("#top");
  const topbarBottom = document.querySelector("#bottom");
  const target = document.querySelector(".sc4-benefit");
  const scrollY = window.scrollY;
  const targetClientRect = target.getBoundingClientRect();
  const top = scrollY + targetClientRect.top;
  const bottom = scrollY + targetClientRect.bottom;

  if (scrollY >= top && scrollY <= bottom) {
    nav.style.color = "black";
    header.style.borderBottom = "1px solid black";
    topbarTop.style.backgroundColor = "black";
    topbarBottom.style.backgroundColor = "black";
  } else {
    nav.style.color = "white";
    header.style.borderBottom = "1px solid rgba(255, 255, 255, 0.2)";
    topbarTop.style.backgroundColor = "white";
    topbarBottom.style.backgroundColor = "white";
  }
});

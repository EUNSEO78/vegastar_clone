// 윈도우 스크롤 값이 .sc4-benefit의 top 스크롤 값과 같거나 top 스크롤 값보다 크고
// .sc4-benefit의 bottom 스크롤 값보다 작거나 bottom 스크롤 값과 같을
// 윈도우 스크롤 값 >= top 스크롤 값 && 윈도우 스크롤 값 <= bottom 스크롤 값
// 때만 header -> color: "black"     아니면 color: "white"
const w = window.scrollY;
console.log(w);

const a = document.querySelector(".sc4-benefit").offset.top;
console.log(a);

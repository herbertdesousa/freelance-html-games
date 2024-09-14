const scrollContainer = document.getElementById("scroll-container");

let isDown = false;
let startX = 0;
let startY = 0;
let scrollLeft = 0;
let scrollTop = 0;

scrollContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  scrollContainer.classList.add("active");
  startX = e.pageX - scrollContainer.offsetLeft;
  startY = e.pageY - scrollContainer.offsetTop;
  scrollLeft = scrollContainer.scrollLeft;
  scrollTop = scrollContainer.scrollTop;
});

scrollContainer.addEventListener("mouseleave", () => {
  isDown = false;
  scrollContainer.classList.remove("active");
});

scrollContainer.addEventListener("mouseup", () => {
  isDown = false;
  scrollContainer.classList.remove("active");
});

scrollContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const y = e.pageY - scrollContainer.offsetTop;
  const walkX = (x - startX) * 1.5; // Multiplied for faster scrolling
  const walkY = (y - startY) * 1.5;
  scrollContainer.scrollLeft = scrollLeft - walkX;
  scrollContainer.scrollTop = scrollTop - walkY;
});

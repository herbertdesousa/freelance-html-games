const GAME_SETTINGS = {
  backgroundImageSrc: "assets/img2.jpg",
};

class CustomImage {
  query = "";

  constructor(query) {
    this.query = query;
  }

  setSource(src = "") {
    $(this.query).attr("src", src);
  }

  setWidthPx(size = 0) {
    $(this.query).css("width", `${size}px`);
  }

  setHeightPx(size = 0) {
    $(this.query).css("height", `${size}px`);
  }
}

const bgImage = new CustomImage("#background-image");
bgImage.setSource(GAME_SETTINGS.backgroundImageSrc);

//

const zoomArea = document.getElementById("zoomArea");
const image = document.getElementById("image");

let isPinching = false;
let startDist = 0;
let initialScale = 1;
let scale = 1;

zoomArea.addEventListener("mousedown", (e) => {
  if (e.buttons === 1) {
    // Left mouse button
    isPinching = true;
    startDist = getDistance(e);
  }
});

window.addEventListener("mousemove", (e) => {
  if (isPinching) {
    const newDist = getDistance(e);
    scale = (newDist / startDist) * initialScale;
    image.style.transform = `scale(${scale})`;
  }
});

window.addEventListener("mouseup", () => {
  if (isPinching) {
    isPinching = false;
    initialScale = scale;
  }
});

function getDistance(e) {
  return Math.abs(e.clientX - zoomArea.offsetLeft);
}

const GAME_SETTINGS = {
  backgroundImageSrc: "assets/img2.jpg",
  points: [
    { imgSrc: "assets/img1.png", topPercentage: 0, leftPercentage: 10 },
    { imgSrc: "assets/img1.png", topPercentage: 50, leftPercentage: 50 },
    { imgSrc: "assets/img1.png", topPercentage: 90, leftPercentage: 90 },
    { imgSrc: "assets/img1.png", topPercentage: 0, leftPercentage: 90 },
    { imgSrc: "assets/img1.png", topPercentage: 90, leftPercentage: 0 },
  ],
};

const SETUP = {
  backgroundImageId: "background-image",
  containerId: "container",
  point: {
    class: "game-point",
    width: 32, // optional, if undefined auto size
    height: 32, // optional, if undefined auto size
    enableBackground: true,
  },
};

const hashedId = (id) => `#${id}`;
const dottedClass = (id) => `.${id}`;

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

class Point {
  element = $("<img></img>");

  constructor() {}

  setSrc(src) {
    this.element.attr("src", src);
  }

  setWidthPx(px) {
    this.element.css("width", `${px}px`);
  }

  setHeightPx(px) {
    this.element.css("height", `${px}px`);
  }

  setBgColor(color) {
    this.element.css("background", color);
  }

  setTopPercent(percentage) {
    this.element.css("top", `${percentage}%`);
  }

  setLeftPercent(percentage) {
    this.element.css("left", `${percentage}%`);
  }

  setOnClick(fn) {
    this.element.attr("onclick", fn);
  }

  build(parentId = "") {
    $(parentId).append(
      this.element.css("position", "fixed").css("z-index", 100)
    );
  }
}

/*
  função chamada na criação da classe Point
  tome cuidado ao mudar o nome da função
*/
function onClickPoint() {
  alert("+1");
}

$(document).ready(() => {
  const bgImage = new CustomImage(hashedId(SETUP.backgroundImageId));
  bgImage.setSource(GAME_SETTINGS.backgroundImageSrc);

  for (const gamePoint of GAME_SETTINGS.points) {
    const point = new Point();

    if (SETUP.point.height) point.setHeightPx(SETUP.point.height);
    if (SETUP.point.width) point.setWidthPx(SETUP.point.width);
    point.setTopPercent(gamePoint.topPercentage);
    point.setLeftPercent(gamePoint.leftPercentage);
    point.setOnClick("onClickPoint()");
    point.setSrc(gamePoint.imgSrc);

    if (SETUP.point.enableBackground) point.setBgColor("#f0f");

    point.build(hashedId(SETUP.containerId));
  }

  $(dottedClass(SETUP.point.class));
});

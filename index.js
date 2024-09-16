const GAME_SETTINGS = {
  backgroundImageSrc: "assets/img2.jpg",
  points: [
    { topPercentage: 0, leftPercentage: 10 },
    { topPercentage: 50, leftPercentage: 50 },
    { topPercentage: 90, leftPercentage: 90 },
    { topPercentage: 0, leftPercentage: 90 },
    { topPercentage: 90, leftPercentage: 0 },
  ],
};

const SETUP = {
  backgroundImageId: "background-image",
  containerId: "container",
  point: {
    width: 32,
    height: 32,
    enableBackground: true,
  },
};

const hashedId = (id) => `#${id}`;

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
  classNames = [];

  constructor() {}

  setWidthPx(px) {
    this.classNames.push(`w-[${px}px]`);
  }

  setBgColor(color) {
    this.classNames.push(`bg-[${color}]`);
  }

  setHeightPx(px) {
    this.classNames.push(`h-[${px}px]`);
  }

  setTopPercent(percentage) {
    this.classNames.push(`top-[${percentage}%]`);
  }

  setLeftPercent(percentage) {
    this.classNames.push(`left-[${percentage}%]`);
  }

  build() {
    const classNames = this.classNames.join(" ");
    return `<div class="fixed ${classNames} rounded-full"></div>`;
  }
}

$(document).ready(() => {
  const bgImage = new CustomImage(hashedId(SETUP.backgroundImageId));
  bgImage.setSource(GAME_SETTINGS.backgroundImageSrc);

  for (const gamePoint of GAME_SETTINGS.points) {
    const point = new Point();

    point.setHeightPx(SETUP.point.height);
    point.setWidthPx(SETUP.point.width);
    point.setTopPercent(gamePoint.topPercentage);
    point.setLeftPercent(gamePoint.leftPercentage);

    if (SETUP.point.enableBackground) point.setBgColor("#f0f");

    $(hashedId(SETUP.containerId)).append(point.build());
  }
});

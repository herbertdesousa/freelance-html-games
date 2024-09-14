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

$(document).ready(() => {
  const bgImage = new CustomImage("#background-image");
  bgImage.setSource(GAME_SETTINGS.backgroundImageSrc);

  new MouseScroll("#scroll-container");
});

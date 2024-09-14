class MouseScroll {
  constructor(id) {
    const container = $(id);

    let isDown = false;
    let startX, startY;
    let scrollLeft, scrollTop;

    container.mousedown((e) => {
      isDown = true;
      startX = e.pageX - container.offset().left;
      startY = e.pageY - container.offset().top;
      scrollLeft = container.scrollLeft();
      scrollTop = container.scrollTop();
    });

    $(document).mouseup(() => {
      isDown = false;
    });

    container.mouseleave(() => {
      isDown = false;
    });

    container.mousemove((e) => {
      if (!isDown) return;

      e.preventDefault();

      var x = e.pageX - container.offset().left;
      var y = e.pageY - container.offset().top;
      var walkX = (x - startX) * 1.5; // Speed for horizontal scroll
      var walkY = (y - startY) * 1.5; // Speed for vertical scroll

      container.scrollLeft(scrollLeft - walkX);
      container.scrollTop(scrollTop - walkY);
    });
  }
}

// ! JavaScript Code to display a live update of our current viewport width on the page for demonstration purposes

document.addEventListener("DOMContentLoaded", function () {
  const viewportWidthElement = document.getElementById("viewport-width");

  function updateViewportWidth() {
    const width = window.innerWidth;
    viewportWidthElement.textContent = `Width: ${width}px`;
  }

  window.addEventListener("resize", updateViewportWidth);
  updateViewportWidth();
});

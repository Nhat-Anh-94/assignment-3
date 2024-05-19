"use strict";

//Xóa lớp border-end và border-start cho thanh navbar
function removeBorderOnXs(id, className) {
  const element = document.getElementById(id);
  if (element && window.innerWidth < 576) {
    element.classList.remove(className);
  }
}
window.addEventListener("load", function () {
  removeBorderOnXs("navigation1", "border-end");
});
window.addEventListener("resize", function () {
  removeBorderOnXs("navigation1", "border-end");
});
window.addEventListener("load", function () {
  removeBorderOnXs("navigation1", "border-start");
});
window.addEventListener("resize", function () {
  removeBorderOnXs("navigation1", "border-start");
});

window.addEventListener("load", function () {
  removeBorderOnXs("navigation3", "border-end");
});
window.addEventListener("resize", function () {
  removeBorderOnXs("navigation3", "border-end");
});
window.addEventListener("load", function () {
  removeBorderOnXs("navigation3", "border-start");
});
window.addEventListener("resize", function () {
  removeBorderOnXs("navigation3", "border-start");
});

window.addEventListener("load", function () {
  removeBorderOnXs("navigation2", "border-end");
});
window.addEventListener("resize", function () {
  removeBorderOnXs("navigation2", "border-end");
});

window.addEventListener("load", function () {
  removeBorderOnXs("navigation4", "border-end");
});
window.addEventListener("resize", function () {
  removeBorderOnXs("navigation4", "border-end");
});

"use strict";

//Xóa lớp border-end và border-start cho thanh navbar
function removeBorderOnXs(id, className) {
  const element = document.getElementById(id);
  if (element && window.innerWidth < 576) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

function addBorderOnXs(id, className) {
  const element = document.getElementById(id);
  if (element && window.innerWidth < 576) {
    element.classList.add(className);
  } else {
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

//Ẩn hiện border cho Certificate Section khi thay đổi kích thước màn hình
window.addEventListener("load", function () {
  removeBorderOnXs("cer1", "border-end");
});
window.addEventListener("resize", function () {
  removeBorderOnXs("cer1", "border-end");
});

window.addEventListener("load", function () {
  addBorderOnXs("cer1", "border-bottom");
});
window.addEventListener("resize", function () {
  addBorderOnXs("cer1", "border-bottom");
});

var container = document.getElementById("subCertificate");
var element = document.getElementById("cer0");
var existingDiv = document.getElementById("cer3");
window.addEventListener("resize", function () {
  if (element && window.innerWidth < 576) {
    // Xóa element khi truy vấn phương tiện truyền thông khớp
    container.removeChild(element);
  } else if (element && window.innerWidth >= 576) {
    container.insertBefore(element, cer3);
  }
});
window.addEventListener("load", function () {
  if (element && window.innerWidth < 576) {
    // Xóa element khi truy vấn phương tiện truyền thông khớp
    container.removeChild(element);
  } else if (element && window.innerWidth >= 576) {
    container.insertBefore(element, cer3);
  }
});

window.addEventListener("load", function () {
  addBorderOnXs("cer2", "border-bottom");
});
window.addEventListener("resize", function () {
  addBorderOnXs("cer2", "border-bottom");
});

window.addEventListener("load", function () {
  addBorderOnXs("cer2", "border-1");
});
window.addEventListener("resize", function () {
  addBorderOnXs("cer2", "border-1");
});

window.addEventListener("load", function () {
  addBorderOnXs("cer2", "border-warning");
});
window.addEventListener("resize", function () {
  addBorderOnXs("cer2", "border-warning");
});

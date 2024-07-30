$(document).ready(function () {
  const $toggle = $("#toggle");
  const $nav = $("#nav");

  $toggle.on("click", () => {
    $nav.toggleClass("active");
  });
});

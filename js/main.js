// start change navbar color

// $(window).scroll(function () {
//   $("nav").toggleClass("scrolled", $(this).scrollTop() < 100);
// });

// End change navbar color

$(document).ready(function () {
  "use strict";

  $("ul.navbar-nav > li").click(function () {
    //   e.preventDefault();
    $("ul.navbar-nav > li").removeClass("active");
    $(this).addClass("active");
  });
});

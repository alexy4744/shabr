$(function() {
  const nav = $("nav");
  const navDropdown = $("#nav-dropdown");

  $(window).scroll(function(scrollEvent) {
    if (window.scrollY > 50) {
      nav.addClass("navbar-white")
    }
    else if (!navDropdown.hasClass("in")) {
      nav.removeClass("navbar-white")
    }
  });

  $(".navbar-toggle").click(function() {
    if (navDropdown.hasClass("navbar-white")) {
      nav.removeClass("navbar-white")
    }
    else {
      nav.addClass("navbar-white")
    }
  })
});

$(function() {
  const nav = $("nav");

  // If the user scrolled enough, then make the navbar not transparent
  $(window).scroll(function() {
    if (window.scrollY) {
      nav.addClass("navbar-white")
    }
    else if (!$("#nav-dropdown").hasClass("in")) {
      nav.removeClass("navbar-white")
    }
  });

  $(".navbar-toggle").click(function() {
    if (nav.hasClass("navbar-white") && !window.scrollY) {
      nav.removeClass("navbar-white")
    }
    else {
      nav.addClass("navbar-white")
    }
  })
});

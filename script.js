$(function() {
  const nav = $("nav");
  const navDropdown = $("#nav-dropdown");

  if (window.scrollY) {
    nav.addClass("navbar-white");
  }

  // If the user scrolled enough, then make the navbar not transparent
  $(window).scroll(function() {
    if (window.scrollY) {
      nav.addClass("navbar-white");
    }
    else if (!navDropdown.hasClass("in")) {
      nav.removeClass("navbar-white");
    }
  });

  $(".navbar-toggle").click(function() {
    // dont allow it to delete the class when the dropdown hasnt fully expanded yet
    if (navDropdown.hasClass("collapsing")) return;

    if (nav.hasClass("navbar-white") && !window.scrollY) {
      nav.removeClass("navbar-white");
    }
    else {
      nav.addClass("navbar-white");
    }
  });

  $(".nav a").click(function() {
    navDropdown.collapse("hide")
  })
});

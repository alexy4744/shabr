$(function() {
  const nav = $("nav");

  $(".navbar-toggle").click(function() {
    if (nav.hasClass("navbar-dropdown-expanded")) {
      nav.removeClass("navbar-dropdown-expanded")
    } else {
      nav.addClass("navbar-dropdown-expanded")
    }
  })
})

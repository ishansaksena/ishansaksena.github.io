var main = function() {
  $('.resume_menu_item').hover(function() {
    $('.resume_dropdown').toggle();
  });
  $('.github_menu_item').hover(function() {
    $('.github_dropdown').toggle();
  });
  $('.ios_menu_item').hover(function() {
    $('.ios_dropdown').toggle();
  });
  $('.about_menu_item').hover(function() {
    $('.about_dropdown').toggle();
  });
}

$(document).ready(main);
//window.alert("I like to party");
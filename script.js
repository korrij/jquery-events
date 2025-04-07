// script.js
$(document).ready(function() {
    $('.flower').on('mouseover', function() {
      // Change background color on mouseover
      $(this).css('background-color', 'lightblue');
    }).on('mouseout', function() {
      // Remove background color when the mouse leaves
      $(this).css('background-color', '');
    });
  });
$(document).ready(function() {
    // 1. Hide all .botanic and .imgdiv on page load
    $('.botanic, .imgdiv').hide();
  
    // 2. CLICK EVENT for .flower
    //    Hide all botanic names, then show the one for the clicked flower
    $('.flower').on('click', function() {
      $('.botanic').hide();
      $(this).children('.botanic').show();
    });
  
    // 3. HOVER EVENTS for .pic
    //    Mouseover: show the corresponding .imgdiv near the cursor
    //    Mouseout: hide it
    $('.pic').on('mouseover', function(e) {
      const key = $(this).attr('title'); // e.g., "rose"
      const x = e.pageX;
      const y = e.pageY;
      $('#' + key)
        .css({
          position: 'absolute',
          top: y + 10 + 'px',
          left: x + 10 + 'px'
        })
        .show();
    }).on('mouseout', function() {
      const key = $(this).attr('title');
      $('#' + key).hide();
    });
  
    // 4. KEYPRESS EVENT
    //    If user types a letter, jump to the flower with that ID (e.g., #a, #b, #c, etc.)
    $(document).on('keypress', function(e) {
      // Convert the pressed key to a lowercase character
      const pressedKey = String.fromCharCode(e.which).toLowerCase();
  
      // If an element with that ID exists, jump to it using window.location
      if ($('#' + pressedKey).length) {
        window.location = '#' + pressedKey;
      }
    });
  });
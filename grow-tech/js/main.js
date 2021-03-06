$(document).ready(function(){
    $('.header__links a').on('click', function(e){
        e.preventDefault();
        $('.header__links a').removeClass('active');
        $(this).addClass('active');
    });

    $('.header__toggle').on('click', function(){
        $('.header__links').slideToggle(300);
    });

    // --------NAV BAR ICON -------------------
    $('.js--nav-icon').click(function () { 
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        if (icon.hasClass('fa-bars')){
           icon.addClass('fa-times')
           icon.removeClass('fa-bars')
        }else{
           icon.addClass('fa-bars')
           icon.removeClass('fa-times')
        }
      });
    //   ------------- Sticky Nav-------------------------
    var stickyOffset = $('header').offset().top;

$(window).scroll(function(){
  var sticky = $('header'),
      scroll = $(window).scrollTop()>=400;

  if (scroll > stickyOffset) sticky.addClass('sticky-nav');
  else sticky.removeClass('sticky-nav');
});

//       $('section').waypoint(function(direction){
        
//         if (direction == "down"){
//  $('header').addClass('sticky-nav');
//         } else {
//          $('header').removeClass('sticky-nav');
//         }
//       },{
//      offset: '100px;'
//  });      
 $('.sticky-nav a').on('click', function(e){
  e.preventDefault();
  $('.sticky-nav a').removeClass('active');
  $(this).addClass('active');
});

// -------------Smooth Scrolling__________________________
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

});
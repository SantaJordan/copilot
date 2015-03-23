$(document).ready(function(){


  function adjustHero() {
    var windowHeight = window.innerHeight;

    if (windowHeight >= 800) {
      $("#section-1").height(windowHeight);
    } else {
      $("#section-1").height(800);
    }

  }

  var windowWidth = $(window).width();

  if ( windowWidth >= 1000 ) {
    adjustHero();
  }

  $(window).resize(function() {
    var windowWidth = $(window).width();
    if ( windowWidth < 1000 ) {
      $("#section-1").height("auto");
    }
  });


});
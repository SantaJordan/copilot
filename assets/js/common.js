$(document).ready(function(){


  function adjustHero() {
    var windowHeight = window.innerHeight;
    $("#section-1").height(windowHeight);
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
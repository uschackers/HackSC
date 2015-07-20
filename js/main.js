$(document).ready(function() {
    setBottomBarHeight();
    initializeCountdown();
});

$(window).resize(function() {
	setBottomBarHeight();
});

function setBottomBarHeight() {
	$('.bottom-bar').height(.3 * $('.bottom-image').height());
}

function initializeCountdown() {
  $(".clock").countdown("2015/11/13", function(event) {
      var $this = $('.clock').html(event.strftime(''
            + '<span>%D</span> days '
            + '<span>%H</span> hr '
            + '<span>%M</span> min '
            + '<span>%S</span> sec'
          ));
  });
}

$(document).ready(function() {
    initializeCountdown();
    setBottomBarHeight();
    entranceAnimation();
    hoverAnimation();
});

$(window).resize(function() {
	setBottomBarHeight();
});

function setBottomBarHeight() {
  $('.bottom-bar').height(.3 * $('.computers-image').height());
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

function entranceAnimation() {
  $('.top').addClass('animated bounceInDown');
  $(".top").css('visibility', 'visible');
  $('.bottom-bar').addClass('animated bounceInUp');
  $('.bottom-bar').css('visibility', 'visible');
  $('.bottom-image').addClass('animated bounceInDown');
  $('.bottom-image').css('visibility', 'visible');
  $('.robots').addClass('animated bounceInDown');
  $('.robots').css('visibility', 'visible');
}

function hoverAnimation() {
  var element1 = $('.robot-1');
  element1.hover(
    function() {
      element1.addClass('animated pulse');        
      element1.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        element1.removeClass('animated pulse');
      });
    }
  );

  var element2 = $('.robot-2');
  element2.hover(
    function() {
      element2.addClass('animated pulse');        
      element2.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        element2.removeClass('animated pulse');
      });
    }
  );

  var element3 = $('.robot-3');
  element3.hover(
    function() {
      element3.addClass('animated pulse');        
      element3.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        element3.removeClass('animated pulse');
      });
    }
  );

  var element4 = $('.robot-4');
  element4.hover(
    function() {
      element4.addClass('animated pulse');        
      element4.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        element4.removeClass('animated pulse');
      });
    }
  );

  var element5 = $('.robot-5');
  element5.hover(
    function() {
      element5.addClass('animated pulse');        
      element5.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        element5.removeClass('animated pulse');
      });
    }
  );
}

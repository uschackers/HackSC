$(document).ready(function() {
    setBottomBarHeight();
    entranceAnimation();
    hoverAnimation();

    // Center robots on smaller screens and mobile.
    if ($(window).width() <= 950 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      centerRobots();
    }
});

$(window).resize(function() {
	setBottomBarHeight();
  if ($(window).width() <= 950) {
    centerRobots();
  }
});

function setBottomBarHeight() {
  $('.bottom-bar').height(.3 * $('.computers-image').height());
}

function entranceAnimation() {
  $('.bottom-bar').addClass('animated bounceInUp');
  $('.bottom-bar').css('visibility', 'visible');
  $('.bottom-bar').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('.bottom-image').addClass('animated bounceInRight');
    $('.bottom-image').css('visibility', 'visible');
    $('.bottom-image').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('.robots').addClass('animated bounceInLeft');
      $('.robots').css('visibility', 'visible');
      $('.robots').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.top').addClass('animated bounceInDown');
        $('.top').css('visibility', 'visible');
      });
    });
  });
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

function centerRobots() {
  $('.robots').scrollTo('50%');
}

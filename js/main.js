$(document).ready(function() {
    setBottomBarHeight();
    entranceAnimation();
    hoverAnimation();

    // Center robots on smaller screens and mobile.
    if ($(window).width() <= 950 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      centerRobots();
    }

    $(".success-notification").hide();
    $(".failed-notification").hide();
    $( "form"  ).submit(function( event  ) {
      if(validateEmail($("#mce-EMAIL").val())){
        $(".success-notification").show();
        $(".failed-notification").hide();
      } else {
        $(".success-notification").hide();
        $(".failed-notification").show();
      }
      event.preventDefault();
    });
});

$(window).resize(function() {
	setBottomBarHeight();
  if ($(window).width() <= 950) {
    centerRobots();
  }
});

function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

function setBottomBarHeight() {
  $('.bottom-bar').height(.3 * $('.computers-image').height());
  //$(window).resize();
}

function entranceAnimation() {
  $('.bottom-bar').css('visibility', 'visible');
  $('.bottom-image').addClass('animated bounceInRight');
  $('.bottom-image').css('visibility', 'visible');;
  $('.robots').addClass('animated bounceInLeft');
  $('.robots').css('visibility', 'visible');
  $('.top').addClass('animated bounceInDown');
  $('.top').css('visibility', 'visible');
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

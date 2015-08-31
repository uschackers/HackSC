$(document).ready(function() {
    setBottomBarHeight();
    setLogoTopPadding();
    entranceAnimation();
    hoverAnimation();
    showNavBar();

    // Center robots on smaller screens and mobile.
    if ($(window).width() <= 950 || isMobile()) {
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

    $(".menu-btn").click(function() {
      menuBtnClick();
    });
});

$(window).resize(function() {
	setBottomBarHeight();
  setLogoTopPadding();
  if ($(window).width() <= 950) {
    centerRobots();
  }
  showNavBar();
});

$(window).scroll(function () {
  showNavBar();
});

function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

function setBottomBarHeight() {
  /* Work around for safari where bottom bar height is not set until resize. */
  var height = .3 * $('.computers-image').height();
  $('.bottom-bar').height(height == 0 ? '3em' : height);
}

function setLogoTopPadding() {
  if ($(window).height() > 500) {
    $('.logo').css('padding-top', ($(window).height() > 600) ? $(window).height() * .2 : $(window).height() * .15);
  }
}

function entranceAnimation() {
  if ($(window).width() <= 600 || isMobile()) {
    $('.robots').addClass('animated bounceInDown');
    $('.top').addClass('animated bounceInDown');
  } else {
    $('.bottom-image').addClass('animated bounceInRight');
    $('.robots').addClass('animated bounceInLeft');
    $('.top').addClass('animated bounceInDown');
  }
  $('.bottom-image').css('visibility', 'visible');
  $('.robots').css('visibility', 'visible');
  $('.top').css('visibility', 'visible');
}

function hoverAnimation() {
  var robotClasses = ['.robot-1', '.robot-2', '.robot-3', '.robot-4', '.robot-5'];
  robotClasses.forEach(function(robot) {
    var element = $(robot);
    element.hover(
      function() {
        element.addClass('animated pulse');        
        element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          element.removeClass('animated pulse');
        });
    });
  });
}

function centerRobots() {
  $('.robots').scrollTo('50%');
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function showNavBar() {
  if ($('.bottom-bar').offset().top + $('.bottom-bar').height() < $(window).scrollTop()) {
    $('nav').css('display', 'block');
    $('nav').css('position', 'fixed');
    $('.nav-option-bar').css('float', 'right');
    $('.nav-logo').css('display', 'inline-block');
  } else {
    $('nav').css('position', 'relative');
    $('.nav-option-bar').css('float', 'none');
    $('.nav-option-bar').css('margin', '0 auto');
    $('.nav-logo').css('display', 'none');

    if ($(window).width() <= 1100) {
      $('nav').css('display', 'none');
    }
  }
}

function menuBtnClick() {
  var navbar = $(".nav-option-bar");
  var width = $(".nav-option-bar").width();
  if (navbar.hasClass("open")) {
    navbar.removeClass("open");
    navbar.animate({ "right": -width + "px" }, "now" );
  } else {
    navbar.addClass("open");
    navbar.css("top", $("nav").height());
    navbar.animate({ "right": "0" }, "now" );
    $('.page-content').click(bodyClickFn);
    $('body').css('overflow', 'hidden');
  }
}

function bodyClickFn(evt) {
  console.log("click");
  $('.page-content').unbind('click');
  $('body').css('overflow', 'visible');
  menuBtnClick();
}

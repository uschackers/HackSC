$(document).ready(function() {
  showNavBar();

  // load the header as soon as the logo loads
  $('#mainlogo').load(function() {
    headerAnimation();
  });

  $(".success-notification").hide();
  $(".failed-notification").hide();
  $("form").submit(function( event  ) {
    if (validateEmail($("#mce-EMAIL").val())){
      $(".success-notification").show();
      $(".failed-notification").hide();
    } else {
      $(".success-notification").hide();
      $(".failed-notification").show();
    }
    event.preventDefault();
  });

  $(".nav-option").click(function() {
    if ($('.menu-btn').css('display') == 'block') {
      menuBtnClick();
    }
  });

  $(".menu-btn").click(function() {
    menuBtnClick();
  });
});

// load the header anyways
setTimeout(headerAnimation, 1500);

$(window).resize(function() {
	setBottomBarHeight();
  if ($(window).width() <= 950) {
    centerRobots();
  }
  showNavBar();
});

$(window).scroll(function () {
  showNavBar();
});


$(window).load(function() {
  footerAnimation();
  hoverAnimation();
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

function headerAnimation() {
  if ($('.top').css('visibility') == 'visible') return;

  if ($(window).width() <= 600 || isMobile()) {
    $('.top').addClass('animated bounceInDown');
  } else {
    $('.top').addClass('animated bounceInDown');
  }
  $('.top').css('visibility', 'visible');
}

function footerAnimation() {
  if ($(window).width() <= 600 || isMobile()) {
    $('.robots').addClass('animated bounceInDown');
    $('.top').addClass('animated bounceInDown');
  } else {
    $('.bottom-image').addClass('animated bounceInRight');
    $('.robots').addClass('animated bounceInLeft');
    $('.top').addClass('animated bounceInDown');
  }
  $('.bottom-image').css('visibility', 'visible');
  setBottomBarHeight();
  $('.robots').css('visibility', 'visible');

  // Center robots on smaller screens and mobile.
  if ($(window).width() <= 950 || isMobile()) {
    centerRobots();
  }
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
    $('nav').addClass('nav-show');
    $('.placeholder').addClass('nav-show');
  } else {
    $('nav').removeClass('nav-show');
    $('.placeholder').removeClass('nav-show');
  }
}

function menuBtnClick() {
  var navbar = $(".nav-option-bar");
  var width = $(".nav-option-bar").width();
  if (navbar.hasClass("open")) {
    navbar.removeClass("open");
    $('.page-content').unbind('click');
    $('body').css('overflow', 'visible');
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
  menuBtnClick();
}

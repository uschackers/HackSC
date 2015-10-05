(function() {
  var nav, navOptionBar, bottomBar, computersImage;
  document.addEventListener("DOMContentLoaded", function() {
    nav = document.getElementById("nav");
    navOptionBar = document.getElementsByClassName("nav-option-bar")[0];
    bottomBar = document.getElementsByClassName("bottom-bar")[0];
    computersImage = document.getElementsByClassName("computers-image")[0];

    document.getElementsByClassName("page-content")[0].addEventListener("click", function() {
      if (navOptionBar.classList.contains("open"))
        mobileMenuClick();
    });

    document.getElementsByClassName("menu-btn")[0].addEventListener("click", mobileMenuClick);
    for (var i = 0; i < navOptionBar.children.length; ++i)
      navOptionBar.children[i].addEventListener("click", mobileMenuClick);

    window.addEventListener("resize", function() {
      setBottomBarHeight();
      toggleNavBar();
    });

    window.addEventListener("scroll", toggleNavBar);
    toggleNavBar();
  });

  function setBottomBarHeight() {
    /* Work around for safari where bottom bar height is not set until resize. */
    bottomBar.style.height = (0.3 * computersImage.getBoundingClientRect().height) || "3em";
  }

  function toggleNavBar() {
    var bottomBarBounds = bottomBar.getBoundingClientRect();
    nav.classList.toggle("nav-show", bottomBarBounds.top + bottomBarBounds.height < 0);
  }

  function mobileMenuClick() {
    var open = navOptionBar.classList.toggle("open");
    document.body.style.overflow = open ? "hidden" : "visible";
    if (open)
      navOptionBar.style.top = nav.getBoundingClientRect().height + "px";
  }
})();
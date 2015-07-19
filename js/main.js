$(document).ready(function() {
    setBottomBarHeight();
});

$(window).resize(function() {
	setBottomBarHeight();
});

function setBottomBarHeight() {
	$('.bottom-bar').height(.3 * $('.bottom-image').height());
}
/////////////////////////////////////////////////
// MAIN.JS                                     //
/////////////////////////////////////////////////



//
// Site nav toggle
//
$(function() {
	$("#site-nav-toggle").click(function(e) {
	  e.preventDefault();
	  $("#site-nav").toggleClass("site-nav--open");
	});
});


//
// Featured content resizing
//
$(function() {
	var heroResize = function() {
			var pageHeight = $(window).height(),
				topHeight  = $("#head").height(),
				heroHeight = (pageHeight - topHeight);

			$(".page-featured:not(.page-featured--fullheight) > .page-featured__post").css("height", heroHeight / 1.5)
			$(".page-featured--fullheight > .page-featured__post").css('height', heroHeight);
		};
		$(document).ready(heroResize);
		$(window).resize(heroResize);
});
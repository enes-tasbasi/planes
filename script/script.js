
$("header .navButton").on('click', showNavBar);

function showNavBar() {
	$('section nav').toggleClass('openPanel');
	$('.painter').toggleClass('openPainter');
	$('body').toggleClass('bodyBackground');
}

$.get("posts/main.html", function(data) {
	$(".main-visual").html(data);
});
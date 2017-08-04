
$("header .navButton").on('click', showNavBar);

function showNavBar() {
	$('section nav').toggleClass('openPanel');
	$('body').toggleClass('bodyBackground');
}

$.get("posts/main.html", function(data) {
	$(".main-visual").html(data);
});
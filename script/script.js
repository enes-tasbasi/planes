
$("header .navButton").on('click', showNavBar);

function showNavBar() {
	$('section nav').toggleClass('openPanel');
	$('.painter').toggleClass('openPainter');
	$('body').toggleClass('bodyBackground');
}

$('ul li a').on('click', openFromNav);

function openFromNav() {
	$.get("posts/" + $(this).text() + ".html", function(data) {
		$(".main-visual").html(data);
	});
	showNavBar();
}


$.get("posts/home.html", function(data) {
	$(".main-visual").html(data);
});
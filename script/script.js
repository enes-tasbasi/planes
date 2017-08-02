
$("header span").on('click', function() {
	$( ".nav-bar" ).css('display', 'block');
	$('body').css('background', 'background: linear-gradient(to right, #d4cccc 175px, transparent 170px)');
});

$.get("posts/main.html", function(data) {
	$(".main-visual").html(data);
});